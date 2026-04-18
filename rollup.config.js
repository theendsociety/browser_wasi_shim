import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { execSync } from 'child_process';

const getShortCommitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    return 'unknown';
  }
};

export default {
  input: 'dist/index.js',
  output: {
    file: `dist/browser-wasi-shim-${getShortCommitHash()}.js`,
    format: 'umd',
    name: 'BrowserWasiShim',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ],
};