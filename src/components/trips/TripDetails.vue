<template>
  <v-container v-if="trip" fluid>
    <v-alert v-if="error" type="error">{{error}}</v-alert>
    <v-alert v-if="success" type="success">{{success}}</v-alert>
            <v-row align="center">
          <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
              <v-btn  class="separated"  color="teal" to="/trips-list" active-class="active">
            Go back to list
                </v-btn>
            </div>
          </v-col>
        </v-row>
    <v-row justify="space-around">
      <v-img :src="trip.imagePath"  aspect-ratio="3.0" contain></v-img>
    </v-row>
        <div class="subheading pt-4">{{trip.name}}</div>

     <p >
        {{trip.description}}
    </p>
    <v-row align="center">
      <v-col v-if="trip.isCreator" class="text-center" cols="12" sm="4">
        <div  class="my-2">
          <v-btn   
            class="separated" 
            color="teal"
             :to="{ name:'tripEdit', params:{id:trip.id}}"
             active-class="active"  
             >            
            Edit
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
import  {tripsService}  from "../../servicesLayer/tripsServices";

export default {
name: "AppTripDetails",
mixins: [tripsService],

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
        margin-right: 10px;
        text-decoration: none
    };


</style>