import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// 设置别名
const alias: Record<string, string> = {
  "@": pathResolve("src")
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/styles/var.less";' // 让全局less 变量生效
      },
    },
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/valve': {
        target: 'http://pop.cc.test.plat.ge.cn/api/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
      '/valve': {
        target: 'http://pop.cc.test.plat.ge.cn/api/',
        changeOrigin: true,
        // rewrite: (p) => p.replace(/^\/value/,'/api/value')
      },
      '/api/': {
        target: 'http://192.168.27.77:5083/api/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias
  }
})
