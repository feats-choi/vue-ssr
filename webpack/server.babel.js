import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import baseConfig from './baseConfig.js';
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin';
import { SERVER_DIR, BUILT_DIR } from './baseConfig.js';

export default merge(baseConfig, {
  entry: `${SERVER_DIR}/entry.js`,
  output: {
    path: `${BUILT_DIR}/server`,
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new VueSSRServerPlugin({
      filename: 'index.json'
    })
  ]
})
