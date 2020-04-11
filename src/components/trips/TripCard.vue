<template>
        <v-card flat class="ma-3" elevation="1" max-width="400">
          <v-img class="white--text align-end " height="200px" :src="trip.imagePath">
            <v-card-title>{{trip.name}}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{trip.description | sliceText }}...</div>
          </v-card-text>
          <v-card-actions> 
            <v-btn  v-if="trip.isCreator" color="orange" text >
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
</template>

<script>
export default {
    name:"AppTripCard",
    props:{
        trip:{
        type:Object,
        required:true
        }
    },
  filters: {
    sliceText: function(value) {
      return (value = value.slice(0, 100));
    }
  },
}
</script>

<style>

</style>