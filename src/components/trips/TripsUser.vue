<template>
  <div>
    <v-container fluid>
    <v-alert v-if="error" type="error">{{error}}</v-alert>

      <v-row>
        <v-col cols="12" lg="6">
          <v-card>
            <v-card-title class="subheading font-weight-bold">USER INFORMATION</v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>Username:</v-list-item-content>
                <v-list-item-content class="align-end">{{ displayName }}</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Email:</v-list-item-content>
                <v-list-item-content class="align-end">{{ email }}</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Number of posted Trips:</v-list-item-content>
                <v-list-item-content class="align-end">{{ trips.length }}</v-list-item-content>
              </v-list-item>
              <v-btn v-if="trips.length" color="orange lighten-2" @click="onShow">{{btnText}}</v-btn>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-layout  fluid row wrap v-if="show">
      <v-flex lg4 v-for="trip of trips" :key="trip.id">
        <v-row align="center">

          <app-trip-card :trip="trip"></app-trip-card>

        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { tripsService } from "../../servicesLayer/tripsServices";
import { authService } from "../../servicesLayer/authService";
import AppTripCard from './TripCard'
export default {
  name: "AppTripsUser",
  components:{
      AppTripCard
  },
  mixins: [tripsService, authService],
  data() {
    return {
      show: false,
      btnText:'See Trips',

    };
  },
  filters: {
    sliceText: function(value) {
      return (value = value.slice(0, 100));
    }
  },
  created() {
    this.getUserTrips();
    this.userInfo();
  },
  methods:{
      onShow(){
          this.show=!this.show
          if(this.show){
              this.btnText='Hide trips'
          }
          else{
              this.btnText='See trips'
          }
      }
  }
};
</script>

<style scoped>
</style>