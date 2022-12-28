<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="userSide" cols="3">
          <b-container class="user">
            <img
              src="@/assets/Icons/admin avatar.png"
              alt="admin avatar"
              class="avatar"
            />
            <p>Hello, {{ this.$store.state.user.userName }}</p>
            <h3>Ready to serve the Fans ? &#128578</h3>
            
          </b-container>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "ManagerDetails",
  data: () => {
    return {
  };
  }

};
</script>

<style scoped>
.avatar {
  margin-top: 25px;
  margin-right: 0;
  vertical-align: middle;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

.user {
  width: auto;
  margin-left: 0;
}
.userSide {
  margin-left: 0;
}
</style>