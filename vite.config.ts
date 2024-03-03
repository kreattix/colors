import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig((configEnv) => ({
  plugins: [
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx,js,jsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/**/*'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'Kreattix Colors',
      formats: ['es', 'cjs'],
      fileName: (format) => `index${format === 'cjs' ? '' : '.' + format}.js`,
    },
    sourcemap: true,
    minify: 'esbuild',
  },
}))
