/* */ 
var _assign = require('./internal/_assign');
var _curry2 = require('./internal/_curry2');
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});
