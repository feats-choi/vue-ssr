import Vue from 'vue';
import createRouter from 'shared/createRouter';
import createStore from 'shared/createStore';
import { sync } from 'vuex-router-sync';
import App from 'shared/App';

export default function createApp(){
  const router = createRouter();
  const store = createStore();

  // router情報をstoreで管理
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
}