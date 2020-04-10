<template>
  <div>
    <v-alert v-if="error" type="error">{{error}}</v-alert>
    <v-layout row wrap>
      <v-flex lg4 v-for="trip of trips" :key="trip.id">
        <v-row align="center">
          <app-trip-card :trip="trip"></app-trip-card>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import  {tripsService}  from "../../servicesLayer/tripsServices";
import AppTripCard from './TripCard'

export default {
  name: "AppTripsList",
  mixins: [tripsService],
   components:{
     AppTripCard
 },
 created(){
    this.getAllTrips()
 },

};
</script>

<style scoped>
.bg{
    background-image: url("https://i.picsum.photos/id/300/4272/2848.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1{
  margin-top: 200px;
}

</style>
