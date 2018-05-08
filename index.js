console.log("App Started.");

const mongoose = require('mongoose');
const tradingHistory = require('./controllers/trade_history_downloader.js');


tradingHistory().then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})




