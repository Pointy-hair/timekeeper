/* */ 
var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');
var uniqWith = require('./uniqWith');
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList,
      filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});