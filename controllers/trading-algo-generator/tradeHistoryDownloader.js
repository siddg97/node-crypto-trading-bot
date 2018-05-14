const Binance = require('binance-api-node').default
const progress = require('progress');
const prompt = require('./promptKlineInfo');
const fs = require('fs');
const jsonfile = require('jsonfile');
const getParams = require('./getParams')

//ask user for inf

const client = Binance();

//check the connection from Binance
client.time().then(time => console.log(time))


function getCandles() {

  var params = getParams();

  console.log("params = ");
  console.log(params);

  var file = '/home/vinsonly/node-crypto-trading-bot/history-files/history.json'

  var jsonResult;

  client.candles(params)
  .then((result) => {
    console.log(result);
    jsonResult = result;
  })
  .then(() => {
    jsonfile.writeFile(file, jsonResult, {spaces: 2}, (err) => {
      console.log(err);
    })
  })
  .then(()=> {console.log("done")})
  .catch( (error) => {console.log(error)} );

}

module.exports = getCandles;