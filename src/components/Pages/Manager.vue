<template>
  <div>
    <NavBar type="Manager" :user="this.user" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../UI/NavBar.vue";
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
<style scoped></style>
