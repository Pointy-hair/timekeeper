/* */ 
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var and = require('./and');
var lift = require('./lift');
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : lift(and)(f, g);
});
