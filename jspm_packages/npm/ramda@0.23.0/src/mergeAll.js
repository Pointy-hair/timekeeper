/* */ 
var _assign = require('./internal/_assign');
var _curry1 = require('./internal/_curry1');
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});