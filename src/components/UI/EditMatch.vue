<template>
  <div>
    <b-container class="main">
      <img src="@/assets/Icons/2022-fifa-world-cup-logo.png" class="IMG" />
      <b-row>
        <select v-model="form.stadium">
          <option :value="match.matchVenue">{{ match.matchVenue }}</option>
          <option v-for="(stad, index) in stadiums" :key="index">
            {{ stad }}
          </option>
        </select>
        <!-- </b-form-group> -->
      </b-row>
      <b-row>
        <b-col>
          <b-form-input
            class="Input"
            id="input-1"
            v-model="form.firstTeam"
            placeholder="First Team Name"
            :value="form.firstTeam"
            required
          ></b-form-input>
          <input type="time" class="type" v-model="form.time" />
        </b-col>
        <b-col>
          <b-form-input
            class="Input"
            id="input-2"
            v-model="form.secondTeam"
            placeholder="Second Team Name"
            :value="form.secondTeam"
            required
          ></b-form-input>
          <input type="date" class="type" :value="form.date" />
        </b-col>
      </b-row>
      <b-row>
        <b-form-input
          class="Input"
          id="input-3"
          v-model="form.referee"
          placeholder="Referee Name"
          required
          :value="form.referee"
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
            :value="form.firstLineMan"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-input
            class="Input"
            id="input-5"
            v-model="form.secondLineMan"
            placeholder="Second Line Man"
            :value="form.secondLineMan"
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
  name: "EditMatch",
  props: ["match"],
  mounted() {
    console.log("sdsdsdsd", this.match);
    this.form.firstTeam = this.match.firstTeam;
    this.form.secondTeam = this.match.secondTeam;
    this.form.referee = this.match.mainReferee;
    this.form.firstLineMan = this.match.firstLinesMan;
    this.form.secondLineMan = this.match.secondLinesMan;
    this.form.date = this.match.date.substring(0, 10);
    this.form.time = this.match.date.substring(11, 16);
    this.form.stadium = this.match.matchVenue;
    const URL = "http://localhost:5000/api/stadiums";
    const TOKEN = this.$store.state.token;
    axios
      .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        console.log(res);
        const STADIUMS = res.data;
        STADIUMS.forEach((s) => {
          if (s.name != this.match.matchVenue) {
            this.stadiums.push(s.name);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data: () => {
    return {
      stadiums: [],
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
        const ID = this.$store.state.user._id;
        const URL = `http://localhost:5000/api/matches/${ID}`;
        const TOKEN = this.$store.state.token;
        axios
          .patch(
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
            alert(err.message);
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
  font-family: "Poppins", sans-serif;
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
</style>
