import { resolve, join } from 'path';
import rollupConfig from './rollup.config';

export default {
  base: './',
  build: {
    cssCodeSplit: true, // false - создаст отдельный файл /css/styles.css, true - вставляет стили в бандл js
    emptyOutDir: true,
    rollupOptions: rollupConfig,
    modulePreload: { polyfill: false },
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: [
      { find: 'app', replacement: resolve(__dirname, 'src/app') },
      { find: 'pages', replacement: resolve(__dirname, 'src/pages') },
      { find: 'widgets', replacement: resolve(__dirname, 'src/widgets') },
      { find: 'features', replacement: resolve(__dirname, 'src/features') },
      { find: 'entities', replacement: resolve(__dirname, 'src/entities') },
      { find: 'shared', replacement: resolve(__dirname, 'src/shared') },
    ],
    extensions: ['.css', '.scss', '.js', '.ts', '.json'],
  },
  css: { devSourcemap: true },
};
