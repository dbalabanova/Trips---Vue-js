<template>
  <div>
    <v-layout row wrap>
      <v-flex lg2 v-for="trip of trips" :key="trip.id">
        <v-card flat class="ma-3" elevation="1" max-width="400">
          <v-img class="white--text align-end " height="200px" :src="trip.imagePath">
            <v-card-title>{{trip.name}}</v-card-title>
          </v-img>

          <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

          <v-card-text class="text--primary">
            <!-- <div>Whitehaven Beach</div> -->

            <div>{{trip.description | sliceText }}...</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Edit</v-btn>

            <v-btn color="orange" text>Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { tripsService } from "../../Services/tripsServices";
export default {
  name: "AppTripsList",
  mixins: [tripsService],
  filters: {
    sliceText: function(value) {
      return (value = value.slice(0, 100));
    }
  }
};
</script>

<style scoped>
</style>