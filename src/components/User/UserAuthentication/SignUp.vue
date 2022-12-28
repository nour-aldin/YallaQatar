<template>
  <b-container v-bind:style="{}">
    <img class="bg" src="@/assets/Icons/signup.webp" alt="background" />
    <b-row>
      <b-col></b-col>
      <b-col class="hm">
        <div class="Form form1">
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-7"
              label="User Name"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                v-model="form.userName"
                placeholder="User Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="First Name"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.firstName"
                placeholder="First Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Last Name"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.lastName"
                placeholder="Last Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Email address"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-4"
              label="Password"
              label-for="input-4"
            >
              <b-form-input
                v-model="form.password"
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
            <b-form-group
              id="input-group-5"
              label="Birth Date"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="form.birthDate"
                placeholder="Birth Date"
                required
                type="date"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-8"
              label="Nationality"
              label-for="input-8"
            >
              <b-form-input
                id="input-7"
                v-model="form.nationality"
                placeholder="Your Nationality"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="Gender" label-for="input-6">
              <b-form-select
                id="input-6"
                v-model="form.gender"
                :options="genderList"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-7" label="Role" label-for="input-7">
              <b-form-select
                id="input-7"
                v-model="form.role"
                :options="roleList"
                required
              ></b-form-select>
            </b-form-group>

            <b-button class="btn" type="submit" variant="success"
              >Sign up</b-button
            >
            <h6 class="privacy">
              By clicking "Sign up", or continuing with the other options below,
              you agree to Yalla Qatar’s Terms of Service and have read the
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
  data: function () {
    return {
      form: {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthDate: "",
        gender: null,
        nationality: "",
        role: null,
      },
      msg: "This is sign in",
      genderList: [{ text: "Your Gender", value: null }, "male", "female"],
      roleList: [{ text: "Your Role", value: null }, "fan", "manager"],
      background: require("@/assets/Icons/signup.webp"),
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("signUp", { ...this.form })
        .then(() => this.$router.push("/home"));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.password = "";
      this.form.birthDate = "";
      this.form.gender = null;
      this.form.role = null;
    },
  },
  computed: {
    validation() {
      return this.form.password.length > 4 && this.form.password.length < 13;
    },
  },
};
</script>

<style>
.bg {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
.Form {
  color: rgba(0, 0, 0, 0.678);
  margin: 10rem 1.5rem;
  text-align: center;
}
.form1 {
  margin: 5rem 1.5rem;
}
.btn {
  margin: 25px 0;
  width: 60%;
}
.privacy {
  font-size: 0.8rem;
  line-height: 1.5;
  color: gray;
}
.hm {
  position: relative;
  background: #c0deff;
  top: 40px;
  border-radius: 25px;
}
</style>
