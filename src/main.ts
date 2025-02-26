/*
 * @Date: 2024-04-16 16:05:26
 * @LastEditors: cproud1212 2411807384@qq.com
 * @LastEditTime: 2024-08-23 18:26:35
 * @FilePath: \vue3-ts-project\src\main.ts
 * @Description: cxx
 */
import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 新增引入
import router from './router/index.js'
import App from './App.vue'
const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app')
