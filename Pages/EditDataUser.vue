<template>
<div class="main">
<b-container>
    <b-row>
        <b-col></b-col>
        <b-col class="hm">
            <div class="Form">
                <b-form @submit.prevent="onSubmit" @reset="onReset">
                    <b-form-group id="input-group-1" label="First Name" label-for="input-1">
                        <b-form-input id="input-1" v-model="user.fisrtName" type="text" placeholder="update first name"
                            required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Second Name" label-for="input-2">
                        <b-form-input id="input-1" v-model="user.secondName" type="text" placeholder="update second name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Password" label-for="input-3">
                        <b-form-input v-model="user.password" :state="validation" id="feedback-user"
                            placeholder="Password" type="password">
                        </b-form-input>
                        <b-form-invalid-feedback :state="validation">
                            Your user Password must be 5-12 characters long.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validation">
                            Looks Good.
                        </b-form-valid-feedback>
                    </b-form-group>
                    <b-button class="btn" type="submit" variant="success">Update</b-button>
                </b-form>
            </div>
        </b-col>
        <b-col></b-col>
    </b-row>
</b-container>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignIn",
    data: () => {
        return {
            user: {
                fisrtName: "",
                secondName:"",
                password: "",
            },
            background: "@/assets/Icons/signup.webp",
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            let fisrtName = this.user.fisrtName;
            let secondName = this.user.secondName;
            let password = this.user.password;
            const id = this.$store.state.user_id;
            const URL = "http://localhost:5000/users/" + id ;
            const TOKEN = this.$store.state.TOKEN;
            axios
                .patch(
                    URL,
                    { fisrtName: this.fisrtName, secondName: secondName, password: password },
                    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}`},}
                    )
                .then((res) => {
                    alert(res.message);
                })
                .catch((err) => {
                    alert(err.message);
                });
           
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.user.userName = "";
            this.user.password = "";
        },
    },
    computed: {
        validation() {
            return this.user.password.length > 4 && this.user.password.length < 13;
        },
    },

};
</script>

<style>
.main{
    background-color: rgb(4, 4, 40);
    height: 100vh;
}
</style>