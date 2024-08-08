import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    dts({
      exclude: ['**/__test__/**']
    })
  ],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: '@kreattix/colors',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return `kreattix-colors.js`
        return `kreattix-colors.${format}.js`
      }
    },
    sourcemap: true,
    minify: 'esbuild'
  }
})
