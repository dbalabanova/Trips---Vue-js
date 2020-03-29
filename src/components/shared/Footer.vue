<template>

  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      This is the BEST footer you have ever seen! &copy; 2020
    </v-col>
  </v-footer>

  <!-- <div class="footer">
     <div >
            <p>This is the BEST footer you have ever seen!</p>
          </div>
  </div> -->
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.footer {
    font-family: monospace;
    
    background-color:gainsboro;
    color:black;
    border-top: 1px solid #bbb;
    text-align: center;
    position: relative;
    font-size: 18px;
  }

  
</style>
