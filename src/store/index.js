/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const axios = require("axios");
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {
      userName: "",
      password: "",
      role: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      birthDate: "",
      gender: null,
      nationality: "",
      approved: false,
    },
    seateStatue: null,
    row: null,
    seat: null,
    tickets: [],
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, info) {
      console.log(info.token);
      console.log("commit", info.User);
      state.status = "success";
      state.token = info.token;
      state.user = info.User;
    },
    // auth_init(state, user) {
    //   state.user = user;
    //   console.log(state.user);
    // },
    auth_error(state) {
      state.status = "error";
    },
    get_seats_statue(state, match) {
      state.seateStatue = match;
    },
    update_seats(state, data) {
      state.seateStatue.seatsStatus[data.info.index][data.info.spr] =
        data.ticketNumber;
      state.tickets.push(data.ticketNumber);
    },
    set_RowSeat(state, data) {
      state.row = data.index;
      state.seat = data.spr;
    },
    delete_seat(state, inf) {
      state.seateStatue.seatsStatus[inf.index][inf.spr] = 0;
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
            const User = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", { token, User });
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
            console.log("res", res);
            const token = res.data.token;
            const User = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", { token, User });
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
    fanMatchDetails({ commit }, match) {
      console.log(match);
      return new Promise((resolve, reject) => {
        const ID = match.match._id;
        axios
          .get(`http://localhost:5000/api/matches/${ID}/seatStatus`, {
            headers: { Authorization: `Bearer ${this.state.token}` },
          })
          .then((res) => {
            this.commit("get_seats_statue", res.data);
            resolve(res);
          })
          .catch((err) => {
            alert(err);
            reject(err);
          });
      });
    },
    updateSeats({ commit }, info) {
      return new Promise((resolve, reject) => {
        const ID = this.state.seateStatue._id;
        const URL = `http://localhost:5000/api/matches/${ID}/reserve?row=${info.index}&seat=${info.spr}`;
        axios
          .post(
            URL,
            {
              row: info.index,
              seat: info.spr,
            },
            {
              headers: { Authorization: `Bearer ${this.state.token}` },
            }
          )
          .then((res) => {
            console.log(res);
            const ticketNumber = res.data.ticketNumber;
            this.commit("update_seats", { info, ticketNumber });
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    setRowSeat({ commit }, inf) {
      commit("set_RowSeat", inf);
    },
    deleteSeat({ commit }, inf) {
      return new Promise((resolve, reject) => {
        const ID = this.state.seateStatue._id;
        const URL = `http://localhost:5000/api/matches/${ID}/cancel?row=${inf.index}&seat=${inf.spr}`;
        axios
          .delete(
            URL,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.state.token}`,
              },
            },
            {
              row: inf.index,
              seat: inf.spr,
            }
          )
          .then((res) => {
            console.log(res);
            commit("delete_seat", inf);
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
  modules: {},
});
