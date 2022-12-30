<template>
  <div>
    <NavBar type="Fan" />
    <table>
      <tr>
        <th>First Team</th>
        <th>Second Team</th>
        <th>Stadium</th>
        <th>Row</th>
        <th>Seat</th>
        <th>Cancel</th>
      </tr>
      <tr v-for="(match, index) in this.matches" :key="index">
        <td>{{ match.firstTeam }}</td>
        <td>{{ match.secondTeam }}</td>
        <td>{{ match.matchVenue }}</td>
        <td>{{ match.row }}</td>
        <td>{{ match.seat }}</td>
        <td>
          <b-button class="button" variant="danger" @click="canel(index)"
            >Reject</b-button
          >
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import NavBar from "@/components/UI/NavBar.vue";
import axios from "axios";
export default {
  name: "CancelTicket",
  components: {
    NavBar,
  },
  mounted() {
    const ID = this.$store.state.user._id;
    const Token = this.$store.state.token;
    const URL = `http://localhost:5000/api/users/${ID}/matches`;
    axios
      .get(URL, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        this.matches = res.data;
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  data: () => {
    return {
      matches: [],
    };
  },
  methods: {
    canel(index) {
      const Row = this.matches[index].row;
      const Seat = this.matches[index].seat;
      const ID = this.matches[index].match;
      const URL = `http://localhost:5000/api/matches/${ID}/cancel?row=${Row}&seat=${Seat}`;
      axios
        .delete(
          URL,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          },
          {
            row: Row,
            seat: Seat,
          }
        )
        .then((res) => {
          this.matches.splice(index, 1);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 20px;
  margin-left: 0;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  /* width: 50rem;
  height: 10rem !important; */
  background-color: #1a120b;
  font-weight: bold;
  color: #d5cea3;
  font-size: x-large;
  width: 30%;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 25px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.075);
}

tr:nth-child(odd):hover {
  background-color: rgba(220, 195, 237, 0.146);
}
tr:nth-child(even):hover {
  background-color: rgba(0, 0, 0, 0.095);
}

</style>
