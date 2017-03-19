/* */ 
var _curry1 = require('./internal/_curry1');
var _isString = require('./internal/_isString');
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
