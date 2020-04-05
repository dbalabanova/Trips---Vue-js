<template>
  <v-container v-if="trip" fluid>
        <p> {{trip.isCreator}}</p>

    <v-row justify="space-around">
        <div class="subheading pt-4">{{trip.name}}</div>
      <v-img :src="trip.imagePath" aspect-ratio="1.4" contain></v-img>
    </v-row>
     <p >
        {{trip.description}}
    </p>
    <v-row align="center">
      <v-col v-if="trip.isCreator" class="text-center" cols="12" sm="4">
        <div  class="my-2">
          
          <v-btn   
            class="separated" 
            color="teal">            
            <router-link 
            tag="v-btn"
            color="orange"
            :to="{ name:'tripEdit', params:{id:trip.id}}" 
            class="nav-item nav-link" 
            active-class="active" 
            exact
            >            
            Edit
            </router-link >
            </v-btn> 
            <v-btn 
            @click="onDeleteTrip" 
            class="separated"  
            color="teal">Delete</v-btn>
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