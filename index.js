const path = require('path');
require('@drifted/env');
var initialize = require(path.join(__dirname, 'initialize'));

initialize(process.env.MONGO_URL).
  catch(console.eror);
