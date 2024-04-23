import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from "path"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
    }),
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
