const Binance = require('binance-api-node').default
const progress = require('progress');
const prompt = require('./promptKlineInfo');
const fs = require('fs');
const jsonfile = require('jsonfile');
const getParams = require('./getParams')

const client = Binance();

//check the connection from Binance
client.time().then(
  (time) => { 
    if(time != null) {
      console.log("Connected to Binance.");
    }
    else {
      console.log("Failed to connect to Binance.");
    }
  }
) 


function getCandles() {

  var params = getParams();

  // console.log("params = ");
  // console.log(params);

  var file = appRoot + '/history-files/history.json';

  var jsonResult;

  client.candles(params)
  .then((result) => {
    console.log("Received results from request.");
    jsonResult = result;
  })
  .then(() => {
    jsonfile.writeFile(file, jsonResult, {spaces: 2}, (err) => {
      console.log(err);
    })
  })
  .then(()=> {console.log("Done.")})
  .catch( (error) => {console.log(error)} );

}

module.exports = getCandles;
