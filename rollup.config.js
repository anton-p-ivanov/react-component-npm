import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import resolve  from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: "dist/cjs/index.js",
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: "dist/esm/index.js",
      format: 'es',
      exports: 'named',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    sass({
      insert: true
    }),
    typescript({
      exclude: ['**/__tests__/**', '**/*.stories.*'],
      clean: true,
    }),
    commonjs({
      include: /node_modules/,
    }),
  ],
  external: ['react', 'react-dom']
}
