<template>
  <div class="main" :class="{ change_color: scrollPosition > 50 }">
    <img class="bg" src="@/assets/Icons/fan-backGround.jpg" alt="Fan" />
    <NavBar type="Fan" />
    <b-container :class="{ hideUser: scrollPosition > 50 }" class="user">
      <img
        src="@/assets/Icons/admin avatar.png"
        alt="admin avatar"
        class="avatar"
      />
      <p>Hello, {{ this.$store.state.user.userName }}</p>
      <h3 class="header">Our precious fan Welcom &#128150;</h3>
    </b-container>
  </div>
</template>
<script>
import NavBar from "@/components/UI/NavBar.vue";
export default {
  name: "FanFan",
  components: {
    NavBar,
  },
  data: () => {
    return {
      scrollPosition: null,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  height: 100vh;
}
p {
  color: white;
}
.header {
  margin-bottom: 15px !important;
  color: white;
}
.avatar {
  margin-top: 25px;
  margin-right: 0;
  vertical-align: middle;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.hideUser {
  display: none;
}

.user {
  text-align: center;
  width: auto;
  margin-left: 0;
  border: 1px solid white;
  width: 30%;
  margin: 150px auto;
  border-radius: 25px;
}

.userSide {
  margin-left: 0;
}

.bg {
  position: absolute;
  z-index: -1;
  height: 100%;
}
.change_color {
  background-color: white;
  transition: background-color 2s ease;
}
</style>
