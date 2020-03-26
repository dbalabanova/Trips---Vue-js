import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase'
import routes from './routes.js'

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

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



const router = new VueRouter({routes,mode:"history"})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
