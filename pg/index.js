const path = require('path');
require('@drifted/env');
var initialize = require(path.join(__dirname, 'initialize'));
var pool = initialize(process.env.POSTGRES_URL);

module.exports = pool;
