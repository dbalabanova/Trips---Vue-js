// import Vue from 'vue'
// import {firestore} from '../config'

// import Vuex from 'vuex'
// Vue.use(Vuex)
// export default new Vuex.Store({

//     state:{
//         trips:[]
//     },
//     mutations:{
//         GET_ALL_TRIPS (state,{trips}){
//             const data = trips.data()
//             state.all={
//                 ...state.all,
//                 [trips.id]:{name:data.name, description:data.description, imagePath:data.imagePath}
//             }
//             state.allIds.push(trips.id)
//         }
//     },
//     actions:{
//         async get({commit,rootState}){
//             let tripsRef = rootState.firestore.collection('trips')
//             let trips = await tripsRef.get()
//             trips.forEach(tripsRef=>{ 'GET_ALL_TRIPS',{trips}})
//         }
//     }
// })