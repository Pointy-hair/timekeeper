/* */ 
var reduceBy = require('./reduceBy');
module.exports = reduceBy(function(acc, elem) {
  return elem;
}, null);