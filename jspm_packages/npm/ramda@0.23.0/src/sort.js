/* */ 
var _curry2 = require('./internal/_curry2');
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});