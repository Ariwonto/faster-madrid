const fetch = require('node-fetch');
const { publish } = require('./iota');
const { debug, serverUrl } = require('./config.json');
const data = require('./sintec.js');


  if (debug) {
    console.log(data);
  } else {
    publish(data); 
  }
