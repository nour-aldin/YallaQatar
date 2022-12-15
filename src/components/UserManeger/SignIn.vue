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
              label="Email address"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                v-model="form.password"
                :state="validation"
                id="feedback-user"
                placeholder="Password"
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
      form: {
        email: "",
        password: "",
        background: "@/assets/Icons/signup.webp",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
    },
  },
  computed: {
    validation() {
      return this.form.password.length > 4 && this.form.password.length < 13;
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
