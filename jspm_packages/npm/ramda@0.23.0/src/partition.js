/* */ 
var filter = require('./filter');
var juxt = require('./juxt');
var reject = require('./reject');
module.exports = juxt([filter, reject]);