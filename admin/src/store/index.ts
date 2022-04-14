import { createStore } from "vuex";

export default createStore({
  state: {
    list: [],
    auth: {
      islogin: false,
      user: {},
    },
  },
  mutations: {
    listfuc(state, list) {
      state.list = list;
    },
    authfuc(state, user) {
      state.auth.islogin = user.islogin;
      state.auth.user = user.user;
    },
  },
  actions: {},
  modules: {},
});
