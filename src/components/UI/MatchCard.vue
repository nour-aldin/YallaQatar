<template>
  <div class="xx">
    <b-container class="main" v-for="(match, index) in matches" :key="index">
      <b-row>
        <b-col></b-col>
        <b-col>
          <img
            style="margin-top: 25px; width: 10rem"
            src="@/assets/Icons/2022-fifa-world-cup-logo.png"
          />
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col>
          <img
            src="@/assets/Icons/9_Al_Ahly_Club-logo-BA70BE3AE8-seeklogo.png"
            style="width: 9rem; height: 9rem"
          />
        </b-col>
        <b-col style="margin-top: 80px">
          <b-row>
            <p>VS</p>
          </b-row>
          <b-row>
            <router-link
              v-if="type == 'Manager'"
              :to="{ name: 'editmatch', params: { match } }"
            >
              Edit Match
            </router-link>
          </b-row>
        </b-col>

        <b-col>
          <img
            src="@/assets/Icons/ZamalekSC.png"
            style="width: 9rem; height: 9rem"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>{{ match.firstTeam }}</b-col>
        <b-col></b-col>
        <b-col>{{ match.secondTeam }}</b-col>
      </b-row>
      <br />
      <b-row>
        <b-container>
          <p>{{ match.date.substring(0, 10) }}</p>
          <p>{{ match.date.substring(11, 16) }}</p>
          <p>{{ match.matchVenue }}</p>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "MatchCard",
  props: ["matches", "type"],
};
</script>
<style scoped>
.xx {
  margin-top: 820px;
}
.main {
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  /* width: 50rem;*/
  height: auto !important;
  background-color: #1a120b;
  font-weight: bold;
  color: #d5cea3;
  font-size: x-large;
}
img {
  width: 13rem;
}

a:link,
a:visited {
  background-color: #f44336;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  width: 10rem;
  margin: auto;
}

a:hover,
a:active {
  background-color: red;
}
</style>
