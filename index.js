// Imports
const binance = require('node-binance-api');
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
var path = require("path");

/*
 * Class user 
 * stores api key, api secret, and tradecap 
 * TODO add binance reference with Buy/Sell methods
 */

class user {

    // PARAM: API key for binance
    // PARAM: API secret for binance
    // PARAM: trade cap for trading
    constructor(apikey, apisecret, tradecap) {
        this.apikey = apikey;
        this.apisecret = apisecret;
        this.BTCtradecap = tradecap
        console.log(this);
        binance.options({
            APIKEY: this.apikey,
            APISECRET: this.apisecret,
            useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
            test: true // If you want to use sandbox mode where orders are simulated
        });
    }

    // Returns price of BTC in USD in the console
    getBTC() {
        binance.prices((error, ticker) => {
            console.log("Price of BTC: ", ticker.BTCUSDT);
        });
    }
}

/*
 * Controller functions
 */
// GET request for /index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

// POST request for /index.html
// PARAMS: api key, api secret, tradecap
app.post('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
        let newuser = new user(req.body.uname, req.body.psw, req.body.tradecap);
        newuser.getBTC();

    })
    // Start application on localhost:3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))