
// returns an object for the candlestick api request
function getParams() {
  var params = {};

  params.symbol = "ETHBTC";

  params.interval = "1h";

  params.limit = 500;

  // params.startTime = 1522609200;

  params.startTime = 1522540800000;

  params.endTime = 1523627200000;

  return params;
}

module.exports = getParams;
