/**
 * Created by saikun on 2017/11/29.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { fetchItem } from '/shared/help/api';

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    bookList: {}
  },
  actions: {
    fetchItem({ commit }, id){
      return fetchItem(id).then(item => {
        commit('setItem', { id, item })
      })
    }
  },
  mutations: {
    setItem(state, { id, item }){
      Vue.set(state.bookList, id, item)
    }
  }
});