const Binance = require('binance-api-node').default
const progress = require('progress');
const prompt = require('./promptKlineInfo');

//ask user for info

 
const client = Binance();
 
client.time().then(time => console.log(time))


var params = {}; 

// prompt().then((result) => params = result).catch((error) => console.log(error));

params.symbol = "ETHBTC";

params.interval = "1h";

params.limit = 500;

// params.startTime = 1522609200;

params.startTime = 1522540800000;

params.endTime = 1522627200000;

console.log("params = ");
console.log(params);


client.candles(params).then( (result) => {console.log(result)}).catch( (error) => {console.log(error)} );


