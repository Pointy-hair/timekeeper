/* */ 
var _curry1 = require('./internal/_curry1');
var converge = require('./converge');
module.exports = _curry1(function juxt(fns) {
  return converge(function() {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
