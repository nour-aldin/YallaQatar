<template>
  <section>
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center py-5">
        <div class="col-md-7 col-lg-5 col-xl-4">
          <div class="card" style="border-radius: 15px">
            <div class="card-body p-4">
              <form>
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <div class="form-outline">
                    <input
                      type="number"
                      id="typeText"
                      class="form-control form-control-lg"
                      siez="17"
                      placeholder="1234 5678 9012 3457"
                      minlength="19"
                      maxlength="19"
                      v-model="paymentCard.number"
                    />
                    <!-- <label class="form-label" for="typeText">Card Number</label> -->
                  </div>
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="64px"
                  />
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="typeName"
                      class="form-control form-control-lg"
                      siez="17"
                      placeholder="Cardholder's Name"
                      v-model="paymentCard.name"
                    />
                    <!-- <label class="form-label" for="typeName">Cardholder's Name</label> -->
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center pb-2"
                >
                  <div class="form-outline">
                    <input
                      type="text"
                      id="typeExp"
                      class="form-control form-control-lg"
                      placeholder="Expiration"
                      size="7"
                      minlength="7"
                      maxlength="7"
                      v-model="paymentCard.expiration"
                    />
                    <!-- <label class="form-label" for="typeExp">Expiration</label> -->
                  </div>
                  <div class="form-outline">
                    <input
                      type="password"
                      inputmode="numeric"
                      id="typeText2"
                      class="form-control form-control-lg"
                      placeholder="Cvv"
                      size="1"
                      minlength="3"
                      maxlength="3"
                      v-model="paymentCard.cvv"
                    />
                    <!-- <label class="form-label" for="typeText2">Cvv</label> -->
                  </div>
                  <button
                    type="button"
                    class="btn btn-info btn-lg btn-rounded button"
                    @click="sendPayment"
                  >
                    <b-icon icon="arrow-right"></b-icon>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PayCard",
  data: () => {
    return {
      paymentCard: {
        number: "",
        name: "",
        expiration: "",
        cvv: "",
      },
      props: ["index, spr"],
    };
  },
  methods: {
    sendPayment() {
      if (
        !this.paymentCard.number ||
        !this.paymentCard.name ||
        !this.paymentCard.expiration ||
        !this.paymentCard.cvv
      ) {
        alert("Please fill all inputs");
      } 
      else {
        let index = this.$store.state.row;
        let spr = this.$store.state.seat;
        this.$store
          .dispatch("updateSeats", { index, spr })
          .then(this.$forceUpdate())
          .catch((err) => {
            alert(err.message);
          });
      }
    },
  },
};
</script>
<style scoped>
button {
  border-radius: 50px;
  width: 20%;
}
</style>
