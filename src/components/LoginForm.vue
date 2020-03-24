<template>
  <div class="loginForm">
<form>
  <fieldset>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    
<button type="button" class="btn btn-primary">Login</button>

  </fieldset>
</form>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  
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
