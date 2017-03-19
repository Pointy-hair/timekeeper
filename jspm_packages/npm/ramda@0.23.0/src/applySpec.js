/* */ 
var _curry1 = require('./internal/_curry1');
var apply = require('./apply');
var curryN = require('./curryN');
var map = require('./map');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');
var values = require('./values');
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))), function() {
    var args = arguments;
    return map(function(f) {
      return apply(f, args);
    }, spec);
  });
});
