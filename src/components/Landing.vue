<template>
  <div class="bg">
  <template v-if="isLoggedIn">
  <h1>
  <p>Dear {{displayName | upperCase }},</p>
  <p>it's not time to travel it's Quarantine...</p>
  </h1>
  </template>
  </div>
</template>

<script>
import firebase from 'firebase' 
import { authService } from "../servicesLayer/authService";

export default {
  name: 'AppLanding',
  mixins: [ authService],
  props: {
    isLoggedIn: Boolean
  },
  data(){
    return {
      displayName:''
    }
  },
  beforeCreate(){
    this.$emit('onAuth',firebase.auth().currentUser !==null)
  },
    filters: {
    upperCase: function(value) {
      return (value = value.toUpperCase());
    }
  },

  created(){
    this.userInfo()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg {
    /* min-height: 100%; */
    background-image: url('https://gannonedge.com/wp-content/uploads/2019/11/blog-4-pic.jpg');

    
    
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
