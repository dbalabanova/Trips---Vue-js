// import axios from "axios";
import {firestore} from '../config'
// import * as firebase from "firebase";
// import 'firebase/auth'
// import  firestore from 'firebase/firestore'

export const tripsService = {
    data(){
        return {
            trips:[],
        }
    },
  methods: {
//     // axios.get("https://trips-d41d1.firebaseio.com/trips.json")
//     // .then(data => {
//     //   this.trips = data.data;
      
//     // });
//    // console.log(firestore.collection('trips'))
//   //  firestore.ref('/trips').then((snapShot=>{
//   //    console.log(snapShot)
//   //  }))
//   }

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
 }
}
}



