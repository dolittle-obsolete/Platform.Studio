const path = require('path');
require('dotenv').config();

process.env.DOLITTLE_WEBPACK_OUT = path.resolve('./build');

const config = require('@dolittle/build.aurelia/webpack.config.js');


module.exports = config;
