import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ROOT_DIR = path.resolve(__dirname, '..');
const NODE_MODULES = path.resolve(ROOT_DIR, 'node_modules');
export const CLIENT_DIR = path.resolve(ROOT_DIR, 'client');
export const SERVER_DIR = path.resolve(ROOT_DIR, 'server');
export const SHARED_DIR = path.resolve(ROOT_DIR, 'shared');
export const BUILT_DIR = path.resolve(ROOT_DIR, 'build');

export default {
  context: ROOT_DIR,
  output: {
    filename: `[name].[hash].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          NODE_MODULES
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      client: CLIENT_DIR,
      server: SERVER_DIR,
      shared: SHARED_DIR,
      built: BUILT_DIR
    }
  }
}