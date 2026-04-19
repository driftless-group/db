var { createClient } = require('redis');

function initialize(options={}) {
  if (options.url == undefined) {
    options.url = 'redis://localhost:6379';
  }

  const client = createClient(options);
  client.on('error', (err) => console.error('Redis Client Error', err));

  return client;
}

module.exports = initialize;
