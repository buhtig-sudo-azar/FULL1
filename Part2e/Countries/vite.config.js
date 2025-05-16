import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "d7f4923d-561c-49fb-9b18-8918ac8ba1dc-00-pvj3jn32njmu.sisko.replit.dev",
      ".replit.dev", // Разрешаем все поддомены replit.dev
      "localhost", // Для локальной разработки (если нужно)
    ],
  },
});
