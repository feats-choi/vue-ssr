import createApp from 'shared/createApp';

const { app, store, router } = createApp();

if(window.__INITIAL_STATE__){
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {

  router.beforeResolve(({to, from, next}) => {

    let diffed = false;
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    const activated = matched.filter((c, i) => (diffed || (diffed = c !== prevMatched[i])));
    const preFetchers = activated.filter(({ preFetchData }) => preFetchData);

    if(preFetchers.length === 0){
      next();
    }

    Promise.all(preFetchers.map(fetcher => preFetchers({
      store,
      route: router.currentRoute
    }))).then(next).catch(next);
  });

  app.$mount('#app');
});