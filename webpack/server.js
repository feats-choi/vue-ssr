import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import baseConfig from './baseConfig.js';
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin';

export default merge(baseConfig, {
  entry: './server/entry.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})