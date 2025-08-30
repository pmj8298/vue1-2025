import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tf from '@tensorflow/tfjs'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.config.globalProperties.$tf = tf
