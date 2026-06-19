const path = require('path');
var initialize = require(path.join(__dirname, 'mongoose', 'initialize'));

initialize(process.env.MONGO_URL).
  catch(console.eror);
