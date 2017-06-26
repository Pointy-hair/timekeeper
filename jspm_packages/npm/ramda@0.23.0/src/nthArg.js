/* */ 
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var nth = require('./nth');
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});