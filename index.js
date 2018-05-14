console.log("App Started.");

const mongoose = require('mongoose');
const tradingHistory = require('./controllers/trading-algo-generator/tradeHistoryDownloader.js');

tradingHistory();
