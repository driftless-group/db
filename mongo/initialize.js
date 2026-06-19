const mongo = require('mongo');
const path = require('path');


// The mongoose initalizer returns a connection.  This one just 
// returns a new client that can be connected and disconnected 
// and not held open.  I would prefer to have then behave the 
// same way and just return but I'm not sure how to handle the 
// async.  Maybe I could just make both async?  Not ideal.


function initialize(url) {
  if (url == undefined && process.env.MONGO_URL != undefined) {
    url = process.env.MONGO_URL;
  }
  const client = new MongoClient(url);

  return client
}

module.exports = initialize;



