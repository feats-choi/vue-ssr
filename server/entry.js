import createApp from 'shared/createApp';

export default (context) => {
  return new Promise((resolve, reject) => {
    const { store, router, app } = createApp();
    const { url } = context;
    const { fullPath } = router.resolve(url).route;

    if(url !== fullPath){
      return reject();
    }

    router.push(url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if(matchedComponents.length === 0){
        return reject();
      }

      Promise.all(matchedComponents.map(({ preFetchData }) => preFetchData && preFetchData(store))).then(() => {

        console.info('====== server side rendering ======');

        context.state = store.state;
        resolve(app);
      }).catch(reject)
    }, reject);
  });
}