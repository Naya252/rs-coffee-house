import path, { resolve } from 'path';

export default {
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    css: {
      devSourcemap: true, // enable CSS source maps during development
    },
    sourcemap: true, // enable production source maps
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu/index.html'),
      },
    },
  },
};
