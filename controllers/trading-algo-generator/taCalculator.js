/*
  Calculates technical indicators and saves the results into a file.
*/

var techind = require('technicalindicators');
var tulind = require('tulind');
var talib = require('talib');
var appRoot = require('app-root-path');
var taList = require('./taList');

var history = require(appRoot + '/history-files/history.json');

function checkVersions() {
    console.log("tulind version: " + tulind.version);
    console.log("talib viersion: " + talib.version);
}

/*
paramaters:
  taInds (String Array) - Array of the names of of the technical indicators to calculate
*/
function taCalculator() {

  // console.log(tulind.indicators.rsi);
  // console.log(tulind.indicators.macd);
  // console.log(tulind.indicators.stoch);

  console.log("length", history.length);
  
  // build marketdata for talib
  let marketData = {
    open: [],
    close: [],
    high: [],
    low: [],
    volume: []
  }

  for(var i = 0; i < history.length; i++) {
    let h = history[i];
    pushToArray(marketData.open, h.open);
    pushToArray(marketData.close, h.close);
    pushToArray(marketData.high, h.high);
    pushToArray(marketData.low, h.low);
    pushToArray(marketData.volume, h.volume);
  }

  // for(key in marketData) {
  //   console.log(marketData[key]);
  // }

  // calculate rsi
  tulind.indicators.rsi.indicator([marketData.close], [14], function(err, res) {
    console.log("rsi results: ", res);
    getStochRsi(res[0]);
  })

  // calculate macd
  tulind.indicators.macd.indicator([marketData.close], [12,26,9], function(err, res) {
    console.log("macd results: ", res);
  })
}

function getStochRsi(rsiHistory) {
  // calculate stochrsi
  let stochRsi = [];
  let stochRsiPeriod = 14;
  for(var i = stochRsiPeriod - 1; i <= stochRsiPeriod + 5; i++) {
    stochRsi.push(calcSingleStochRsi1(rsiHistory, stochRsiPeriod, i));
  }
  console.log("stochRsi: ", stochRsi);
}

function calcSingleStochRsi1(rsiHistory, period, current) {
  let max = 0;
  let min = 100;
  let start = current - period;
  for(var i = start; i < start + current; i++) {
    if(rsiHistory[i] > max) {
      max = rsiHistory[i];
    }  
    if(rsiHistory[i] < min) {
      min = rsiHistory[i];
    }
  }

  console.log("max", max);
  console.log("min", min);
  console.log("rsi", rsiHistory[current]);
  console.log();

  return calcSingleStochRsi2(rsiHistory[current], max, min);
}

/*
 * Calculates the stochRSI, given the 14 day RSI, max of the 14 day rsi and min of the 14 day rsi
*/
function calcSingleStochRsi2(rsi, hRsi, lRsi) {
  return (rsi - lRsi) / (hRsi - lRsi);
}

function pushToArray(array, value) {
  array.push(value);
}

module.exports = {
  checkVersions,
  taCalculator
}
