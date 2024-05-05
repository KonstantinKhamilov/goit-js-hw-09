import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/goit-js-hw-09/',

    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: [].concat(
          glob.sync('./src/index.html'),
          glob.sync('./src/1-gallery.html'),
          glob.sync('./src/2-form.html')
        ),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: './dist',
    },
    plugins: [injectHTML(), FullReload(['./*.html'])],
  };
});
