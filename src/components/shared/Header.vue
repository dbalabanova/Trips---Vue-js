<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #009688;">
      <router-link to="/" class="navbar-brand" active-class="active" exact>Trips</router-link>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-item nav-link" active-class="active" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-item nav-link" active-class="active" exact>Login</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/register"
              class="nav-item nav-link"
              active-class="active"
              exact
            >Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/trip-create" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >
            Create Trip
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/trips-list" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >
            Trips List
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",

  data() {
    return {
      selectedComponent: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: mediumseagreen;
}
</style>
