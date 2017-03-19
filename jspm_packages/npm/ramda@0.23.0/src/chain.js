/* */ 
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _makeFlat = require('./internal/_makeFlat');
var _xchain = require('./internal/_xchain');
var map = require('./map');
module.exports = _curry2(_dispatchable(['chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map(fn, monad));
}));
