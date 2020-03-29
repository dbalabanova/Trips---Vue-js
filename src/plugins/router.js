import Vue from 'vue'
import VueRouter from 'vue-router'



import Landing from '../components/Landing'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import TripsList from '../components/trips/TripsList'
import TripCreate from '../components/trips/TripCreate'
// import TripDetails from '../components/trips/TripDetails'

const routes= [
    {path:'/', component: Landing},
    {path:'/login', component: LoginForm},
    {path:'/register', component: RegisterForm},
    {path:'/trips-list', component: TripsList},
    {path:'/trip-create', component: TripCreate},
    
  ]

  Vue.use(VueRouter)



  export default new VueRouter({
      mode:'history',
      routes
  })