/* */ 
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');
var reduceBy = require('./reduceBy');
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
