import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true },
  resolve: {
    //设置路径别
    alias: {
      '@': resolve(__dirname, 'src/'),
      'views/*': resolve(__dirname, 'src/views'),
      'pages/*': resolve(__dirname, 'src/pages'),
      '@icons': resolve(__dirname, 'src/assets/svg/'),
      'components/*': resolve(__dirname, 'src/components'),
      '*': resolve('')
    }
  }
})
