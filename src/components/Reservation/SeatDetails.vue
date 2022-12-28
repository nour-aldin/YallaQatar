<template>
  <div>
    <b-row v-for="(row, index) in seats" class="row">
      <b-col cols="1" v-for="(seatPerRow, number) in row" class="seat">
        <a href=""> {{ seatPerRow }} </a>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  async created() {
    // console.log(this.match);
    // const URL = `http://localhost:5000/api/matches/${this.match._id}/seatStatus`;
    // const TOKEN = this.$store.state.token;
    // axios
    //   .get(URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
    //   .then((res) => {
    //     this.seats = res.data.seatsStatus;
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    if(this.Match == null) {

    }
    this.seats = this.Match.seatsStatus;
  },
  name: "SeatDetails",
  props: {
    match: {
      type: Object,
      default: null,

    },
  },
  data: (vm) => {
    return {
      Match: vm.match,
      seats: [],
    };
  },
};
</script>
<style scoped>
div {
  margin-top: 50px;
  width:auto;;
}
.row {
  margin: 0px auto;
  text-align: center;
  width: 50%;
}
.seat {
  border-radius:5px;
  background-color: green;
  margin: 10px auto;
  text-align: center;
}
a {
  text-decoration: none;
}
</style>