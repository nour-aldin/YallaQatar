<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="userSide" cols="3">
          <b-container class="user">
            <img
              src="@/assets/Icons/admin avatar.png"
              alt="admin avatar"
              class="avatar"
            />
            <p>Hello, {{ this.$store.state.user.userName }}</p>
            <h3>New managers needed to hired or fired&#128578 </h3>
            
          </b-container>
        </b-col>
        <b-col>
        <!-- <b-container class="main" v-for="(user, index) in users" :key="index">
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
    </b-container> -->
          <table>
            <tr>
              <th>User Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.userName }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>
                <b-button variant="success" @click="accept(index)"
                  >Accept</b-button
                >
              </td>
              <td>
                <b-button variant="danger" @click="reject(index)"
                  >Reject</b-button
                >
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    const URL = "http://localhost:5000/api/users/";
    const TOKEN = this.$store.state.token;
    axios
      .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        console.log("aaaa", res.data);
        const USERS = res.data;
        USERS.forEach((user) => {
          this.users.push({
            _id: user._id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailAddress,
          });
        });
        console.log(this.users);
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  name: "AdminPage",
  data: () => {
    return {
      users: [],
    };
  },
  methods: {
    accept(index) {
      console.log(index);
      const ID = this.users[index]._id;
      console.log(ID)
      const URL = `http://localhost:5000/api/users/${ID}`;
      const TOKEN = this.$store.state.token;
      console.log(TOKEN);
      axios
        .post(
          URL,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        )
        .then((res) => {
          alert(res.data.message);
          this.users.splice(index, 1);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    reject(index) {
      const ID = this.users[index]._id;
      const URL = `http://localhost:5000/api/users/${ID}`;
      const TOKEN = this.$store.state.token;
      axios
        .delete(URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          alert(res.data.message);
          this.users.splice(index, 1);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
  computed: {},
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
}

td,
th {
  /* border: 1px solid #dddddd; */
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.075);
}

tr:nth-child(odd):hover {
  background-color: rgba(220, 195, 237, 0.146);
}
tr:nth-child(even):hover {
  background-color: rgba(0, 0, 0, 0.095);
}

.main {
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  margin-left: 0;
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
.avatar {
  margin-top: 25px;
  margin-right: 0;
  vertical-align: middle;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.user {
  width: auto;
  margin-left: 0;
}
.userSide {
  margin-left: 0;
}
</style>
