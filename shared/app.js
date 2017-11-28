import Vue from 'vue';
import App from '/shared/App';
import createRouter from '/shared/router';

export default () => {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
};