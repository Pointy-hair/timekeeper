/* */ 
var _curryN = require('./internal/_curryN');
var _dispatchable = require('./internal/_dispatchable');
var _has = require('./internal/_has');
var _reduce = require('./internal/_reduce');
var _xreduceBy = require('./internal/_xreduceBy');
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
  return _reduce(function(acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));