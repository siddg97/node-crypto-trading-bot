const mongoose = require('mongoose');
const path = require('path');

const tradingHistory = require('./controllers/trading-algo-generator/tradeHistoryDownloader.js');
const taCalculator = require('./controllers/trading-algo-generator/taCalculator.js');
const taList = require('./controllers/trading-algo-generator/taList.js');

global.appRoot = require('app-root-path');


function projectProcedure() {
    //get candle line history
    console.log("Running trading bot.");
    tradingHistory();

    //check TA library versions
    taCalculator.checkVersions();

    taCalculator.taCalculator();

}

projectProcedure();
