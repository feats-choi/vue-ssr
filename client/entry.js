import createApp from '/shared/app';

const { app, router } = createApp();
router.onReady(() => app.$mount('#app'));