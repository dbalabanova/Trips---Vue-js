import axios from 'axios'

export default {
    install (Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://trips-d41d1.firebaseio.com',
            headers:{

            }
        })
    }
}