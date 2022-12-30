<template>
  <div class="main">
    <b-row v-for="(row, index) in getSeats" class="row" :key="index">
      <b-col cols="1" v-for="(seatPerRow, spr) in row" class="seat" :key="spr">
        <a @click="reserveSeat(index, spr)"> {{ seatPerRow }} </a>
      </b-col>
    </b-row>
    <div v-if="showPayment">
      <b-row>
        <b-col
          ><b-form-group id="input-group-1" label-for="input-1" class="Input">
            <b-form-input
              class="Input"
              id="input-1"
              v-model="paymentCard.number"
              type="number"
              placeholder="Card Number"
              minlength="19"
              maxlength="19"
              required
            ></b-form-input> </b-form-group
        ></b-col>
        <b-col cols="1">
          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="visa"
            width="64px"
            class="img"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              v-model="paymentCard.name"
              id="feedback-user"
              placeholder="Cardholder's Name"
              type="text"
              siez="17"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              v-model="paymentCard.expiration"
              placeholder="Expiration"
              type="text"
              minlength="7"
              maxlength="7"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group id="input-group-4">
            <b-form-input
              type="password"
              inputmode="numeric"
              id="typeText2"
              placeholder="Cvv"
              size="1"
              minlength="3"
              maxlength="3"
              v-model="paymentCard.cvv"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <button
            type="button"
            class="btn btn-info btn-lg btn-rounded button"
            @click="sendPayment"
          >
            <b-icon icon="arrow-right"></b-icon>
          </button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "SeatDetails",
  data: () => {
    return {
      seats: [],
      showPayCard: false,
      row: 0,
      seat: 0,
      paymentCard: {
        number: "",
        name: "",
        expiration: "",
        cvv: "",
      },
      showPayment: false,
    };
  },
  computed: {
    getSeats() {
      return this.$store.state.seateStatue.seatsStatus;
    },
  },
  methods: {
    reserveSeat(index, spr) {
      if (this.$store.state.user.role == "manager") {
        return;
      } else if (
        this.$store.state.seateStatue.seatsStatus[index][spr] == "0" &&
        this.$store.state.user.role == "fan"
      ) {
        this.row = index;
        this.seat = spr;
        this.showPayment = true;
        this.$store
          .dispatch("setRowSeat", { index, spr })
          .then(() => {})
          .catch((err) => {
            alert(err.message);
          });
      } else {
        alert("this seat already reserved, choose another one ");
      }
    },
    sendPayment() {
      if (
        !this.paymentCard.number ||
        !this.paymentCard.name ||
        !this.paymentCard.expiration ||
        !this.paymentCard.cvv
      ) {
        alert("Please fill all inputs");
      } else {
        let index = this.row;
        let spr = this.seat;
        this.$store
          .dispatch("updateSeats", { index, spr })
          .then(() => {
            this.showPayment = false;
            this.$forceUpdate();
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
.img {
  margin-top: 10px;
}
input {
  margin-top: 25px;
}
#input-1 {
  margin-top: 25px;
}
.main {
  margin-top: 50px;
  width: auto;
}
.row {
  margin: 0px auto;
  text-align: center;
  width: 50%;
}
.seat {
  border-radius: 5px;
  background-color: green;
  margin: 10px auto;
  text-align: center;
}
.Form {
  margin: auto;
  width: 30%;
}
.Input {
  margin-top: auto;
}
a {
  text-decoration: none;
}
button {
  border-radius: 50px;
}
</style>
