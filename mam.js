const { publish } = require('./iota');
const { debug, serverUrl } = require('./config.json');
const data = require('./data.json');


  if (debug) {
    console.log(data);
  } else {
    publish(data); 
  }
