/* */ 
var _curry1 = require('./internal/_curry1');
var _isNumber = require('./internal/_isNumber');
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});