/* */ 
var curry = require('./curry');
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
