import pluginNodeResolve from '@rollup/plugin-node-resolve'
import pluginCommonJs from '@rollup/plugin-commonjs'
import { terser as pluginTerser } from 'rollup-plugin-terser'

const input = 'src/js/Slideshow.js'
const name = 'Slideshow'
const fileName = 'slideshow'
const outDir = 'dist/js'

export default [
  {
    input,
    output: [
      {
        name,
        file: `${outDir}/${fileName}.js`,
        format: 'iife',
        sourcemap: 'inline',
      },
      {
        name,
        file: `${outDir}/${fileName}.min.js`,
        format: 'iife',
        plugin: [
          pluginTerser()
        ],
      },
    ],
  },
  {
    input,
    output: [
      {
        name,
        file: `${outDir}/${fileName}.module.js`,
        format: 'esm',
        sourcemap: 'inline',
      },
    ],
  },
]
