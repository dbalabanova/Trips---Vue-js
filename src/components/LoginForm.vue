<template>
  <div class="loginForm">
<form @submit.prevent="onSubmit">
  <fieldset>
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

export default {
  name: 'AppLogin',
  data() {
    return {
      email:'',
      password: '',
    }
  },
  validations:{
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
      this.$v.touch()
      if(this.$v.$invalid) { return}
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
