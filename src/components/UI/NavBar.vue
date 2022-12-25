<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-template-root -->
<template>

  <!-- NavBar -->
  <b-navbar type="dark" variant="dark" class="navBar">

    <!-- NavBar Icon -->
    <b-navbar-brand href="/" class="navBar">
      <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
    </b-navbar-brand>

    <!-- NavBar Items -->
    <b-navbar-nav class="ms-auto" v-if="type == 'Home'">
      <b-nav-item href="/" class="navItems">Home</b-nav-item>
      <b-nav-item href="#" class="navItems">Groups</b-nav-item>
      <b-nav-item href="#" class="navItems">Matches</b-nav-item>
      <b-nav-item href="#" class="navItems">History</b-nav-item>
      <b-nav-item href="#" class="navItems">Booking</b-nav-item>
      <b-nav-item href="/signin" class="navItems">Sign in</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ms-auto" v-else-if="type == 'Manager'">
      <b-nav-item href="/" class="navItems">Home</b-nav-item>
      <b-nav-item href="/creatematch" class="navItems">Create Match</b-nav-item>
      <b-nav-item href="#" class="navItems">Edit Match</b-nav-item>
      <b-nav-item href="#" class="navItems">History</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      worldCupIcon: require("@/assets/Icons/2022-fifa-world-cup-logo.png"),
    };
  },
  props: ["type"],
};
</script>
<style scoped>
.navBar {
  margin: 0;
  padding: 0;
}
.logo-icon {
  margin: 25px 10px;
  width: 200px;
  height: 100px;
}
.navItems {
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: xx-large;
  margin: 5px 5px;
}
</style>
