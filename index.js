console.log("App Started.");

const mongoose = require('mongoose');
const path = require('path');

const tradingHistory = require('./controllers/trading-algo-generator/tradeHistoryDownloader.js');
const taCalculator = require('./controllers/trading-algo-generator/taCalculator.js');
const taList = require('./controllers/trading-algo-generator/taList.js');

global.appRoot = __dirname;

async function projectProcedure() {
    //get candle line history
    await tradingHistory();

    //check TA library versions
    await taCalculator.checkVersions();

    await taList.logTaLibList();
}

projectProcedure();
