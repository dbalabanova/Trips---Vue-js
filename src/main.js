import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Landing from './components/Landing.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.component('AppHeader', Header)
Vue.component('AppFooter', Footer)

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
