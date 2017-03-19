/* */ 
var composeK = require('./composeK');
var reverse = require('./reverse');
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};
