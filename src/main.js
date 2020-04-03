import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'firebase'
 import * as firebase from 'firebase'
// import {config} from './config'
import axiosPlugin from './plugins/axiosPlugin'
import VueFire from 'vuefire/dist/vuefire'

// firebase.initializeApp(config)

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueFire)
Vue.use(axiosPlugin)
let app=''

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app=new Vue({
      render: h => h(App),
      vuetify,
      router
    }).$mount('#app')
  }
})

