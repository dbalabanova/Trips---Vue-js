<template>
  <div class="loginForm">
<form @submit.prevent="onSubmit">
  <fieldset>
    <legend>Login Form</legend>
    <div v-if="error" class="alert alert-danger">{{error}}</div>

        <!-- <div class="form-group">
      <label for="username">Username</label>
      <input 
      @blur="$v.username.$touch()"
      v-model="username"
      type="username" 
      class="form-control" 
      id="username" 
      placeholder="Enter username"
      >
      <template v-if="$v.username.$error">
      <p v-if="!$v.username.required" class="alert alert-danger">This field is required </p>
      <p v-if="!$v.username.minLength" class="alert alert-danger">Username must be at least 6 symbols</p>
      </template>
    </div> -->
    <div class="form-group">
      <label for="email">Email</label>
      <input 
      @blur="$v.email.$touch()"
      v-model="email"
      type="email" 
      class="form-control" 
      id="email" 
      placeholder="Enter email"
      >
      <template v-if="$v.email.$error">
      <p v-if="!$v.email.required" class="alert alert-danger">This field is required </p>
      <p v-if="!$v.email.email" class="alert alert-danger">Invalid email</p>
      </template>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input 
      @blur="$v.password.$touch()"
      v-model="password"
      type="password" 
      class="form-control" 
      id="password" 
      placeholder="Password"
      >
    <template v-if="$v.password.$error">
      <p v-if="!$v.password.required" class="alert alert-danger">This field is required </p>
      <p v-if="!$v.password.minLength" class="alert alert-danger">Password must be at least 6 symbols </p>
      </template>
    </div>
    
<button :disabled="$v.$invalid" type="submit" class="btn btn-primary">Login</button>

  </fieldset>
</form>
  </div>
</template>

<script>
import {required,email,minLength} from 'vuelidate/lib/validators'
import * as firebase from 'firebase'

export default {
  name: 'AppLogin',
  data() {
    return {
      // username:'',
      email:'',
      password: '',
      error:null
    }
  },
  validations:{
    // username:{
    //   required,
    //   minLength:minLength(6)
    // },
    email:{
      required,
      email
    },
    password:{
      required,
      minLength:minLength(6)
    }
  },
  methods:{
    onSubmit(){
      this.$v.$touch()
      if(this.$v.$invalid) { return}
      
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data)
          this.$router.replace({path:'/' });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .loginForm{
    background-image: url('https://cdn.pixabay.com/photo/2014/07/21/10/28/landscape-398500_960_720.jpg');
    background-size: cover;
    height: 100vh;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
 }


</style>
