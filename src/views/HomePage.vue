<template>
  <div
    class="main"
    v-bind:style="{
      background: background,
    }"
  >
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/UI/NavBar.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      background: require("@/assets/Icons/background.jpg"),
    };
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.main {
  background-image: url("@/assets/Icons/background.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  /* width: 100vh; */
  background-size: cover;
}
</style>
