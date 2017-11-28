import createApp from '/shared/app';

export default context => new Promise((resolve, reject) => {
  const { app, router, store } = createApp();

  router.push(context.url);

  router.onReady(() => {
    const matched = router.getMatchedComponents();

    if(!matched.length){
      return reject({code: 404});
    }

    Promise.all(matched.map(component => {
      if(component.asyncData){
        return component.asyncData({
          store,
          route: router.currentRoute
        })
      }
    })).then(() => {
      context.state = store.state;
      resolve(app);
    }).catch(reject);
  }, reject);
});