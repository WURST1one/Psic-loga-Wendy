import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Garantir que os imports absolutos funcionem corretamente
      '@': '/src',
    },
  },
  server: {
    // Configurar o servidor de desenvolvimento
    port: 5173,
    open: true, // Abrir o navegador automaticamente
  },
});