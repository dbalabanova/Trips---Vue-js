<template>
  <div class="registerForm">
<form @submit.prevent="onSubmit" >
  <fieldset>
      <div class="form-group">
      <label for="username">Username</label>
      <input 
      @blur="$v.username.$touch()"
      v-model="username"
      class="form-control" 
      id="username" 
      placeholder="Enter username"
      >
      <template v-if="$v.username.$error">
      <p class="alert alert-danger" v-if="!$v.username.required">Username is required</p>
      <p class="alert alert-danger" v-if="!$v.username.minLength">Username should be ate least 6 symbols</p>
      </template>
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input 
      @blur="$v.email.$touch()"
      v-model="email"
      type="email" 
      class="form-control" 
      id="email" 
      aria-describedby="emailHelp" 
      placeholder="Enter email"
      >
      <template v-if="$v.email.$error">
      <p v-if="!$v.email.required" class="alert alert-danger">This field is required</p>
      <p v-if="!$v.email.email" class="alert alert-danger">Invalid email</p>
      </template>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
      <p v-if="!$v.password.required" class="alert alert-danger">This field is required</p>
      <p v-if="!$v.password.minLength" class="alert alert-danger">The password should be at least 6 symbols</p>
      </template>
    </div>
        <div class="form-group">
      <label for="confirmPassword">Confirm Password</label>
      <input 
      v-model="confirmPassword"
      type="password" 
      class="form-control" 
      id="confirmPassword" 
      placeholder=" Confirm Password"
      >
      <!-- <template v-if="$v.confirmPassword.$error"> -->
      <p v-if="!$v.confirmPassword.sameAs" class="alert alert-danger">The passwords do not match</p>
      <!-- </template> -->
    </div>
    
    <button type="submit" class="btn btn-primary">
     Register
     </button>

     
     <p>
      {{email}}
     </p>
      <p>
      {{password}}
      <p>
      {{confirmPassword}}
       </p>
    
  </fieldset>
</form>
  </div>
</template>

<script>
import {required, email, minLength,sameAs} from 'vuelidate/lib/validators'
export default {
  name: 'AppRegister',
  data(){
    return {
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  },
  validations:{
    email:{
      required,
      email
    },
    username:{
      required,
      minLength:minLength(6)
    },
    password:{
      required,
      minLength:minLength(6)
    },
    confirmPassword:{
      sameAs:sameAs('password')
    }
  },
  methods:{
    onSubmit(){
      this.$v.$touch()
      if(this.$v.$invalid) { return}
      console.log(this.$v.username)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
