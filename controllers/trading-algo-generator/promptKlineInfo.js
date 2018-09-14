/*
  downloads trading history for a specific coin over a specific timeframe and 
  saves as a JSON file into history.json
*/

const moment = require('moment');
const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


async function promptUserForInfo() {

  var params = {};

  var askSymbol = function() {
    return new Promise((resolve) => {
      rl.question("symbol (eg, BTCUSD or ETHBTC or ICXBTC): ", (answer) => {
        resolve();
        params.symbol = answer;
        console.log("params.symbol = " + params.symbol);
      })
    })
  }

  var askInterval = function() {
    return new Promise((resolve) => {
      rl.question("interval (one of (1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M)): ", function(answer){
        resolve();
        params.interval = answer;
        console.log("params.interval = " + params.interval);
      })
    })
  }

  var askLimit = function() {
    return new Promise((resolve) => {
      rl.question("limit (max 500): ", (answer) => {
        resolve();
        params.limit = answer;
      });
    })
  }

  async function start() {
    await askSymbol();
    await askInterval();
    await askLimit();
    params.startTime = await promptTime("start");
    params.endTime = await promptTime("end");
    await rl.close();
  }

  await console.log("Please enter the requested information to continue with your historical data request.");

  await start();

  return params;

}

function promptTime(type) {
  return new Promise((resolve) => {
    console.log(`Enter ${type} time in the format of Unix timestamp. `);
    var currentDate = new Date();
    var startTime;
    console.log(`eg: ${currentDate.getTime()}`);
    rl.question("", (answer) => {
      startTime = answer;
      resolve(answer);
    })
  })
}

module.exports = promptUserForInfo;
