<template>
<div class="main">
<b-container class="cnt" >
    <b-row>
        <b-col></b-col>
        <b-col class="hmm" cols="8" >
            <div class="Formm">
                <b-form   @submit.prevent="onSubmit" @reset="onReset">
                    <b-form-group id="input-group-1" label="First Name" label-for="input-1">
                        <b-form-input id="input-1" v-model="user.fisrtName" type="text" placeholder="update first name"
                            required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Second Name" label-for="input-2">
                        <b-form-input id="input-2" v-model="user.secondName" type="text" placeholder="update second name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-3" label="Password" label-for="input-3">
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
                    <b-form-group id="input-group-4" label="Birth Date" label-for="input-4">
                        <b-form-input id="input-4" v-model="user.birthDate" placeholder="Birth Date" required type="date"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-5" label="Nationality" label-for="input-5">
                        <b-form-input id="input-5" v-model="user.nationality" placeholder="Your Nationality" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-6" label="Gender" label-for="input-6">
                        <b-form-select id="input-6" v-model="user.gender" :options="genderList" required></b-form-select>
                    </b-form-group>
                    <b-button class="btnn" type="submit" variant="success">Update</b-button>
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
                birthDate:"",
                nationality:"",
                gender:""
            },
            background: "@/assets/Icons/signup.webp",
            genderList: [{ text: "Your Gender", value: null }, "male", "female"],

        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            let firstName = this.user.fisrtName;
            let secondName = this.user.secondName;
            let password = this.user.password;
            let birthDate = this.user.birthDate;
            let nationality = this.user.nationality;
            let gender = this.user.gender;
            const id = this.$store.state.user_id;
            const URL = "http://localhost:5000/users/" + id ;
            const TOKEN = this.$store.state.TOKEN;
            axios
                .patch(
                    URL,
                    { firstName: firstName, secondName: secondName, password: password, birthDate: birthDate,
                    nationality: nationality, gender:gender},
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
            this.user.fisrtName = "";
            this.user.secondName = "";
            this.user.password = "";
            this.user.nationality = "";
            this.user.gender = "";
            this.user.birthDate = "";
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
.hmm {
    position: relative;
    background: #c0deff;
    top: 40px;
    border-radius: 25px;
}

.Formm {
    text-align: center;
    margin-top: 50px;
    color: rgba(0, 0, 0, 0.678);
}
.btnn {
    margin:25px ;
    width: 60%;
}
</style>