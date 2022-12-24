<template>
  <div :class="{ change_color: scrollPosition > 50}">
    <NavBar />
    <img class="bg" src="@/assets/Icons/background.jpg" alt="" />
    <MatchCard :matches="this.matches" class="s" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/UI/NavBar.vue";
import MatchCard from "@/components/UI/MatchCard.vue";
import axios from "axios";
export default {
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    axios.get("http://localhost:5000/api/matches").then((res) => {
      this.matches = res.data;
      console.log(res);
    });
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  name: "HomeView",
  data: () => {
    return {
      background: require("@/assets/Icons/background.jpg"),
      matches: [],
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  components: {
    NavBar,
    MatchCard,
  },
};
</script>
<style scoped lang="scss">
.main {
  overflow-y: scroll;
}
.change_color {
  background-color: #E5E5CB;
  transition: background-color 2s ease;
}

</style>
