/*
  Calculates technical indicators and saves the results into a file.
*/

var techind = require('technicalindicators');
var tulind = require('tulind');
var talib = require('talib');

function checkVersions() {
    console.log("tulind version: " + tulind.version);
    console.log("talib viersion: " + talib.version);
}
/*
paramaters:
  taInds (String Array) - Array of the names of of the technical indicators to calculate
  
*/
function taCalculator() {

}



module.exports.checkVersions = checkVersions;
