import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import type { Plugin } from 'vite';

// Plugin: convert render-blocking <link rel="stylesheet"> to async load
function asyncCssPlugin(): Plugin {
  return {
    name: 'async-css',
    apply: 'build',
    transformIndexHtml(html: string) {
      // Find injected CSS link tags and make them load asynchronously
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/style[^"]+\.css)">/g,
        `<link rel="preload" as="style" href="$1" onload="this.rel='stylesheet'"><noscript><link rel="stylesheet" href="$1"></noscript>`
      );
    },
  };
}

// Plugin: redirect /login to /admin
function loginRedirectPlugin(): Plugin {
  return {
    name: 'login-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/login' || req.url === '/login/') {
          res.writeHead(301, { Location: '/admin' });
          res.end();
        } else {
          next();
        }
      });
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    asyncCssPlugin(),
    loginRedirectPlugin(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      },
      '/admin': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
