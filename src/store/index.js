/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = require("axios");
export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
    user: {
      email: "",
      password: "",
    },
  },
  getters: {
    // getField,
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_init(state, user) {
      state.user = user;
      console.log(state.user);
    },
    auth_error(state) {
      state.status = "error";
    },
  },
  actions: {
    async login({ commit }, user) {
      return new Promise((resolve, reject) => {
        this.commit("auth_request");
        axios
          .post("http://localhost:5000/api/auth/login", {
            userName: user.email,
            password: user.password,
          })
          .then((res) => {
            console.log(res);
            //localStorage.setItem("token", token);
            // axios.defaults.headers.common["Authorization"] = token;
            // commit("auth_success", token, user);
            // resolve(res);
          })
          .catch((err) => {
            console.log(err);
            // commit("auth_error");
            // localStorage.removeItem("token");
            // reject(err);
          });
      });
    },
  },
  modules: {},
});
