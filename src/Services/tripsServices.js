// import axios from "axios";
import {firestore} from '../config'
// import * as firebase from "firebase";
// import 'firebase/auth'
// import  firestore from 'firebase/firestore'

export const tripsService = {
    data(){
        return {
            trips:[],
            trip:{},
            key:null,
            // currentTrip:{}
            name:'',
            imagePath:'',
            description:''
        }
    },
  methods: {

 getAllTrips(){
  return firestore.collection('trips').get().then((querySnapshot)=>{
     querySnapshot.forEach(doc=>{
      const data={
        "id":doc.id,
        'name': doc.data().name,
        'imagePath':doc.data().imagePath,
        'description':doc.data().description
      }
       this.trips.push(data)
     })
   })
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА

   .catch(()=>{})
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
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА
.catch(()=>{})
 },
 deleteTrip(key){
   return firestore.collection('trips').doc(key).delete().then(()=>{
     this.$router.push('/trips-list')
   })
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА
  .catch(()=>{})  
 },
 createTrip(data){
   const tr={
    name:data.name,
    description:data.description,
    imagePath:data.imagePath
   }
  return firestore.collection('trips').add(tr).then(()=>{

    this.$router.push('/trips-list')
  })
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА
  .catch(()=>{})
 },

 getTripToEdit(){
  return firestore.collection('trips').doc(this.$route.params.id).get().then((doc)=>{

      this.name= doc.data().name,
      this.imagePath=doc.data().imagePath,
      this.description=doc.data().description
})
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА
.catch(()=>{})
 },

 editTrip(data){
   const tr={
     name:data.name,
     description:data.description,
     imagePath:data.imagePath
    }
  return firestore.collection('trips').doc(this.$route.params.id).set(tr).then(()=>{
    this.$router.push('/trips-list')
  })
  .catch(()=>{})
 }
}
}



