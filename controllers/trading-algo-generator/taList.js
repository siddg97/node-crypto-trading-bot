/*
  The implementations for all the available indicators on the platform
  Available indicators:
    macd
    rsi
    stochRsi
    volume
    ichimokuCloud
*/

const techind = require('technicalindicators');
const tulind = require('tulind');
const talib = require('talib');

function logTulindList() {
  console.log(tulind.indicators);
}

function logTaLibList() {
  for(i in talib.functions) {
    console.log(talib.functions[i].name);
  }
}

function macd() {
  console.log(tulind.indicators.macd);
}

function rsi() {
  console.log(tulind.indicators.rsi);
}

function stochRsi() {
  var stochRsi = talib.functions.find((indicator) => {
    return indicator.name == "STOCHRSI";
  });
  console.log(stochRsi);
}

function volume() {

}



module.exports.logTulindList = logTulindList;
module.exports.logTaLibList = logTaLibList;
module.exports.macd = macd;
module.exports.rsi = rsi;
module.exports.stochRsi = stochRsi;
