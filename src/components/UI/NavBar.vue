<template>
  <div>
    <!-- NavBar Home -->
    <b-navbar type="light" variant="faded" class="navBar" v-if="type == 'Home'">
      <b-navbar-brand href="/" class="navBar">
        <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
      </b-navbar-brand>
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="/" class="navItems">Home</b-nav-item>
        <b-nav-item href="#" class="navItems">Groups</b-nav-item>
        <b-nav-item href="#" class="navItems">Matches</b-nav-item>
        <b-nav-item href="#" class="navItems">Booking</b-nav-item>
        <b-nav-item href="/signin" class="navItems">Sign in</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <!-- NavBar Manager -->
    <b-navbar
      type="light"
      variant="faded"
      class="navBar"
      v-else-if="type == 'Manager'"
    >
      <b-navbar-brand href="/manager" class="navBar">
        <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
      </b-navbar-brand>
      <!-- NavBar Items For Manager -->
      <b-navbar-nav class="ms-auto">
        <b-nav-item to="/manager" class="navItems">Home</b-nav-item>
        <b-nav-item to="/creatematch" class="navItems">Create Match</b-nav-item>
        <b-nav-item to="/createstadium" class="navItems"
          >Create stadium</b-nav-item
        >
        <b-nav-item @click="ViewMatchManger" class="navItems"
          >Matches</b-nav-item
        >
        <b-nav-item href="/signin" class="navItems"
          ><p class="h3 mb-0">
            <b-icon icon="box-arrow-right" class="icon"></b-icon></p
        ></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <MatchCard
      v-if="this.isViewMatchManger && !this.isViewMatch"
      :matches="this.matches"
      type="Manager"
      class="match"
      style="height: 10%"
    />

    <!-- Fan NavBar -->
    <b-navbar
      type="light"
      variant="faded"
      class="navBar"
      v-else-if="type == 'Fan'"
    >
      <b-navbar-brand href="/fan" class="navBar">
        <img :src="worldCupIcon" alt="Icon" class="logo-icon" />
      </b-navbar-brand>
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="/fan" class="navItems">Home</b-nav-item>
        <b-nav-item @click="isViewMatch = true" class="navItems"
          >Matches</b-nav-item
        >
        <b-nav-item to="/editdatauser" class="navItems">Edit user</b-nav-item>
        <b-nav-item to="/cancelticket" class="navItems">canel ticket</b-nav-item>
        <b-nav-item href="/signin" class="navItems"
          ><p class="h3 mb-0">
            <b-icon icon="box-arrow-right" class="icon"></b-icon></p
        ></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <MatchCard
      v-if="this.isViewMatch && !this.isViewMatchManger"
      :matches="this.matches"
      type="Fan"
      class="match"
      style="height: 10%"
    />
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
      isViewMatchManger: false,
      matches: [],
    };
  },
  props: ["type", "user"],
  methods: {
    viewMatches() {
      this.isViewMatch = true;
      this.isViewMatchManger = false;
    },
    ViewMatchManger() {
      this.isViewMatch = false;
      this.isViewMatchManger = true;
    },
  },
  components: { MatchCard },
};
</script>
<style>
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
  color: white;
  font-size: x-large;
  margin: 5px 5px;
}

.match {
  /* background-color: #E98EAD; */
  margin: 25px auto !important;
  width: 50%;
}

.icon {
  color: white;
}

.icon:hover {
  color: black;
}
</style>
