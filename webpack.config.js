const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolveLoader: {
    fallback: [
      path.resolve(__dirname, 'loaders'),
      path.join(process.cwd(), 'node_modules')
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
   new Dotenv({
     path: './.env',
     safe: false
   })
 ]
};
