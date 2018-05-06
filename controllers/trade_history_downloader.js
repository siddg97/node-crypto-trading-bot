/*
downloads trading history for a specific coin over a specific timeframe and saves as a JSON file into /history
*/

const binance = require('binance');
const progress = require('progress');
const moment = require('moment');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUserForInfo() {
  console.log("Please enter the requested information to continue with your historical data request.");

  var params = {};

  rl.question("symbol (eg, BTCUSD or ETHBTC or ICXBTC):", (answer) => {
    params.symbol = answer;
  });

  rl.question("interval (one of (1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M)):", (answer) => {
    params.interval = answer;
  });

  rl.question("limit (max 500):", (answer) => {
    params.limit = answer;
  });

  params.startTime = promptTime();

  params.endTime = promptTime();

  console.log("params");
}

function promptTime() {
  console.log("Enter time in the format of Unix timestamp.");
  var currentDate = new Date();
  var startTime;
  console.log(`eg: ${currentDate.getTime()}`);
  rl.question("", (answer) => {
    startTime = answer;
  })
  // console.log("startTime:");
  // var startTime = {};
  // console.log("year:");
  // startTime.year = readline();
  // console.log("month:");
  // startTime.month = readLine();
  // console.log("day:");
  // startTime.day = readLine();
  // console.log("hour:");
  // startTime.hour = readLine();
  // console.log("minute:");
  // startTime.minute = readLine();
  // console.log("second:");
  // startTime.second = readLine();
  // console.log("millisecond:");
  // startTime.millisecond = readLine();
  //
  console.log("time = ");
  console.log(startTime);
  return startTime;
}

module.exports = promptUserForInfo;
