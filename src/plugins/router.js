import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/Landing'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'

const routes= [
    {path:'/', component: Landing},
    {path:'/login', component: LoginForm},
    {path:'/register', component: RegisterForm},
  ]

  Vue.use(VueRouter)

  export default new VueRouter({
      mode:'history',
      routes
  })