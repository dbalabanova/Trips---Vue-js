
import Landing from './components/Landing'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'

export default [
    {path:'/', component: Landing},
    {path:'/login', component: LoginForm},
    {path:'/register', component: RegisterForm},
  ]

  