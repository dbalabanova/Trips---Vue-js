import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Landing from './components/Landing.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('AppHeader', Header)
Vue.component('AppFooter', Footer)

const firebaseConfig = {
  apiKey: "AIzaSyAnYE27q-S8CkE-y5aL7h9RjtT12C43_74",
  authDomain: "trips-d41d1.firebaseapp.com",
  databaseURL: "https://trips-d41d1.firebaseio.com",
  projectId: "trips-d41d1",
  storageBucket: "trips-d41d1.appspot.com",
  messagingSenderId: "1007606651333",
  appId: "1:1007606651333:web:ac617da1087668eefb53ac"
}

firebase.initializeApp(firebaseConfig)

const routes=[
  {path:'/', component: Landing},
  {path:'/login', component: LoginForm},
  {path:'/register', component: RegisterForm},
]

const router = new VueRouter({routes,mode:"history"})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
