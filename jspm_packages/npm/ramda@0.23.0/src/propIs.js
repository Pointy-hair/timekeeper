/* */ 
var _curry3 = require('./internal/_curry3');
var is = require('./is');
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});