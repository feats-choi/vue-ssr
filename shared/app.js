import Vue from 'vue';
import App from '/shared/App';
import createRouter from '/shared/router';
import createStore from '/shared/store';
import { sync } from 'vuex-router-sync';

export default () => {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};