/* */ 
var _arity = require('./internal/_arity');
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});