<!-- eslint-disable no-undef -->
<template>
  <b-container>
    <img class="bg" src="@/assets/Icons/signup.webp" alt="" />
    <b-row>
      <b-col></b-col>
      <b-col class="hm">
        <div class="Form">
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="User Name"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="user.userName"
                type="text"
                placeholder="User Name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                v-model="user.password"
                :state="validation"
                id="feedback-user"
                placeholder="Password"
                type="password"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="validation">
                Your user Password must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">
                Looks Good.
              </b-form-valid-feedback>
            </b-form-group>
            <p class="newUser">
              New user ?
              <router-link class="newUser" to="/signup">Sign Up</router-link>
            </p>
            <b-button class="btn" type="submit" variant="success"
              >Sign in</b-button
            >
            <h6 class="privacy">
              By clicking "Sign in", or continuing with the other options below,
              you agree to yalla Qatar’s Terms of Service and have read the
              Privacy Policy
            </h6>
          </b-form>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "SignIn",
  data: () => {
    return {
      user: {
        userName: "",
        password: "",
      },
      background: "@/assets/Icons/signup.webp",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let userName = this.user.userName;
      let password = this.user.password;
      this.$store.dispatch("login", { userName, password }).then(() => {
        if (this.$store.state.user.role == "admin") {
          this.$router.push("/admin");
        } else {
          this.$router.push("/home");
        }
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.user.userName = "";
      this.user.password = "";
    },
  },
  computed: {
    validation() {
      return this.user.password.length > 4 && this.user.password.length < 13;
    },
  },
};
</script>

<style scoped>
.Form {
  margin-top: 100px;
  color: rgba(0, 0, 0, 0.678);
}

.privacy {
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.507);
}

.newUser {
  font-size: 1.2rem;
  text-decoration: none;
}

.hm {
  position: relative;
  background: #c0deff;
  top: 100px;
  border-radius: 25px;
}
</style>
