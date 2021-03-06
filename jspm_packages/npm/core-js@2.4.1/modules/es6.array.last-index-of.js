/* */ 
'use strict';
var $export = require('./_export'),
    toIObject = require('./_to-iobject'),
    toInteger = require('./_to-integer'),
    toLength = require('./_to-length'),
    $native = [].lastIndexOf,
    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {lastIndexOf: function lastIndexOf(searchElement) {
    if (NEGATIVE_ZERO)
      return $native.apply(this, arguments) || 0;
    var O = toIObject(this),
        length = toLength(O.length),
        index = length - 1;
    if (arguments.length > 1)
      index = Math.min(index, toInteger(arguments[1]));
    if (index < 0)
      index = length + index;
    for (; index >= 0; index--)
      if (index in O)
        if (O[index] === searchElement)
          return index || 0;
    return -1;
  }});
