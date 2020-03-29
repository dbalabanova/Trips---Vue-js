import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase'
import {firebaseConfig} from './config'
import axiosPlugin from './plugins/axiosPlugin'

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(axiosPlugin)

Vue.component('AppHeader', Header)
Vue.component('AppFooter', Footer)



firebase.initializeApp(firebaseConfig)


new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
