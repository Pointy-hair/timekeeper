/* */ 
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var map = require('./map');
module.exports = _curry2(function ap(applicative, fn) {
  return (typeof applicative.ap === 'function' ? applicative.ap(fn) : typeof applicative === 'function' ? function(x) {
    return applicative(x)(fn(x));
  } : _reduce(function(acc, f) {
    return _concat(acc, map(f, fn));
  }, [], applicative));
});
