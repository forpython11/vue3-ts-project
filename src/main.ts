import { createApp } from 'vue'
import './style.css'
// 新增引入
import router from './router/index.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
