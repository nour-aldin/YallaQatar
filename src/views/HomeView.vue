<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SignIn />
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from "@/components/UserManeger/SignIn.vue";

export default {
  name: "HomeView",
  components: {
    SignIn,
  },
};
</script>
