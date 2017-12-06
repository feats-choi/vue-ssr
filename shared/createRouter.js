import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'shared/components/Hello'
import Clap from 'shared/components/Clap'

Vue.use(Router);

export default function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/links',
        name: 'Hello',
        component: Hello
      },
      {
        path: '/',
        name: 'Clap',
        component: Clap
      }
    ]
  });
}