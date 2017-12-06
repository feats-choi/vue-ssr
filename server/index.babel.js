require('babel-register')({ignore: /\/(build|node_modules)\//});
require('babel-polyfill');

require('./serverStart.js');