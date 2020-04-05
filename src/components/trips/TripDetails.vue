<template>
  <v-container v-if="trip" fluid>
    <v-row justify="space-around">
        <div class="subheading pt-4">{{trip.name}}</div>
      <v-img :src="trip.imagePath" aspect-ratio="1.4" contain></v-img>
    </v-row>
     <p >
        {{trip.description}}
    </p>
    

    <v-row align="center">
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn   class="separated" color="teal">Edit</v-btn> 
            <v-btn @click="onDeleteTrip" class="separated"  color="teal">Delete</v-btn>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import  {tripsService}  from "../../Services/tripsServices";
// import { firestore } from '../../config';

export default {
name: "AppTripDetails",
mixins: [tripsService],
data(){
    return {
        // key:null,
        trip:null
    }
},
created(){
     this.getTripById()

},
methods:{
    onDeleteTrip(){
        let id = this.key
        this.deleteTrip(id)
    }
}

}

</script>

<style scoped>

    .separated{
        margin-right: 10px
    };

</style>