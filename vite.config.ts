import { fileURLToPath, URL } from 'node:url'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
      dts: 'src/components.d.ts',
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/, /\.jsx$/]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
