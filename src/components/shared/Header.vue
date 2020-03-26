<template>
  <div class="header">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Trips</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">


      <li class="nav-item active">
       
      <router-link
          to="/"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Home
        </router-link>

      </li>
      <li class="nav-item">
        <router-link
          to="/login"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Login
        </router-link>
        <!-- <a class="nav-link"  href="/login" >Login</a> -->
      </li>
      <li class="nav-item">
        <router-link
         to="/register"
          class="nav-item nav-link"
          active-class="active"
          exact
        > Register</router-link>
        <!-- <a class="nav-link" href="/register">Register</a> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Create Trip</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trips List</a>
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
  name: 'AppHeader',
  
  data(){
    return {
      selectedComponent: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
