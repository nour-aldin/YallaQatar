<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col>
        <form class="main">
          <b-input
            class="Input"
            type="text"
            required
            v-model="stadium.name"
            placeholder="Stadium Name"
          />
          <b-input
            class="Input"
            type="number"
            required
            v-model="stadium.rows"
            placeholder="Number of Rows"
          />
          <b-input
            class="Input"
            type="number"
            required
            v-model="stadium.seatsPerRow"
            placeholder="Number of seats per row"
          />
          <b-row>
            <b-col>
              <b-button class="button" @click="Submit" variant="success"
                >Create</b-button
              >
            </b-col>
            <b-col>
              <b-button class="button" @click="Reset" variant="danger"
                >Clear</b-button
              >
            </b-col>
          </b-row>
        </form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  name: "CreateStadium",
  data: () => {
    return {
      stadium: {
        name: "",
        rows: 0,
        seatsPerRow: 0,
      },
    };
  },
  methods: {
    Submit() {
      console.log(this.stadium);
      if (
        !this.stadium.name ||
        this.stadium.row == 0 ||
        this.stadium.seatsPerRow == 0
      ) {
        alert("Please Fill all inputs ");
      } else {
        const URL = "http://localhost:5000/api/stadiums";
        const TOKEN = this.$store.state.token;
        console.log(TOKEN);
        axios
          .post(
            URL,
            {
              name: this.stadium.name,
              rows: this.stadium.rows,
              seatsPerRow: this.stadium.seatsPerRow,
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
    Reset() {
      this.stadium.name = "";
      this.stadium.rows = 0;
      this.stadium.seatsPerRow = 0;
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
form {
  margin: 100px auto;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
.Input {
  margin: 25px 0 !important;
  text-align: center;
}
.button {
  width: 100%;
  margin: auto !important;
}
</style>
