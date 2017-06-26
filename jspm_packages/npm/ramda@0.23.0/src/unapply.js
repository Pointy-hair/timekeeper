/* */ 
var _curry1 = require('./internal/_curry1');
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});