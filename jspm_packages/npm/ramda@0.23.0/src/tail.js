/* */ 
var _checkForMethod = require('./internal/_checkForMethod');
var _curry1 = require('./internal/_curry1');
var slice = require('./slice');
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));