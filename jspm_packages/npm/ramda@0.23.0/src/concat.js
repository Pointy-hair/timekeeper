/* */ 
var _curry2 = require('./internal/_curry2');
var _isArray = require('./internal/_isArray');
var _isFunction = require('./internal/_isFunction');
var toString = require('./toString');
module.exports = _curry2(function concat(a, b) {
  if (a == null || !_isFunction(a.concat)) {
    throw new TypeError(toString(a) + ' does not have a method named "concat"');
  }
  if (_isArray(a) && !_isArray(b)) {
    throw new TypeError(toString(b) + ' is not an array');
  }
  return a.concat(b);
});
