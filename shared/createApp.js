import Vue from 'vue';
import createRouter from 'shared/createRouter';
import createStore from 'shared/createStore';
import { sync } from 'vuex-router-sync';
import Top from 'shared/components/Top';

export default function createApp(){
  const router = createRouter();
  const store = createStore();

  // router情報をstoreで管理
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: c => c(Top)
  });

  return { app, router, store };
}