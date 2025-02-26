/*
 * @Date: 2024-04-16 16:05:26
 * @LastEditors: cproud1212 2411807384@qq.com
 * @LastEditTime: 2024-08-23 18:23:45
 * @FilePath: \vue3-ts-project\vite.config.ts
 * @Description: cxx
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from "path"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
//引入插件
import AutoImport from 'unplugin-auto-import/vite';
export default defineConfig({
  plugins: [
    vue(),
    //配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  //设置api代理
  server: {
    proxy: {
      '/api': 'http://***' // 替换成你的域名
    }
  }
});
