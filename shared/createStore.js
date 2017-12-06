import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore(){
  const LOADING_TEXT = 'loading...';

  return new Vuex.Store({
    state: {
      claps: 0,
      renderedText: LOADING_TEXT
    },
    mutations: {
      increment: (state) => {
        state.claps++
      },
      showLoading: (state) => {
        state.renderedText = LOADING_TEXT;
      },
      changeRenderedText: (state, text) => {
        state.renderedText = text;
      }
    },
    strict: true
  });
};