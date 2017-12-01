import Vue from 'vue';
import Router from 'vue-router';
import Top from 'shared/components/Top';
import Book from 'shared/components/Book';

Vue.use(Router);

export default function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Top },
      { path: '/book', component: Book }
    ]
  });
}