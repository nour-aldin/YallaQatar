<template>
  <div>
    <NavBar type="Manager" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../UI/NavBar.vue";
export default {
  name: "ManagerPage",
  components: {
    NavBar,
  },
  data: () => {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
