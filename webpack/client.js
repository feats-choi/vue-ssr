import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './baseConfig.js';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';
import { CLIENT_DIR, BUILT_DIR } from './baseConfig.js';

export default merge(baseConfig, {
  entry: `${CLIENT_DIR}/entry.js`,
  output: {
    path: `${BUILT_DIR}/client`,
    filename: `[name].[hash].js`
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})
