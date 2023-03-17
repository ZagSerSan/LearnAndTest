export default {
   input: './index.js',
   output: {
     file: './build/bundle.js',
     format: 'cjs'
   },
   watch: {
      exclude: './node_modules/**'
    }
 };