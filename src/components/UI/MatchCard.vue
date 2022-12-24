<template>
  <div class="xx">
  <b-container class="main" v-for="match in matches">
    <b-row class="row">
      <b-col></b-col>
      <b-col>
        <img  style="margin-top: 30px; width:15rem;" src="@/assets/Icons/2022-fifa-world-cup-logo.png"/>
      </b-col>
      <b-col></b-col>
    </b-row >
    <b-row class="row">
      <b-col>
        <img src="@/assets/Icons/9_Al_Ahly_Club-logo-BA70BE3AE8-seeklogo.png"/>
      </b-col>
      <b-col style="margin-top: 150px">
        VS
      </b-col>
      <b-col>
        <img src="@/assets/Icons/ZamalekSC.png"/>
      </b-col>
    </b-row>
    <b-row class="row">
      <b-col>{{match.firstTeam}}</b-col>
      <b-col></b-col>
      <b-col>{{match.secondTeam}}</b-col>
    </b-row>
    <br>
    <b-row class="row">
      <b-container>
        <p>{{match.date}}</p>
        <p>{{match.matchVenue}}</p>
      </b-container>
    </b-row>
  </b-container>
</div>
</template>
<script>
export default {
  name: "MatchCard",
  props:["matches"],
};
</script>
<style scoped>
.xx{
  margin-top: 820px;
}
.main {
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  /* width: 50rem;
  height: 10rem !important; */
  background-color: #1A120B;
  font-weight: bold;
  color: #D5CEA3;
  font-size: x-large;
}
.row {
  margin-top:25px;
}
img {
  width:13rem;
}
</style>
