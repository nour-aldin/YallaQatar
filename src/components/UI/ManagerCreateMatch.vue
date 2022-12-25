<template>
  <div>
    <b-container class="main">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="First Team Name"
            label-for="input-1"
            class="Label"
          >
            <b-form-input
              id="input-1"
              v-model="form.firstTeam"
              placeholder="First Team Name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-file v-model="form.flag1"></b-form-file>
          <hr />
          <b-form-group
            id="input-group-2"
            label="Second Team Name"
            label-for="input-2"
            class="Label"
          >
            <b-form-input
              id="input-2"
              v-model="form.secondTeam"
              placeholder="Second Team Name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-file v-model="form.flag2"></b-form-file>
        </b-col>
        <b-col>
          <b-row>
            <b-time
              class="border rounded p-2 time"
              v-model="form.time"
              locale="en"
            ></b-time>
          </b-row>
          <b-row
            ><b-button
              @click="onSubmit"
              class="fl"
              type="submit"
              variant="success"
              >confirm</b-button
            ></b-row
          >
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-4"
            label="Referee Name"
            label-for="input-4"
            class="Label"
          >
            <b-form-input
              id="input-4"
              v-model="form.referee"
              placeholder="Referee Name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-5" label="Date" label-for="input-5">
            <b-form-datepicker
              id="input-5"
              v-model="form.date"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Stadium"
            label-for="input-3"
            class="Label"
          >
            <b-form-select
              id="input-3"
              v-model="form.stadium"
              :options="stadiumList"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ManagerCreateMatch",
  data: () => {
    return {
      form: {
        firstTeam: "",
        flag1: null,
        secondTeam: "",
        flag2: null,
        stadium: null,
        referee: "",
        date: "",
        time: "",
      },
      stadiumList: [
        { text: "Choose Stadium", value: null },
        "El-gezera",
        "Wembely",
      ],
    };
  },
  methods: {
    onSubmit() {
      console.table(this.form);
      if (
        !this.form.firstTeam ||
        !this.form.secondTeam ||
        !this.form.stadium ||
        !this.form.referee ||
        !this.form.date ||
        !this.form.time
      ) {
        alert("Pleas Fill Empty Fields");
      } else {
        console.table(this.form);
      }
    },
  },
};
</script>
<style scoped>
.main {
  text-align: center;
  margin-top: 25px;
  border-radius: 20px;
  border: 1px solid black;
  font-family: "Poppins", sans-serif;
}
input {
  margin: 5px 0;
}
.Label {
  margin: 15px 0 !important;
}
.time {
  margin: 25px 0;
}
.fl {
  width: 70%;
  margin: auto;
}
</style>
