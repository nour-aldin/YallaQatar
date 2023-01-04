<template>
  <div>
    <!-- NavBar Admin -->
    <b-navbar type="light" variant="faded" class="navBar">
      <b-navbar-brand href="/" class="navBar">
        <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
      </b-navbar-brand>
      <b-navbar-nav class="ms-auto">
        <b-nav-item @click="clear" to="/admin" class="navItems">Home</b-nav-item>
        <b-nav-item @click="activateUnapprovedManagers" class="navItems">Possible Managers</b-nav-item>
        <b-nav-item @click="activateUsers" class="navItems">Users</b-nav-item>
        <b-nav-item href="/signin" class="navItems"
          ><p class="h3 mb-0">
            <b-icon icon="box-arrow-right" style="color: black"></b-icon></p
        ></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <b-row>
        <b-col class="userSide" cols="3">
          <b-container class="user" >
            <img
              src="@/assets/Icons/admin avatar.png"
              alt="admin avatar"
              class="avatar"
            />
            <p style="margin-top: 10px">
              Hello, {{ this.$store.state.user.userName }}
            </p>
            <h3 v-if="this.viewManagers&&!this.viewUsers">New managers needed to hired or fired&#128578</h3>
            <h3 v-else-if="this.viewUsers&&!this.viewManagers">Delete Spam Users</h3>
          </b-container>
        </b-col>
        <b-col>
          <table v-if="this.viewManagers&&!this.viewUsers">
            <tr>
              <th>User Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
            <tr v-for="(manager, index) in unapprovedManagers" :key="index">
              <td>{{ manager.userName }}</td>
              <td>{{ manager.firstName }}</td>
              <td>{{ manager.lastName }}</td>
              <td>{{ manager.email }}</td>
              <td>
                <b-button class="button" variant="success" @click="accept(index)"
                  >Accept</b-button
                >
              </td>
              <td>
                <b-button class="button" variant="danger" @click="reject(index)"
                  >Reject</b-button
                >
              </td>
            </tr>
          </table>
          <table v-else-if="this.viewUsers&&!this.viewManagers">
            <tr>
              <th>User Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.userName }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td>
                <b-button class="button" variant="danger" @click="reject(index)"
                  >Delete</b-button
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
    let URL = "http://localhost:5000/api/users/unapproved";
    const TOKEN = this.$store.state.token;
    axios
      .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        const USERS = res.data;
        USERS.forEach((user) => {
          this.unapprovedManagers.push({
            _id: user._id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailAddress,
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
      URL="http://localhost:5000/api/users";
    axios
      .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        const USERS = res.data;
        USERS.forEach((user) => {
          this.users.push({
            _id: user._id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailAddress,
            role: user.role,
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  name: "AdminPage",
  data: () => {
    return {
      unapprovedManagers: [],
      users: [],
      viewManagers: false,
      viewUsers: false,
      worldCupIcon: require("@/assets/Icons/2022-fifa-world-cup-logo.png"),
    };
  },
  methods: {
    accept(index) {
      const ID = this.users[index]._id;
      const URL = `http://localhost:5000/api/users/${ID}`;
      const TOKEN = this.$store.state.token;
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
          console.log(this.users)
          this.users.splice(index, 1);
          console.log(this.users)
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
    activateUnapprovedManagers() {
      this.viewManagers = true;
      this.viewUsers = false;
    },
    activateUsers() {
      this.viewUsers = true;
      this.viewManagers = false;
    },
    clear() {
      this.viewUsers = false;
      this.viewManagers = false;
    },
  },
  computed: {},
};
</script>

<style scoped>
div {
  background-color: #9EA1D4;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 25px;
}

td,
th {
  border: 1px solid #dddddd;
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
  border: 1px solid black;
}
.user {
  width: auto;
  margin-left: 0;
  margin-top:50px;
}
.userSide {
  text-align: center;
  margin-left: 0;
  margin-bottom: 50px;
}
.button { 
  text-align: center;
  width: 100%;
}
</style>
