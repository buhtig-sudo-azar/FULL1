import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // или '0.0.0.0' - важно, чтобы Vite слушал все интерфейсы
    port: 5173, // Явное указание порта (если ты не менял порт по умолчанию)
    allowedHosts: [
      '*' // Твой serveo-адрес
      // '*' // Альтернатива: разрешить все хосты (менее безопасно, но проще)
    ]
  },
})