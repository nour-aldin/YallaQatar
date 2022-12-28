<template>
  <div>
    <b-container class="main">
      <img src="@/assets/Icons/2022-fifa-world-cup-logo.png" class="IMG" />
      <b-row>
        <select v-model="form.stadium">
          <option disabled value="">Please select Stadiam</option>
          <option v-for="(stad, index) in stadiums" :key="index">
            {{ stad }}
          </option>
        </select>
      </b-row>
      <b-row>
        <b-col>
          <b-form-input
            class="Input"
            id="input-1"
            v-model="form.firstTeam"
            placeholder="First Team Name"
            required
          ></b-form-input>
          <input type="time" v-model="form.time" class="type" />
        </b-col>
        <b-col>
          <b-form-input
            class="Input"
            id="input-2"
            v-model="form.secondTeam"
            placeholder="Second Team Name"
            required
          ></b-form-input>
          <input type="date" v-model="form.date" class="type" />
        </b-col>
      </b-row>
      <b-row>
        <b-form-input
          class="Input"
          id="input-3"
          v-model="form.referee"
          placeholder="Referee Name"
          required
        ></b-form-input>
      </b-row>
      <b-row>
        <b-col>
          <b-form-input
            class="Input"
            id="input-4"
            v-model="form.firstLineMan"
            placeholder="First Line Man"
            required
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-input
            class="Input"
            id="input-5"
            v-model="form.secondLineMan"
            placeholder="Second Line Man"
            required
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button @click="onSubmit" class="fl" type="submit" variant="success"
        >confirm</b-button
      >
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    const URL = "http://localhost:5000/api/stadiums";
    const TOKEN = this.$store.state.token;
    axios
      .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        const STADIUMS = res.data;
        STADIUMS.forEach((s) => {
          this.stadiums.push(s.name);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  name: "ManagerCreateMatch",
  data: () => {
    return {
      form: {
        firstTeam: "",
        //flag1: null,
        secondTeam: "",
        //flag2: null,
        stadium: "",
        referee: "",
        date: "",
        time: "",
        firstLineMan: "",
        secondLineMan: "",
      },
      stadiums: [],
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
        const URL = "http://localhost:5000/api/matches";
        const TOKEN = this.$store.state.token;
        axios
          .post(
            URL,
            {
              firstTeam: this.form.firstTeam,
              secondTeam: this.form.secondTeam,
              matchVenue: this.form.stadium,
              date: this.form.date,
              mainReferee: this.form.referee,
              firstLinesMan: this.form.firstLineMan,
              secondLinesMan: this.form.secondLineMan,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          )
          .then((res) => {
            alert(res.data.message);
            this.$router.push("/manager");
          })
          .catch((err) => {
            alert(err.data.message);
          });
      }
    },
  },
};
</script>
<style scoped>
.main {
  text-align: center;
  margin-top: 50px;
  border-radius: 20px;
  border: 1px solid black;
  width: 60%;
  background-color: bisque;
}
input {
  margin: 5px 0;
  border-color: grey;
  border-radius: 5px;
  background-color: #d0b8a8;
}
select {
  margin: 5px auto;
  border-color: grey;
  border-radius: 5px;
  background-color: #d0b8a8;
  width: 90%;
  text-align: center;
}
select:focus {
  background-color: white;
  border: rgba(0, 0, 0, 0.075);
}
.Label {
  margin: 15px 0 !important;
}
.time {
  margin: 25px 0;
  width: 90%;
}
.fl {
  width: 40%;
  margin: 20px auto;
}
.type {
  width: 25.5rem;
  text-align: center;
  border: rgba(0, 0, 0, 0.075);
}
input:focus {
  background-color: white;
  border: rgba(0, 0, 0, 0.075);
}
.Input {
  text-align: center;
  width: 95%;
  margin: 15px auto;
}
.IMG {
  margin: 15px auto;
  width: 15rem;
}
/* #input-group-1 {
  margin-top: 50px !important;
}
#input-group-2 {
  margin-top: 50px !important;
} */
</style>
