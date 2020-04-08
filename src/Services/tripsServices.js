import {firestore} from '../config'
import * as firebase from "firebase";

export const tripsService = {
    data(){
        return {
            trips:[],
            trip:{},
            key:null,
            isCreator:null,
            name:'',
            imagePath:'',
            description:'',
            error:'',
            success:'',
        }
    },
  methods: {

  getAllTrips(){
  return  firestore.collection('trips').get().then((querySnapshot)=>{
     querySnapshot.forEach(doc=>{
      const data={
        id:doc.id,
        name: doc.data().name,
        imagePath:doc.data().imagePath,
        description:doc.data().description,
        isCreator:doc.data().creatorId===firebase.auth().currentUser.uid
      }
       this.trips.push(data)

     })
   })
   .catch((err)=>{this.error=err.message})
 },
 getUserTrips(){
   if(firebase.auth().currentUser!==null){
     let uid= firebase.auth().currentUser.uid
     return  firestore.collection('trips').get().then((querySnapshot)=>{
      querySnapshot.forEach(doc=>{
        if(doc.data().creatorId===uid){
          const data={
            id:doc.id,
            name: doc.data().name,
            imagePath:doc.data().imagePath,
            description:doc.data().description,
            isCreator:doc.data().creatorId===firebase.auth().currentUser.uid
          }
           this.trips.push(data)
        }
      })
       
     })
     .catch((err)=>{this.error=err.message})
   }
 },

 getTripById(){
   return firestore.collection('trips').doc(this.$route.params.id).get().then((doc)=>{
    if(doc.exists){
      const data ={
        id:doc.id,
        name: doc.data().name,
        imagePath:doc.data().imagePath,
        description:doc.data().description,
        isCreator:doc.data().creatorId===firebase.auth().currentUser.uid
      }
      this.trip=data
      this.key=this.trip.id
    }
})
.catch((err)=>{this.error=err.message})
 },
 deleteTrip(key){
   return firestore.collection('trips').doc(key).delete().then(()=>{
     this.success="Trip Succeffully deleted"
     setTimeout(()=>{
      this.$router.push('/trips-list')
     },1000)
     
   })
  .catch((err)=>{this.error=err.message})  
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
  this.success="Trip Succeffully created"
  setTimeout(()=>{
   this.$router.push('/trips-list')
  },1000)
})
.catch((err)=>{this.error=err.message})
  }
 },

 getTripToEdit(){
  return firestore.collection('trips').doc(this.$route.params.id).get().then((doc)=>{
     
      this.name= doc.data().name,
      this.imagePath=doc.data().imagePath,
      this.description=doc.data().description

})
.catch((err)=>{this.error=err.message})
 },

 editTrip(data){
   const tr={
     name:data.name,
     description:data.description,
     imagePath:data.imagePath,
     creatorId:firebase.auth().currentUser.uid

    }
    let id = this.$route.params.id
  return firestore.collection('trips').doc(this.$route.params.id).set(tr).then(()=>{
    this.success="Trip Succeffully edited"
    setTimeout(()=>{
     this.$router.push('/trip-details/'+id)
    },1000)

  })
  .catch((err)=>{this.error=err.message})
 }
}
}



