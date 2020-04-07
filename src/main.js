import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.min.css'
 import * as firebase from 'firebase'
// import VueFire from 'vuefire/dist/vuefire'

Vue.config.productionTip = false
Vue.use(Vuelidate)
// Vue.use(VueFire)
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

