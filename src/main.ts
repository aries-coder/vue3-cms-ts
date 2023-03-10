import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setStore } from './store'

import 'normalize.css'
import './assets/css/index.less'

import { registerApp } from './global/index'
// import alRequest from './service/index'

const app = createApp(App)
registerApp(app)

app.use(store)
setStore()
app.use(router)
app.mount('#app')

// alRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
