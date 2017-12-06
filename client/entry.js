import createApp from 'shared/createApp';

const { app, store, router } = createApp();

if(window.__INITIAL_STATE__){
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {

  router.beforeResolve((to, from, next) => {
    let diffed = false;
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    const activated = matched.filter((c, i) => (diffed || (diffed = c !== prevMatched[i])));
    const preFetchers = activated.map(({ preFetchData }) => preFetchData);

    if(preFetchers.length === 0){
      next();
    }

    Promise.all(preFetchers.map(preFetcher => preFetcher(store))).then(() => {

      console.info('====== client side rendering ======');

      return next();
    }).catch(next);
  });

  app.$mount('#app');
});