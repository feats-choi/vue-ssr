import createApp from '/shared/app';

export default context => new Promise((resolve, reject) => {
  const { app, router } = createApp();

  router.push(context.url);

  router.onReady(() => {
    const matched = router.getMatchedComponents();

    if(matched.length > 0){
      return resolve(app);
    }

    return reject({code: 404});
  }, reject);
});