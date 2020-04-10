import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.min.css'
 import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Vuelidate)
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

