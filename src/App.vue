<template>
    <v-app id="app" class="green">
    <app-header  @onAuth="isLoggedIn= $event" :isLoggedIn="isLoggedIn"></app-header>
    <router-view @onAuth="isLoggedIn= $event" :isLoggedIn="isLoggedIn"></router-view>
    <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppHeader from './components/shared/Header'
import AppFooter from './components/shared/Footer'
import * as firebase from "firebase";
// import 'firebase/auth'

export default {
  name: 'App',
 components:{
   AppHeader,
   AppFooter
 },
 data: function(){
   return {
      isLoggedIn: firebase.auth().currentUser!==null
   }
 },


}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
