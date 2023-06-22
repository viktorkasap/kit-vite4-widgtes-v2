import { resolve, join } from 'path';
import rollupConfig from './rollup.config';

const isProdMode = process.env.NODE_ENV === 'production';

export default {
    base: './',
    server: {
        // host: true,
        // strictPort: true,
        // watch: { usePolling: true },
    },
    build: {
        cssCodeSplit: true, // false - создаст отдельный файл /css/styles.css, true - вставляет стили в бандл js
        emptyOutDir: true,
        minify: isProdMode,
        sourcemap: !isProdMode,
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
            { find: 'entities', replacement: resolve(__dirname, 'src/entities')},
            { find: 'shared', replacement: resolve(__dirname, 'src/shared')},
        ],
        extensions: ['.css', '.scss', '.js', '.ts', '.json'],
    },
    css: { devSourcemap: true },
}


