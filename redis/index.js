const path = require('path');

if (process.env.REDIS_URL == undefined) {
  require('@drifted/env');
}
var initialize = require(path.join(__dirname, 'initialize'));


var client = initialize({url: process.env.REDIS_URL});

async function connect() {
  await client.connect();
}
connect();

module.exports = client
