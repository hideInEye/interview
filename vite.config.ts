import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import myPlugin from './plugins'
import vitePluginTransformFilterCssModule from 'vite-plugin-filter-css-moudle';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginTransformFilterCssModule([
      {
        test: /\.less$/i,
        modules: {
          generateScopedName: '[path]___[local]___[hash:base64:5]',
        },
      }
    ])
  ],
  server: {
    host: '127.0.0.1',
    port: 8888,
    strictPort: true,
    open: true,
    hmr: true,
    proxy: {
      '/web': {
        target: 'http://39.99.234.158:10088',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
