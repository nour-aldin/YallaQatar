<template>
  <b-container fluid class="main">
    <NavBar type="Manager" :user="this.user" />
    <!-- <ManagerDetails /> -->
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
            <h3>Ready to serve the Fans ? &#128578</h3>
          </b-container>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/UI/NavBar.vue";
export default {
  mounted() {
    this.user = this.$store.state.user;
  },
  name: "ManagerPage",
  components: {
    NavBar,
  },
  data: () => {
    return {
      user: [],
    };
  },
  methods: {},
};
</script>
<style scoped>
.main {
  background-color: #e98ead;
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
