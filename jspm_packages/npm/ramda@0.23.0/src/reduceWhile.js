/* */ 
var _curryN = require('./internal/_curryN');
var _reduce = require('./internal/_reduce');
var _reduced = require('./internal/_reduced');
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});
