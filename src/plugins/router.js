import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import 'firebase/auth'


import Landing from '../components/Landing'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import TripsList from '../components/trips/TripsList'
import TripCreate from '../components/trips/TripCreate'
import TripDetails from '../components/trips/TripDetails'
import TripEdit from '../components/trips/TripEdit'
import TripsUser from '../components/trips/TripsUser'

function authGuard(to,from,next){
if(!firebase.auth().currentUser){
    next('/login')
} else{
    next()
}
}

const routes= [
    {path:'/', component: Landing},
    {path:'/login', component: LoginForm},
    {path:'/register', component: RegisterForm},
    {path:'/trips-list', component: TripsList, beforeEnter:authGuard},
    {path:'/trip-create', component: TripCreate, beforeEnter:authGuard},
    {path:'/trips-user', component: TripsUser, beforeEnter:authGuard},
    {path:'/trip-edit/:id', name:'tripEdit', component: TripEdit, beforeEnter:authGuard},
    {path:'/trip-details/:id', name:'tripDetails',component: TripDetails, beforeEnter:authGuard},
    {path:'*',component: LoginForm},
      ]

  Vue.use(VueRouter)

  export default new VueRouter({
      mode:'history',
      routes
  })