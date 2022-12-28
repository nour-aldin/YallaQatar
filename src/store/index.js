/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = require("axios");
export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {
      userName: "",
      password: "",
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      gender: null,
      nationality: "",
      approved: false,
    },
  },
  getters: {
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
      // state.user = user;
    },
    // auth_init(state, user) {
    //   state.user = user;
    //   console.log(state.user);
    // },
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
            userName: user.userName,
            password: user.password,
          })
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            this.state.user = res.data.user;
            resolve(res);
          })
          .catch((err) => {
            alert(err.response.data.message);
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    async signUp({ commit }, user) {
      return new Promise((resolve, reject) => {
        this.commit("auth_request");
        axios
          .post("http://localhost:5000/api/auth/register", {
            userName: user.userName,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate,
            gender: user.gender,
            nationality: user.nationality,
            emailAddress: user.email,
            role: user.role,
          })
          .then((res) => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(res);
          })
          .catch((err) => {
            alert(err.response.data.message);
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
  },
  modules: {},
});
