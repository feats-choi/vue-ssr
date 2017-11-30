import Vue from 'vue';
import Top from 'shared/components/Top';
import createRouter from 'shared/router';
import createStore from 'shared/store';
import { sync } from 'vuex-router-sync';

export default () => {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(Top)
  });

  return { app, router, store };
};