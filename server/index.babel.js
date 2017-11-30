require('babel-register')({ignore: /\/(built|node_modules)\//});
require('babel-polyfill');

require('./serverStart.js');