<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #009688;">

    <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, i) in items" :key="i">
        <v-list-item-title>
          <router-link v-if="isLoggedIn" to="/trips-user" class="navbar-brand" active-class="active" exact>
          {{ item.title }}
          </router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="navbar-brand" active-class="active" exact>
          Login
          </router-link>
          </v-list-item-title>
      </v-list-item>
    </v-list>
    </v-menu>
 
      <router-link v-if="isLoggedIn" to="/trips-list" class="navbar-brand" active-class="active" exact>Trips</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="navbar-brand" active-class="active" exact>Trips</router-link>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" 
            class="nav-item nav-link" 
            active-class="active" exact
            >
            Home
            </router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-item nav-link" active-class="active" exact>Login</router-link>
          </li>
          <li  v-if="!isLoggedIn" class="nav-item">
            <router-link
              to="/register"
              class="nav-item nav-link"
              active-class="active"
              exact
            >Register</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link to="/trip-create" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >
            Create Trip
            </router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link to="/trips-list" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >
            Trips List
            </router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <button 
            @click="onlogout"
            class="nav-item nav-link" 
            active-class="active" 
            exact> Logout</button>
            <!-- <a class="nav-link" href="#">Logout</a> -->
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
// import firebase from 'firebase' 
import {authService} from '../../Services/authService'
export default {
  name: "AppHeader",
  props:{
    isLoggedIn:Boolean
  },
  mixins:[authService],
  data() {
    return {
      selectedComponent: "",
      items:[
        {title: 'My profile'},
      ]

    };
  },
  methods:{
    onlogout(){
      this.$emit('onAuth',false)
      this.logout()
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: mediumseagreen;
}
</style>
