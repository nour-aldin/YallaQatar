<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
  <!-- NavBar -->
  <b-navbar type="light" variant="faded" class="navBar">

    <!-- NavBar Icon For Guest-->
    <b-navbar-brand href="/" class="navBar" v-if="type == 'Home'">
      <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
    </b-navbar-brand>

    <!-- NavBar Icon For Manager -->
    <b-navbar-brand href="/manager" class="navBar" v-if="type == 'Manager'">
      <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
    </b-navbar-brand>
    
     <!-- NavBar Icon For Fan -->
    <b-navbar-brand href="/fan" class="navBar" v-if="type == 'Fan'">
      <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
    </b-navbar-brand>


    <!-- NavBar Items For Guest -->
    <b-navbar-nav class="ms-auto" v-if="type == 'Home'">
      <b-nav-item href="/" class="navItems">Home</b-nav-item>
      <b-nav-item href="#" class="navItems">Groups</b-nav-item>
      <b-nav-item href="#" class="navItems">Matches</b-nav-item>
      <b-nav-item href="#" class="navItems">History</b-nav-item>
      <b-nav-item href="#" class="navItems">Booking</b-nav-item>
      <b-nav-item href="/signin" class="navItems">Sign in</b-nav-item>
    </b-navbar-nav>

    <!-- NavBar Items For Manager -->
    <b-navbar-nav class="ms-auto" v-else-if="type == 'Manager'">
      <b-nav-item @click="isViewMatch = false" to="/manager" class="navItems">Home</b-nav-item>
      <b-nav-item to="/creatematch" class="navItems">Create Match</b-nav-item>
      <b-nav-item to="/createstadium" class="navItems"
        >Create stadium</b-nav-item
      >
      <b-nav-item @click="viewMatches" class="navItems">Matches</b-nav-item>
    </b-navbar-nav>

    <!-- NavBar Items For Fan -->
    <b-navbar-nav class="ms-auto" v-else-if="type == 'Fan'">
      <b-nav-item @click="isViewMatch = false" href="/fan" class="navItems">Home</b-nav-item>
      <b-nav-item @click="isViewMatch = true" class="navItems">Matches</b-nav-item>
      <b-nav-item href="#" class="navItems">History</b-nav-item>
      <b-nav-item href="#" class="navItems">Booking</b-nav-item>
      <b-nav-item href="/signin" class="navItems">Sign in</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  <MatchCard v-if="this.isViewMatch" :matches="this.matches" type="Fan" class="match" style="height: 10%;"/>
</div>
</template>

<script>
import MatchCard from "@/components/UI/MatchCard.vue";
import axios from "axios";
export default {
  mounted() {
    axios
      .get("http://localhost:5000/api/matches")
      .then((res) => {
        this.matches = res.data;
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  name: "NavBar",
  data: function () {
    return {
      worldCupIcon: require("@/assets/Icons/2022-fifa-world-cup-logo.png"),
      isViewMatch: false,
      matches: [],
    };
  },
  props: ["type", "user"],
  methods: {
    viewMatches() {
      this.isViewMatch = true;
    },
  },
  components: { MatchCard },
};
</script>
<style scoped>
/* * {
  margin: 0px !important;
} */
.navBar {
  margin: 0;
  padding: 0;
  height: 4rem;
}
.logo-icon {
  margin-top: 0px !important;
  margin-left: 10px !important;
  width: 200px;
  height: 70px;
}
.navItems {
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: x-large;
  margin: 5px 5px;
}
.match {
  /* background-color: #E98EAD; */
  margin: 25px auto !important;
  width: 50%;
}
</style>
