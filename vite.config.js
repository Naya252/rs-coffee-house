import path, { resolve } from 'path';

export default {
  base: 'https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house/',
  plugins: [],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[local]',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    outDir: './coffee-house3',
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
