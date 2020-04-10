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

          <!-- <v-card flat class="ma-3" elevation="1" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="trip.imagePath" alt="https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx">
              <v-card-title>{{trip.name}}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>{{trip.description | sliceText }}...</div>
            </v-card-text>

            <v-card-actions>
              <v-btn v-if="trip.isCreator" color="orange" text>
                <router-link
                  color="orange"
                  :to="{ name:'tripEdit', params:{id:trip.id}}"
                  class="nav-item nav-link"
                  active-class="active"
                  exact
                >Edit</router-link>
              </v-btn>
              <v-btn color="orange" text>
                <router-link
                  color="orange"
                  :to="{name: 'tripDetails', params:{id:trip.id}}"
                  class="nav-item nav-link"
                  active-class="active"
                  exact
                >Details</router-link>
              </v-btn>
            </v-card-actions>
          </v-card> -->
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
    //   trips: [],
      show: false,
      btnText:'See Trips',
    //   error:''

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