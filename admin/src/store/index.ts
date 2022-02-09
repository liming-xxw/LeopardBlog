import { createStore } from "vuex";

export default createStore({
  state: {
    list: [],
  },
  mutations: {
    listfuc(state, list) {
      state.list = list;
    },
  },
  actions: {},
  modules: {},
});
