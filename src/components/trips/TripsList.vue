<template>
  <div>
    <v-layout row wrap>
      <v-flex lg4 v-for="trip of trips" :key="trip.id">
        <v-card flat class="ma-3" elevation="1" max-width="400">
          <v-img class="white--text align-end " height="200px" :src="trip.imagePath">
            <v-card-title>{{trip.name}}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{trip.description | sliceText }}...</div>
          </v-card-text>

          <v-card-actions> 
            <v-btn  color="orange" text >
            <router-link 
            color="orange"
            :to="{ name:'tripEdit', params:{id:trip.id}}" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >
            Edit
            </router-link >
            </v-btn>
            <v-btn color="orange" text>
            <router-link 
            color="orange"
            :to="{name: 'tripDetails', params:{id:trip.id}}" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >
            Details
            </router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import  {tripsService}  from "../../Services/tripsServices";
// import {firestore} from '../../config'
//import axios from 'axios'
//  import {getAllTrips} from '../../Services/tripsServices'
export default {
  name: "AppTripsList",
  mixins: [tripsService],
 data(){
   return {
     trips:[]
   }
 },
  filters: {
    sliceText: function(value) {
      return (value = value.slice(0, 100));
    }
  },

 created(){
    this.getAllTrips()
 },

};
</script>

<style scoped>

</style>