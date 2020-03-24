import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Landing from './components/Landing.vue'
import LoginForm from './components/LoginForm.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('Footer', Footer)

const routes=[
  {path:'/', component: Landing},
  {path:'/login', component: LoginForm},
]

const router = new VueRouter({routes,mode:"history"})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
