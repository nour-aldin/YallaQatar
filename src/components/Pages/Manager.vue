<template>
  <b-container fluid class="main">
    <NavBar type="Manager" :user="this.user" />
    <ManagerDetails />
  </b-container>
</template>

<script>
// @ is an alias to /src
import NavBar from "../UI/NavBar.vue";
import ManagerDetails from "../UI/ManagerDetails.vue";
export default {
  mounted() {
    this.user = this.$store.state.user;
  },
  name: "ManagerPage",
  components: {
    NavBar,
    ManagerDetails,
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
  background-color: #E98EAD;
}
</style>
