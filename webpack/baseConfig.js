import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ROOT_DIR = '../';
const CLIENT_DIR = path.resolve(ROOT_DIR, 'client');
const SERVER_DIR = path.resolve(ROOT_DIR, 'server');
const SHARED_DIR = path.resolve(ROOT_DIR, 'shared');
const BUILT_DIR = path.resolve(ROOT_DIR, 'built');

export default {
  context: ROOT_DIR,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'json', '.vue'],
    alias: {
      client: CLIENT_DIR,
      server: SERVER_DIR,
      shared: SHARED_DIR,
      built: BUILT_DIR
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
      minChunks: function(module){
        return /node_modules/.test(module.context) && !/\.css$/.test(module.request)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css'
    })
  ]
}