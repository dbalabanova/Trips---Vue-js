// import axios from "axios";
import {firestore} from '../config'
import * as firebase from "firebase";
// import 'firebase/auth'
// import  firestore from 'firebase/firestore'

export const tripsService = {
    data(){
        return {
            trips:[],
            trip:{},
            key:null,
            isCreator:null,
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
        'description':doc.data().description,
        'isCreator':doc.data().creatorId===firebase.auth().currentUser.uid
      }
      console.log(doc.data().creatorId)
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
        'description':doc.data().description,
        'isCreator':doc.data().creatorId===firebase.auth().currentUser.uid
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
   if(firebase.auth().currentUser){
     let uid=firebase.auth().currentUser.uid
     const tr={
      name:data.name,
      description:data.description,
      imagePath:data.imagePath,
      creatorId:uid
 }
return firestore.collection('trips').add(tr).then(()=>{

  this.$router.push('/trips-list')
})
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА
.catch(()=>{})
  }
 },

 getTripToEdit(){
  return firestore.collection('trips').doc(this.$route.params.id).get().then((doc)=>{
     
      this.name= doc.data().name,
      this.imagePath=doc.data().imagePath,
      this.description=doc.data().description,
      creatorId=firebase.auth().currentUser.uid

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
    let id = this.$route.params.id
  return firestore.collection('trips').doc(this.$route.params.id).set(tr).then(()=>{
    this.$router.push('/trip-details/'+id)
  })
//ДА сИ ИЗПИША ГРЕШКАТА И ДА СИ ИЗПИША СЪКСЕСА
  .catch(()=>{})
 }
}
}



