/* */ 
var reduceBy = require('./reduceBy');
module.exports = reduceBy(function(acc, elem) {
  return acc + 1;
}, 0);