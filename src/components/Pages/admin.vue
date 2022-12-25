<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <b-container class="main" v-for="(user, index) in users" :key="index">
      <b-row class="textRow">
        <p>User Name: {{ user.userName }}</p>
        <p>First Name: {{ user.firstName }}</p>
        <p>Last Name: {{ user.lastName }}</p>
        <p>Email: {{ user.emailAddress }}</p>
      </b-row>
      <div class="parent">
        <div class="child1">
          <b-button variant="success" @click="accept(index)">Accept</b-button>
        </div>
        <div class="child2">
          <b-button variant="danger" @click="reject(index)">Reject</b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    const URL = "http://localhost:5000/api/users/";
    const TOKEN = this.$store.state.token;
    console.log("token1 =", TOKEN);
    axios
      .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        // console.log(res.data);
        this.users = res.data;
        // console.log("users", this.users);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  name: "AdminPage",
  data: () => {
    return {
      users: [],
      token: "",
    };
  },
  methods: {
    accept(index) {
      const ID = this.users[index]._id;
      const URL = `http://localhost:5000/api/users/${ID}`;
      const TOKEN = this.$store.state.token;
      axios
        .post(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
        .then((res) => {
          console.log(res);
          this.users.slice(index, 1);
          console.log(this.users);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reject(index) {
      const ID = this.users[index]._id;
      const URL = `http://localhost:5000/api/users/${ID}`;
      const TOKEN = this.$store.state.token;
      axios
        .post(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
        .then((res) => {
          console.log(res);
          this.users.slice(index, 1);
          console.log(this.users);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.main {
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  /* width: 50rem;
  height: 10rem !important; */
  background-color: #1a120b;
  font-weight: bold;
  color: #d5cea3;
  font-size: x-large;
  width: 30%;
}
.textRow {
  margin-top: 50px;
}
.parent {
  display: flex;
  flex-direction: row;
}
.child1 {
  width: 50%;
}
.child2 {
  width: 50%;
}
</style>
