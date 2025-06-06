import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(() => {
  const BASE_URL_FOR_VITE = process.env.VITE_APP_BASE_URL;

  return {
    plugins: [react(), tailwindcss()],
    base: BASE_URL_FOR_VITE,
  };
});
