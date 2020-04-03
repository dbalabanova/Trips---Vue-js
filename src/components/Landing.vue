<template>
  <div class="bg">
  <template v-if="isLoggedIn">
  <h1>
  <p>Dear </p>
  <p>it's not time to travel it's Quarantine...</p>
  </h1>
  </template>
  </div>
</template>

<script>
import firebase from 'firebase' 

export default {
  name: 'AppLanding',
  props: {
    isLoggedIn: Boolean
  },
  beforeCreate(){
    this.$emit('onAuth',firebase.auth().currentUser !==null)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg {
    /* min-height: 100%; */
    /* background-image: url('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobertadams%2Ffiles%2F2016%2F03%2Fthe-best-travel-websites-in-the-world-1200x800.jpg'); */
    background-image: url('https://gannonedge.com/wp-content/uploads/2019/11/blog-4-pic.jpg');
    /* background-image: url('https://i.pinimg.com/474x/e0/0f/a1/e00fa1b8b0662c3fb235d2a0d7de6475.jpg'); */
    /* background-image: url('');
    background-image: url(''); */
    
    
    background-size: cover;
    height: 100vh;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-attachment: fixed; */
}
h1{
  text-align: center;
  margin-top:150px;
  font-size: 44px;
 
}
</style>
