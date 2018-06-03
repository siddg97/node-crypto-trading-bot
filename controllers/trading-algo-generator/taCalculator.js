var techind = require('technicalindicators');
var tulind = require('tulind');
var talib = require('talib');

function checkVersions() {
    console.log("tulind version: " + tulind.version);
    console.log("talib viersion: " + talib.version);
}

module.exports.checkVersions = checkVersions;
