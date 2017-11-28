import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './baseConfig.js';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';

export default merge(baseConfig, {
  entry: './client/entry.js',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})
