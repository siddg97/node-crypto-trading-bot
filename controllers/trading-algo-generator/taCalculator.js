var techind = require('technicalindicators');
var tulind = require('tulind');

function checkVersions() {
    console.log("tulind version: " + tulind.version);
}

module.exports.checkVersions = checkVersions;

