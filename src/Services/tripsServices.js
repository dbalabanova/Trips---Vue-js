// import axios from "axios";
import {firestore} from '../config'
// import * as firebase from "firebase";
// import 'firebase/auth'
// import  firestore from 'firebase/firestore'

export const tripsService = {
    data(){
        return {
            trips:[],
            trip:null,
            key:null
        }
    },
  methods: {

 getAllTrips(){
  return firestore.collection('trips').get().then((querySnapshot)=>{
     querySnapshot.forEach(doc=>{
     //  console.log(doc.id)
      const data={
        "id":doc.id,
        'name': doc.data().name,
        'imagePath':doc.data().imagePath,
        'description':doc.data().description
      }
       this.trips.push(data)
     })
   })
 },

 getTripById(){
   return firestore.collection('trips').doc(this.$route.params.id).get().then((doc)=>{
    if(doc.exists){
      const data ={
        "id":doc.id,
        'name': doc.data().name,
        'imagePath':doc.data().imagePath,
        'description':doc.data().description
      }
      this.trip=data
      this.key=this.trip.id
    }
})
 },
 deleteTrip(key){
   return firestore.collection('trips').doc(key).delete().then(()=>{
     this.$router.push('/trips-list')
   })
 }
}
}



