<template>
  <div id="registerForm">
    <v-app class="nobackground">
      <v-form @submit.prevent="onSubmit">
        <div>
          <v-alert v-if="error" type="error">{{error}}</v-alert>
          <v-alert v-if="success" type="success">{{success}}</v-alert>
        </div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                @blur="$v.username.$touch()"
                v-model="username"
                id="username"
                label="Enter your username"
              ></v-text-field>
              <template v-if="$v.username.$error">
                <v-alert
                  v-if="!$v.username.required"
                  dense
                  outlined
                  type="error"
                >This field is required</v-alert>
                <v-alert
                  v-if="!$v.username.minLength"
                  dense
                  outlined
                  type="error"
                >Username must be at least 3 symbols</v-alert>
              </template>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                @blur="$v.email.$touch()"
                v-model="email"
                id="email"
                label="Enter your email"
              ></v-text-field>
              <template v-if="$v.email.$error">
                <v-alert
                  v-if="!$v.email.required"
                  dense
                  outlined
                  type="error"
                >This field is required</v-alert>
                <v-alert v-if="!$v.email.email" dense outlined type="error">This email is invalid</v-alert>
              </template>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                @blur="$v.password.$touch()"
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                label="Enter your password"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
              <template v-if="$v.password.$error">
                <v-alert
                  v-if="!$v.password.required"
                  dense
                  outlined
                  type="error"
                >This field is required</v-alert>
                <v-alert
                  v-if="!$v.password.minLength"
                  dense
                  outlined
                  type="error"
                >Password must be at least 6 symbols</v-alert>
              </template>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                label="Confirm your password"
                @click:append="show2 = !show2"
              ></v-text-field>
              <v-alert
                v-if="!$v.confirmPassword.sameAs"
                dense
                outlined
                type="error"
              >Passwords do not match</v-alert>
            </v-col>
          </v-row>
        </v-container>

        <v-row align="center">
          <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
              <v-btn :disabled="$v.$invalid" type="submit" color="teal">Register</v-btn>
            </div>
          </v-col>
        </v-row>
      <v-row class="wrapper" align="center" justify="center">
            You already have an account?    
        <v-btn class="decoration" to="/login" color="teal" >Login</v-btn>
      </v-row>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import {authService} from '../../servicesLayer/authService'

export default {
  name: "AppRegister",
  mixins:[authService],
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: '',
      success:'',
      show1: false,
      show2: false
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const userData={
          email:this.email,
          password:this.password,
          username:this.username,
          error:this.error
        }
        this.registration(userData)
      }
    }
  }
};
</script>

<style scoped>
.nobackground {
  background: none;
}
#registerForm {
  background-image: url("https://i.picsum.photos/id/300/4272/2848.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.decoration{
  text-decoration: none;
  margin-left: 20px;
}
</style>
