<template>
  <div class="loginForm">
    <v-app class="nobackground">
      <v-form @submit.prevent="onSubmit">
        <div>
          <v-alert v-if="error" type="error">{{error}}</v-alert>
        </div>
        <v-container>
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
                id="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
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
          </v-row>
        </v-container>

        <v-row align="center">
          <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
              <v-btn :disabled="$v.$invalid" type="submit" color="teal">Login</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import * as firebase from "firebase";

export default {
  name: "AppLogin",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      show1: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data.user);
          this.$router.push( "/" );
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nobackground {
  background: none;
}
.loginForm {
  background-image: url("https://i.picsum.photos/id/300/4272/2848.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
