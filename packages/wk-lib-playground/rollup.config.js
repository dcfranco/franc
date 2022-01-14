import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
// import autoprefixer from 'autoprefixer';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const path = require('path')

const packageJson = require('./package.json');
const projectRootDir = path.resolve(__dirname);
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['classnames', 'lodash.debounce', 'react-datepicker', 'react-redux', '@reduxjs/toolkit', '@reduxjs/toolkit/query/react', 'react-fast-compare'],
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: './tsconfig.tmp.json',
        exclude: [
          '**/__tests__',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.tsx',
        ],
      }),
      postcss({
        sourceMap: true,
        modules: true,
        // plugins: [autoprefixer()],
        // extract: true,
        // minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      resolve(),
      commonjs(),
      terser(),
      alias({
        entries: [
          { find: 'components', replacement: path.resolve(projectRootDir, 'src', 'components') },
          { find: 'constants', replacement: path.resolve(projectRootDir, 'src', 'constants') },
          { find: 'hooks', replacement: path.resolve(projectRootDir, 'src', 'hooks') },
          { find: 'interfaces', replacement: path.resolve(projectRootDir, 'src', 'interfaces') },
          { find: 'models', replacement: path.resolve(projectRootDir, 'src', 'models') },
          { find: 'pages', replacement: path.resolve(projectRootDir, 'src', 'pages') },
          { find: 'services', replacement: path.resolve(projectRootDir, 'src', 'services') },
          { find: 'shared', replacement: path.resolve(projectRootDir, 'src', 'shared') },
          { find: 'core', replacement: path.resolve(projectRootDir, 'src', 'core') }
        ]
      })
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts(),
      alias({
        entries: [
          { find: 'components', replacement: path.resolve(projectRootDir, 'src', 'components') },
          { find: 'constants', replacement: path.resolve(projectRootDir, 'src', 'constants') },
          { find: 'hooks', replacement: path.resolve(projectRootDir, 'src', 'hooks') },
          { find: 'interfaces', replacement: path.resolve(projectRootDir, 'src', 'interfaces') },
          { find: 'models', replacement: path.resolve(projectRootDir, 'src', 'models') },
          { find: 'pages', replacement: path.resolve(projectRootDir, 'src', 'pages') },
          { find: 'services', replacement: path.resolve(projectRootDir, 'src', 'services') },
          { find: 'shared', replacement: path.resolve(projectRootDir, 'src', 'shared') },
          { find: 'core', replacement: path.resolve(projectRootDir, 'src', 'core') }
        ]
      })],
    external: [/\.(module\.css|css|less|scss)$/, 'classnames', 'lodash.debounce', 'react-datepicker', 'react-redux' , '@reduxjs/toolkit', '@reduxjs/toolkit/query/react', 'react-fast-compare'],
    resolve: {
      
    }
  }
];
