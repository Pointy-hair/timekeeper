/* */ 
"format cjs";
(function(process) {
  (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a)
            return a(o, !0);
          if (i)
            return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = {exports: {}};
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
      s(r[o]);
    return s;
  })({
    1: [function(require, module, exports) {
      ;
      (function() {
        'use strict';
        var __ = {'@@functional/placeholder': true};
        var _arity = function _arity(n, fn) {
          switch (n) {
            case 0:
              return function() {
                return fn.apply(this, arguments);
              };
            case 1:
              return function(a0) {
                return fn.apply(this, arguments);
              };
            case 2:
              return function(a0, a1) {
                return fn.apply(this, arguments);
              };
            case 3:
              return function(a0, a1, a2) {
                return fn.apply(this, arguments);
              };
            case 4:
              return function(a0, a1, a2, a3) {
                return fn.apply(this, arguments);
              };
            case 5:
              return function(a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
              };
            case 6:
              return function(a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
              };
            case 7:
              return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
              };
            case 8:
              return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
              };
            case 9:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
              };
            case 10:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
              };
            default:
              throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
          }
        };
        var _arrayFromIterator = function _arrayFromIterator(iter) {
          var list = [];
          var next;
          while (!(next = iter.next()).done) {
            list.push(next.value);
          }
          return list;
        };
        var _arrayOf = function _arrayOf() {
          return Array.prototype.slice.call(arguments);
        };
        var _cloneRegExp = function _cloneRegExp(pattern) {
          return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
        };
        var _complement = function _complement(f) {
          return function() {
            return !f.apply(this, arguments);
          };
        };
        var _concat = function _concat(set1, set2) {
          set1 = set1 || [];
          set2 = set2 || [];
          var idx;
          var len1 = set1.length;
          var len2 = set2.length;
          var result = [];
          idx = 0;
          while (idx < len1) {
            result[result.length] = set1[idx];
            idx += 1;
          }
          idx = 0;
          while (idx < len2) {
            result[result.length] = set2[idx];
            idx += 1;
          }
          return result;
        };
        var _containsWith = function _containsWith(pred, x, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (pred(x, list[idx])) {
              return true;
            }
            idx += 1;
          }
          return false;
        };
        var _filter = function _filter(fn, list) {
          var idx = 0;
          var len = list.length;
          var result = [];
          while (idx < len) {
            if (fn(list[idx])) {
              result[result.length] = list[idx];
            }
            idx += 1;
          }
          return result;
        };
        var _forceReduced = function _forceReduced(x) {
          return {
            '@@transducer/value': x,
            '@@transducer/reduced': true
          };
        };
        var _functionName = function _functionName(f) {
          var match = String(f).match(/^function (\w*)/);
          return match == null ? '' : match[1];
        };
        var _has = function _has(prop, obj) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        var _identity = function _identity(x) {
          return x;
        };
        var _isArguments = function() {
          var toString = Object.prototype.toString;
          return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
            return toString.call(x) === '[object Arguments]';
          } : function _isArguments(x) {
            return _has('callee', x);
          };
        }();
        var _isArray = Array.isArray || function _isArray(val) {
          return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
        };
        var _isFunction = function _isFunction(x) {
          return Object.prototype.toString.call(x) === '[object Function]';
        };
        var _isInteger = Number.isInteger || function _isInteger(n) {
          return n << 0 === n;
        };
        var _isNumber = function _isNumber(x) {
          return Object.prototype.toString.call(x) === '[object Number]';
        };
        var _isObject = function _isObject(x) {
          return Object.prototype.toString.call(x) === '[object Object]';
        };
        var _isPlaceholder = function _isPlaceholder(a) {
          return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
        };
        var _isRegExp = function _isRegExp(x) {
          return Object.prototype.toString.call(x) === '[object RegExp]';
        };
        var _isString = function _isString(x) {
          return Object.prototype.toString.call(x) === '[object String]';
        };
        var _isTransformer = function _isTransformer(obj) {
          return typeof obj['@@transducer/step'] === 'function';
        };
        var _map = function _map(fn, functor) {
          var idx = 0;
          var len = functor.length;
          var result = Array(len);
          while (idx < len) {
            result[idx] = fn(functor[idx]);
            idx += 1;
          }
          return result;
        };
        var _objectAssign = function _objectAssign(target) {
          if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }
          var output = Object(target);
          var idx = 1;
          var length = arguments.length;
          while (idx < length) {
            var source = arguments[idx];
            if (source != null) {
              for (var nextKey in source) {
                if (_has(nextKey, source)) {
                  output[nextKey] = source[nextKey];
                }
              }
            }
            idx += 1;
          }
          return output;
        };
        var _of = function _of(x) {
          return [x];
        };
        var _pipe = function _pipe(f, g) {
          return function() {
            return g.call(this, f.apply(this, arguments));
          };
        };
        var _pipeP = function _pipeP(f, g) {
          return function() {
            var ctx = this;
            return f.apply(ctx, arguments).then(function(x) {
              return g.call(ctx, x);
            });
          };
        };
        var _quote = function _quote(s) {
          var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b').replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
          return '"' + escaped.replace(/"/g, '\\"') + '"';
        };
        var _reduced = function _reduced(x) {
          return x && x['@@transducer/reduced'] ? x : {
            '@@transducer/value': x,
            '@@transducer/reduced': true
          };
        };
        var _slice = function _slice(args, from, to) {
          switch (arguments.length) {
            case 1:
              return _slice(args, 0, args.length);
            case 2:
              return _slice(args, from, args.length);
            default:
              var list = [];
              var idx = 0;
              var len = Math.max(0, Math.min(args.length, to) - from);
              while (idx < len) {
                list[idx] = args[from + idx];
                idx += 1;
              }
              return list;
          }
        };
        var _toISOString = function() {
          var pad = function pad(n) {
            return (n < 10 ? '0' : '') + n;
          };
          return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
            return d.toISOString();
          } : function _toISOString(d) {
            return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
          };
        }();
        var _xfBase = {
          init: function() {
            return this.xf['@@transducer/init']();
          },
          result: function(result) {
            return this.xf['@@transducer/result'](result);
          }
        };
        var _xwrap = function() {
          function XWrap(fn) {
            this.f = fn;
          }
          XWrap.prototype['@@transducer/init'] = function() {
            throw new Error('init not implemented on XWrap');
          };
          XWrap.prototype['@@transducer/result'] = function(acc) {
            return acc;
          };
          XWrap.prototype['@@transducer/step'] = function(acc, x) {
            return this.f(acc, x);
          };
          return function _xwrap(fn) {
            return new XWrap(fn);
          };
        }();
        var _aperture = function _aperture(n, list) {
          var idx = 0;
          var limit = list.length - (n - 1);
          var acc = new Array(limit >= 0 ? limit : 0);
          while (idx < limit) {
            acc[idx] = _slice(list, idx, idx + n);
            idx += 1;
          }
          return acc;
        };
        var _assign = typeof Object.assign === 'function' ? Object.assign : _objectAssign;
        var _checkForMethod = function _checkForMethod(methodname, fn) {
          return function() {
            var length = arguments.length;
            if (length === 0) {
              return fn();
            }
            var obj = arguments[length - 1];
            return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
          };
        };
        var _curry1 = function _curry1(fn) {
          return function f1(a) {
            if (arguments.length === 0 || _isPlaceholder(a)) {
              return f1;
            } else {
              return fn.apply(this, arguments);
            }
          };
        };
        var _curry2 = function _curry2(fn) {
          return function f2(a, b) {
            switch (arguments.length) {
              case 0:
                return f2;
              case 1:
                return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
                  return fn(a, _b);
                });
              default:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
                  return fn(_a, b);
                }) : _isPlaceholder(b) ? _curry1(function(_b) {
                  return fn(a, _b);
                }) : fn(a, b);
            }
          };
        };
        var _curry3 = function _curry3(fn) {
          return function f3(a, b, c) {
            switch (arguments.length) {
              case 0:
                return f3;
              case 1:
                return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
                  return fn(a, _b, _c);
                });
              case 2:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
                  return fn(_a, b, _c);
                }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
                  return fn(a, _b, _c);
                }) : _curry1(function(_c) {
                  return fn(a, b, _c);
                });
              default:
                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
                  return fn(_a, _b, c);
                }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
                  return fn(_a, b, _c);
                }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
                  return fn(a, _b, _c);
                }) : _isPlaceholder(a) ? _curry1(function(_a) {
                  return fn(_a, b, c);
                }) : _isPlaceholder(b) ? _curry1(function(_b) {
                  return fn(a, _b, c);
                }) : _isPlaceholder(c) ? _curry1(function(_c) {
                  return fn(a, b, _c);
                }) : fn(a, b, c);
            }
          };
        };
        var _curryN = function _curryN(length, received, fn) {
          return function() {
            var combined = [];
            var argsIdx = 0;
            var left = length;
            var combinedIdx = 0;
            while (combinedIdx < received.length || argsIdx < arguments.length) {
              var result;
              if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
                result = received[combinedIdx];
              } else {
                result = arguments[argsIdx];
                argsIdx += 1;
              }
              combined[combinedIdx] = result;
              if (!_isPlaceholder(result)) {
                left -= 1;
              }
              combinedIdx += 1;
            }
            return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
          };
        };
        var _dispatchable = function _dispatchable(methodname, xf, fn) {
          return function() {
            var length = arguments.length;
            if (length === 0) {
              return fn();
            }
            var obj = arguments[length - 1];
            if (!_isArray(obj)) {
              var args = _slice(arguments, 0, length - 1);
              if (typeof obj[methodname] === 'function') {
                return obj[methodname].apply(obj, args);
              }
              if (_isTransformer(obj)) {
                var transducer = xf.apply(null, args);
                return transducer(obj);
              }
            }
            return fn.apply(this, arguments);
          };
        };
        var _dropLastWhile = function dropLastWhile(pred, list) {
          var idx = list.length - 1;
          while (idx >= 0 && pred(list[idx])) {
            idx -= 1;
          }
          return _slice(list, 0, idx + 1);
        };
        var _xall = function() {
          function XAll(f, xf) {
            this.xf = xf;
            this.f = f;
            this.all = true;
          }
          XAll.prototype['@@transducer/init'] = _xfBase.init;
          XAll.prototype['@@transducer/result'] = function(result) {
            if (this.all) {
              result = this.xf['@@transducer/step'](result, true);
            }
            return this.xf['@@transducer/result'](result);
          };
          XAll.prototype['@@transducer/step'] = function(result, input) {
            if (!this.f(input)) {
              this.all = false;
              result = _reduced(this.xf['@@transducer/step'](result, false));
            }
            return result;
          };
          return _curry2(function _xall(f, xf) {
            return new XAll(f, xf);
          });
        }();
        var _xany = function() {
          function XAny(f, xf) {
            this.xf = xf;
            this.f = f;
            this.any = false;
          }
          XAny.prototype['@@transducer/init'] = _xfBase.init;
          XAny.prototype['@@transducer/result'] = function(result) {
            if (!this.any) {
              result = this.xf['@@transducer/step'](result, false);
            }
            return this.xf['@@transducer/result'](result);
          };
          XAny.prototype['@@transducer/step'] = function(result, input) {
            if (this.f(input)) {
              this.any = true;
              result = _reduced(this.xf['@@transducer/step'](result, true));
            }
            return result;
          };
          return _curry2(function _xany(f, xf) {
            return new XAny(f, xf);
          });
        }();
        var _xaperture = function() {
          function XAperture(n, xf) {
            this.xf = xf;
            this.pos = 0;
            this.full = false;
            this.acc = new Array(n);
          }
          XAperture.prototype['@@transducer/init'] = _xfBase.init;
          XAperture.prototype['@@transducer/result'] = function(result) {
            this.acc = null;
            return this.xf['@@transducer/result'](result);
          };
          XAperture.prototype['@@transducer/step'] = function(result, input) {
            this.store(input);
            return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
          };
          XAperture.prototype.store = function(input) {
            this.acc[this.pos] = input;
            this.pos += 1;
            if (this.pos === this.acc.length) {
              this.pos = 0;
              this.full = true;
            }
          };
          XAperture.prototype.getCopy = function() {
            return _concat(_slice(this.acc, this.pos), _slice(this.acc, 0, this.pos));
          };
          return _curry2(function _xaperture(n, xf) {
            return new XAperture(n, xf);
          });
        }();
        var _xdrop = function() {
          function XDrop(n, xf) {
            this.xf = xf;
            this.n = n;
          }
          XDrop.prototype['@@transducer/init'] = _xfBase.init;
          XDrop.prototype['@@transducer/result'] = _xfBase.result;
          XDrop.prototype['@@transducer/step'] = function(result, input) {
            if (this.n > 0) {
              this.n -= 1;
              return result;
            }
            return this.xf['@@transducer/step'](result, input);
          };
          return _curry2(function _xdrop(n, xf) {
            return new XDrop(n, xf);
          });
        }();
        var _xdropLast = function() {
          function XDropLast(n, xf) {
            this.xf = xf;
            this.pos = 0;
            this.full = false;
            this.acc = new Array(n);
          }
          XDropLast.prototype['@@transducer/init'] = _xfBase.init;
          XDropLast.prototype['@@transducer/result'] = function(result) {
            this.acc = null;
            return this.xf['@@transducer/result'](result);
          };
          XDropLast.prototype['@@transducer/step'] = function(result, input) {
            if (this.full) {
              result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
            }
            this.store(input);
            return result;
          };
          XDropLast.prototype.store = function(input) {
            this.acc[this.pos] = input;
            this.pos += 1;
            if (this.pos === this.acc.length) {
              this.pos = 0;
              this.full = true;
            }
          };
          return _curry2(function _xdropLast(n, xf) {
            return new XDropLast(n, xf);
          });
        }();
        var _xdropRepeatsWith = function() {
          function XDropRepeatsWith(pred, xf) {
            this.xf = xf;
            this.pred = pred;
            this.lastValue = undefined;
            this.seenFirstValue = false;
          }
          XDropRepeatsWith.prototype['@@transducer/init'] = function() {
            return this.xf['@@transducer/init']();
          };
          XDropRepeatsWith.prototype['@@transducer/result'] = function(result) {
            return this.xf['@@transducer/result'](result);
          };
          XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
            var sameAsLast = false;
            if (!this.seenFirstValue) {
              this.seenFirstValue = true;
            } else if (this.pred(this.lastValue, input)) {
              sameAsLast = true;
            }
            this.lastValue = input;
            return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
          };
          return _curry2(function _xdropRepeatsWith(pred, xf) {
            return new XDropRepeatsWith(pred, xf);
          });
        }();
        var _xdropWhile = function() {
          function XDropWhile(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
          XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
          XDropWhile.prototype['@@transducer/step'] = function(result, input) {
            if (this.f) {
              if (this.f(input)) {
                return result;
              }
              this.f = null;
            }
            return this.xf['@@transducer/step'](result, input);
          };
          return _curry2(function _xdropWhile(f, xf) {
            return new XDropWhile(f, xf);
          });
        }();
        var _xfilter = function() {
          function XFilter(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XFilter.prototype['@@transducer/init'] = _xfBase.init;
          XFilter.prototype['@@transducer/result'] = _xfBase.result;
          XFilter.prototype['@@transducer/step'] = function(result, input) {
            return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
          };
          return _curry2(function _xfilter(f, xf) {
            return new XFilter(f, xf);
          });
        }();
        var _xfind = function() {
          function XFind(f, xf) {
            this.xf = xf;
            this.f = f;
            this.found = false;
          }
          XFind.prototype['@@transducer/init'] = _xfBase.init;
          XFind.prototype['@@transducer/result'] = function(result) {
            if (!this.found) {
              result = this.xf['@@transducer/step'](result, void 0);
            }
            return this.xf['@@transducer/result'](result);
          };
          XFind.prototype['@@transducer/step'] = function(result, input) {
            if (this.f(input)) {
              this.found = true;
              result = _reduced(this.xf['@@transducer/step'](result, input));
            }
            return result;
          };
          return _curry2(function _xfind(f, xf) {
            return new XFind(f, xf);
          });
        }();
        var _xfindIndex = function() {
          function XFindIndex(f, xf) {
            this.xf = xf;
            this.f = f;
            this.idx = -1;
            this.found = false;
          }
          XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
          XFindIndex.prototype['@@transducer/result'] = function(result) {
            if (!this.found) {
              result = this.xf['@@transducer/step'](result, -1);
            }
            return this.xf['@@transducer/result'](result);
          };
          XFindIndex.prototype['@@transducer/step'] = function(result, input) {
            this.idx += 1;
            if (this.f(input)) {
              this.found = true;
              result = _reduced(this.xf['@@transducer/step'](result, this.idx));
            }
            return result;
          };
          return _curry2(function _xfindIndex(f, xf) {
            return new XFindIndex(f, xf);
          });
        }();
        var _xfindLast = function() {
          function XFindLast(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XFindLast.prototype['@@transducer/init'] = _xfBase.init;
          XFindLast.prototype['@@transducer/result'] = function(result) {
            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
          };
          XFindLast.prototype['@@transducer/step'] = function(result, input) {
            if (this.f(input)) {
              this.last = input;
            }
            return result;
          };
          return _curry2(function _xfindLast(f, xf) {
            return new XFindLast(f, xf);
          });
        }();
        var _xfindLastIndex = function() {
          function XFindLastIndex(f, xf) {
            this.xf = xf;
            this.f = f;
            this.idx = -1;
            this.lastIdx = -1;
          }
          XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
          XFindLastIndex.prototype['@@transducer/result'] = function(result) {
            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
          };
          XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
            this.idx += 1;
            if (this.f(input)) {
              this.lastIdx = this.idx;
            }
            return result;
          };
          return _curry2(function _xfindLastIndex(f, xf) {
            return new XFindLastIndex(f, xf);
          });
        }();
        var _xmap = function() {
          function XMap(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XMap.prototype['@@transducer/init'] = _xfBase.init;
          XMap.prototype['@@transducer/result'] = _xfBase.result;
          XMap.prototype['@@transducer/step'] = function(result, input) {
            return this.xf['@@transducer/step'](result, this.f(input));
          };
          return _curry2(function _xmap(f, xf) {
            return new XMap(f, xf);
          });
        }();
        var _xreduceBy = function() {
          function XReduceBy(valueFn, valueAcc, keyFn, xf) {
            this.valueFn = valueFn;
            this.valueAcc = valueAcc;
            this.keyFn = keyFn;
            this.xf = xf;
            this.inputs = {};
          }
          XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
          XReduceBy.prototype['@@transducer/result'] = function(result) {
            var key;
            for (key in this.inputs) {
              if (_has(key, this.inputs)) {
                result = this.xf['@@transducer/step'](result, this.inputs[key]);
                if (result['@@transducer/reduced']) {
                  result = result['@@transducer/value'];
                  break;
                }
              }
            }
            this.inputs = null;
            return this.xf['@@transducer/result'](result);
          };
          XReduceBy.prototype['@@transducer/step'] = function(result, input) {
            var key = this.keyFn(input);
            this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
            this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
            return result;
          };
          return _curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
            return new XReduceBy(valueFn, valueAcc, keyFn, xf);
          });
        }();
        var _xtake = function() {
          function XTake(n, xf) {
            this.xf = xf;
            this.n = n;
            this.i = 0;
          }
          XTake.prototype['@@transducer/init'] = _xfBase.init;
          XTake.prototype['@@transducer/result'] = _xfBase.result;
          XTake.prototype['@@transducer/step'] = function(result, input) {
            this.i += 1;
            var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
            return this.i >= this.n ? _reduced(ret) : ret;
          };
          return _curry2(function _xtake(n, xf) {
            return new XTake(n, xf);
          });
        }();
        var _xtakeWhile = function() {
          function XTakeWhile(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
          XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
          XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
            return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
          };
          return _curry2(function _xtakeWhile(f, xf) {
            return new XTakeWhile(f, xf);
          });
        }();
        var add = _curry2(function add(a, b) {
          return Number(a) + Number(b);
        });
        var adjust = _curry3(function adjust(fn, idx, list) {
          if (idx >= list.length || idx < -list.length) {
            return list;
          }
          var start = idx < 0 ? list.length : 0;
          var _idx = start + idx;
          var _list = _concat(list);
          _list[_idx] = fn(list[_idx]);
          return _list;
        });
        var all = _curry2(_dispatchable('all', _xall, function all(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (!fn(list[idx])) {
              return false;
            }
            idx += 1;
          }
          return true;
        }));
        var always = _curry1(function always(val) {
          return function() {
            return val;
          };
        });
        var and = _curry2(function and(a, b) {
          return a && b;
        });
        var any = _curry2(_dispatchable('any', _xany, function any(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (fn(list[idx])) {
              return true;
            }
            idx += 1;
          }
          return false;
        }));
        var aperture = _curry2(_dispatchable('aperture', _xaperture, _aperture));
        var append = _curry2(function append(el, list) {
          return _concat(list, [el]);
        });
        var apply = _curry2(function apply(fn, args) {
          return fn.apply(this, args);
        });
        var assoc = _curry3(function assoc(prop, val, obj) {
          var result = {};
          for (var p in obj) {
            result[p] = obj[p];
          }
          result[prop] = val;
          return result;
        });
        var assocPath = _curry3(function assocPath(path, val, obj) {
          switch (path.length) {
            case 0:
              return val;
            case 1:
              return assoc(path[0], val, obj);
            default:
              return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
          }
        });
        var bind = _curry2(function bind(fn, thisObj) {
          return _arity(fn.length, function() {
            return fn.apply(thisObj, arguments);
          });
        });
        var clamp = _curry3(function clamp(min, max, value) {
          if (min > max) {
            throw new Error('min must not be greater than max in clamp(min, max, value)');
          }
          return value < min ? min : value > max ? max : value;
        });
        var comparator = _curry1(function comparator(pred) {
          return function(a, b) {
            return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
          };
        });
        var curryN = _curry2(function curryN(length, fn) {
          if (length === 1) {
            return _curry1(fn);
          }
          return _arity(length, _curryN(length, [], fn));
        });
        var dec = add(-1);
        var defaultTo = _curry2(function defaultTo(d, v) {
          return v == null || v !== v ? d : v;
        });
        var differenceWith = _curry3(function differenceWith(pred, first, second) {
          var out = [];
          var idx = 0;
          var firstLen = first.length;
          while (idx < firstLen) {
            if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
              out.push(first[idx]);
            }
            idx += 1;
          }
          return out;
        });
        var dissoc = _curry2(function dissoc(prop, obj) {
          var result = {};
          for (var p in obj) {
            if (p !== prop) {
              result[p] = obj[p];
            }
          }
          return result;
        });
        var dissocPath = _curry2(function dissocPath(path, obj) {
          switch (path.length) {
            case 0:
              return obj;
            case 1:
              return dissoc(path[0], obj);
            default:
              var head = path[0];
              var tail = _slice(path, 1);
              return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
          }
        });
        var divide = _curry2(function divide(a, b) {
          return a / b;
        });
        var dropWhile = _curry2(_dispatchable('dropWhile', _xdropWhile, function dropWhile(pred, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len && pred(list[idx])) {
            idx += 1;
          }
          return _slice(list, idx);
        }));
        var empty = _curry1(function empty(x) {
          return x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function() {
            return arguments;
          }() : void 0;
        });
        var evolve = _curry2(function evolve(transformations, object) {
          var result = {};
          var transformation,
              key,
              type;
          for (key in object) {
            transformation = transformations[key];
            type = typeof transformation;
            result[key] = type === 'function' ? transformation(object[key]) : type === 'object' ? evolve(transformations[key], object[key]) : object[key];
          }
          return result;
        });
        var find = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx += 1;
          }
        }));
        var findIndex = _curry2(_dispatchable('findIndex', _xfindIndex, function findIndex(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }));
        var findLast = _curry2(_dispatchable('findLast', _xfindLast, function findLast(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx -= 1;
          }
        }));
        var findLastIndex = _curry2(_dispatchable('findLastIndex', _xfindLastIndex, function findLastIndex(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return idx;
            }
            idx -= 1;
          }
          return -1;
        }));
        var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
          var len = list.length;
          var idx = 0;
          while (idx < len) {
            fn(list[idx]);
            idx += 1;
          }
          return list;
        }));
        var fromPairs = _curry1(function fromPairs(pairs) {
          var result = {};
          var idx = 0;
          while (idx < pairs.length) {
            result[pairs[idx][0]] = pairs[idx][1];
            idx += 1;
          }
          return result;
        });
        var groupWith = _curry2(function(fn, list) {
          var res = [];
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            var nextidx = idx + 1;
            while (nextidx < len && fn(list[idx], list[nextidx])) {
              nextidx += 1;
            }
            res.push(list.slice(idx, nextidx));
            idx = nextidx;
          }
          return res;
        });
        var gt = _curry2(function gt(a, b) {
          return a > b;
        });
        var gte = _curry2(function gte(a, b) {
          return a >= b;
        });
        var has = _curry2(_has);
        var hasIn = _curry2(function hasIn(prop, obj) {
          return prop in obj;
        });
        var identical = _curry2(function identical(a, b) {
          if (a === b) {
            return a !== 0 || 1 / a === 1 / b;
          } else {
            return a !== a && b !== b;
          }
        });
        var identity = _curry1(_identity);
        var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
          return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
            return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
          });
        });
        var inc = add(1);
        var insert = _curry3(function insert(idx, elt, list) {
          idx = idx < list.length && idx >= 0 ? idx : list.length;
          var result = _slice(list);
          result.splice(idx, 0, elt);
          return result;
        });
        var insertAll = _curry3(function insertAll(idx, elts, list) {
          idx = idx < list.length && idx >= 0 ? idx : list.length;
          return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
        });
        var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
          var out = [];
          var idx = 0;
          var length = list.length;
          while (idx < length) {
            if (idx === length - 1) {
              out.push(list[idx]);
            } else {
              out.push(list[idx], separator);
            }
            idx += 1;
          }
          return out;
        }));
        var is = _curry2(function is(Ctor, val) {
          return val != null && val.constructor === Ctor || val instanceof Ctor;
        });
        var isArrayLike = _curry1(function isArrayLike(x) {
          if (_isArray(x)) {
            return true;
          }
          if (!x) {
            return false;
          }
          if (typeof x !== 'object') {
            return false;
          }
          if (_isString(x)) {
            return false;
          }
          if (x.nodeType === 1) {
            return !!x.length;
          }
          if (x.length === 0) {
            return true;
          }
          if (x.length > 0) {
            return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
          }
          return false;
        });
        var isNil = _curry1(function isNil(x) {
          return x == null;
        });
        var keys = function() {
          var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
          var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
          var hasArgsEnumBug = function() {
            'use strict';
            return arguments.propertyIsEnumerable('length');
          }();
          var contains = function contains(list, item) {
            var idx = 0;
            while (idx < list.length) {
              if (list[idx] === item) {
                return true;
              }
              idx += 1;
            }
            return false;
          };
          return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
            return Object(obj) !== obj ? [] : Object.keys(obj);
          }) : _curry1(function keys(obj) {
            if (Object(obj) !== obj) {
              return [];
            }
            var prop,
                nIdx;
            var ks = [];
            var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
            for (prop in obj) {
              if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
                ks[ks.length] = prop;
              }
            }
            if (hasEnumBug) {
              nIdx = nonEnumerableProps.length - 1;
              while (nIdx >= 0) {
                prop = nonEnumerableProps[nIdx];
                if (_has(prop, obj) && !contains(ks, prop)) {
                  ks[ks.length] = prop;
                }
                nIdx -= 1;
              }
            }
            return ks;
          });
        }();
        var keysIn = _curry1(function keysIn(obj) {
          var prop;
          var ks = [];
          for (prop in obj) {
            ks[ks.length] = prop;
          }
          return ks;
        });
        var length = _curry1(function length(list) {
          return list != null && _isNumber(list.length) ? list.length : NaN;
        });
        var lt = _curry2(function lt(a, b) {
          return a < b;
        });
        var lte = _curry2(function lte(a, b) {
          return a <= b;
        });
        var mapAccum = _curry3(function mapAccum(fn, acc, list) {
          var idx = 0;
          var len = list.length;
          var result = [];
          var tuple = [acc];
          while (idx < len) {
            tuple = fn(tuple[0], list[idx]);
            result[idx] = tuple[1];
            idx += 1;
          }
          return [tuple[0], result];
        });
        var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
          var idx = list.length - 1;
          var result = [];
          var tuple = [acc];
          while (idx >= 0) {
            tuple = fn(tuple[0], list[idx]);
            result[idx] = tuple[1];
            idx -= 1;
          }
          return [tuple[0], result];
        });
        var match = _curry2(function match(rx, str) {
          return str.match(rx) || [];
        });
        var mathMod = _curry2(function mathMod(m, p) {
          if (!_isInteger(m)) {
            return NaN;
          }
          if (!_isInteger(p) || p < 1) {
            return NaN;
          }
          return (m % p + p) % p;
        });
        var max = _curry2(function max(a, b) {
          return b > a ? b : a;
        });
        var maxBy = _curry3(function maxBy(f, a, b) {
          return f(b) > f(a) ? b : a;
        });
        var merge = _curry2(function merge(l, r) {
          return _assign({}, l, r);
        });
        var mergeAll = _curry1(function mergeAll(list) {
          return _assign.apply(null, [{}].concat(list));
        });
        var mergeWithKey = _curry3(function mergeWithKey(fn, l, r) {
          var result = {};
          var k;
          for (k in l) {
            if (_has(k, l)) {
              result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
            }
          }
          for (k in r) {
            if (_has(k, r) && !_has(k, result)) {
              result[k] = r[k];
            }
          }
          return result;
        });
        var min = _curry2(function min(a, b) {
          return b < a ? b : a;
        });
        var minBy = _curry3(function minBy(f, a, b) {
          return f(b) < f(a) ? b : a;
        });
        var modulo = _curry2(function modulo(a, b) {
          return a % b;
        });
        var multiply = _curry2(function multiply(a, b) {
          return a * b;
        });
        var nAry = _curry2(function nAry(n, fn) {
          switch (n) {
            case 0:
              return function() {
                return fn.call(this);
              };
            case 1:
              return function(a0) {
                return fn.call(this, a0);
              };
            case 2:
              return function(a0, a1) {
                return fn.call(this, a0, a1);
              };
            case 3:
              return function(a0, a1, a2) {
                return fn.call(this, a0, a1, a2);
              };
            case 4:
              return function(a0, a1, a2, a3) {
                return fn.call(this, a0, a1, a2, a3);
              };
            case 5:
              return function(a0, a1, a2, a3, a4) {
                return fn.call(this, a0, a1, a2, a3, a4);
              };
            case 6:
              return function(a0, a1, a2, a3, a4, a5) {
                return fn.call(this, a0, a1, a2, a3, a4, a5);
              };
            case 7:
              return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
              };
            case 8:
              return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
              };
            case 9:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
              };
            case 10:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
              };
            default:
              throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
          }
        });
        var negate = _curry1(function negate(n) {
          return -n;
        });
        var none = _curry2(_complement(_dispatchable('any', _xany, any)));
        var not = _curry1(function not(a) {
          return !a;
        });
        var nth = _curry2(function nth(offset, list) {
          var idx = offset < 0 ? list.length + offset : offset;
          return _isString(list) ? list.charAt(idx) : list[idx];
        });
        var nthArg = _curry1(function nthArg(n) {
          var arity = n < 0 ? 1 : n + 1;
          return curryN(arity, function() {
            return nth(n, arguments);
          });
        });
        var objOf = _curry2(function objOf(key, val) {
          var obj = {};
          obj[key] = val;
          return obj;
        });
        var of = _curry1(_of);
        var once = _curry1(function once(fn) {
          var called = false;
          var result;
          return _arity(fn.length, function() {
            if (called) {
              return result;
            }
            called = true;
            result = fn.apply(this, arguments);
            return result;
          });
        });
        var or = _curry2(function or(a, b) {
          return a || b;
        });
        var over = function() {
          var Identity = function(x) {
            return {
              value: x,
              map: function(f) {
                return Identity(f(x));
              }
            };
          };
          return _curry3(function over(lens, f, x) {
            return lens(function(y) {
              return Identity(f(y));
            })(x).value;
          });
        }();
        var pair = _curry2(function pair(fst, snd) {
          return [fst, snd];
        });
        var path = _curry2(function path(paths, obj) {
          var val = obj;
          var idx = 0;
          while (idx < paths.length) {
            if (val == null) {
              return;
            }
            val = val[paths[idx]];
            idx += 1;
          }
          return val;
        });
        var pathOr = _curry3(function pathOr(d, p, obj) {
          return defaultTo(d, path(p, obj));
        });
        var pathSatisfies = _curry3(function pathSatisfies(pred, propPath, obj) {
          return propPath.length > 0 && pred(path(propPath, obj));
        });
        var pick = _curry2(function pick(names, obj) {
          var result = {};
          var idx = 0;
          while (idx < names.length) {
            if (names[idx] in obj) {
              result[names[idx]] = obj[names[idx]];
            }
            idx += 1;
          }
          return result;
        });
        var pickAll = _curry2(function pickAll(names, obj) {
          var result = {};
          var idx = 0;
          var len = names.length;
          while (idx < len) {
            var name = names[idx];
            result[name] = obj[name];
            idx += 1;
          }
          return result;
        });
        var pickBy = _curry2(function pickBy(test, obj) {
          var result = {};
          for (var prop in obj) {
            if (test(obj[prop], prop, obj)) {
              result[prop] = obj[prop];
            }
          }
          return result;
        });
        var prepend = _curry2(function prepend(el, list) {
          return _concat([el], list);
        });
        var prop = _curry2(function prop(p, obj) {
          return obj[p];
        });
        var propIs = _curry3(function propIs(type, name, obj) {
          return is(type, obj[name]);
        });
        var propOr = _curry3(function propOr(val, p, obj) {
          return obj != null && _has(p, obj) ? obj[p] : val;
        });
        var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
          return pred(obj[name]);
        });
        var props = _curry2(function props(ps, obj) {
          var len = ps.length;
          var out = [];
          var idx = 0;
          while (idx < len) {
            out[idx] = obj[ps[idx]];
            idx += 1;
          }
          return out;
        });
        var range = _curry2(function range(from, to) {
          if (!(_isNumber(from) && _isNumber(to))) {
            throw new TypeError('Both arguments to range must be numbers');
          }
          var result = [];
          var n = from;
          while (n < to) {
            result.push(n);
            n += 1;
          }
          return result;
        });
        var reduceRight = _curry3(function reduceRight(fn, acc, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            acc = fn(acc, list[idx]);
            idx -= 1;
          }
          return acc;
        });
        var reduced = _curry1(_reduced);
        var remove = _curry3(function remove(start, count, list) {
          return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
        });
        var replace = _curry3(function replace(regex, replacement, str) {
          return str.replace(regex, replacement);
        });
        var reverse = _curry1(function reverse(list) {
          return _isString(list) ? list.split('').reverse().join('') : _slice(list).reverse();
        });
        var scan = _curry3(function scan(fn, acc, list) {
          var idx = 0;
          var len = list.length;
          var result = [acc];
          while (idx < len) {
            acc = fn(acc, list[idx]);
            result[idx + 1] = acc;
            idx += 1;
          }
          return result;
        });
        var set = _curry3(function set(lens, v, x) {
          return over(lens, always(v), x);
        });
        var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
          return Array.prototype.slice.call(list, fromIndex, toIndex);
        }));
        var sort = _curry2(function sort(comparator, list) {
          return _slice(list).sort(comparator);
        });
        var sortBy = _curry2(function sortBy(fn, list) {
          return _slice(list).sort(function(a, b) {
            var aa = fn(a);
            var bb = fn(b);
            return aa < bb ? -1 : aa > bb ? 1 : 0;
          });
        });
        var splitAt = _curry2(function splitAt(index, array) {
          return [slice(0, index, array), slice(index, length(array), array)];
        });
        var splitEvery = _curry2(function splitEvery(n, list) {
          if (n <= 0) {
            throw new Error('First argument to splitEvery must be a positive integer');
          }
          var result = [];
          var idx = 0;
          while (idx < list.length) {
            result.push(slice(idx, idx += n, list));
          }
          return result;
        });
        var splitWhen = _curry2(function splitWhen(pred, list) {
          var idx = 0;
          var len = list.length;
          var prefix = [];
          while (idx < len && !pred(list[idx])) {
            prefix.push(list[idx]);
            idx += 1;
          }
          return [prefix, _slice(list, idx)];
        });
        var subtract = _curry2(function subtract(a, b) {
          return Number(a) - Number(b);
        });
        var tail = _checkForMethod('tail', slice(1, Infinity));
        var take = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
          return slice(0, n < 0 ? Infinity : n, xs);
        }));
        var takeLastWhile = _curry2(function takeLastWhile(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0 && fn(list[idx])) {
            idx -= 1;
          }
          return _slice(list, idx + 1, Infinity);
        });
        var takeWhile = _curry2(_dispatchable('takeWhile', _xtakeWhile, function takeWhile(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len && fn(list[idx])) {
            idx += 1;
          }
          return _slice(list, 0, idx);
        }));
        var tap = _curry2(function tap(fn, x) {
          fn(x);
          return x;
        });
        var times = _curry2(function times(fn, n) {
          var len = Number(n);
          var idx = 0;
          var list;
          if (len < 0 || isNaN(len)) {
            throw new RangeError('n must be a non-negative number');
          }
          list = new Array(len);
          while (idx < len) {
            list[idx] = fn(idx);
            idx += 1;
          }
          return list;
        });
        var toPairs = _curry1(function toPairs(obj) {
          var pairs = [];
          for (var prop in obj) {
            if (_has(prop, obj)) {
              pairs[pairs.length] = [prop, obj[prop]];
            }
          }
          return pairs;
        });
        var toPairsIn = _curry1(function toPairsIn(obj) {
          var pairs = [];
          for (var prop in obj) {
            pairs[pairs.length] = [prop, obj[prop]];
          }
          return pairs;
        });
        var transpose = _curry1(function transpose(outerlist) {
          var i = 0;
          var result = [];
          while (i < outerlist.length) {
            var innerlist = outerlist[i];
            var j = 0;
            while (j < innerlist.length) {
              if (typeof result[j] === 'undefined') {
                result[j] = [];
              }
              result[j].push(innerlist[j]);
              j += 1;
            }
            i += 1;
          }
          return result;
        });
        var trim = function() {
          var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
          var zeroWidth = '\u200B';
          var hasProtoTrim = typeof String.prototype.trim === 'function';
          if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
            return _curry1(function trim(str) {
              var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
              var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
              return str.replace(beginRx, '').replace(endRx, '');
            });
          } else {
            return _curry1(function trim(str) {
              return str.trim();
            });
          }
        }();
        var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
          return _arity(tryer.length, function() {
            try {
              return tryer.apply(this, arguments);
            } catch (e) {
              return catcher.apply(this, _concat([e], arguments));
            }
          });
        });
        var type = _curry1(function type(val) {
          return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
        });
        var unapply = _curry1(function unapply(fn) {
          return function() {
            return fn(_slice(arguments));
          };
        });
        var unary = _curry1(function unary(fn) {
          return nAry(1, fn);
        });
        var uncurryN = _curry2(function uncurryN(depth, fn) {
          return curryN(depth, function() {
            var currentDepth = 1;
            var value = fn;
            var idx = 0;
            var endIdx;
            while (currentDepth <= depth && typeof value === 'function') {
              endIdx = currentDepth === depth ? arguments.length : idx + value.length;
              value = value.apply(this, _slice(arguments, idx, endIdx));
              currentDepth += 1;
              idx = endIdx;
            }
            return value;
          });
        });
        var unfold = _curry2(function unfold(fn, seed) {
          var pair = fn(seed);
          var result = [];
          while (pair && pair.length) {
            result[result.length] = pair[0];
            pair = fn(pair[1]);
          }
          return result;
        });
        var uniqWith = _curry2(function uniqWith(pred, list) {
          var idx = 0;
          var len = list.length;
          var result = [];
          var item;
          while (idx < len) {
            item = list[idx];
            if (!_containsWith(pred, item, result)) {
              result[result.length] = item;
            }
            idx += 1;
          }
          return result;
        });
        var unless = _curry3(function unless(pred, whenFalseFn, x) {
          return pred(x) ? x : whenFalseFn(x);
        });
        var until = _curry3(function until(pred, fn, init) {
          var val = init;
          while (!pred(val)) {
            val = fn(val);
          }
          return val;
        });
        var update = _curry3(function update(idx, x, list) {
          return adjust(always(x), idx, list);
        });
        var useWith = _curry2(function useWith(fn, transformers) {
          return curryN(transformers.length, function() {
            var args = [];
            var idx = 0;
            while (idx < transformers.length) {
              args.push(transformers[idx].call(this, arguments[idx]));
              idx += 1;
            }
            return fn.apply(this, args.concat(_slice(arguments, transformers.length)));
          });
        });
        var values = _curry1(function values(obj) {
          var props = keys(obj);
          var len = props.length;
          var vals = [];
          var idx = 0;
          while (idx < len) {
            vals[idx] = obj[props[idx]];
            idx += 1;
          }
          return vals;
        });
        var valuesIn = _curry1(function valuesIn(obj) {
          var prop;
          var vs = [];
          for (prop in obj) {
            vs[vs.length] = obj[prop];
          }
          return vs;
        });
        var view = function() {
          var Const = function(x) {
            return {
              value: x,
              map: function() {
                return this;
              }
            };
          };
          return _curry2(function view(lens, x) {
            return lens(Const)(x).value;
          });
        }();
        var when = _curry3(function when(pred, whenTrueFn, x) {
          return pred(x) ? whenTrueFn(x) : x;
        });
        var where = _curry2(function where(spec, testObj) {
          for (var prop in spec) {
            if (_has(prop, spec) && !spec[prop](testObj[prop])) {
              return false;
            }
          }
          return true;
        });
        var wrap = _curry2(function wrap(fn, wrapper) {
          return curryN(fn.length, function() {
            return wrapper.apply(this, _concat([fn], arguments));
          });
        });
        var xprod = _curry2(function xprod(a, b) {
          var idx = 0;
          var ilen = a.length;
          var j;
          var jlen = b.length;
          var result = [];
          while (idx < ilen) {
            j = 0;
            while (j < jlen) {
              result[result.length] = [a[idx], b[j]];
              j += 1;
            }
            idx += 1;
          }
          return result;
        });
        var zip = _curry2(function zip(a, b) {
          var rv = [];
          var idx = 0;
          var len = Math.min(a.length, b.length);
          while (idx < len) {
            rv[idx] = [a[idx], b[idx]];
            idx += 1;
          }
          return rv;
        });
        var zipObj = _curry2(function zipObj(keys, values) {
          var idx = 0;
          var len = Math.min(keys.length, values.length);
          var out = {};
          while (idx < len) {
            out[keys[idx]] = values[idx];
            idx += 1;
          }
          return out;
        });
        var zipWith = _curry3(function zipWith(fn, a, b) {
          var rv = [];
          var idx = 0;
          var len = Math.min(a.length, b.length);
          while (idx < len) {
            rv[idx] = fn(a[idx], b[idx]);
            idx += 1;
          }
          return rv;
        });
        var F = always(false);
        var T = always(true);
        var _clone = function _clone(value, refFrom, refTo, deep) {
          var copy = function copy(copiedValue) {
            var len = refFrom.length;
            var idx = 0;
            while (idx < len) {
              if (value === refFrom[idx]) {
                return refTo[idx];
              }
              idx += 1;
            }
            refFrom[idx + 1] = value;
            refTo[idx + 1] = copiedValue;
            for (var key in value) {
              copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
            }
            return copiedValue;
          };
          switch (type(value)) {
            case 'Object':
              return copy({});
            case 'Array':
              return copy([]);
            case 'Date':
              return new Date(value.valueOf());
            case 'RegExp':
              return _cloneRegExp(value);
            default:
              return value;
          }
        };
        var _createPartialApplicator = function _createPartialApplicator(concat) {
          return _curry2(function(fn, args) {
            return _arity(Math.max(0, fn.length - args.length), function() {
              return fn.apply(this, concat(args, arguments));
            });
          });
        };
        var _dropLast = function dropLast(n, xs) {
          return take(n < xs.length ? xs.length - n : 0, xs);
        };
        var _equals = function _equals(a, b, stackA, stackB) {
          if (identical(a, b)) {
            return true;
          }
          if (type(a) !== type(b)) {
            return false;
          }
          if (a == null || b == null) {
            return false;
          }
          if (typeof a.equals === 'function' || typeof b.equals === 'function') {
            return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
          }
          switch (type(a)) {
            case 'Arguments':
            case 'Array':
            case 'Object':
              if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
                return a === b;
              }
              break;
            case 'Boolean':
            case 'Number':
            case 'String':
              if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
                return false;
              }
              break;
            case 'Date':
              if (!identical(a.valueOf(), b.valueOf())) {
                return false;
              }
              break;
            case 'Error':
              return a.name === b.name && a.message === b.message;
            case 'RegExp':
              if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
                return false;
              }
              break;
            case 'Map':
            case 'Set':
              if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
                return false;
              }
              break;
            case 'Int8Array':
            case 'Uint8Array':
            case 'Uint8ClampedArray':
            case 'Int16Array':
            case 'Uint16Array':
            case 'Int32Array':
            case 'Uint32Array':
            case 'Float32Array':
            case 'Float64Array':
              break;
            case 'ArrayBuffer':
              break;
            default:
              return false;
          }
          var keysA = keys(a);
          if (keysA.length !== keys(b).length) {
            return false;
          }
          var idx = stackA.length - 1;
          while (idx >= 0) {
            if (stackA[idx] === a) {
              return stackB[idx] === b;
            }
            idx -= 1;
          }
          stackA.push(a);
          stackB.push(b);
          idx = keysA.length - 1;
          while (idx >= 0) {
            var key = keysA[idx];
            if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
              return false;
            }
            idx -= 1;
          }
          stackA.pop();
          stackB.pop();
          return true;
        };
        var _makeFlat = function _makeFlat(recursive) {
          return function flatt(list) {
            var value,
                jlen,
                j;
            var result = [];
            var idx = 0;
            var ilen = list.length;
            while (idx < ilen) {
              if (isArrayLike(list[idx])) {
                value = recursive ? flatt(list[idx]) : list[idx];
                j = 0;
                jlen = value.length;
                while (j < jlen) {
                  result[result.length] = value[j];
                  j += 1;
                }
              } else {
                result[result.length] = list[idx];
              }
              idx += 1;
            }
            return result;
          };
        };
        var _reduce = function() {
          function _arrayReduce(xf, acc, list) {
            var idx = 0;
            var len = list.length;
            while (idx < len) {
              acc = xf['@@transducer/step'](acc, list[idx]);
              if (acc && acc['@@transducer/reduced']) {
                acc = acc['@@transducer/value'];
                break;
              }
              idx += 1;
            }
            return xf['@@transducer/result'](acc);
          }
          function _iterableReduce(xf, acc, iter) {
            var step = iter.next();
            while (!step.done) {
              acc = xf['@@transducer/step'](acc, step.value);
              if (acc && acc['@@transducer/reduced']) {
                acc = acc['@@transducer/value'];
                break;
              }
              step = iter.next();
            }
            return xf['@@transducer/result'](acc);
          }
          function _methodReduce(xf, acc, obj) {
            return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
          }
          var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
          return function _reduce(fn, acc, list) {
            if (typeof fn === 'function') {
              fn = _xwrap(fn);
            }
            if (isArrayLike(list)) {
              return _arrayReduce(fn, acc, list);
            }
            if (typeof list.reduce === 'function') {
              return _methodReduce(fn, acc, list);
            }
            if (list[symIterator] != null) {
              return _iterableReduce(fn, acc, list[symIterator]());
            }
            if (typeof list.next === 'function') {
              return _iterableReduce(fn, acc, list);
            }
            throw new TypeError('reduce: list must be array or iterable');
          };
        }();
        var _stepCat = function() {
          var _stepCatArray = {
            '@@transducer/init': Array,
            '@@transducer/step': function(xs, x) {
              xs.push(x);
              return xs;
            },
            '@@transducer/result': _identity
          };
          var _stepCatString = {
            '@@transducer/init': String,
            '@@transducer/step': function(a, b) {
              return a + b;
            },
            '@@transducer/result': _identity
          };
          var _stepCatObject = {
            '@@transducer/init': Object,
            '@@transducer/step': function(result, input) {
              return _assign(result, isArrayLike(input) ? objOf(input[0], input[1]) : input);
            },
            '@@transducer/result': _identity
          };
          return function _stepCat(obj) {
            if (_isTransformer(obj)) {
              return obj;
            }
            if (isArrayLike(obj)) {
              return _stepCatArray;
            }
            if (typeof obj === 'string') {
              return _stepCatString;
            }
            if (typeof obj === 'object') {
              return _stepCatObject;
            }
            throw new Error('Cannot create transformer for ' + obj);
          };
        }();
        var _xdropLastWhile = function() {
          function XDropLastWhile(fn, xf) {
            this.f = fn;
            this.retained = [];
            this.xf = xf;
          }
          XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
          XDropLastWhile.prototype['@@transducer/result'] = function(result) {
            this.retained = null;
            return this.xf['@@transducer/result'](result);
          };
          XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
            return this.f(input) ? this.retain(result, input) : this.flush(result, input);
          };
          XDropLastWhile.prototype.flush = function(result, input) {
            result = _reduce(this.xf['@@transducer/step'], result, this.retained);
            this.retained = [];
            return this.xf['@@transducer/step'](result, input);
          };
          XDropLastWhile.prototype.retain = function(result, input) {
            this.retained.push(input);
            return result;
          };
          return _curry2(function _xdropLastWhile(fn, xf) {
            return new XDropLastWhile(fn, xf);
          });
        }();
        var addIndex = _curry1(function addIndex(fn) {
          return curryN(fn.length, function() {
            var idx = 0;
            var origFn = arguments[0];
            var list = arguments[arguments.length - 1];
            var args = _slice(arguments);
            args[0] = function() {
              var result = origFn.apply(this, _concat(arguments, [idx, list]));
              idx += 1;
              return result;
            };
            return fn.apply(this, args);
          });
        });
        var binary = _curry1(function binary(fn) {
          return nAry(2, fn);
        });
        var clone = _curry1(function clone(value) {
          return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
        });
        var curry = _curry1(function curry(fn) {
          return curryN(fn.length, fn);
        });
        var drop = _curry2(_dispatchable('drop', _xdrop, function drop(n, xs) {
          return slice(Math.max(0, n), Infinity, xs);
        }));
        var dropLast = _curry2(_dispatchable('dropLast', _xdropLast, _dropLast));
        var dropLastWhile = _curry2(_dispatchable('dropLastWhile', _xdropLastWhile, _dropLastWhile));
        var equals = _curry2(function equals(a, b) {
          return _equals(a, b, [], []);
        });
        var filter = _curry2(_dispatchable('filter', _xfilter, function(pred, filterable) {
          return _isObject(filterable) ? _reduce(function(acc, key) {
            if (pred(filterable[key])) {
              acc[key] = filterable[key];
            }
            return acc;
          }, {}, keys(filterable)) : _filter(pred, filterable);
        }));
        var flatten = _curry1(_makeFlat(true));
        var flip = _curry1(function flip(fn) {
          return curry(function(a, b) {
            var args = _slice(arguments);
            args[0] = b;
            args[1] = a;
            return fn.apply(this, args);
          });
        });
        var head = nth(0);
        var init = slice(0, -1);
        var intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
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
        var into = _curry3(function into(acc, xf, list) {
          return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
        });
        var invert = _curry1(function invert(obj) {
          var props = keys(obj);
          var len = props.length;
          var idx = 0;
          var out = {};
          while (idx < len) {
            var key = props[idx];
            var val = obj[key];
            var list = _has(val, out) ? out[val] : out[val] = [];
            list[list.length] = key;
            idx += 1;
          }
          return out;
        });
        var invertObj = _curry1(function invertObj(obj) {
          var props = keys(obj);
          var len = props.length;
          var idx = 0;
          var out = {};
          while (idx < len) {
            var key = props[idx];
            out[obj[key]] = key;
            idx += 1;
          }
          return out;
        });
        var isEmpty = _curry1(function isEmpty(x) {
          return x != null && equals(x, empty(x));
        });
        var last = nth(-1);
        var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
          if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
            return xs.lastIndexOf(target);
          } else {
            var idx = xs.length - 1;
            while (idx >= 0) {
              if (equals(xs[idx], target)) {
                return idx;
              }
              idx -= 1;
            }
            return -1;
          }
        });
        var map = _curry2(_dispatchable('map', _xmap, function map(fn, functor) {
          switch (Object.prototype.toString.call(functor)) {
            case '[object Function]':
              return curryN(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
              });
            case '[object Object]':
              return _reduce(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
              }, {}, keys(functor));
            default:
              return _map(fn, functor);
          }
        }));
        var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
          return _reduce(function(acc, key) {
            acc[key] = fn(obj[key], key, obj);
            return acc;
          }, {}, keys(obj));
        });
        var mergeWith = _curry3(function mergeWith(fn, l, r) {
          return mergeWithKey(function(_, _l, _r) {
            return fn(_l, _r);
          }, l, r);
        });
        var partial = _createPartialApplicator(_concat);
        var partialRight = _createPartialApplicator(flip(_concat));
        var pathEq = _curry3(function pathEq(_path, val, obj) {
          return equals(path(_path, obj), val);
        });
        var pluck = _curry2(function pluck(p, list) {
          return map(prop(p), list);
        });
        var project = useWith(_map, [pickAll, identity]);
        var propEq = _curry3(function propEq(name, val, obj) {
          return equals(val, obj[name]);
        });
        var reduce = _curry3(_reduce);
        var reduceBy = _curryN(4, [], _dispatchable('reduceBy', _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
          return _reduce(function(acc, elt) {
            var key = keyFn(elt);
            acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
            return acc;
          }, {}, list);
        }));
        var reduceWhile = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
          return _reduce(function(acc, x) {
            return pred(acc, x) ? fn(acc, x) : _reduced(acc);
          }, a, list);
        });
        var reject = _curry2(function reject(pred, filterable) {
          return filter(_complement(pred), filterable);
        });
        var repeat = _curry2(function repeat(value, n) {
          return times(always(value), n);
        });
        var sum = reduce(add, 0);
        var takeLast = _curry2(function takeLast(n, xs) {
          return drop(n >= 0 ? xs.length - n : 0, xs);
        });
        var transduce = curryN(4, function transduce(xf, fn, acc, list) {
          return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
        });
        var unionWith = _curry3(function unionWith(pred, list1, list2) {
          return uniqWith(pred, _concat(list1, list2));
        });
        var whereEq = _curry2(function whereEq(spec, testObj) {
          return where(map(equals, spec), testObj);
        });
        var _flatCat = function() {
          var preservingReduced = function(xf) {
            return {
              '@@transducer/init': _xfBase.init,
              '@@transducer/result': function(result) {
                return xf['@@transducer/result'](result);
              },
              '@@transducer/step': function(result, input) {
                var ret = xf['@@transducer/step'](result, input);
                return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
              }
            };
          };
          return function _xcat(xf) {
            var rxf = preservingReduced(xf);
            return {
              '@@transducer/init': _xfBase.init,
              '@@transducer/result': function(result) {
                return rxf['@@transducer/result'](result);
              },
              '@@transducer/step': function(result, input) {
                return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
              }
            };
          };
        }();
        var _indexOf = function _indexOf(list, a, idx) {
          var inf,
              item;
          if (typeof list.indexOf === 'function') {
            switch (typeof a) {
              case 'number':
                if (a === 0) {
                  inf = 1 / a;
                  while (idx < list.length) {
                    item = list[idx];
                    if (item === 0 && 1 / item === inf) {
                      return idx;
                    }
                    idx += 1;
                  }
                  return -1;
                } else if (a !== a) {
                  while (idx < list.length) {
                    item = list[idx];
                    if (typeof item === 'number' && item !== item) {
                      return idx;
                    }
                    idx += 1;
                  }
                  return -1;
                }
                return list.indexOf(a, idx);
              case 'string':
              case 'boolean':
              case 'function':
              case 'undefined':
                return list.indexOf(a, idx);
              case 'object':
                if (a === null) {
                  return list.indexOf(a, idx);
                }
            }
          }
          while (idx < list.length) {
            if (equals(list[idx], a)) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        };
        var _xchain = _curry2(function _xchain(f, xf) {
          return map(f, _flatCat(xf));
        });
        var allPass = _curry1(function allPass(preds) {
          return curryN(reduce(max, 0, pluck('length', preds)), function() {
            var idx = 0;
            var len = preds.length;
            while (idx < len) {
              if (!preds[idx].apply(this, arguments)) {
                return false;
              }
              idx += 1;
            }
            return true;
          });
        });
        var anyPass = _curry1(function anyPass(preds) {
          return curryN(reduce(max, 0, pluck('length', preds)), function() {
            var idx = 0;
            var len = preds.length;
            while (idx < len) {
              if (preds[idx].apply(this, arguments)) {
                return true;
              }
              idx += 1;
            }
            return false;
          });
        });
        var ap = _curry2(function ap(applicative, fn) {
          return typeof applicative.ap === 'function' ? applicative.ap(fn) : typeof applicative === 'function' ? function(x) {
            return applicative(x)(fn(x));
          } : _reduce(function(acc, f) {
            return _concat(acc, map(f, fn));
          }, [], applicative);
        });
        var applySpec = _curry1(function applySpec(spec) {
          spec = map(function(v) {
            return typeof v == 'function' ? v : applySpec(v);
          }, spec);
          return curryN(reduce(max, 0, pluck('length', values(spec))), function() {
            var args = arguments;
            return map(function(f) {
              return apply(f, args);
            }, spec);
          });
        });
        var call = curry(function call(fn) {
          return fn.apply(this, _slice(arguments, 1));
        });
        var chain = _curry2(_dispatchable('chain', _xchain, function chain(fn, monad) {
          if (typeof monad === 'function') {
            return function() {
              return monad.call(this, fn.apply(this, arguments)).apply(this, arguments);
            };
          }
          return _makeFlat(false)(map(fn, monad));
        }));
        var cond = _curry1(function cond(pairs) {
          var arity = reduce(max, 0, map(function(pair) {
            return pair[0].length;
          }, pairs));
          return _arity(arity, function() {
            var idx = 0;
            while (idx < pairs.length) {
              if (pairs[idx][0].apply(this, arguments)) {
                return pairs[idx][1].apply(this, arguments);
              }
              idx += 1;
            }
          });
        });
        var constructN = _curry2(function constructN(n, Fn) {
          if (n > 10) {
            throw new Error('Constructor with greater than ten arguments');
          }
          if (n === 0) {
            return function() {
              return new Fn();
            };
          }
          return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
            switch (arguments.length) {
              case 1:
                return new Fn($0);
              case 2:
                return new Fn($0, $1);
              case 3:
                return new Fn($0, $1, $2);
              case 4:
                return new Fn($0, $1, $2, $3);
              case 5:
                return new Fn($0, $1, $2, $3, $4);
              case 6:
                return new Fn($0, $1, $2, $3, $4, $5);
              case 7:
                return new Fn($0, $1, $2, $3, $4, $5, $6);
              case 8:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
              case 9:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
              case 10:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
            }
          }));
        });
        var converge = _curry2(function converge(after, fns) {
          return curryN(reduce(max, 0, pluck('length', fns)), function() {
            var args = arguments;
            var context = this;
            return after.apply(context, _map(function(fn) {
              return fn.apply(context, args);
            }, fns));
          });
        });
        var countBy = reduceBy(function(acc, elem) {
          return acc + 1;
        }, 0);
        var dropRepeatsWith = _curry2(_dispatchable('dropRepeatsWith', _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
          var result = [];
          var idx = 1;
          var len = list.length;
          if (len !== 0) {
            result[0] = list[0];
            while (idx < len) {
              if (!pred(last(result), list[idx])) {
                result[result.length] = list[idx];
              }
              idx += 1;
            }
          }
          return result;
        }));
        var eqBy = _curry3(function eqBy(f, x, y) {
          return equals(f(x), f(y));
        });
        var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
          return equals(obj1[prop], obj2[prop]);
        });
        var groupBy = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
          if (acc == null) {
            acc = [];
          }
          acc.push(item);
          return acc;
        }, null)));
        var indexBy = reduceBy(function(acc, elem) {
          return elem;
        }, null);
        var indexOf = _curry2(function indexOf(target, xs) {
          return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
        });
        var juxt = _curry1(function juxt(fns) {
          return converge(_arrayOf, fns);
        });
        var lens = _curry2(function lens(getter, setter) {
          return function(toFunctorFn) {
            return function(target) {
              return map(function(focus) {
                return setter(focus, target);
              }, toFunctorFn(getter(target)));
            };
          };
        });
        var lensIndex = _curry1(function lensIndex(n) {
          return lens(nth(n), update(n));
        });
        var lensPath = _curry1(function lensPath(p) {
          return lens(path(p), assocPath(p));
        });
        var lensProp = _curry1(function lensProp(k) {
          return lens(prop(k), assoc(k));
        });
        var liftN = _curry2(function liftN(arity, fn) {
          var lifted = curryN(arity, fn);
          return curryN(arity, function() {
            return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
          });
        });
        var mean = _curry1(function mean(list) {
          return sum(list) / list.length;
        });
        var median = _curry1(function median(list) {
          var len = list.length;
          if (len === 0) {
            return NaN;
          }
          var width = 2 - len % 2;
          var idx = (len - width) / 2;
          return mean(_slice(list).sort(function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          }).slice(idx, idx + width));
        });
        var partition = juxt([filter, reject]);
        var pipe = function pipe() {
          if (arguments.length === 0) {
            throw new Error('pipe requires at least one argument');
          }
          return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
        };
        var pipeP = function pipeP() {
          if (arguments.length === 0) {
            throw new Error('pipeP requires at least one argument');
          }
          return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
        };
        var product = reduce(multiply, 1);
        var sequence = _curry2(function sequence(of, traversable) {
          return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function(acc, x) {
            return ap(map(prepend, x), acc);
          }, of([]), traversable);
        });
        var traverse = _curry3(function traverse(of, f, traversable) {
          return sequence(of, map(f, traversable));
        });
        var unnest = chain(_identity);
        var _contains = function _contains(a, list) {
          return _indexOf(list, a, 0) >= 0;
        };
        var _toString = function _toString(x, seen) {
          var recur = function recur(y) {
            var xs = seen.concat([x]);
            return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
          };
          var mapPairs = function(obj, keys) {
            return _map(function(k) {
              return _quote(k) + ': ' + recur(obj[k]);
            }, keys.slice().sort());
          };
          switch (Object.prototype.toString.call(x)) {
            case '[object Arguments]':
              return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
            case '[object Array]':
              return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) {
                return /^\d+$/.test(k);
              }, keys(x)))).join(', ') + ']';
            case '[object Boolean]':
              return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
            case '[object Date]':
              return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
            case '[object Null]':
              return 'null';
            case '[object Number]':
              return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
            case '[object String]':
              return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
            case '[object Undefined]':
              return 'undefined';
            default:
              if (typeof x.toString === 'function') {
                var repr = x.toString();
                if (repr !== '[object Object]') {
                  return repr;
                }
              }
              return '{' + mapPairs(x, keys(x)).join(', ') + '}';
          }
        };
        var compose = function compose() {
          if (arguments.length === 0) {
            throw new Error('compose requires at least one argument');
          }
          return pipe.apply(this, reverse(arguments));
        };
        var composeK = function composeK() {
          return compose.apply(this, prepend(identity, map(chain, arguments)));
        };
        var composeP = function composeP() {
          if (arguments.length === 0) {
            throw new Error('composeP requires at least one argument');
          }
          return pipeP.apply(this, reverse(arguments));
        };
        var construct = _curry1(function construct(Fn) {
          return constructN(Fn.length, Fn);
        });
        var contains = _curry2(_contains);
        var difference = _curry2(function difference(first, second) {
          var out = [];
          var idx = 0;
          var firstLen = first.length;
          while (idx < firstLen) {
            if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
              out[out.length] = first[idx];
            }
            idx += 1;
          }
          return out;
        });
        var dropRepeats = _curry1(_dispatchable('dropRepeats', _xdropRepeatsWith(equals), dropRepeatsWith(equals)));
        var lift = _curry1(function lift(fn) {
          return liftN(fn.length, fn);
        });
        var omit = _curry2(function omit(names, obj) {
          var result = {};
          for (var prop in obj) {
            if (!_contains(prop, names)) {
              result[prop] = obj[prop];
            }
          }
          return result;
        });
        var pipeK = function pipeK() {
          return composeK.apply(this, reverse(arguments));
        };
        var toString = _curry1(function toString(val) {
          return _toString(val, []);
        });
        var without = _curry2(function(xs, list) {
          return reject(flip(_contains)(xs), list);
        });
        var _Set = function() {
          function _Set() {
            this._nativeSet = typeof Set === 'function' ? new Set() : null;
            this._items = {};
          }
          _Set.prototype.add = function(item) {
            return !hasOrAdd(item, true, this);
          };
          _Set.prototype.has = function(item) {
            return hasOrAdd(item, false, this);
          };
          function hasOrAdd(item, shouldAdd, set) {
            var type = typeof item;
            var prevSize,
                newSize;
            switch (type) {
              case 'string':
              case 'number':
                if (item === 0 && 1 / item === -Infinity) {
                  if (set._items['-0']) {
                    return true;
                  } else {
                    if (shouldAdd) {
                      set._items['-0'] = true;
                    }
                    return false;
                  }
                }
                if (set._nativeSet !== null) {
                  if (shouldAdd) {
                    prevSize = set._nativeSet.size;
                    set._nativeSet.add(item);
                    newSize = set._nativeSet.size;
                    return newSize === prevSize;
                  } else {
                    return set._nativeSet.has(item);
                  }
                } else {
                  if (!(type in set._items)) {
                    if (shouldAdd) {
                      set._items[type] = {};
                      set._items[type][item] = true;
                    }
                    return false;
                  } else if (item in set._items[type]) {
                    return true;
                  } else {
                    if (shouldAdd) {
                      set._items[type][item] = true;
                    }
                    return false;
                  }
                }
              case 'boolean':
                if (type in set._items) {
                  var bIdx = item ? 1 : 0;
                  if (set._items[type][bIdx]) {
                    return true;
                  } else {
                    if (shouldAdd) {
                      set._items[type][bIdx] = true;
                    }
                    return false;
                  }
                } else {
                  if (shouldAdd) {
                    set._items[type] = item ? [false, true] : [true, false];
                  }
                  return false;
                }
              case 'function':
                if (set._nativeSet !== null) {
                  if (shouldAdd) {
                    prevSize = set._nativeSet.size;
                    set._nativeSet.add(item);
                    newSize = set._nativeSet.size;
                    return newSize > prevSize;
                  } else {
                    return set._nativeSet.has(item);
                  }
                } else {
                  if (!(type in set._items)) {
                    if (shouldAdd) {
                      set._items[type] = [item];
                    }
                    return false;
                  }
                  if (!_contains(item, set._items[type])) {
                    if (shouldAdd) {
                      set._items[type].push(item);
                    }
                    return false;
                  }
                  return true;
                }
              case 'undefined':
                if (set._items[type]) {
                  return true;
                } else {
                  if (shouldAdd) {
                    set._items[type] = true;
                  }
                  return false;
                }
              case 'object':
                if (item === null) {
                  if (!set._items['null']) {
                    if (shouldAdd) {
                      set._items['null'] = true;
                    }
                    return false;
                  }
                  return true;
                }
              default:
                type = Object.prototype.toString.call(item);
                if (!(type in set._items)) {
                  if (shouldAdd) {
                    set._items[type] = [item];
                  }
                  return false;
                }
                if (!_contains(item, set._items[type])) {
                  if (shouldAdd) {
                    set._items[type].push(item);
                  }
                  return false;
                }
                return true;
            }
          }
          return _Set;
        }();
        var both = _curry2(function both(f, g) {
          return _isFunction(f) ? function _both() {
            return f.apply(this, arguments) && g.apply(this, arguments);
          } : lift(and)(f, g);
        });
        var complement = lift(not);
        var concat = _curry2(function concat(a, b) {
          if (a == null || !_isFunction(a.concat)) {
            throw new TypeError(toString(a) + ' does not have a method named "concat"');
          }
          if (_isArray(a) && !_isArray(b)) {
            throw new TypeError(toString(b) + ' is not an array');
          }
          return a.concat(b);
        });
        var either = _curry2(function either(f, g) {
          return _isFunction(f) ? function _either() {
            return f.apply(this, arguments) || g.apply(this, arguments);
          } : lift(or)(f, g);
        });
        var invoker = _curry2(function invoker(arity, method) {
          return curryN(arity + 1, function() {
            var target = arguments[arity];
            if (target != null && _isFunction(target[method])) {
              return target[method].apply(target, _slice(arguments, 0, arity));
            }
            throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
          });
        });
        var join = invoker(1, 'join');
        var memoize = _curry1(function memoize(fn) {
          var cache = {};
          return _arity(fn.length, function() {
            var key = toString(arguments);
            if (!_has(key, cache)) {
              cache[key] = fn.apply(this, arguments);
            }
            return cache[key];
          });
        });
        var split = invoker(1, 'split');
        var symmetricDifference = _curry2(function symmetricDifference(list1, list2) {
          return concat(difference(list1, list2), difference(list2, list1));
        });
        var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
          return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
        });
        var test = _curry2(function test(pattern, str) {
          if (!_isRegExp(pattern)) {
            throw new TypeError('\u2018test\u2019 requires a value of type RegExp as its first argument; received ' + toString(pattern));
          }
          return _cloneRegExp(pattern).test(str);
        });
        var toLower = invoker(0, 'toLowerCase');
        var toUpper = invoker(0, 'toUpperCase');
        var uniqBy = _curry2(function uniqBy(fn, list) {
          var set = new _Set();
          var result = [];
          var idx = 0;
          var appliedItem,
              item;
          while (idx < list.length) {
            item = list[idx];
            appliedItem = fn(item);
            if (set.add(appliedItem)) {
              result.push(item);
            }
            idx += 1;
          }
          return result;
        });
        var uniq = uniqBy(identity);
        var intersection = _curry2(function intersection(list1, list2) {
          var lookupList,
              filteredList;
          if (list1.length > list2.length) {
            lookupList = list1;
            filteredList = list2;
          } else {
            lookupList = list2;
            filteredList = list1;
          }
          return uniq(_filter(flip(_contains)(lookupList), filteredList));
        });
        var union = _curry2(compose(uniq, _concat));
        var R = {
          F: F,
          T: T,
          __: __,
          add: add,
          addIndex: addIndex,
          adjust: adjust,
          all: all,
          allPass: allPass,
          always: always,
          and: and,
          any: any,
          anyPass: anyPass,
          ap: ap,
          aperture: aperture,
          append: append,
          apply: apply,
          applySpec: applySpec,
          assoc: assoc,
          assocPath: assocPath,
          binary: binary,
          bind: bind,
          both: both,
          call: call,
          chain: chain,
          clamp: clamp,
          clone: clone,
          comparator: comparator,
          complement: complement,
          compose: compose,
          composeK: composeK,
          composeP: composeP,
          concat: concat,
          cond: cond,
          construct: construct,
          constructN: constructN,
          contains: contains,
          converge: converge,
          countBy: countBy,
          curry: curry,
          curryN: curryN,
          dec: dec,
          defaultTo: defaultTo,
          difference: difference,
          differenceWith: differenceWith,
          dissoc: dissoc,
          dissocPath: dissocPath,
          divide: divide,
          drop: drop,
          dropLast: dropLast,
          dropLastWhile: dropLastWhile,
          dropRepeats: dropRepeats,
          dropRepeatsWith: dropRepeatsWith,
          dropWhile: dropWhile,
          either: either,
          empty: empty,
          eqBy: eqBy,
          eqProps: eqProps,
          equals: equals,
          evolve: evolve,
          filter: filter,
          find: find,
          findIndex: findIndex,
          findLast: findLast,
          findLastIndex: findLastIndex,
          flatten: flatten,
          flip: flip,
          forEach: forEach,
          fromPairs: fromPairs,
          groupBy: groupBy,
          groupWith: groupWith,
          gt: gt,
          gte: gte,
          has: has,
          hasIn: hasIn,
          head: head,
          identical: identical,
          identity: identity,
          ifElse: ifElse,
          inc: inc,
          indexBy: indexBy,
          indexOf: indexOf,
          init: init,
          insert: insert,
          insertAll: insertAll,
          intersection: intersection,
          intersectionWith: intersectionWith,
          intersperse: intersperse,
          into: into,
          invert: invert,
          invertObj: invertObj,
          invoker: invoker,
          is: is,
          isArrayLike: isArrayLike,
          isEmpty: isEmpty,
          isNil: isNil,
          join: join,
          juxt: juxt,
          keys: keys,
          keysIn: keysIn,
          last: last,
          lastIndexOf: lastIndexOf,
          length: length,
          lens: lens,
          lensIndex: lensIndex,
          lensPath: lensPath,
          lensProp: lensProp,
          lift: lift,
          liftN: liftN,
          lt: lt,
          lte: lte,
          map: map,
          mapAccum: mapAccum,
          mapAccumRight: mapAccumRight,
          mapObjIndexed: mapObjIndexed,
          match: match,
          mathMod: mathMod,
          max: max,
          maxBy: maxBy,
          mean: mean,
          median: median,
          memoize: memoize,
          merge: merge,
          mergeAll: mergeAll,
          mergeWith: mergeWith,
          mergeWithKey: mergeWithKey,
          min: min,
          minBy: minBy,
          modulo: modulo,
          multiply: multiply,
          nAry: nAry,
          negate: negate,
          none: none,
          not: not,
          nth: nth,
          nthArg: nthArg,
          objOf: objOf,
          of: of,
          omit: omit,
          once: once,
          or: or,
          over: over,
          pair: pair,
          partial: partial,
          partialRight: partialRight,
          partition: partition,
          path: path,
          pathEq: pathEq,
          pathOr: pathOr,
          pathSatisfies: pathSatisfies,
          pick: pick,
          pickAll: pickAll,
          pickBy: pickBy,
          pipe: pipe,
          pipeK: pipeK,
          pipeP: pipeP,
          pluck: pluck,
          prepend: prepend,
          product: product,
          project: project,
          prop: prop,
          propEq: propEq,
          propIs: propIs,
          propOr: propOr,
          propSatisfies: propSatisfies,
          props: props,
          range: range,
          reduce: reduce,
          reduceBy: reduceBy,
          reduceRight: reduceRight,
          reduceWhile: reduceWhile,
          reduced: reduced,
          reject: reject,
          remove: remove,
          repeat: repeat,
          replace: replace,
          reverse: reverse,
          scan: scan,
          sequence: sequence,
          set: set,
          slice: slice,
          sort: sort,
          sortBy: sortBy,
          split: split,
          splitAt: splitAt,
          splitEvery: splitEvery,
          splitWhen: splitWhen,
          subtract: subtract,
          sum: sum,
          symmetricDifference: symmetricDifference,
          symmetricDifferenceWith: symmetricDifferenceWith,
          tail: tail,
          take: take,
          takeLast: takeLast,
          takeLastWhile: takeLastWhile,
          takeWhile: takeWhile,
          tap: tap,
          test: test,
          times: times,
          toLower: toLower,
          toPairs: toPairs,
          toPairsIn: toPairsIn,
          toString: toString,
          toUpper: toUpper,
          transduce: transduce,
          transpose: transpose,
          traverse: traverse,
          trim: trim,
          tryCatch: tryCatch,
          type: type,
          unapply: unapply,
          unary: unary,
          uncurryN: uncurryN,
          unfold: unfold,
          union: union,
          unionWith: unionWith,
          uniq: uniq,
          uniqBy: uniqBy,
          uniqWith: uniqWith,
          unless: unless,
          unnest: unnest,
          until: until,
          update: update,
          useWith: useWith,
          values: values,
          valuesIn: valuesIn,
          view: view,
          when: when,
          where: where,
          whereEq: whereEq,
          without: without,
          wrap: wrap,
          xprod: xprod,
          zip: zip,
          zipObj: zipObj,
          zipWith: zipWith
        };
        if (typeof exports === 'object') {
          module.exports = R;
        } else if (typeof define === 'function' && define.amd) {
          define(function() {
            return R;
          });
        } else {
          this.R = R;
        }
      }.call(this));
    }, {}],
    2: [function(require, module, exports) {
      var util = require('util');
      var pSlice = Array.prototype.slice;
      var hasOwn = Object.prototype.hasOwnProperty;
      var assert = module.exports = ok;
      assert.AssertionError = function AssertionError(options) {
        this.name = 'AssertionError';
        this.actual = options.actual;
        this.expected = options.expected;
        this.operator = options.operator;
        if (options.message) {
          this.message = options.message;
          this.generatedMessage = false;
        } else {
          this.message = getMessage(this);
          this.generatedMessage = true;
        }
        var stackStartFunction = options.stackStartFunction || fail;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, stackStartFunction);
        } else {
          var err = new Error();
          if (err.stack) {
            var out = err.stack;
            var fn_name = stackStartFunction.name;
            var idx = out.indexOf('\n' + fn_name);
            if (idx >= 0) {
              var next_line = out.indexOf('\n', idx + 1);
              out = out.substring(next_line + 1);
            }
            this.stack = out;
          }
        }
      };
      util.inherits(assert.AssertionError, Error);
      function replacer(key, value) {
        if (util.isUndefined(value)) {
          return '' + value;
        }
        if (util.isNumber(value) && !isFinite(value)) {
          return value.toString();
        }
        if (util.isFunction(value) || util.isRegExp(value)) {
          return value.toString();
        }
        return value;
      }
      function truncate(s, n) {
        if (util.isString(s)) {
          return s.length < n ? s : s.slice(0, n);
        } else {
          return s;
        }
      }
      function getMessage(self) {
        return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
      }
      function fail(actual, expected, message, operator, stackStartFunction) {
        throw new assert.AssertionError({
          message: message,
          actual: actual,
          expected: expected,
          operator: operator,
          stackStartFunction: stackStartFunction
        });
      }
      assert.fail = fail;
      function ok(value, message) {
        if (!value)
          fail(value, true, message, '==', assert.ok);
      }
      assert.ok = ok;
      assert.equal = function equal(actual, expected, message) {
        if (actual != expected)
          fail(actual, expected, message, '==', assert.equal);
      };
      assert.notEqual = function notEqual(actual, expected, message) {
        if (actual == expected) {
          fail(actual, expected, message, '!=', assert.notEqual);
        }
      };
      assert.deepEqual = function deepEqual(actual, expected, message) {
        if (!_deepEqual(actual, expected)) {
          fail(actual, expected, message, 'deepEqual', assert.deepEqual);
        }
      };
      function _deepEqual(actual, expected) {
        if (actual === expected) {
          return true;
        } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
          if (actual.length != expected.length)
            return false;
          for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i])
              return false;
          }
          return true;
        } else if (util.isDate(actual) && util.isDate(expected)) {
          return actual.getTime() === expected.getTime();
        } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
          return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
        } else if (!util.isObject(actual) && !util.isObject(expected)) {
          return actual == expected;
        } else {
          return objEquiv(actual, expected);
        }
      }
      function isArguments(object) {
        return Object.prototype.toString.call(object) == '[object Arguments]';
      }
      function objEquiv(a, b) {
        if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
          return false;
        if (a.prototype !== b.prototype)
          return false;
        if (util.isPrimitive(a) || util.isPrimitive(b)) {
          return a === b;
        }
        var aIsArgs = isArguments(a),
            bIsArgs = isArguments(b);
        if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
          return false;
        if (aIsArgs) {
          a = pSlice.call(a);
          b = pSlice.call(b);
          return _deepEqual(a, b);
        }
        var ka = objectKeys(a),
            kb = objectKeys(b),
            key,
            i;
        if (ka.length != kb.length)
          return false;
        ka.sort();
        kb.sort();
        for (i = ka.length - 1; i >= 0; i--) {
          if (ka[i] != kb[i])
            return false;
        }
        for (i = ka.length - 1; i >= 0; i--) {
          key = ka[i];
          if (!_deepEqual(a[key], b[key]))
            return false;
        }
        return true;
      }
      assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
        if (_deepEqual(actual, expected)) {
          fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
        }
      };
      assert.strictEqual = function strictEqual(actual, expected, message) {
        if (actual !== expected) {
          fail(actual, expected, message, '===', assert.strictEqual);
        }
      };
      assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
        if (actual === expected) {
          fail(actual, expected, message, '!==', assert.notStrictEqual);
        }
      };
      function expectedException(actual, expected) {
        if (!actual || !expected) {
          return false;
        }
        if (Object.prototype.toString.call(expected) == '[object RegExp]') {
          return expected.test(actual);
        } else if (actual instanceof expected) {
          return true;
        } else if (expected.call({}, actual) === true) {
          return true;
        }
        return false;
      }
      function _throws(shouldThrow, block, expected, message) {
        var actual;
        if (util.isString(expected)) {
          message = expected;
          expected = null;
        }
        try {
          block();
        } catch (e) {
          actual = e;
        }
        message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
        if (shouldThrow && !actual) {
          fail(actual, expected, 'Missing expected exception' + message);
        }
        if (!shouldThrow && expectedException(actual, expected)) {
          fail(actual, expected, 'Got unwanted exception' + message);
        }
        if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) {
          throw actual;
        }
      }
      assert.throws = function(block, error, message) {
        _throws.apply(this, [true].concat(pSlice.call(arguments)));
      };
      assert.doesNotThrow = function(block, message) {
        _throws.apply(this, [false].concat(pSlice.call(arguments)));
      };
      assert.ifError = function(err) {
        if (err) {
          throw err;
        }
      };
      var objectKeys = Object.keys || function(obj) {
        var keys = [];
        for (var key in obj) {
          if (hasOwn.call(obj, key))
            keys.push(key);
        }
        return keys;
      };
    }, {"util/": 70}],
    3: [function(require, module, exports) {
      (function(global) {
        ((typeof define === "function" && define.amd && function(m) {
          define("formatio", ["samsam"], m);
        }) || (typeof module === "object" && function(m) {
          module.exports = m(require('samsam'));
        }) || function(m) {
          this.formatio = m(this.samsam);
        })(function(samsam) {
          "use strict";
          var formatio = {
            excludeConstructors: ["Object", /^.$/],
            quoteStrings: true,
            limitChildrenCount: 0
          };
          var hasOwn = Object.prototype.hasOwnProperty;
          var specialObjects = [];
          if (typeof global !== "undefined") {
            specialObjects.push({
              object: global,
              value: "[object global]"
            });
          }
          if (typeof document !== "undefined") {
            specialObjects.push({
              object: document,
              value: "[object HTMLDocument]"
            });
          }
          if (typeof window !== "undefined") {
            specialObjects.push({
              object: window,
              value: "[object Window]"
            });
          }
          function functionName(func) {
            if (!func) {
              return "";
            }
            if (func.displayName) {
              return func.displayName;
            }
            if (func.name) {
              return func.name;
            }
            var matches = func.toString().match(/function\s+([^\(]+)/m);
            return (matches && matches[1]) || "";
          }
          function constructorName(f, object) {
            var name = functionName(object && object.constructor);
            var excludes = f.excludeConstructors || formatio.excludeConstructors || [];
            var i,
                l;
            for (i = 0, l = excludes.length; i < l; ++i) {
              if (typeof excludes[i] === "string" && excludes[i] === name) {
                return "";
              } else if (excludes[i].test && excludes[i].test(name)) {
                return "";
              }
            }
            return name;
          }
          function isCircular(object, objects) {
            if (typeof object !== "object") {
              return false;
            }
            var i,
                l;
            for (i = 0, l = objects.length; i < l; ++i) {
              if (objects[i] === object) {
                return true;
              }
            }
            return false;
          }
          function ascii(f, object, processed, indent) {
            if (typeof object === "string") {
              var qs = f.quoteStrings;
              var quote = typeof qs !== "boolean" || qs;
              return processed || quote ? '"' + object + '"' : object;
            }
            if (typeof object === "function" && !(object instanceof RegExp)) {
              return ascii.func(object);
            }
            processed = processed || [];
            if (isCircular(object, processed)) {
              return "[Circular]";
            }
            if (Object.prototype.toString.call(object) === "[object Array]") {
              return ascii.array.call(f, object, processed);
            }
            if (!object) {
              return String((1 / object) === -Infinity ? "-0" : object);
            }
            if (samsam.isElement(object)) {
              return ascii.element(object);
            }
            if (typeof object.toString === "function" && object.toString !== Object.prototype.toString) {
              return object.toString();
            }
            var i,
                l;
            for (i = 0, l = specialObjects.length; i < l; i++) {
              if (object === specialObjects[i].object) {
                return specialObjects[i].value;
              }
            }
            return ascii.object.call(f, object, processed, indent);
          }
          ascii.func = function(func) {
            return "function " + functionName(func) + "() {}";
          };
          ascii.array = function(array, processed) {
            processed = processed || [];
            processed.push(array);
            var pieces = [];
            var i,
                l;
            l = (this.limitChildrenCount > 0) ? Math.min(this.limitChildrenCount, array.length) : array.length;
            for (i = 0; i < l; ++i) {
              pieces.push(ascii(this, array[i], processed));
            }
            if (l < array.length)
              pieces.push("[... " + (array.length - l) + " more elements]");
            return "[" + pieces.join(", ") + "]";
          };
          ascii.object = function(object, processed, indent) {
            processed = processed || [];
            processed.push(object);
            indent = indent || 0;
            var pieces = [],
                properties = samsam.keys(object).sort();
            var length = 3;
            var prop,
                str,
                obj,
                i,
                k,
                l;
            l = (this.limitChildrenCount > 0) ? Math.min(this.limitChildrenCount, properties.length) : properties.length;
            for (i = 0; i < l; ++i) {
              prop = properties[i];
              obj = object[prop];
              if (isCircular(obj, processed)) {
                str = "[Circular]";
              } else {
                str = ascii(this, obj, processed, indent + 2);
              }
              str = (/\s/.test(prop) ? '"' + prop + '"' : prop) + ": " + str;
              length += str.length;
              pieces.push(str);
            }
            var cons = constructorName(this, object);
            var prefix = cons ? "[" + cons + "] " : "";
            var is = "";
            for (i = 0, k = indent; i < k; ++i) {
              is += " ";
            }
            if (l < properties.length)
              pieces.push("[... " + (properties.length - l) + " more elements]");
            if (length + indent > 80) {
              return prefix + "{\n  " + is + pieces.join(",\n  " + is) + "\n" + is + "}";
            }
            return prefix + "{ " + pieces.join(", ") + " }";
          };
          ascii.element = function(element) {
            var tagName = element.tagName.toLowerCase();
            var attrs = element.attributes,
                attr,
                pairs = [],
                attrName,
                i,
                l,
                val;
            for (i = 0, l = attrs.length; i < l; ++i) {
              attr = attrs.item(i);
              attrName = attr.nodeName.toLowerCase().replace("html:", "");
              val = attr.nodeValue;
              if (attrName !== "contenteditable" || val !== "inherit") {
                if (!!val) {
                  pairs.push(attrName + "=\"" + val + "\"");
                }
              }
            }
            var formatted = "<" + tagName + (pairs.length > 0 ? " " : "");
            var content = element.innerHTML;
            if (content.length > 20) {
              content = content.substr(0, 20) + "[...]";
            }
            var res = formatted + pairs.join(" ") + ">" + content + "</" + tagName + ">";
            return res.replace(/ contentEditable="inherit"/, "");
          };
          function Formatio(options) {
            for (var opt in options) {
              this[opt] = options[opt];
            }
          }
          Formatio.prototype = {
            functionName: functionName,
            configure: function(options) {
              return new Formatio(options);
            },
            constructorName: function(object) {
              return constructorName(this, object);
            },
            ascii: function(object, processed, indent) {
              return ascii(this, object, processed, indent);
            }
          };
          return Formatio.prototype;
        });
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {"samsam": 40}],
    4: [function(require, module, exports) {
      var indexOf = [].indexOf;
      module.exports = function(arr, obj) {
        if (indexOf)
          return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] === obj)
            return i;
        }
        return -1;
      };
    }, {}],
    5: [function(require, module, exports) {
      if (typeof Object.create === 'function') {
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }});
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }, {}],
    6: [function(require, module, exports) {
      "use strict";
      var arbitrary = require('./arbitrary');
      var bless = require('./bless');
      var generator = require('./generator');
      var primitive = require('./primitive');
      var record = require('./record');
      var recordWithEnv = require('./recordWithEnv');
      var shrink = require('./shrink');
      var small = require('./small');
      var string = require('./string');
      var api = {
        arbitrary: {
          small: small.arbitrary,
          bless: bless,
          record: recordWithEnv,
          nonshrink: arbitrary.nonshrink,
          pair: arbitrary.pair,
          either: arbitrary.either,
          unit: arbitrary.unit,
          dict: arbitrary.dict,
          json: arbitrary.json,
          nearray: arbitrary.nearray,
          array: arbitrary.array,
          tuple: arbitrary.tuple,
          sum: arbitrary.sum,
          oneof: arbitrary.oneof,
          recursive: arbitrary.recursive
        },
        generator: {
          small: small.generator,
          record: record.generator
        },
        shrink: {record: record.shrink}
      };
      var k;
      for (k in primitive) {
        api.arbitrary[k] = primitive[k];
      }
      for (k in string) {
        api.arbitrary[k] = string[k];
      }
      for (k in shrink) {
        api.shrink[k] = shrink[k];
      }
      for (k in generator) {
        api.generator[k] = generator[k];
      }
      module.exports = api;
    }, {
      "./arbitrary.js": 7,
      "./bless.js": 11,
      "./generator.js": 18,
      "./primitive.js": 22,
      "./record.js": 24,
      "./recordWithEnv.js": 25,
      "./shrink.js": 27,
      "./small.js": 28,
      "./string.js": 29
    }],
    7: [function(require, module, exports) {
      "use strict";
      var arbitraryAssert = require('./arbitraryAssert');
      var arbitraryBless = require('./arbitraryBless');
      var array = require('./array');
      var assert = require('assert');
      var dict = require('./dict');
      var generator = require('./generator');
      var json = require('./json');
      var pair = require('./pair');
      var show = require('./show');
      var shrink = require('./shrink');
      var utils = require('./utils');
      function nonshrink(arb) {
        arb = utils.force(arb);
        return arbitraryBless({
          generator: arb.generator,
          shrink: shrink.noop,
          show: arb.show
        });
      }
      var unit = arbitraryBless({
        generator: generator.unit,
        shrink: shrink.noop,
        show: show.def
      });
      function either(a, b) {
        a = utils.force(a || json.json);
        b = utils.force(b || json.json);
        arbitraryAssert(a);
        arbitraryAssert(b);
        return arbitraryBless({
          generator: generator.either(a.generator, b.generator),
          shrink: shrink.either(a.shrink, b.shrink),
          show: show.either(a.show, b.show)
        });
      }
      function pairArb(a, b) {
        return pair.pair(a || json.json, b || json.json);
      }
      function tuple(arbs) {
        arbs = arbs.map(utils.force);
        return arbitraryBless({
          generator: generator.tuple(utils.pluck(arbs, "generator")),
          shrink: shrink.tuple(utils.pluck(arbs, "shrink")),
          show: show.tuple(utils.pluck(arbs, "show"))
        });
      }
      function sum(arbs) {
        arbs = arbs.map(utils.force);
        return arbitraryBless({
          generator: generator.sum(utils.pluck(arbs, "generator")),
          shrink: shrink.sum(utils.pluck(arbs, "shrink")),
          show: show.sum(utils.pluck(arbs, "show"))
        });
      }
      function dictArb(arb) {
        return dict.dict(arb || json.json);
      }
      function arrayArb(arb) {
        return array.array(arb || json.json);
      }
      function nearrayArb(arb) {
        return array.nearray(arb || json.json);
      }
      var jsonArb = json.json;
      function oneof() {
        assert(arguments.length !== 0, "oneof: at least one parameter expected");
        var generators = [];
        var append = function(a) {
          generators.push(utils.force(a).generator);
        };
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (utils.isArray(arg)) {
            arg.forEach(append);
          } else {
            append(arg);
          }
        }
        return arbitraryBless({
          generator: generator.oneof(generators),
          shrink: shrink.noop,
          show: show.def
        });
      }
      function recursive(arbZ, arbS) {
        var genZ = arbZ.generator;
        var genS = function(recGen) {
          var recArb = arbitraryBless({
            generator: recGen,
            shrink: shrink.noop,
            show: show.def
          });
          return arbS(recArb).generator;
        };
        var gen = generator.recursive(genZ, genS);
        return arbitraryBless({
          generator: gen,
          shrink: shrink.noop,
          show: show.def
        });
      }
      module.exports = {
        nonshrink: nonshrink,
        pair: pairArb,
        either: either,
        unit: unit,
        dict: dictArb,
        json: jsonArb,
        nearray: nearrayArb,
        array: arrayArb,
        tuple: tuple,
        sum: sum,
        oneof: oneof,
        recursive: recursive
      };
    }, {
      "./arbitraryAssert.js": 8,
      "./arbitraryBless.js": 9,
      "./array.js": 10,
      "./dict.js": 12,
      "./generator.js": 18,
      "./json.js": 19,
      "./pair.js": 21,
      "./show.js": 26,
      "./shrink.js": 27,
      "./utils.js": 33,
      "assert": 2
    }],
    8: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      function arbitraryAssert(arb) {
        assert(arb !== undefined && arb !== null && typeof arb === "object", "arb should be an object");
        assert(typeof arb.generator === "function" && typeof arb.generator.map === "function", "arb.generator should be a function");
        assert(typeof arb.shrink === "function" && typeof arb.shrink.smap === "function", "arb.shrink should be a function");
        assert(typeof arb.show === "function", "arb.show should be a function");
        assert(typeof arb.smap === "function", "arb.smap should be a function");
      }
      module.exports = arbitraryAssert;
    }, {"assert": 2}],
    9: [function(require, module, exports) {
      "use strict";
      var show = require('./show');
      function arbitraryProtoSMap(f, g, newShow) {
        var arb = this;
        return arbitraryBless({
          generator: arb.generator.map(f),
          shrink: arb.shrink.smap(f, g),
          show: newShow || show.def
        });
      }
      function arbitraryBless(arb) {
        arb.smap = arbitraryProtoSMap;
        return arb;
      }
      module.exports = arbitraryBless;
    }, {"./show.js": 26}],
    10: [function(require, module, exports) {
      "use strict";
      var arbitraryAssert = require('./arbitraryAssert');
      var arbitraryBless = require('./arbitraryBless');
      var generator = require('./generator');
      var show = require('./show');
      var shrink = require('./shrink');
      var utils = require('./utils');
      function makeArray(flavour) {
        return function arrayImpl(arb) {
          arb = utils.force(arb);
          arbitraryAssert(arb);
          return arbitraryBless({
            generator: generator[flavour](arb.generator),
            shrink: shrink[flavour](arb.shrink),
            show: show.array(arb.show)
          });
        };
      }
      var array = makeArray("array");
      var nearray = makeArray("nearray");
      module.exports = {
        array: array,
        nearray: nearray
      };
    }, {
      "./arbitraryAssert.js": 8,
      "./arbitraryBless.js": 9,
      "./generator.js": 18,
      "./show.js": 26,
      "./shrink.js": 27,
      "./utils.js": 33
    }],
    11: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      var arbitraryBless = require('./arbitraryBless');
      var generator = require('./generator');
      var show = require('./show');
      var shrink = require('./shrink');
      function bless(arb) {
        assert(arb !== null && typeof arb === "object", "bless: arb should be an object");
        assert(typeof arb.generator === "function", "bless: arb.generator should be a function");
        if (typeof arb.shrink !== "function") {
          arb.shrink = shrink.noop;
        }
        if (typeof arb.show !== "function") {
          arb.show = show.def;
        }
        generator.bless(arb.generator);
        shrink.bless(arb.shrink);
        arbitraryBless(arb);
        return arb;
      }
      module.exports = bless;
    }, {
      "./arbitraryBless.js": 9,
      "./generator.js": 18,
      "./show.js": 26,
      "./shrink.js": 27,
      "assert": 2
    }],
    12: [function(require, module, exports) {
      "use strict";
      var arbitraryAssert = require('./arbitraryAssert');
      var array = require('./array');
      var pair = require('./pair');
      var string = require('./string');
      var utils = require('./utils');
      function makeMapShow(elShow) {
        return function(m) {
          return "{" + Object.keys(m).map(function(k) {
            return k + ": " + elShow(m[k]);
          }).join(", ") + "}";
        };
      }
      function dict(arb) {
        arb = utils.force(arb);
        arbitraryAssert(arb);
        var pairArbitrary = pair.pair(string.string, arb);
        var arrayArbitrary = array.array(pairArbitrary);
        return arrayArbitrary.smap(utils.pairArrayToDict, utils.dictToPairArray, makeMapShow(arb.show));
      }
      module.exports = {dict: dict};
    }, {
      "./arbitraryAssert.js": 8,
      "./array.js": 10,
      "./pair.js": 21,
      "./string.js": 29,
      "./utils.js": 33
    }],
    13: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      function Left(value) {
        this.value = value;
      }
      function Right(value) {
        this.value = value;
      }
      function left(value) {
        return new Left(value);
      }
      function right(value) {
        return new Right(value);
      }
      Left.prototype.either = function lefteither(l) {
        return l(this.value);
      };
      Right.prototype.either = function righteither(l, r) {
        return r(this.value);
      };
      Left.prototype.isEqual = function leftIsEqual(other) {
        assert(other instanceof Left || other instanceof Right, "isEqual: `other` parameter should be either");
        return other instanceof Left && this.value === other.value;
      };
      Right.prototype.isEqual = function rightIsEqual(other) {
        assert(other instanceof Left || other instanceof Right, "isEqual: `other` parameter should be either");
        return other instanceof Right && this.value === other.value;
      };
      Left.prototype.bimap = function leftBimap(f) {
        return new Left(f(this.value));
      };
      Right.prototype.bimap = function rightBimap(f, g) {
        return new Right(g(this.value));
      };
      Left.prototype.first = function leftFirst(f) {
        return new Left(f(this.value));
      };
      Right.prototype.first = function rightFirst() {
        return this;
      };
      Left.prototype.second = function leftSecond() {
        return this;
      };
      Right.prototype.second = function rightSecond(g) {
        return new Right(g(this.value));
      };
      module.exports = {
        left: left,
        right: right
      };
    }, {"assert": 2}],
    14: [function(require, module, exports) {
      "use strict";
      var arbitrary = require('./arbitrary');
      var fn = require('./fn');
      var primitive = require('./primitive');
      var small = require('./small');
      var string = require('./string');
      var utils = require('./utils');
      var environment = utils.merge(primitive, string, {
        pair: arbitrary.pair,
        unit: arbitrary.unit,
        either: arbitrary.either,
        dict: arbitrary.dict,
        array: arbitrary.array,
        nearray: arbitrary.nearray,
        json: arbitrary.json,
        fn: fn.fn,
        fun: fn.fn,
        nonshrink: arbitrary.nonshrink,
        small: small.arbitrary
      });
      module.exports = environment;
    }, {
      "./arbitrary.js": 7,
      "./fn.js": 16,
      "./primitive.js": 22,
      "./small.js": 28,
      "./string.js": 29,
      "./utils.js": 33
    }],
    15: [function(require, module, exports) {
      "use strict";
      var utils = require('./utils');
      function FMap(eq) {
        this.eq = eq || utils.isEqual;
        this.data = [];
      }
      FMap.prototype.contains = function FMapContains(key) {
        for (var i = 0; i < this.data.length; i++) {
          if (this.eq(this.data[i][0], key)) {
            return true;
          }
        }
        return false;
      };
      FMap.prototype.insert = function FMapInsert(key, value) {
        for (var i = 0; i < this.data.length; i++) {
          if (this.eq(this.data[i][0], key)) {
            this.data[i] = [key, value];
            return;
          }
        }
        this.data.push([key, value]);
      };
      FMap.prototype.get = function FMapGet(key) {
        for (var i = 0; i < this.data.length; i++) {
          if (this.eq(this.data[i][0], key)) {
            return this.data[i][1];
          }
        }
      };
      module.exports = FMap;
    }, {"./utils.js": 33}],
    16: [function(require, module, exports) {
      "use strict";
      var arbitraryBless = require('./arbitraryBless');
      var generator = require('./generator');
      var FMap = require('./finitemap');
      var json = require('./json');
      var shrink = require('./shrink');
      var utils = require('./utils');
      function fn(arb) {
        arb = utils.force(arb || json.json);
        return arbitraryBless({
          generator: generator.bless(function(size) {
            var m = new FMap();
            var f = function(arg) {
              if (!m.contains(arg)) {
                var value = arb.generator(size);
                m.insert(arg, value);
              }
              return m.get(arg);
            };
            f.internalMap = m;
            return f;
          }),
          shrink: shrink.noop,
          show: function(f) {
            return "[" + f.internalMap.data.map(function(item) {
              return "" + item[0] + ": " + arb.show(item[1]);
            }).join(", ") + "]";
          }
        });
      }
      module.exports = {
        fn: fn,
        fun: fn
      };
    }, {
      "./arbitraryBless.js": 9,
      "./finitemap.js": 15,
      "./generator.js": 18,
      "./json.js": 19,
      "./shrink.js": 27,
      "./utils.js": 33
    }],
    17: [function(require, module, exports) {
      "use strict";
      var trampa = require('trampa');
      function isPromise(p) {
        return new Object(p) === p && typeof p.then === "function";
      }
      function map(p, g) {
        if (isPromise(p)) {
          return p.then(function(x) {
            return map(x, g);
          });
        } else if (trampa.isTrampoline(p)) {
          return p.jump(function(x) {
            return map(x, g);
          });
        } else {
          return g(p);
        }
      }
      function bind(f, xs, h) {
        var r;
        var exc;
        try {
          r = f.apply(undefined, xs);
        } catch (e) {
          r = false;
          exc = e;
        }
        if (isPromise(r)) {
          return r.then(h, function(e) {
            return h(false, e);
          });
        } else {
          return h(r, exc);
        }
      }
      function run(x) {
        if (isPromise(x)) {
          return x.then(run);
        } else if (trampa.isTrampoline(x)) {
          return run(x.run());
        } else {
          return x;
        }
      }
      function pure(x) {
        if (isPromise(x)) {
          return x;
        } else {
          return trampa.wrap(x);
        }
      }
      module.exports = {
        isPromise: isPromise,
        map: map,
        pure: pure,
        bind: bind,
        run: run
      };
    }, {"trampa": 67}],
    18: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      var either = require('./either');
      var random = require('./random');
      var sum = require('./sum');
      var utils = require('./utils');
      function generatorProtoMap(f) {
        var generator = this;
        generatorAssert(generator);
        return generatorBless(function(size) {
          return f(generator(size));
        });
      }
      function generatorProtoFlatMap(f) {
        var generator = this;
        generatorAssert(generator);
        return generatorBless(function(size) {
          return f(generator(size))(size);
        });
      }
      function generatorAssert(generator) {
        assert(typeof generator === "function", "generator should be a function");
        assert(generator.map === generatorProtoMap, "generator.map should be a function");
        assert(generator.flatmap === generatorProtoFlatMap, "generator.flatmap should be a function");
        assert(generator.flatMap === generatorProtoFlatMap, "generator.flatMap should be a function");
      }
      function generatorBless(generator) {
        generator.map = generatorProtoMap;
        generator.flatmap = generatorProtoFlatMap;
        generator.flatMap = generatorProtoFlatMap;
        return generator;
      }
      function generateConstant(x) {
        return generatorBless(function() {
          return x;
        });
      }
      function generatorCombine() {
        var generators = Array.prototype.slice.call(arguments, 0, -1);
        var f = arguments[arguments.length - 1];
        return generatorBless(function(size) {
          var values = generators.map(function(gen) {
            return gen(size);
          });
          return f.apply(undefined, values);
        });
      }
      function generateOneof(generators) {
        generators.forEach(function(gen) {
          assert(typeof gen === "function");
        });
        var result = generatorBless(function(size) {
          var idx = random(0, generators.length - 1);
          var gen = generators[idx];
          return gen(size);
        });
        return utils.curried2(result, arguments);
      }
      function logsize(size) {
        return Math.max(Math.round(Math.log(size + 1) / Math.log(2), 0));
      }
      function generatorRecursive(genZ, genS) {
        return generatorBless(function(size) {
          function rec(n, sizep) {
            if (n <= 0 || random(0, 3) === 0) {
              return genZ(sizep);
            } else {
              return genS(generatorBless(function(sizeq) {
                return rec(n - 1, sizeq);
              }))(sizep);
            }
          }
          return rec(logsize(size), size);
        });
      }
      function generatePair(genA, genB) {
        var result = generatorBless(function(size) {
          return [genA(size), genB(size)];
        });
        return utils.curried3(result, arguments);
      }
      function generateEither(genA, genB) {
        var result = generatorBless(function(size) {
          var n = random(0, 1);
          switch (n) {
            case 0:
              return either.left(genA(size));
            case 1:
              return either.right(genB(size));
          }
        });
        return utils.curried3(result, arguments);
      }
      var generateUnit = generatorBless(function() {
        return [];
      });
      function generateTuple(gens) {
        var len = gens.length;
        var result = generatorBless(function(size) {
          var r = [];
          for (var i = 0; i < len; i++) {
            r[i] = gens[i](size);
          }
          return r;
        });
        return utils.curried2(result, arguments);
      }
      function generateSum(gens) {
        var len = gens.length;
        var result = generatorBless(function(size) {
          var idx = random(0, len - 1);
          return sum.addend(idx, len, gens[idx](size));
        });
        return utils.curried2(result, arguments);
      }
      function generateArray(gen) {
        var result = generatorBless(function(size) {
          var arrsize = random(0, logsize(size));
          var arr = new Array(arrsize);
          for (var i = 0; i < arrsize; i++) {
            arr[i] = gen(size);
          }
          return arr;
        });
        return utils.curried2(result, arguments);
      }
      function generateNEArray(gen) {
        var result = generatorBless(function(size) {
          var arrsize = random(1, Math.max(logsize(size), 1));
          var arr = new Array(arrsize);
          for (var i = 0; i < arrsize; i++) {
            arr[i] = gen(size);
          }
          return arr;
        });
        return utils.curried2(result, arguments);
      }
      function generateDict(gen) {
        var string = require('./string');
        var pairGen = generatePair(string.string.generator, gen);
        var arrayGen = generateArray(pairGen);
        var result = arrayGen.map(utils.pairArrayToDict);
        return utils.curried2(result, arguments);
      }
      function generateJson(size) {
        return require('./json').json.generator(size);
      }
      module.exports = {
        pair: generatePair,
        either: generateEither,
        unit: generateUnit,
        tuple: generateTuple,
        sum: generateSum,
        array: generateArray,
        nearray: generateNEArray,
        dict: generateDict,
        json: generateJson,
        oneof: generateOneof,
        constant: generateConstant,
        bless: generatorBless,
        combine: generatorCombine,
        recursive: generatorRecursive
      };
    }, {
      "./either.js": 13,
      "./json.js": 19,
      "./random.js": 23,
      "./string.js": 29,
      "./sum.js": 31,
      "./utils.js": 33,
      "assert": 2
    }],
    19: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      var arbitraryBless = require('./arbitraryBless');
      var generator = require('./generator');
      var primitive = require('./primitive');
      var show = require('./show');
      var shrink = require('./shrink');
      var string = require('./string');
      var utils = require('./utils');
      var generateInteger = primitive.integer.generator;
      var generateNumber = primitive.number.generator;
      var generateBool = primitive.bool.generator;
      var generateString = string.string.generator;
      var generateJson = generator.recursive(generator.oneof([generateInteger, generateNumber, generateBool, generateString]), function(gen) {
        return generator.oneof([generator.array(gen), generator.dict(gen)]);
      });
      var shrinkDictJson;
      var shrinkJson;
      function shrinkRecJson(json) {
        if (Array.isArray(json)) {
          return shrink.array(shrinkJson, json);
        } else {
          return shrinkDictJson(json);
        }
      }
      shrinkJson = shrink.bless(function(json) {
        assert(typeof json !== "function");
        switch (typeof json) {
          case "boolean":
            return primitive.bool.shrink(json);
          case "number":
            return primitive.number.shrink(json);
          case "string":
            return string.string.shrink(json);
          default:
            return shrinkRecJson(json);
        }
      });
      shrinkDictJson = (function() {
        var pairShrink = shrink.pair(string.string.shrink, shrinkJson);
        var arrayShrink = shrink.array(pairShrink);
        return arrayShrink.smap(utils.pairArrayToDict, utils.dictToPairArray);
      }());
      var json = arbitraryBless({
        generator: generateJson,
        shrink: shrinkJson,
        show: show.def
      });
      module.exports = {json: json};
    }, {
      "./arbitraryBless.js": 9,
      "./generator.js": 18,
      "./primitive.js": 22,
      "./show.js": 26,
      "./shrink.js": 27,
      "./string.js": 29,
      "./utils.js": 33,
      "assert": 2
    }],
    20: [function(require, module, exports) {
      (function(process) {
        "use strict";
        var assert = require('assert');
        var lazyseq = require('lazy-seq');
        var api = require('./api');
        var either = require('./either');
        var environment = require('./environment');
        var FMap = require('./finitemap');
        var fn = require('./fn');
        var functor = require('./functor');
        var random = require('./random');
        var show = require('./show');
        var shrink = require('./shrink');
        var suchthat = require('./suchthat');
        var sum = require('./sum');
        var typify = require('./typify');
        var utils = require('./utils');
        function shrinkResult(arbs, x, test, size, shrinksN, exc, transform) {
          assert(arbs.length === x.length, "shrinkResult: arbs and x has to be of same size");
          assert(typeof size === "number", "shrinkResult: size should be number");
          assert(typeof shrinksN === "number", "shrinkResult: shrinkN should be number");
          var shrinks = utils.pluck(arbs, "shrink");
          var shows = utils.pluck(arbs, "show");
          var shrinked = shrink.tuple(shrinks, x);
          var shrinkP = lazyseq.fold(shrinked, true, function(y, rest) {
            var t = test(size, y, shrinksN + 1);
            return functor.map(t, function(tprime) {
              return tprime !== true ? tprime : rest();
            });
          });
          return functor.map(shrinkP, function(shrinkPPrime) {
            if (shrinkPPrime === true) {
              var res = {
                counterexample: x,
                counterexamplestr: show.tuple(shows, x),
                shrinks: shrinksN,
                exc: exc
              };
              return transform(res);
            } else {
              return shrinkPPrime;
            }
          });
        }
        function isArbitrary(arb) {
          return (typeof arb === "object" || typeof arb === "function") && typeof arb.generator === "function" && typeof arb.shrink === "function" && typeof arb.show === "function";
        }
        function forall() {
          var args = Array.prototype.slice.call(arguments);
          var gens = args.slice(0, -1);
          var property = args[args.length - 1];
          var env;
          var lastgen = gens[gens.length - 1];
          if (!isArbitrary(lastgen) && typeof lastgen !== "string") {
            env = utils.merge(environment, lastgen);
            gens = gens.slice(0, -1);
          } else {
            env = environment;
          }
          assert(gens.length > 0, "forall requires at least single generator");
          gens = gens.map(function(g) {
            g = typeof g === "string" ? typify.parseTypify(env, g) : g;
            return utils.force(g);
          });
          assert(typeof property === "function", "property should be a function");
          function test(size, x, shrinks) {
            assert(Array.isArray(x), "generators results should be always tuple");
            return functor.bind(property, x, function(r, exc) {
              if (r === true) {
                return true;
              } else if (typeof r === "function") {
                var rRec = r(size);
                return functor.map(rRec, function(rRecPrime) {
                  if (rRecPrime === true) {
                    return true;
                  } else {
                    return shrinkResult(gens, x, test, size, shrinks, exc, function(rr) {
                      return {
                        counterexample: rr.counterexample.concat(rRecPrime.counterexample),
                        counterexamplestr: rr.counterexamplestr,
                        shrinks: rr.shrinks,
                        exc: rr.exc || rRecPrime.exc
                      };
                    });
                  }
                });
              } else {
                return shrinkResult(gens, x, test, size, shrinks, exc || r, utils.identity);
              }
            });
          }
          return function(size) {
            var x = gens.map(function(arb) {
              return arb.generator(size);
            });
            var r = test(size, x, 0);
            return r;
          };
        }
        function formatFailedCase(r, state, includeStack) {
          var msg = "Failed after " + r.tests + " tests and " + r.shrinks + " shrinks. ";
          msg += "rngState: " + (r.rngState || state) + "; ";
          msg += "Counterexample: " + r.counterexamplestr + "; ";
          if (r.exc) {
            if (r.exc instanceof Error) {
              msg += "Exception: " + r.exc.message;
              if (includeStack) {
                msg += "\nStack trace: " + r.exc.stack;
              }
            } else {
              msg += "Error: " + r.exc;
            }
          }
          return msg;
        }
        function findRngState(argv) {
          for (var i = 0; i < argv.length - 1; i++) {
            if (argv[i] === "--jsverifyRngState") {
              return argv[i + 1];
            }
          }
        }
        function check(property, opts) {
          opts = opts || {};
          opts.size = opts.size || 50;
          opts.tests = opts.tests || 100;
          opts.quiet = opts.quiet || false;
          assert(typeof property === "function", "property should be a function");
          var state;
          if (opts.rngState) {
            random.setStateString(opts.rngState);
          } else if (typeof process !== "undefined") {
            var argvState = findRngState(process.argv);
            if (argvState) {
              random.setStateString(argvState);
            }
          }
          function loop(i) {
            state = random.currentStateString();
            if (i > opts.tests) {
              return true;
            }
            var size = random(0, opts.size);
            var r = functor.pure(property(size));
            return functor.map(r, function(rPrime) {
              if (rPrime === true) {
                return loop(i + 1);
              } else {
                rPrime.tests = i;
                if (!opts.quiet) {
                  console.error(formatFailedCase(rPrime, state, true), rPrime.counterexample);
                }
                return rPrime;
              }
            });
          }
          return functor.run(functor.map(loop(1), function(r) {
            if (r === true) {
              if (!opts.quiet) {
                console.info("OK, passed " + opts.tests + " tests");
              }
            } else {
              r.rngState = state;
            }
            return r;
          }));
        }
        function checkThrow(property, opts) {
          opts = opts || {};
          if (opts.quiet === undefined) {
            opts.quiet = true;
          }
          return functor.run(functor.map(check(property, opts), function(r) {
            if (r !== true) {
              if (r.exc instanceof Error) {
                r.exc.message = formatFailedCase(r);
                throw r.exc;
              } else {
                throw new Error(formatFailedCase(r));
              }
            }
          }));
        }
        function bddProperty(name) {
          var args = Array.prototype.slice.call(arguments, 1);
          if (args.length === 1) {
            it(name, function() {
              return functor.run(functor.map(args[0](), function(result) {
                if (typeof result === "function") {
                  return checkThrow(result);
                } else if (result !== true) {
                  throw new Error(name + " doesn't hold");
                }
              }));
            });
          } else {
            var prop = forall.apply(undefined, args);
            it(name, function() {
              return checkThrow(prop);
            });
          }
        }
        function compile(str, env) {
          env = env ? utils.merge(environment, env) : environment;
          return typify.parseTypify(env, str);
        }
        function sampler(arb, size) {
          size = typeof size === "number" ? Math.abs(size) : 10;
          return function(count) {
            if (typeof count === "number") {
              var acc = [];
              count = Math.abs(count);
              for (var i = 0; i < count; i++) {
                acc.push(arb.generator(size));
              }
              return acc;
            } else {
              return arb.generator(size);
            }
          };
        }
        function throws(block, error, message) {
          assert(error === undefined || typeof error === "function", "throws: error parameter must be a constructor");
          assert(message === undefined || typeof message === "string", "throws: message parameter must be a string");
          try {
            block();
            return false;
          } catch (e) {
            if (error !== undefined) {
              if (e instanceof error) {
                return message === undefined || e.message === message;
              } else {
                return false;
              }
            } else {
              return true;
            }
          }
        }
        function assertForall() {
          return checkThrow(forall.apply(null, arguments));
        }
        function checkForall() {
          return check(forall.apply(null, arguments));
        }
        var jsc = {
          forall: forall,
          check: check,
          assert: checkThrow,
          assertForall: assertForall,
          checkForall: checkForall,
          property: bddProperty,
          sampler: sampler,
          throws: throws,
          fn: fn.fn,
          fun: fn.fn,
          suchthat: suchthat.suchthat,
          left: either.left,
          right: either.right,
          addend: sum.addend,
          compile: compile,
          generator: api.generator,
          shrink: api.shrink,
          random: random,
          show: show,
          utils: utils,
          _: {FMap: FMap}
        };
        for (var k in api.arbitrary) {
          jsc[k] = api.arbitrary[k];
        }
        module.exports = jsc;
      }).call(this, require('_process'));
    }, {
      "./api.js": 6,
      "./either.js": 13,
      "./environment.js": 14,
      "./finitemap.js": 15,
      "./fn.js": 16,
      "./functor.js": 17,
      "./random.js": 23,
      "./show.js": 26,
      "./shrink.js": 27,
      "./suchthat.js": 30,
      "./sum.js": 31,
      "./typify.js": 32,
      "./utils.js": 33,
      "_process": 36,
      "assert": 2,
      "lazy-seq": 34
    }],
    21: [function(require, module, exports) {
      "use strict";
      var arbitraryAssert = require('./arbitraryAssert');
      var arbitraryBless = require('./arbitraryBless');
      var generator = require('./generator');
      var show = require('./show');
      var shrink = require('./shrink');
      var utils = require('./utils');
      function pair(a, b) {
        a = utils.force(a);
        b = utils.force(b);
        arbitraryAssert(a);
        arbitraryAssert(b);
        return arbitraryBless({
          generator: generator.pair(a.generator, b.generator),
          shrink: shrink.pair(a.shrink, b.shrink),
          show: show.pair(a.show, b.show)
        });
      }
      module.exports = {pair: pair};
    }, {
      "./arbitraryAssert.js": 8,
      "./arbitraryBless.js": 9,
      "./generator.js": 18,
      "./show.js": 26,
      "./shrink.js": 27,
      "./utils.js": 33
    }],
    22: [function(require, module, exports) {
      "use strict";
      var arbitraryBless = require('./arbitraryBless');
      var assert = require('assert');
      var generator = require('./generator');
      var random = require('./random');
      var show = require('./show');
      var shrink = require('./shrink');
      var utils = require('./utils');
      function extendWithDefault(arb) {
        var def = arb();
        arb.generator = def.generator;
        arb.shrink = def.shrink;
        arb.show = def.show;
        arb.smap = def.smap;
      }
      function numeric(impl) {
        return function(minsize, maxsize) {
          if (arguments.length === 2) {
            var arb = arbitraryBless(impl(maxsize - minsize));
            var to = function to(x) {
              return Math.abs(x) + minsize;
            };
            var from = function from(x) {
              return x - minsize;
            };
            return arb.smap(to, from);
          } else if (arguments.length === 1) {
            return arbitraryBless(impl(minsize));
          } else {
            return arbitraryBless(impl());
          }
        };
      }
      var integer = numeric(function integer(maxsize) {
        return {
          generator: generator.bless(function(size) {
            size = maxsize === undefined ? size : maxsize;
            return random(-size, size);
          }),
          shrink: shrink.bless(function(i) {
            assert(typeof i === "number", "integer.shrink have to be a number");
            i = Math.abs(i);
            if (i === 0) {
              return [];
            } else {
              var arr = [0];
              var j = utils.div2(i);
              var k = Math.max(j, 1);
              while (j < i) {
                arr.push(j);
                arr.push(-j);
                k = Math.max(utils.div2(k), 1);
                j += k;
              }
              return arr;
            }
          }),
          show: show.def
        };
      });
      extendWithDefault(integer);
      function nat(maxsize) {
        return arbitraryBless({
          generator: generator.bless(function(size) {
            size = maxsize === undefined ? size : maxsize;
            return random(0, size);
          }),
          shrink: shrink.bless(function(i) {
            assert(typeof i === "number", "nat.shrink have to be a number");
            var arr = [];
            var j = utils.div2(i);
            var k = Math.max(j, 1);
            while (j < i) {
              arr.push(j);
              k = Math.max(utils.div2(k), 1);
              j += k;
            }
            return arr;
          }),
          show: show.def
        });
      }
      extendWithDefault(nat);
      var number = numeric(function number(maxsize) {
        return {
          generator: generator.bless(function(size) {
            size = maxsize === undefined ? size : maxsize;
            return random.number(-size, size);
          }),
          shrink: shrink.bless(function(x) {
            assert(typeof x === "number", "number.shrink have to be a number");
            if (Math.abs(x) > 1e-6) {
              return [0, x / 2, -x / 2];
            } else {
              return [];
            }
          }),
          show: show.def
        };
      });
      extendWithDefault(number);
      var uint8 = nat(0xff);
      var uint16 = nat(0xffff);
      var uint32 = nat(0xffffffff);
      var int8 = integer(-0x80, 0x7f);
      var int16 = integer(-0x8000, 0x7fff);
      var int32 = integer(-0x80000000, 0x7fffffff);
      var bool = arbitraryBless({
        generator: generator.bless(function() {
          var i = random(0, 1);
          return i === 1;
        }),
        shrink: shrink.bless(function(b) {
          assert(b === true || b === false, "bool.shrink excepts true or false");
          return b === true ? [false] : [];
        }),
        show: show.def
      });
      var datetimeConst = 1416499879495;
      function datetime(from, to) {
        var toDate;
        var fromDate;
        var arb;
        if (arguments.length === 2) {
          toDate = function toDateFn(x) {
            return new Date(x);
          };
          fromDate = function fromDateFn(x) {
            return x.getTime();
          };
          from = fromDate(from);
          to = fromDate(to);
          arb = number(from, to);
          return arb.smap(toDate, fromDate);
        } else {
          toDate = function toDateFn(x) {
            return new Date(x * 768000000 + datetimeConst);
          };
          arb = number;
          return arbitraryBless({
            generator: arb.generator.map(toDate),
            shrink: shrink.noop,
            show: show.def
          });
        }
      }
      extendWithDefault(datetime);
      function elements(args) {
        assert(args.length !== 0, "elements: at least one parameter expected");
        return arbitraryBless({
          generator: generator.bless(function() {
            var i = random(0, args.length - 1);
            return args[i];
          }),
          shrink: shrink.bless(function(x) {
            var idx = args.indexOf(x);
            if (idx <= 0) {
              return [];
            } else {
              return args.slice(0, idx);
            }
          }),
          show: show.def
        });
      }
      var falsy = elements([false, null, undefined, "", 0, NaN]);
      falsy.show = function(v) {
        if (v !== v) {
          return "falsy: NaN";
        } else if (v === "") {
          return "falsy: empty string";
        } else if (v === undefined) {
          return "falsy: undefined";
        } else {
          return "falsy: " + v;
        }
      };
      function constant(x) {
        return arbitraryBless({
          generator: generator.constant(x),
          shrink: shrink.noop,
          show: show.def
        });
      }
      module.exports = {
        integer: integer,
        nat: nat,
        int8: int8,
        int16: int16,
        int32: int32,
        uint8: uint8,
        uint16: uint16,
        uint32: uint32,
        number: number,
        elements: elements,
        bool: bool,
        falsy: falsy,
        constant: constant,
        datetime: datetime
      };
    }, {
      "./arbitraryBless": 9,
      "./generator.js": 18,
      "./random.js": 23,
      "./show.js": 26,
      "./shrink.js": 27,
      "./utils.js": 33,
      "assert": 2
    }],
    23: [function(require, module, exports) {
      "use strict";
      var rc4 = new (require('rc4').RC4small)();
      function randomInteger(min, max) {
        return rc4.random(min, max);
      }
      function randomNumber(min, max) {
        return rc4.randomFloat() * (max - min) + min;
      }
      randomInteger.integer = randomInteger;
      randomInteger.number = randomNumber;
      randomInteger.currentStateString = rc4.currentStateString.bind(rc4);
      randomInteger.setStateString = rc4.setStateString.bind(rc4);
      module.exports = randomInteger;
    }, {"rc4": 39}],
    24: [function(require, module, exports) {
      "use strict";
      var arbitraryBless = require('./arbitraryBless');
      var generator = require('./generator');
      var utils = require('./utils');
      var shrink = require('./shrink');
      function generatorRecord(spec) {
        var keys = Object.keys(spec);
        var result = generator.bless(function(size) {
          var res = {};
          keys.forEach(function(k) {
            res[k] = spec[k](size);
          });
          return res;
        });
        return utils.curried2(result, arguments);
      }
      function shrinkRecord(shrinksRecord) {
        var keys = Object.keys(shrinksRecord);
        var shrinks = keys.map(function(k) {
          return shrinksRecord[k];
        });
        var result = shrink.bless(function(rec) {
          var values = keys.map(function(k) {
            return rec[k];
          });
          var shrinked = shrink.tuple(shrinks, values);
          return shrinked.map(function(s) {
            var res = {};
            keys.forEach(function(k, i) {
              res[k] = s[i];
            });
            return res;
          });
        });
        return utils.curried2(result, arguments);
      }
      function arbitraryRecord(spec) {
        var generatorSpec = {};
        var shrinkSpec = {};
        var showSpec = {};
        Object.keys(spec).forEach(function(k) {
          var arb = utils.force(spec[k]);
          generatorSpec[k] = arb.generator;
          shrinkSpec[k] = arb.shrink;
          showSpec[k] = arb.show;
        });
        return arbitraryBless({
          generator: generatorRecord(generatorSpec),
          shrink: shrinkRecord(shrinkSpec),
          show: function(m) {
            return "{" + Object.keys(m).map(function(k) {
              return k + ": " + showSpec[k](m[k]);
            }).join(", ") + "}";
          }
        });
      }
      module.exports = {
        generator: generatorRecord,
        arbitrary: arbitraryRecord,
        shrink: shrinkRecord
      };
    }, {
      "./arbitraryBless.js": 9,
      "./generator.js": 18,
      "./shrink.js": 27,
      "./utils.js": 33
    }],
    25: [function(require, module, exports) {
      "use strict";
      var environment = require('./environment');
      var record = require('./record');
      var typify = require('./typify');
      var utils = require('./utils');
      function recordWithEnv(spec, userenv) {
        var env = userenv ? utils.merge(environment, userenv) : environment;
        var parsedSpec = {};
        Object.keys(spec).forEach(function(k) {
          var arb = spec[k];
          parsedSpec[k] = typeof arb === "string" ? typify.parseTypify(env, arb) : arb;
        });
        return record.arbitrary(parsedSpec);
      }
      module.exports = recordWithEnv;
    }, {
      "./environment.js": 14,
      "./record.js": 24,
      "./typify.js": 32,
      "./utils.js": 33
    }],
    26: [function(require, module, exports) {
      "use strict";
      var utils = require('./utils');
      function showDef(obj) {
        return JSON.stringify(obj);
      }
      function showPair(showA, showB) {
        var result = function(p) {
          return "(" + showA(p[0]) + ", " + showB(p[1]) + ")";
        };
        return utils.curried3(result, arguments);
      }
      function showEither(showA, showB) {
        function showLeft(value) {
          return "Left(" + showA(value) + ")";
        }
        function showRight(value) {
          return "Right(" + showB(value) + ")";
        }
        var result = function(e) {
          return e.either(showLeft, showRight);
        };
        return utils.curried3(result, arguments);
      }
      function showTuple(shows) {
        var result = function(objs) {
          var strs = [];
          for (var i = 0; i < shows.length; i++) {
            strs.push(shows[i](objs[i]));
          }
          return strs.join("; ");
        };
        return utils.curried2(result, arguments);
      }
      function showSum(shows) {
        var result = function(sum) {
          return sum.fold(function(idx, n, value) {
            return "Sum(" + idx + "/" + n + ": " + shows[idx](value) + ")";
          });
        };
        return utils.curried2(result, arguments);
      }
      function showArray(show) {
        var result = function(arr) {
          return "[" + arr.map(show).join(", ") + "]";
        };
        return utils.curried2(result, arguments);
      }
      module.exports = {
        def: showDef,
        pair: showPair,
        either: showEither,
        tuple: showTuple,
        sum: showSum,
        array: showArray
      };
    }, {"./utils.js": 33}],
    27: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      var either = require('./either');
      var lazyseq = require('lazy-seq');
      var sum = require('./sum');
      var utils = require('./utils');
      function shrinkProtoIsoMap(f, g) {
        var shrink = this;
        return shrinkBless(function(value) {
          return shrink(g(value)).map(f);
        });
      }
      function shrinkBless(shrink) {
        shrink.smap = shrinkProtoIsoMap;
        return shrink;
      }
      var shrinkNoop = shrinkBless(function shrinkNoop() {
        return [];
      });
      function shrinkPair(shrinkA, shrinkB) {
        var result = shrinkBless(function(pair) {
          assert(pair.length === 2, "shrinkPair: pair should be an Array of length 2");
          var a = pair[0];
          var b = pair[1];
          var shrinkedA = shrinkA(a);
          var shrinkedB = shrinkB(b);
          var pairA = shrinkedA.map(function(ap) {
            return [ap, b];
          });
          if (Array.isArray(pairA)) {
            pairA = lazyseq.fromArray(pairA);
          }
          return pairA.append(function() {
            var pairB = shrinkedB.map(function(bp) {
              return [a, bp];
            });
            return pairB;
          });
        });
        return utils.curried3(result, arguments);
      }
      function shrinkEither(shrinkA, shrinkB) {
        function shrinkLeft(value) {
          return shrinkA(value).map(either.left);
        }
        function shrinkRight(value) {
          return shrinkB(value).map(either.right);
        }
        var result = shrinkBless(function(e) {
          return e.either(shrinkLeft, shrinkRight);
        });
        return utils.curried3(result, arguments);
      }
      function fromLinkedList(ll) {
        assert(ll.length === 1 || ll.length === 2, "linked list must be either [] or [x, linkedlist]");
        if (ll.length === 1) {
          return [ll[0]];
        } else {
          return [ll[0]].concat(fromLinkedList(ll[1]));
        }
      }
      function toLinkedList(arr) {
        assert(Array.isArray(arr) && arr.length > 0, "toLinkedList expects non-empty array");
        if (arr.length === 1) {
          return [arr[0]];
        } else {
          return [arr[0], toLinkedList(arr.slice(1))];
        }
      }
      function toSingleton(x) {
        return [x];
      }
      function fromSingleton(a) {
        return a[0];
      }
      function flattenShrink(shrinksLL) {
        if (shrinksLL.length === 1) {
          return shrinksLL[0].smap(toSingleton, fromSingleton);
        } else {
          var head = shrinksLL[0];
          var tail = shrinksLL[1];
          return shrinkPair(head, flattenShrink(tail));
        }
      }
      function shrinkTuple(shrinks) {
        assert(shrinks.length > 0, "shrinkTuple needs > 0 values");
        var shrinksLL = toLinkedList(shrinks);
        var shrink = flattenShrink(shrinksLL);
        var result = shrinkBless(function(tuple) {
          assert(tuple.length === shrinks.length, "shrinkTuple: not-matching params");
          var ll = toLinkedList(tuple);
          return shrink(ll).map(fromLinkedList);
        });
        return utils.curried2(result, arguments);
      }
      function shrinkSum(shrinks) {
        assert(shrinks.length > 0, "shrinkTuple needs > 0 values");
        var result = shrinkBless(function(s) {
          return s.fold(function(idx, len, value) {
            assert(len === shrinks.length, "shrinkSum: not-matching params");
            return shrinks[idx](value).map(function(shrinked) {
              return sum.addend(idx, len, shrinked);
            });
          });
        });
        return utils.curried2(result, arguments);
      }
      function shrinkArrayWithMinimumSize(size) {
        function shrinkArrayImpl(shrink) {
          var result = shrinkBless(function(arr) {
            assert(Array.isArray(arr), "shrinkArrayImpl() expects array, got: " + arr);
            if (arr.length <= size) {
              return lazyseq.nil;
            } else {
              var x = arr[0];
              var xs = arr.slice(1);
              return lazyseq.cons(xs, lazyseq.nil).append(shrink(x).map(function(xp) {
                return [xp].concat(xs);
              })).append(shrinkArrayImpl(shrink, xs).map(function(xsp) {
                return [x].concat(xsp);
              }));
            }
          });
          return utils.curried2(result, arguments);
        }
        return shrinkArrayImpl;
      }
      var shrinkArray = shrinkArrayWithMinimumSize(0);
      var shrinkNEArray = shrinkArrayWithMinimumSize(1);
      module.exports = {
        noop: shrinkNoop,
        pair: shrinkPair,
        either: shrinkEither,
        tuple: shrinkTuple,
        sum: shrinkSum,
        array: shrinkArray,
        nearray: shrinkNEArray,
        bless: shrinkBless
      };
    }, {
      "./either.js": 13,
      "./sum.js": 31,
      "./utils.js": 33,
      "assert": 2,
      "lazy-seq": 34
    }],
    28: [function(require, module, exports) {
      "use strict";
      var generator = require('./generator');
      var arbitraryBless = require('./arbitraryBless');
      var arbitraryAssert = require('./arbitraryAssert');
      var utils = require('./utils');
      function smallGenerator(gen) {
        return generator.bless(function(size) {
          return gen(utils.ilog2(size));
        });
      }
      function smallArbitraryImpl(arb) {
        arbitraryAssert(arb);
        return arbitraryBless({
          generator: smallGenerator(arb.generator),
          shrink: arb.shrink,
          show: arb.show
        });
      }
      function smallArbitrary(arb) {
        if (typeof arb === "function") {
          return function() {
            var resArb = arb.apply(arb, arguments);
            return smallArbitraryImpl(resArb);
          };
        } else {
          return smallArbitraryImpl(arb);
        }
      }
      module.exports = {
        generator: smallGenerator,
        arbitrary: smallArbitrary
      };
    }, {
      "./arbitraryAssert.js": 8,
      "./arbitraryBless.js": 9,
      "./generator.js": 18,
      "./utils.js": 33
    }],
    29: [function(require, module, exports) {
      "use strict";
      var array = require('./array');
      var primitive = require('./primitive');
      var utils = require('./utils');
      function fromCode(code) {
        return String.fromCharCode(code);
      }
      function toCode(c) {
        return c.charCodeAt(0);
      }
      var char = primitive.nat(0xff).smap(fromCode, toCode);
      var asciichar = primitive.integer(0x20, 0x7e).smap(fromCode, toCode);
      var string = array.array(char).smap(utils.charArrayToString, utils.stringToCharArray);
      var nestring = array.nearray(char).smap(utils.charArrayToString, utils.stringToCharArray);
      var asciistring = array.array(asciichar).smap(utils.charArrayToString, utils.stringToCharArray);
      var asciinestring = array.nearray(asciichar).smap(utils.charArrayToString, utils.stringToCharArray);
      module.exports = {
        char: char,
        asciichar: asciichar,
        string: string,
        nestring: nestring,
        asciistring: asciistring,
        asciinestring: asciinestring
      };
    }, {
      "./array.js": 10,
      "./primitive.js": 22,
      "./utils.js": 33
    }],
    30: [function(require, module, exports) {
      "use strict";
      var environment = require('./environment');
      var typify = require('./typify');
      var utils = require('./utils');
      var generator = require('./generator');
      var shrink = require('./shrink');
      function suchthat(arb, userenv, predicate) {
        var env;
        if (arguments.length === 2) {
          predicate = userenv;
          env = environment;
        } else {
          env = utils.merge(environment, userenv);
        }
        arb = typeof arb === "string" ? typify.parseTypify(env, arb) : arb;
        arb = utils.force(arb);
        return {
          generator: generator.bless(function(size) {
            for (var i = 0; ; i++) {
              if (i > 5) {
                i = 0;
                size += 1;
              }
              var x = arb.generator(size);
              if (predicate(x)) {
                return x;
              }
            }
          }),
          shrink: shrink.bless(function(x) {
            return arb.shrink(x).filter(predicate);
          }),
          show: arb.show
        };
      }
      module.exports = {suchthat: suchthat};
    }, {
      "./environment.js": 14,
      "./generator.js": 18,
      "./shrink.js": 27,
      "./typify.js": 32,
      "./utils.js": 33
    }],
    31: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      function Addend(idx, len, value) {
        assert(len > 0, "Addend: 0 < len");
        assert(idx >= 0 && idx < len, "Addend: 0 <= idx < len");
        this.idx = idx;
        this.len = len;
        this.value = value;
      }
      function addend(idx, len, value) {
        return new Addend(idx, len, value);
      }
      Addend.prototype.fold = function(f) {
        return f(this.idx, this.len, this.value);
      };
      module.exports = {addend: addend};
    }, {"assert": 2}],
    32: [function(require, module, exports) {
      "use strict";
      var arbitrary = require('./arbitrary');
      var assert = require('assert');
      var record = require('./record');
      var array = require('./array');
      var fn = require('./fn');
      var typifyParser = require('typify-parser');
      var utils = require('./utils');
      var compileType;
      var compileTypeArray;
      function compileIdent(env, type) {
        var g = env[type.value];
        if (!g) {
          throw new Error("Unknown arbitrary: " + type.value);
        }
        return g;
      }
      function compileApplication(env, type) {
        var callee = compileType(env, type.callee);
        var args = compileTypeArray(env, type.args);
        return callee.apply(undefined, args);
      }
      function compileFunction(env, type) {
        var result = compileType(env, type.result);
        return fn.fn(result);
      }
      function compileBrackets(env, type) {
        var arg = compileType(env, type.arg);
        return array.array(arg);
      }
      function compileDisjunction(env, type) {
        var args = compileTypeArray(env, type.args);
        return arbitrary.sum(args);
      }
      function compileConjunction(env, type) {
        var args = compileTypeArray(env, type.args);
        return arbitrary.tuple(args);
      }
      function compileRecord(env, type) {
        var spec = {};
        Object.keys(type.fields).forEach(function(key) {
          spec[key] = compileType(env, type.fields[key]);
        });
        return record.arbitrary(spec);
      }
      function compileRecursive(env, type) {
        assert(type.arg.type === "disjunction", "recursive type's argument should be disjunction");
        var name = type.name;
        var par = utils.partition(type.arg.args, function(t) {
          return typifyParser.freeVars(t).indexOf(name) === -1;
        });
        var terminal = par[0];
        if (terminal.length === 0) {
          throw new Error("Recursive type without non-recursive branch");
        }
        var terminalArb = compileType(env, {
          type: "disjunction",
          args: terminal
        });
        return arbitrary.recursive(terminalArb, function(arb) {
          var arbEnv = {};
          arbEnv[name] = arb;
          var newEnv = utils.merge(env, arbEnv);
          return compileType(newEnv, type.arg);
        });
      }
      compileType = function compileTypeFn(env, type) {
        switch (type.type) {
          case "ident":
            return compileIdent(env, type);
          case "application":
            return compileApplication(env, type);
          case "function":
            return compileFunction(env, type);
          case "brackets":
            return compileBrackets(env, type);
          case "disjunction":
            return compileDisjunction(env, type);
          case "conjunction":
            return compileConjunction(env, type);
          case "record":
            return compileRecord(env, type);
          case "number":
            return type.value;
          case "recursive":
            return compileRecursive(env, type);
          default:
            throw new Error("Unsupported typify ast type: " + type.type);
        }
      };
      compileTypeArray = function compileTypeArrayFn(env, types) {
        return types.map(function(type) {
          return compileType(env, type);
        });
      };
      function parseTypify(env, str) {
        var type = typifyParser(str);
        return compileType(env, type);
      }
      module.exports = {parseTypify: parseTypify};
    }, {
      "./arbitrary.js": 7,
      "./array.js": 10,
      "./fn.js": 16,
      "./record.js": 24,
      "./utils.js": 33,
      "assert": 2,
      "typify-parser": 68
    }],
    33: [function(require, module, exports) {
      "use strict";
      var isArray = Array.isArray;
      function isObject(o) {
        return new Object(o) === o;
      }
      function isNaN(n) {
        return typeof n === "number" && n !== n;
      }
      function sort(arr) {
        var res = arr.slice();
        res.sort();
        return res;
      }
      function isEqual(a, b) {
        var i;
        if (isNaN(a) && isNaN(b)) {
          return true;
        }
        if (a === b) {
          return true;
        } else if (isArray(a) && isArray(b) && a.length === b.length) {
          for (i = 0; i < a.length; i++) {
            if (!isEqual(a[i], b[i])) {
              return false;
            }
          }
          return true;
        } else if (isObject(a) && isObject(b) && !isArray(a) && !isArray(b)) {
          var akeys = Object.keys(a);
          var bkeys = Object.keys(b);
          if (!isEqual(sort(akeys), sort(bkeys))) {
            return false;
          }
          for (i = 0; i < akeys.length; i++) {
            if (!isEqual(a[akeys[i]], b[akeys[i]])) {
              return false;
            }
          }
          return true;
        }
        return false;
      }
      function isApproxEqual(x, y, opts) {
        opts = opts || {};
        var fnEqual = opts.fnEqual !== false;
        var depth = opts.depth || 5;
        var state = [];
        function loop(a, b, n) {
          if (isNaN(a) && isNaN(b)) {
            return true;
          }
          if (a === b) {
            return true;
          }
          if (n >= depth) {
            return true;
          }
          var i;
          for (i = 0; i < state.length; i++) {
            if (state[i][0] === a && state[i][1] === b) {
              return true;
            }
          }
          state.push([a, b]);
          if (typeof a === "function" && typeof b === "function") {
            return fnEqual;
          }
          if (isArray(a) && isArray(b) && a.length === b.length) {
            for (i = 0; i < a.length; i++) {
              if (!loop(a[i], b[i], n + 1)) {
                return false;
              }
            }
            return true;
          } else if (isObject(a) && isObject(b) && !isArray(a) && !isArray(b)) {
            var akeys = Object.keys(a);
            var bkeys = Object.keys(b);
            if (!loop(sort(akeys), sort(bkeys), n + 1)) {
              return false;
            }
            for (i = 0; i < akeys.length; i++) {
              if (!loop(a[akeys[i]], b[akeys[i]], n + 1)) {
                return false;
              }
            }
            return true;
          }
          return false;
        }
        return loop(x, y, 0);
      }
      function identity(x) {
        return x;
      }
      function pluck(arr, key) {
        return arr.map(function(e) {
          return e[key];
        });
      }
      function force(arb) {
        return (typeof arb === "function") ? arb() : arb;
      }
      function merge() {
        var res = {};
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          var keys = Object.keys(arg);
          for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            res[key] = arg[key];
          }
        }
        return res;
      }
      function div2(x) {
        return Math.floor(x / 2);
      }
      function log2(x) {
        return Math.log(x) / Math.log(2);
      }
      function ilog2(x) {
        return x <= 0 ? 0 : Math.floor(log2(x));
      }
      function curriedN(n) {
        var n1 = n - 1;
        return function curriedNInstance(result, args) {
          if (args.length === n) {
            return result(args[n1]);
          } else {
            return result;
          }
        };
      }
      var curried2 = curriedN(2);
      var curried3 = curriedN(3);
      function charArrayToString(arr) {
        return arr.join("");
      }
      function stringToCharArray(str) {
        return str.split("");
      }
      function pairArrayToDict(arrayOfPairs) {
        var res = {};
        arrayOfPairs.forEach(function(p) {
          res[p[0]] = p[1];
        });
        return res;
      }
      function dictToPairArray(m) {
        var res = [];
        Object.keys(m).forEach(function(k) {
          res.push([k, m[k]]);
        });
        return res;
      }
      function partition(arr, pred) {
        var truthy = [];
        var falsy = [];
        for (var i = 0; i < arr.length; i++) {
          var x = arr[i];
          if (pred(x)) {
            truthy.push(x);
          } else {
            falsy.push(x);
          }
        }
        return [truthy, falsy];
      }
      module.exports = {
        isArray: isArray,
        isObject: isObject,
        isEqual: isEqual,
        isApproxEqual: isApproxEqual,
        identity: identity,
        pluck: pluck,
        force: force,
        merge: merge,
        div2: div2,
        ilog2: ilog2,
        curried2: curried2,
        curried3: curried3,
        charArrayToString: charArrayToString,
        stringToCharArray: stringToCharArray,
        pairArrayToDict: pairArrayToDict,
        dictToPairArray: dictToPairArray,
        partition: partition
      };
    }, {}],
    34: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      var nil = {};
      nil.isNil = true;
      nil.toString = function() {
        return "nil";
      };
      nil.length = function() {
        return 0;
      };
      nil.toArray = function nilToArray() {
        return [];
      };
      nil.fold = function nilFold(x) {
        return x;
      };
      nil.head = function nilHead() {
        throw new Error("nil.head");
      };
      nil.tail = function nilTail() {
        return nil;
      };
      nil.nth = function nilNth(n) {
        assert(typeof n === "number");
        throw new Error("Can't get " + n + "th value of the nil");
      };
      nil.take = function(n) {
        assert(typeof n === "number");
        return nil;
      };
      nil.drop = function(n) {
        assert(typeof n === "number");
        return nil;
      };
      nil.map = function(f) {
        assert(typeof f === "function");
        return nil;
      };
      nil.append = function(seq) {
        if (typeof seq === "function") {
          seq = seq();
        }
        if (Array.isArray(seq)) {
          return fromArray(seq);
        } else {
          return seq;
        }
      };
      nil.filter = function() {
        return nil;
      };
      nil.every = function() {
        return true;
      };
      nil.some = function() {
        return false;
      };
      nil.contains = function() {
        return false;
      };
      nil.containsNot = function() {
        return true;
      };
      function Cons(head, tail) {
        this.headValue = head;
        this.tailValue = tail;
      }
      Cons.prototype.isNil = false;
      Cons.prototype.toString = function() {
        return "Cons(" + this.headValue + ", " + this.tailValue + ")";
      };
      Cons.prototype.length = function() {
        return 1 + this.tail().length();
      };
      Cons.prototype.toArray = function() {
        var ptr = this;
        var acc = [];
        while (ptr !== nil) {
          acc.push(ptr.headValue);
          ptr = ptr.tail();
        }
        return acc;
      };
      Cons.prototype.fold = function consFold(x, f) {
        var self = this;
        return f(this.headValue, function() {
          return self.tail().fold(x, f);
        });
      };
      Cons.prototype.head = function consHead() {
        return this.headValue;
      };
      Cons.prototype.tail = function consTail() {
        return this.tailValue;
      };
      function lazyConsForce() {
        var val = this.tailFn();
        this.tailValue = Array.isArray(val) ? fromArray(val) : val;
        delete this.tail;
        delete this.force;
        return this;
      }
      function lazyConsTail() {
        this.force();
        return this.tailValue;
      }
      function delay(head, tail) {
        assert(typeof tail === "function");
        head.tailFn = tail;
        head.tail = lazyConsTail;
        head.force = lazyConsForce;
        return head;
      }
      function cons(head, tail) {
        if (typeof tail === "function") {
          return delay(new Cons(head), tail);
        } else if (Array.isArray(tail)) {
          return delay(cons(head), function() {
            return fromArray(tail);
          });
        } else {
          return new Cons(head, tail);
        }
      }
      Cons.prototype.nth = function consNth(n) {
        assert(typeof n === "number");
        return n === 0 ? this.headValue : this.tail().nth(n - 1);
      };
      Cons.prototype.take = function consTake(n) {
        assert(typeof n === "number");
        var that = this;
        return n === 0 ? nil : cons(this.headValue, function() {
          return that.tail().take(n - 1);
        });
      };
      Cons.prototype.drop = function consDrop(n) {
        assert(typeof n === "number");
        return n === 0 ? this : this.tail().drop(n - 1);
      };
      Cons.prototype.map = function consMap(f) {
        assert(typeof f === "function");
        var that = this;
        return cons(f(that.headValue), function() {
          return that.tail().map(f);
        });
      };
      Cons.prototype.append = function consAppend(seq) {
        if (seq === nil || (Array.isArray(seq) && seq.length === 0)) {
          return this;
        }
        var that = this;
        return cons(that.headValue, function() {
          return that.tail().append(seq);
        });
      };
      Cons.prototype.filter = function consFilter(p) {
        assert(typeof p === "function");
        var that = this;
        if (p(that.headValue)) {
          return cons(that.headValue, function() {
            return that.tail().filter(p);
          });
        } else {
          return that.tail().filter(p);
        }
      };
      Cons.prototype.every = function consEvery(p) {
        p = p || function(x) {
          return x;
        };
        assert(typeof p === "function");
        var that = this;
        var pHead = p(that.headValue);
        if (!pHead) {
          return pHead;
        } else {
          return that.tail().every(p);
        }
      };
      Cons.prototype.some = function consSome(p) {
        p = p || function(x) {
          return x;
        };
        assert(typeof p === "function");
        var that = this;
        var pHead = p(that.headValue);
        if (pHead) {
          return pHead;
        } else {
          return that.tail().some(p);
        }
      };
      Cons.prototype.contains = function consContains(x) {
        var that = this;
        if (x === that.headValue) {
          return true;
        } else {
          return that.tail().contains(x);
        }
      };
      Cons.prototype.containsNot = function consContainsNot(x) {
        var that = this;
        if (x === that.headValue) {
          return false;
        } else {
          return that.tail().containsNot(x);
        }
      };
      function fromArrayIter(arr, n) {
        if (n < arr.length) {
          return cons(arr[n], function() {
            return fromArrayIter(arr, n + 1);
          });
        } else {
          return nil;
        }
      }
      function fromArray(arr) {
        assert(Array.isArray(arr));
        return fromArrayIter(arr, 0);
      }
      function singleton(x) {
        return fromArray([x]);
      }
      function append() {
        var acc = nil;
        for (var i = 0; i < arguments.length; i++) {
          acc = acc.append(arguments[i]);
        }
        return acc;
      }
      function iterate(x, f) {
        return cons(x, function() {
          return iterate(f(x), f);
        });
      }
      function listFold(list, z, f, n) {
        if (n < list.length) {
          return f(list[n], function() {
            return listFold(list, z, f, n + 1);
          });
        } else {
          return z;
        }
      }
      function fold(list, z, f) {
        if (Array.isArray(list)) {
          return listFold(list, z, f, 0);
        } else {
          return list.fold(z, f);
        }
      }
      module.exports = {
        nil: nil,
        cons: cons,
        append: append,
        fromArray: fromArray,
        singleton: singleton,
        iterate: iterate,
        fold: fold
      };
    }, {"assert": 2}],
    35: [function(require, module, exports) {
      (function(global) {
        (function(global) {
          "use strict";
          var glbl = global;
          global.setTimeout = glbl.setTimeout;
          global.clearTimeout = glbl.clearTimeout;
          global.setInterval = glbl.setInterval;
          global.clearInterval = glbl.clearInterval;
          global.Date = glbl.Date;
          if ('setImmediate' in global) {
            global.setImmediate = glbl.setImmediate;
            global.clearImmediate = glbl.clearImmediate;
          }
          var NOOP = function() {
            return undefined;
          };
          var timeoutResult = setTimeout(NOOP, 0);
          var addTimerReturnsObject = typeof timeoutResult === "object";
          clearTimeout(timeoutResult);
          var NativeDate = Date;
          var uniqueTimerId = 1;
          function parseTime(str) {
            if (!str) {
              return 0;
            }
            var strings = str.split(":");
            var l = strings.length,
                i = l;
            var ms = 0,
                parsed;
            if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
              throw new Error("tick only understands numbers and 'h:m:s'");
            }
            while (i--) {
              parsed = parseInt(strings[i], 10);
              if (parsed >= 60) {
                throw new Error("Invalid time " + str);
              }
              ms += parsed * Math.pow(60, (l - i - 1));
            }
            return ms * 1000;
          }
          function getEpoch(epoch) {
            if (!epoch) {
              return 0;
            }
            if (typeof epoch.getTime === "function") {
              return epoch.getTime();
            }
            if (typeof epoch === "number") {
              return epoch;
            }
            throw new TypeError("now should be milliseconds since UNIX epoch");
          }
          function inRange(from, to, timer) {
            return timer && timer.callAt >= from && timer.callAt <= to;
          }
          function mirrorDateProperties(target, source) {
            var prop;
            for (prop in source) {
              if (source.hasOwnProperty(prop)) {
                target[prop] = source[prop];
              }
            }
            if (source.now) {
              target.now = function now() {
                return target.clock.now;
              };
            } else {
              delete target.now;
            }
            if (source.toSource) {
              target.toSource = function toSource() {
                return source.toSource();
              };
            } else {
              delete target.toSource;
            }
            target.toString = function toString() {
              return source.toString();
            };
            target.prototype = source.prototype;
            target.parse = source.parse;
            target.UTC = source.UTC;
            target.prototype.toUTCString = source.prototype.toUTCString;
            return target;
          }
          function createDate() {
            function ClockDate(year, month, date, hour, minute, second, ms) {
              switch (arguments.length) {
                case 0:
                  return new NativeDate(ClockDate.clock.now);
                case 1:
                  return new NativeDate(year);
                case 2:
                  return new NativeDate(year, month);
                case 3:
                  return new NativeDate(year, month, date);
                case 4:
                  return new NativeDate(year, month, date, hour);
                case 5:
                  return new NativeDate(year, month, date, hour, minute);
                case 6:
                  return new NativeDate(year, month, date, hour, minute, second);
                default:
                  return new NativeDate(year, month, date, hour, minute, second, ms);
              }
            }
            return mirrorDateProperties(ClockDate, NativeDate);
          }
          function addTimer(clock, timer) {
            if (timer.func === undefined) {
              throw new Error("Callback must be provided to timer calls");
            }
            if (!clock.timers) {
              clock.timers = {};
            }
            timer.id = uniqueTimerId++;
            timer.createdAt = clock.now;
            timer.callAt = clock.now + (timer.delay || (clock.duringTick ? 1 : 0));
            clock.timers[timer.id] = timer;
            if (addTimerReturnsObject) {
              return {
                id: timer.id,
                ref: NOOP,
                unref: NOOP
              };
            }
            return timer.id;
          }
          function compareTimers(a, b) {
            if (a.callAt < b.callAt) {
              return -1;
            }
            if (a.callAt > b.callAt) {
              return 1;
            }
            if (a.immediate && !b.immediate) {
              return -1;
            }
            if (!a.immediate && b.immediate) {
              return 1;
            }
            if (a.createdAt < b.createdAt) {
              return -1;
            }
            if (a.createdAt > b.createdAt) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
          }
          function firstTimerInRange(clock, from, to) {
            var timers = clock.timers,
                timer = null,
                id,
                isInRange;
            for (id in timers) {
              if (timers.hasOwnProperty(id)) {
                isInRange = inRange(from, to, timers[id]);
                if (isInRange && (!timer || compareTimers(timer, timers[id]) === 1)) {
                  timer = timers[id];
                }
              }
            }
            return timer;
          }
          function callTimer(clock, timer) {
            var exception;
            if (typeof timer.interval === "number") {
              clock.timers[timer.id].callAt += timer.interval;
            } else {
              delete clock.timers[timer.id];
            }
            try {
              if (typeof timer.func === "function") {
                timer.func.apply(null, timer.args);
              } else {
                eval(timer.func);
              }
            } catch (e) {
              exception = e;
            }
            if (!clock.timers[timer.id]) {
              if (exception) {
                throw exception;
              }
              return;
            }
            if (exception) {
              throw exception;
            }
          }
          function timerType(timer) {
            if (timer.immediate) {
              return "Immediate";
            } else if (typeof timer.interval !== "undefined") {
              return "Interval";
            } else {
              return "Timeout";
            }
          }
          function clearTimer(clock, timerId, ttype) {
            if (!timerId) {
              return;
            }
            if (!clock.timers) {
              clock.timers = [];
            }
            if (typeof timerId === "object") {
              timerId = timerId.id;
            }
            if (clock.timers.hasOwnProperty(timerId)) {
              var timer = clock.timers[timerId];
              if (timerType(timer) === ttype) {
                delete clock.timers[timerId];
              } else {
                throw new Error("Cannot clear timer: timer created with set" + ttype + "() but cleared with clear" + timerType(timer) + "()");
              }
            }
          }
          function uninstall(clock, target) {
            var method,
                i,
                l;
            for (i = 0, l = clock.methods.length; i < l; i++) {
              method = clock.methods[i];
              if (target[method].hadOwnProperty) {
                target[method] = clock["_" + method];
              } else {
                try {
                  delete target[method];
                } catch (ignore) {}
              }
            }
            clock.methods = [];
          }
          function hijackMethod(target, method, clock) {
            var prop;
            clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(target, method);
            clock["_" + method] = target[method];
            if (method === "Date") {
              var date = mirrorDateProperties(clock[method], target[method]);
              target[method] = date;
            } else {
              target[method] = function() {
                return clock[method].apply(clock, arguments);
              };
              for (prop in clock[method]) {
                if (clock[method].hasOwnProperty(prop)) {
                  target[method][prop] = clock[method][prop];
                }
              }
            }
            target[method].clock = clock;
          }
          var timers = {
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            setImmediate: global.setImmediate,
            clearImmediate: global.clearImmediate,
            setInterval: setInterval,
            clearInterval: clearInterval,
            Date: Date
          };
          var keys = Object.keys || function(obj) {
            var ks = [],
                key;
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                ks.push(key);
              }
            }
            return ks;
          };
          exports.timers = timers;
          function createClock(now) {
            var clock = {
              now: getEpoch(now),
              timeouts: {},
              Date: createDate()
            };
            clock.Date.clock = clock;
            clock.setTimeout = function setTimeout(func, timeout) {
              return addTimer(clock, {
                func: func,
                args: Array.prototype.slice.call(arguments, 2),
                delay: timeout
              });
            };
            clock.clearTimeout = function clearTimeout(timerId) {
              return clearTimer(clock, timerId, "Timeout");
            };
            clock.setInterval = function setInterval(func, timeout) {
              return addTimer(clock, {
                func: func,
                args: Array.prototype.slice.call(arguments, 2),
                delay: timeout,
                interval: timeout
              });
            };
            clock.clearInterval = function clearInterval(timerId) {
              return clearTimer(clock, timerId, "Interval");
            };
            clock.setImmediate = function setImmediate(func) {
              return addTimer(clock, {
                func: func,
                args: Array.prototype.slice.call(arguments, 1),
                immediate: true
              });
            };
            clock.clearImmediate = function clearImmediate(timerId) {
              return clearTimer(clock, timerId, "Immediate");
            };
            clock.tick = function tick(ms) {
              ms = typeof ms === "number" ? ms : parseTime(ms);
              var tickFrom = clock.now,
                  tickTo = clock.now + ms,
                  previous = clock.now;
              var timer = firstTimerInRange(clock, tickFrom, tickTo);
              var oldNow;
              clock.duringTick = true;
              var firstException;
              while (timer && tickFrom <= tickTo) {
                if (clock.timers[timer.id]) {
                  tickFrom = clock.now = timer.callAt;
                  try {
                    oldNow = clock.now;
                    callTimer(clock, timer);
                    if (oldNow !== clock.now) {
                      tickFrom += clock.now - oldNow;
                      tickTo += clock.now - oldNow;
                      previous += clock.now - oldNow;
                    }
                  } catch (e) {
                    firstException = firstException || e;
                  }
                }
                timer = firstTimerInRange(clock, previous, tickTo);
                previous = tickFrom;
              }
              clock.duringTick = false;
              clock.now = tickTo;
              if (firstException) {
                throw firstException;
              }
              return clock.now;
            };
            clock.reset = function reset() {
              clock.timers = {};
            };
            clock.setSystemTime = function setSystemTime(now) {
              var newNow = getEpoch(now);
              var difference = newNow - clock.now;
              clock.now = newNow;
              for (var id in clock.timers) {
                if (clock.timers.hasOwnProperty(id)) {
                  var timer = clock.timers[id];
                  timer.createdAt += difference;
                  timer.callAt += difference;
                }
              }
            };
            return clock;
          }
          exports.createClock = createClock;
          exports.install = function install(target, now, toFake) {
            var i,
                l;
            if (typeof target === "number") {
              toFake = now;
              now = target;
              target = null;
            }
            if (!target) {
              target = global;
            }
            var clock = createClock(now);
            clock.uninstall = function() {
              uninstall(clock, target);
            };
            clock.methods = toFake || [];
            if (clock.methods.length === 0) {
              clock.methods = keys(timers);
            }
            for (i = 0, l = clock.methods.length; i < l; i++) {
              hijackMethod(target, clock.methods[i], clock);
            }
            return clock;
          };
        }(global || this));
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    36: [function(require, module, exports) {
      var process = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      (function() {
        try {
          cachedSetTimeout = setTimeout;
        } catch (e) {
          cachedSetTimeout = function() {
            throw new Error('setTimeout is not defined');
          };
        }
        try {
          cachedClearTimeout = clearTimeout;
        } catch (e) {
          cachedClearTimeout = function() {
            throw new Error('clearTimeout is not defined');
          };
        }
      }());
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = '';
      process.versions = {};
      function noop() {}
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.binding = function(name) {
        throw new Error('process.binding is not supported');
      };
      process.cwd = function() {
        return '/';
      };
      process.chdir = function(dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function() {
        return 0;
      };
    }, {}],
    37: [function(require, module, exports) {
      (function(process) {
        (function(definition) {
          "use strict";
          if (typeof bootstrap === "function") {
            bootstrap("promise", definition);
          } else if (typeof exports === "object" && typeof module === "object") {
            module.exports = definition();
          } else if (typeof define === "function" && define.amd) {
            define(definition);
          } else if (typeof ses !== "undefined") {
            if (!ses.ok()) {
              return;
            } else {
              ses.makeQ = definition;
            }
          } else if (typeof window !== "undefined" || typeof self !== "undefined") {
            var global = typeof window !== "undefined" ? window : self;
            var previousQ = global.Q;
            global.Q = definition();
            global.Q.noConflict = function() {
              global.Q = previousQ;
              return this;
            };
          } else {
            throw new Error("This environment was not anticipated by Q. Please file a bug.");
          }
        })(function() {
          "use strict";
          var hasStacks = false;
          try {
            throw new Error();
          } catch (e) {
            hasStacks = !!e.stack;
          }
          var qStartingLine = captureLine();
          var qFileName;
          var noop = function() {};
          var nextTick = (function() {
            var head = {
              task: void 0,
              next: null
            };
            var tail = head;
            var flushing = false;
            var requestTick = void 0;
            var isNodeJS = false;
            var laterQueue = [];
            function flush() {
              var task,
                  domain;
              while (head.next) {
                head = head.next;
                task = head.task;
                head.task = void 0;
                domain = head.domain;
                if (domain) {
                  head.domain = void 0;
                  domain.enter();
                }
                runSingle(task, domain);
              }
              while (laterQueue.length) {
                task = laterQueue.pop();
                runSingle(task);
              }
              flushing = false;
            }
            function runSingle(task, domain) {
              try {
                task();
              } catch (e) {
                if (isNodeJS) {
                  if (domain) {
                    domain.exit();
                  }
                  setTimeout(flush, 0);
                  if (domain) {
                    domain.enter();
                  }
                  throw e;
                } else {
                  setTimeout(function() {
                    throw e;
                  }, 0);
                }
              }
              if (domain) {
                domain.exit();
              }
            }
            nextTick = function(task) {
              tail = tail.next = {
                task: task,
                domain: isNodeJS && process.domain,
                next: null
              };
              if (!flushing) {
                flushing = true;
                requestTick();
              }
            };
            if (typeof process === "object" && process.toString() === "[object process]" && process.nextTick) {
              isNodeJS = true;
              requestTick = function() {
                process.nextTick(flush);
              };
            } else if (typeof setImmediate === "function") {
              if (typeof window !== "undefined") {
                requestTick = setImmediate.bind(window, flush);
              } else {
                requestTick = function() {
                  setImmediate(flush);
                };
              }
            } else if (typeof MessageChannel !== "undefined") {
              var channel = new MessageChannel();
              channel.port1.onmessage = function() {
                requestTick = requestPortTick;
                channel.port1.onmessage = flush;
                flush();
              };
              var requestPortTick = function() {
                channel.port2.postMessage(0);
              };
              requestTick = function() {
                setTimeout(flush, 0);
                requestPortTick();
              };
            } else {
              requestTick = function() {
                setTimeout(flush, 0);
              };
            }
            nextTick.runAfter = function(task) {
              laterQueue.push(task);
              if (!flushing) {
                flushing = true;
                requestTick();
              }
            };
            return nextTick;
          })();
          var call = Function.call;
          function uncurryThis(f) {
            return function() {
              return call.apply(f, arguments);
            };
          }
          var array_slice = uncurryThis(Array.prototype.slice);
          var array_reduce = uncurryThis(Array.prototype.reduce || function(callback, basis) {
            var index = 0,
                length = this.length;
            if (arguments.length === 1) {
              do {
                if (index in this) {
                  basis = this[index++];
                  break;
                }
                if (++index >= length) {
                  throw new TypeError();
                }
              } while (1);
            }
            for (; index < length; index++) {
              if (index in this) {
                basis = callback(basis, this[index], index);
              }
            }
            return basis;
          });
          var array_indexOf = uncurryThis(Array.prototype.indexOf || function(value) {
            for (var i = 0; i < this.length; i++) {
              if (this[i] === value) {
                return i;
              }
            }
            return -1;
          });
          var array_map = uncurryThis(Array.prototype.map || function(callback, thisp) {
            var self = this;
            var collect = [];
            array_reduce(self, function(undefined, value, index) {
              collect.push(callback.call(thisp, value, index, self));
            }, void 0);
            return collect;
          });
          var object_create = Object.create || function(prototype) {
            function Type() {}
            Type.prototype = prototype;
            return new Type();
          };
          var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
          var object_keys = Object.keys || function(object) {
            var keys = [];
            for (var key in object) {
              if (object_hasOwnProperty(object, key)) {
                keys.push(key);
              }
            }
            return keys;
          };
          var object_toString = uncurryThis(Object.prototype.toString);
          function isObject(value) {
            return value === Object(value);
          }
          function isStopIteration(exception) {
            return (object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue);
          }
          var QReturnValue;
          if (typeof ReturnValue !== "undefined") {
            QReturnValue = ReturnValue;
          } else {
            QReturnValue = function(value) {
              this.value = value;
            };
          }
          var STACK_JUMP_SEPARATOR = "From previous event:";
          function makeStackTraceLong(error, promise) {
            if (hasStacks && promise.stack && typeof error === "object" && error !== null && error.stack && error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1) {
              var stacks = [];
              for (var p = promise; !!p; p = p.source) {
                if (p.stack) {
                  stacks.unshift(p.stack);
                }
              }
              stacks.unshift(error.stack);
              var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
              error.stack = filterStackString(concatedStacks);
            }
          }
          function filterStackString(stackString) {
            var lines = stackString.split("\n");
            var desiredLines = [];
            for (var i = 0; i < lines.length; ++i) {
              var line = lines[i];
              if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
                desiredLines.push(line);
              }
            }
            return desiredLines.join("\n");
          }
          function isNodeFrame(stackLine) {
            return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
          }
          function getFileNameAndLineNumber(stackLine) {
            var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
            if (attempt1) {
              return [attempt1[1], Number(attempt1[2])];
            }
            var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
            if (attempt2) {
              return [attempt2[1], Number(attempt2[2])];
            }
            var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
            if (attempt3) {
              return [attempt3[1], Number(attempt3[2])];
            }
          }
          function isInternalFrame(stackLine) {
            var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
            if (!fileNameAndLineNumber) {
              return false;
            }
            var fileName = fileNameAndLineNumber[0];
            var lineNumber = fileNameAndLineNumber[1];
            return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
          }
          function captureLine() {
            if (!hasStacks) {
              return;
            }
            try {
              throw new Error();
            } catch (e) {
              var lines = e.stack.split("\n");
              var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
              var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
              if (!fileNameAndLineNumber) {
                return;
              }
              qFileName = fileNameAndLineNumber[0];
              return fileNameAndLineNumber[1];
            }
          }
          function deprecate(callback, name, alternative) {
            return function() {
              if (typeof console !== "undefined" && typeof console.warn === "function") {
                console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
              }
              return callback.apply(callback, arguments);
            };
          }
          function Q(value) {
            if (value instanceof Promise) {
              return value;
            }
            if (isPromiseAlike(value)) {
              return coerce(value);
            } else {
              return fulfill(value);
            }
          }
          Q.resolve = Q;
          Q.nextTick = nextTick;
          Q.longStackSupport = false;
          if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
            Q.longStackSupport = true;
          }
          Q.defer = defer;
          function defer() {
            var messages = [],
                progressListeners = [],
                resolvedPromise;
            var deferred = object_create(defer.prototype);
            var promise = object_create(Promise.prototype);
            promise.promiseDispatch = function(resolve, op, operands) {
              var args = array_slice(arguments);
              if (messages) {
                messages.push(args);
                if (op === "when" && operands[1]) {
                  progressListeners.push(operands[1]);
                }
              } else {
                Q.nextTick(function() {
                  resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
                });
              }
            };
            promise.valueOf = function() {
              if (messages) {
                return promise;
              }
              var nearerValue = nearer(resolvedPromise);
              if (isPromise(nearerValue)) {
                resolvedPromise = nearerValue;
              }
              return nearerValue;
            };
            promise.inspect = function() {
              if (!resolvedPromise) {
                return {state: "pending"};
              }
              return resolvedPromise.inspect();
            };
            if (Q.longStackSupport && hasStacks) {
              try {
                throw new Error();
              } catch (e) {
                promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
              }
            }
            function become(newPromise) {
              resolvedPromise = newPromise;
              promise.source = newPromise;
              array_reduce(messages, function(undefined, message) {
                Q.nextTick(function() {
                  newPromise.promiseDispatch.apply(newPromise, message);
                });
              }, void 0);
              messages = void 0;
              progressListeners = void 0;
            }
            deferred.promise = promise;
            deferred.resolve = function(value) {
              if (resolvedPromise) {
                return;
              }
              become(Q(value));
            };
            deferred.fulfill = function(value) {
              if (resolvedPromise) {
                return;
              }
              become(fulfill(value));
            };
            deferred.reject = function(reason) {
              if (resolvedPromise) {
                return;
              }
              become(reject(reason));
            };
            deferred.notify = function(progress) {
              if (resolvedPromise) {
                return;
              }
              array_reduce(progressListeners, function(undefined, progressListener) {
                Q.nextTick(function() {
                  progressListener(progress);
                });
              }, void 0);
            };
            return deferred;
          }
          defer.prototype.makeNodeResolver = function() {
            var self = this;
            return function(error, value) {
              if (error) {
                self.reject(error);
              } else if (arguments.length > 2) {
                self.resolve(array_slice(arguments, 1));
              } else {
                self.resolve(value);
              }
            };
          };
          Q.Promise = promise;
          Q.promise = promise;
          function promise(resolver) {
            if (typeof resolver !== "function") {
              throw new TypeError("resolver must be a function.");
            }
            var deferred = defer();
            try {
              resolver(deferred.resolve, deferred.reject, deferred.notify);
            } catch (reason) {
              deferred.reject(reason);
            }
            return deferred.promise;
          }
          promise.race = race;
          promise.all = all;
          promise.reject = reject;
          promise.resolve = Q;
          Q.passByCopy = function(object) {
            return object;
          };
          Promise.prototype.passByCopy = function() {
            return this;
          };
          Q.join = function(x, y) {
            return Q(x).join(y);
          };
          Promise.prototype.join = function(that) {
            return Q([this, that]).spread(function(x, y) {
              if (x === y) {
                return x;
              } else {
                throw new Error("Can't join: not the same: " + x + " " + y);
              }
            });
          };
          Q.race = race;
          function race(answerPs) {
            return promise(function(resolve, reject) {
              for (var i = 0,
                  len = answerPs.length; i < len; i++) {
                Q(answerPs[i]).then(resolve, reject);
              }
            });
          }
          Promise.prototype.race = function() {
            return this.then(Q.race);
          };
          Q.makePromise = Promise;
          function Promise(descriptor, fallback, inspect) {
            if (fallback === void 0) {
              fallback = function(op) {
                return reject(new Error("Promise does not support operation: " + op));
              };
            }
            if (inspect === void 0) {
              inspect = function() {
                return {state: "unknown"};
              };
            }
            var promise = object_create(Promise.prototype);
            promise.promiseDispatch = function(resolve, op, args) {
              var result;
              try {
                if (descriptor[op]) {
                  result = descriptor[op].apply(promise, args);
                } else {
                  result = fallback.call(promise, op, args);
                }
              } catch (exception) {
                result = reject(exception);
              }
              if (resolve) {
                resolve(result);
              }
            };
            promise.inspect = inspect;
            if (inspect) {
              var inspected = inspect();
              if (inspected.state === "rejected") {
                promise.exception = inspected.reason;
              }
              promise.valueOf = function() {
                var inspected = inspect();
                if (inspected.state === "pending" || inspected.state === "rejected") {
                  return promise;
                }
                return inspected.value;
              };
            }
            return promise;
          }
          Promise.prototype.toString = function() {
            return "[object Promise]";
          };
          Promise.prototype.then = function(fulfilled, rejected, progressed) {
            var self = this;
            var deferred = defer();
            var done = false;
            function _fulfilled(value) {
              try {
                return typeof fulfilled === "function" ? fulfilled(value) : value;
              } catch (exception) {
                return reject(exception);
              }
            }
            function _rejected(exception) {
              if (typeof rejected === "function") {
                makeStackTraceLong(exception, self);
                try {
                  return rejected(exception);
                } catch (newException) {
                  return reject(newException);
                }
              }
              return reject(exception);
            }
            function _progressed(value) {
              return typeof progressed === "function" ? progressed(value) : value;
            }
            Q.nextTick(function() {
              self.promiseDispatch(function(value) {
                if (done) {
                  return;
                }
                done = true;
                deferred.resolve(_fulfilled(value));
              }, "when", [function(exception) {
                if (done) {
                  return;
                }
                done = true;
                deferred.resolve(_rejected(exception));
              }]);
            });
            self.promiseDispatch(void 0, "when", [void 0, function(value) {
              var newValue;
              var threw = false;
              try {
                newValue = _progressed(value);
              } catch (e) {
                threw = true;
                if (Q.onerror) {
                  Q.onerror(e);
                } else {
                  throw e;
                }
              }
              if (!threw) {
                deferred.notify(newValue);
              }
            }]);
            return deferred.promise;
          };
          Q.tap = function(promise, callback) {
            return Q(promise).tap(callback);
          };
          Promise.prototype.tap = function(callback) {
            callback = Q(callback);
            return this.then(function(value) {
              return callback.fcall(value).thenResolve(value);
            });
          };
          Q.when = when;
          function when(value, fulfilled, rejected, progressed) {
            return Q(value).then(fulfilled, rejected, progressed);
          }
          Promise.prototype.thenResolve = function(value) {
            return this.then(function() {
              return value;
            });
          };
          Q.thenResolve = function(promise, value) {
            return Q(promise).thenResolve(value);
          };
          Promise.prototype.thenReject = function(reason) {
            return this.then(function() {
              throw reason;
            });
          };
          Q.thenReject = function(promise, reason) {
            return Q(promise).thenReject(reason);
          };
          Q.nearer = nearer;
          function nearer(value) {
            if (isPromise(value)) {
              var inspected = value.inspect();
              if (inspected.state === "fulfilled") {
                return inspected.value;
              }
            }
            return value;
          }
          Q.isPromise = isPromise;
          function isPromise(object) {
            return object instanceof Promise;
          }
          Q.isPromiseAlike = isPromiseAlike;
          function isPromiseAlike(object) {
            return isObject(object) && typeof object.then === "function";
          }
          Q.isPending = isPending;
          function isPending(object) {
            return isPromise(object) && object.inspect().state === "pending";
          }
          Promise.prototype.isPending = function() {
            return this.inspect().state === "pending";
          };
          Q.isFulfilled = isFulfilled;
          function isFulfilled(object) {
            return !isPromise(object) || object.inspect().state === "fulfilled";
          }
          Promise.prototype.isFulfilled = function() {
            return this.inspect().state === "fulfilled";
          };
          Q.isRejected = isRejected;
          function isRejected(object) {
            return isPromise(object) && object.inspect().state === "rejected";
          }
          Promise.prototype.isRejected = function() {
            return this.inspect().state === "rejected";
          };
          var unhandledReasons = [];
          var unhandledRejections = [];
          var reportedUnhandledRejections = [];
          var trackUnhandledRejections = true;
          function resetUnhandledRejections() {
            unhandledReasons.length = 0;
            unhandledRejections.length = 0;
            if (!trackUnhandledRejections) {
              trackUnhandledRejections = true;
            }
          }
          function trackRejection(promise, reason) {
            if (!trackUnhandledRejections) {
              return;
            }
            if (typeof process === "object" && typeof process.emit === "function") {
              Q.nextTick.runAfter(function() {
                if (array_indexOf(unhandledRejections, promise) !== -1) {
                  process.emit("unhandledRejection", reason, promise);
                  reportedUnhandledRejections.push(promise);
                }
              });
            }
            unhandledRejections.push(promise);
            if (reason && typeof reason.stack !== "undefined") {
              unhandledReasons.push(reason.stack);
            } else {
              unhandledReasons.push("(no stack) " + reason);
            }
          }
          function untrackRejection(promise) {
            if (!trackUnhandledRejections) {
              return;
            }
            var at = array_indexOf(unhandledRejections, promise);
            if (at !== -1) {
              if (typeof process === "object" && typeof process.emit === "function") {
                Q.nextTick.runAfter(function() {
                  var atReport = array_indexOf(reportedUnhandledRejections, promise);
                  if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                  }
                });
              }
              unhandledRejections.splice(at, 1);
              unhandledReasons.splice(at, 1);
            }
          }
          Q.resetUnhandledRejections = resetUnhandledRejections;
          Q.getUnhandledReasons = function() {
            return unhandledReasons.slice();
          };
          Q.stopUnhandledRejectionTracking = function() {
            resetUnhandledRejections();
            trackUnhandledRejections = false;
          };
          resetUnhandledRejections();
          Q.reject = reject;
          function reject(reason) {
            var rejection = Promise({"when": function(rejected) {
                if (rejected) {
                  untrackRejection(this);
                }
                return rejected ? rejected(reason) : this;
              }}, function fallback() {
              return this;
            }, function inspect() {
              return {
                state: "rejected",
                reason: reason
              };
            });
            trackRejection(rejection, reason);
            return rejection;
          }
          Q.fulfill = fulfill;
          function fulfill(value) {
            return Promise({
              "when": function() {
                return value;
              },
              "get": function(name) {
                return value[name];
              },
              "set": function(name, rhs) {
                value[name] = rhs;
              },
              "delete": function(name) {
                delete value[name];
              },
              "post": function(name, args) {
                if (name === null || name === void 0) {
                  return value.apply(void 0, args);
                } else {
                  return value[name].apply(value, args);
                }
              },
              "apply": function(thisp, args) {
                return value.apply(thisp, args);
              },
              "keys": function() {
                return object_keys(value);
              }
            }, void 0, function inspect() {
              return {
                state: "fulfilled",
                value: value
              };
            });
          }
          function coerce(promise) {
            var deferred = defer();
            Q.nextTick(function() {
              try {
                promise.then(deferred.resolve, deferred.reject, deferred.notify);
              } catch (exception) {
                deferred.reject(exception);
              }
            });
            return deferred.promise;
          }
          Q.master = master;
          function master(object) {
            return Promise({"isDef": function() {}}, function fallback(op, args) {
              return dispatch(object, op, args);
            }, function() {
              return Q(object).inspect();
            });
          }
          Q.spread = spread;
          function spread(value, fulfilled, rejected) {
            return Q(value).spread(fulfilled, rejected);
          }
          Promise.prototype.spread = function(fulfilled, rejected) {
            return this.all().then(function(array) {
              return fulfilled.apply(void 0, array);
            }, rejected);
          };
          Q.async = async;
          function async(makeGenerator) {
            return function() {
              function continuer(verb, arg) {
                var result;
                if (typeof StopIteration === "undefined") {
                  try {
                    result = generator[verb](arg);
                  } catch (exception) {
                    return reject(exception);
                  }
                  if (result.done) {
                    return Q(result.value);
                  } else {
                    return when(result.value, callback, errback);
                  }
                } else {
                  try {
                    result = generator[verb](arg);
                  } catch (exception) {
                    if (isStopIteration(exception)) {
                      return Q(exception.value);
                    } else {
                      return reject(exception);
                    }
                  }
                  return when(result, callback, errback);
                }
              }
              var generator = makeGenerator.apply(this, arguments);
              var callback = continuer.bind(continuer, "next");
              var errback = continuer.bind(continuer, "throw");
              return callback();
            };
          }
          Q.spawn = spawn;
          function spawn(makeGenerator) {
            Q.done(Q.async(makeGenerator)());
          }
          Q["return"] = _return;
          function _return(value) {
            throw new QReturnValue(value);
          }
          Q.promised = promised;
          function promised(callback) {
            return function() {
              return spread([this, all(arguments)], function(self, args) {
                return callback.apply(self, args);
              });
            };
          }
          Q.dispatch = dispatch;
          function dispatch(object, op, args) {
            return Q(object).dispatch(op, args);
          }
          Promise.prototype.dispatch = function(op, args) {
            var self = this;
            var deferred = defer();
            Q.nextTick(function() {
              self.promiseDispatch(deferred.resolve, op, args);
            });
            return deferred.promise;
          };
          Q.get = function(object, key) {
            return Q(object).dispatch("get", [key]);
          };
          Promise.prototype.get = function(key) {
            return this.dispatch("get", [key]);
          };
          Q.set = function(object, key, value) {
            return Q(object).dispatch("set", [key, value]);
          };
          Promise.prototype.set = function(key, value) {
            return this.dispatch("set", [key, value]);
          };
          Q.del = Q["delete"] = function(object, key) {
            return Q(object).dispatch("delete", [key]);
          };
          Promise.prototype.del = Promise.prototype["delete"] = function(key) {
            return this.dispatch("delete", [key]);
          };
          Q.mapply = Q.post = function(object, name, args) {
            return Q(object).dispatch("post", [name, args]);
          };
          Promise.prototype.mapply = Promise.prototype.post = function(name, args) {
            return this.dispatch("post", [name, args]);
          };
          Q.send = Q.mcall = Q.invoke = function(object, name) {
            return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
          };
          Promise.prototype.send = Promise.prototype.mcall = Promise.prototype.invoke = function(name) {
            return this.dispatch("post", [name, array_slice(arguments, 1)]);
          };
          Q.fapply = function(object, args) {
            return Q(object).dispatch("apply", [void 0, args]);
          };
          Promise.prototype.fapply = function(args) {
            return this.dispatch("apply", [void 0, args]);
          };
          Q["try"] = Q.fcall = function(object) {
            return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
          };
          Promise.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, array_slice(arguments)]);
          };
          Q.fbind = function(object) {
            var promise = Q(object);
            var args = array_slice(arguments, 1);
            return function fbound() {
              return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
            };
          };
          Promise.prototype.fbind = function() {
            var promise = this;
            var args = array_slice(arguments);
            return function fbound() {
              return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
            };
          };
          Q.keys = function(object) {
            return Q(object).dispatch("keys", []);
          };
          Promise.prototype.keys = function() {
            return this.dispatch("keys", []);
          };
          Q.all = all;
          function all(promises) {
            return when(promises, function(promises) {
              var pendingCount = 0;
              var deferred = defer();
              array_reduce(promises, function(undefined, promise, index) {
                var snapshot;
                if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
                  promises[index] = snapshot.value;
                } else {
                  ++pendingCount;
                  when(promise, function(value) {
                    promises[index] = value;
                    if (--pendingCount === 0) {
                      deferred.resolve(promises);
                    }
                  }, deferred.reject, function(progress) {
                    deferred.notify({
                      index: index,
                      value: progress
                    });
                  });
                }
              }, void 0);
              if (pendingCount === 0) {
                deferred.resolve(promises);
              }
              return deferred.promise;
            });
          }
          Promise.prototype.all = function() {
            return all(this);
          };
          Q.any = any;
          function any(promises) {
            if (promises.length === 0) {
              return Q.resolve();
            }
            var deferred = Q.defer();
            var pendingCount = 0;
            array_reduce(promises, function(prev, current, index) {
              var promise = promises[index];
              pendingCount++;
              when(promise, onFulfilled, onRejected, onProgress);
              function onFulfilled(result) {
                deferred.resolve(result);
              }
              function onRejected() {
                pendingCount--;
                if (pendingCount === 0) {
                  deferred.reject(new Error("Can't get fulfillment value from any promise, all " + "promises were rejected."));
                }
              }
              function onProgress(progress) {
                deferred.notify({
                  index: index,
                  value: progress
                });
              }
            }, undefined);
            return deferred.promise;
          }
          Promise.prototype.any = function() {
            return any(this);
          };
          Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
          function allResolved(promises) {
            return when(promises, function(promises) {
              promises = array_map(promises, Q);
              return when(all(array_map(promises, function(promise) {
                return when(promise, noop, noop);
              })), function() {
                return promises;
              });
            });
          }
          Promise.prototype.allResolved = function() {
            return allResolved(this);
          };
          Q.allSettled = allSettled;
          function allSettled(promises) {
            return Q(promises).allSettled();
          }
          Promise.prototype.allSettled = function() {
            return this.then(function(promises) {
              return all(array_map(promises, function(promise) {
                promise = Q(promise);
                function regardless() {
                  return promise.inspect();
                }
                return promise.then(regardless, regardless);
              }));
            });
          };
          Q.fail = Q["catch"] = function(object, rejected) {
            return Q(object).then(void 0, rejected);
          };
          Promise.prototype.fail = Promise.prototype["catch"] = function(rejected) {
            return this.then(void 0, rejected);
          };
          Q.progress = progress;
          function progress(object, progressed) {
            return Q(object).then(void 0, void 0, progressed);
          }
          Promise.prototype.progress = function(progressed) {
            return this.then(void 0, void 0, progressed);
          };
          Q.fin = Q["finally"] = function(object, callback) {
            return Q(object)["finally"](callback);
          };
          Promise.prototype.fin = Promise.prototype["finally"] = function(callback) {
            callback = Q(callback);
            return this.then(function(value) {
              return callback.fcall().then(function() {
                return value;
              });
            }, function(reason) {
              return callback.fcall().then(function() {
                throw reason;
              });
            });
          };
          Q.done = function(object, fulfilled, rejected, progress) {
            return Q(object).done(fulfilled, rejected, progress);
          };
          Promise.prototype.done = function(fulfilled, rejected, progress) {
            var onUnhandledError = function(error) {
              Q.nextTick(function() {
                makeStackTraceLong(error, promise);
                if (Q.onerror) {
                  Q.onerror(error);
                } else {
                  throw error;
                }
              });
            };
            var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;
            if (typeof process === "object" && process && process.domain) {
              onUnhandledError = process.domain.bind(onUnhandledError);
            }
            promise.then(void 0, onUnhandledError);
          };
          Q.timeout = function(object, ms, error) {
            return Q(object).timeout(ms, error);
          };
          Promise.prototype.timeout = function(ms, error) {
            var deferred = defer();
            var timeoutId = setTimeout(function() {
              if (!error || "string" === typeof error) {
                error = new Error(error || "Timed out after " + ms + " ms");
                error.code = "ETIMEDOUT";
              }
              deferred.reject(error);
            }, ms);
            this.then(function(value) {
              clearTimeout(timeoutId);
              deferred.resolve(value);
            }, function(exception) {
              clearTimeout(timeoutId);
              deferred.reject(exception);
            }, deferred.notify);
            return deferred.promise;
          };
          Q.delay = function(object, timeout) {
            if (timeout === void 0) {
              timeout = object;
              object = void 0;
            }
            return Q(object).delay(timeout);
          };
          Promise.prototype.delay = function(timeout) {
            return this.then(function(value) {
              var deferred = defer();
              setTimeout(function() {
                deferred.resolve(value);
              }, timeout);
              return deferred.promise;
            });
          };
          Q.nfapply = function(callback, args) {
            return Q(callback).nfapply(args);
          };
          Promise.prototype.nfapply = function(args) {
            var deferred = defer();
            var nodeArgs = array_slice(args);
            nodeArgs.push(deferred.makeNodeResolver());
            this.fapply(nodeArgs).fail(deferred.reject);
            return deferred.promise;
          };
          Q.nfcall = function(callback) {
            var args = array_slice(arguments, 1);
            return Q(callback).nfapply(args);
          };
          Promise.prototype.nfcall = function() {
            var nodeArgs = array_slice(arguments);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.fapply(nodeArgs).fail(deferred.reject);
            return deferred.promise;
          };
          Q.nfbind = Q.denodeify = function(callback) {
            var baseArgs = array_slice(arguments, 1);
            return function() {
              var nodeArgs = baseArgs.concat(array_slice(arguments));
              var deferred = defer();
              nodeArgs.push(deferred.makeNodeResolver());
              Q(callback).fapply(nodeArgs).fail(deferred.reject);
              return deferred.promise;
            };
          };
          Promise.prototype.nfbind = Promise.prototype.denodeify = function() {
            var args = array_slice(arguments);
            args.unshift(this);
            return Q.denodeify.apply(void 0, args);
          };
          Q.nbind = function(callback, thisp) {
            var baseArgs = array_slice(arguments, 2);
            return function() {
              var nodeArgs = baseArgs.concat(array_slice(arguments));
              var deferred = defer();
              nodeArgs.push(deferred.makeNodeResolver());
              function bound() {
                return callback.apply(thisp, arguments);
              }
              Q(bound).fapply(nodeArgs).fail(deferred.reject);
              return deferred.promise;
            };
          };
          Promise.prototype.nbind = function() {
            var args = array_slice(arguments, 0);
            args.unshift(this);
            return Q.nbind.apply(void 0, args);
          };
          Q.nmapply = Q.npost = function(object, name, args) {
            return Q(object).npost(name, args);
          };
          Promise.prototype.nmapply = Promise.prototype.npost = function(name, args) {
            var nodeArgs = array_slice(args || []);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
          };
          Q.nsend = Q.nmcall = Q.ninvoke = function(object, name) {
            var nodeArgs = array_slice(arguments, 2);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
          };
          Promise.prototype.nsend = Promise.prototype.nmcall = Promise.prototype.ninvoke = function(name) {
            var nodeArgs = array_slice(arguments, 1);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
          };
          Q.nodeify = nodeify;
          function nodeify(object, nodeback) {
            return Q(object).nodeify(nodeback);
          }
          Promise.prototype.nodeify = function(nodeback) {
            if (nodeback) {
              this.then(function(value) {
                Q.nextTick(function() {
                  nodeback(null, value);
                });
              }, function(error) {
                Q.nextTick(function() {
                  nodeback(error);
                });
              });
            } else {
              return this;
            }
          };
          Q.noConflict = function() {
            throw new Error("Q.noConflict only works when Q is used as a global");
          };
          var qEndingLine = captureLine();
          return Q;
        });
      }).call(this, require('_process'));
    }, {"_process": 36}],
    38: [function(require, module, exports) {
      ;
      (function() {
        'use strict';
        var __ = {'@@functional/placeholder': true};
        var _arity = function _arity(n, fn) {
          switch (n) {
            case 0:
              return function() {
                return fn.apply(this, arguments);
              };
            case 1:
              return function(a0) {
                return fn.apply(this, arguments);
              };
            case 2:
              return function(a0, a1) {
                return fn.apply(this, arguments);
              };
            case 3:
              return function(a0, a1, a2) {
                return fn.apply(this, arguments);
              };
            case 4:
              return function(a0, a1, a2, a3) {
                return fn.apply(this, arguments);
              };
            case 5:
              return function(a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
              };
            case 6:
              return function(a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
              };
            case 7:
              return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
              };
            case 8:
              return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
              };
            case 9:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
              };
            case 10:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
              };
            default:
              throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
          }
        };
        var _cloneRegExp = function _cloneRegExp(pattern) {
          return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
        };
        var _complement = function _complement(f) {
          return function() {
            return !f.apply(this, arguments);
          };
        };
        var _concat = function _concat(set1, set2) {
          set1 = set1 || [];
          set2 = set2 || [];
          var idx;
          var len1 = set1.length;
          var len2 = set2.length;
          var result = [];
          idx = 0;
          while (idx < len1) {
            result[result.length] = set1[idx];
            idx += 1;
          }
          idx = 0;
          while (idx < len2) {
            result[result.length] = set2[idx];
            idx += 1;
          }
          return result;
        };
        var _containsWith = function _containsWith(pred, x, list) {
          var idx = 0,
              len = list.length;
          while (idx < len) {
            if (pred(x, list[idx])) {
              return true;
            }
            idx += 1;
          }
          return false;
        };
        var _curry1 = function _curry1(fn) {
          return function f1(a) {
            if (arguments.length === 0) {
              return f1;
            } else if (a != null && a['@@functional/placeholder'] === true) {
              return f1;
            } else {
              return fn.apply(this, arguments);
            }
          };
        };
        var _curry2 = function _curry2(fn) {
          return function f2(a, b) {
            var n = arguments.length;
            if (n === 0) {
              return f2;
            } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
              return f2;
            } else if (n === 1) {
              return _curry1(function(b) {
                return fn(a, b);
              });
            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
              return f2;
            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
              return _curry1(function(a) {
                return fn(a, b);
              });
            } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
              return _curry1(function(b) {
                return fn(a, b);
              });
            } else {
              return fn(a, b);
            }
          };
        };
        var _curry3 = function _curry3(fn) {
          return function f3(a, b, c) {
            var n = arguments.length;
            if (n === 0) {
              return f3;
            } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
              return f3;
            } else if (n === 1) {
              return _curry2(function(b, c) {
                return fn(a, b, c);
              });
            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
              return f3;
            } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
              return _curry2(function(a, c) {
                return fn(a, b, c);
              });
            } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
              return _curry2(function(b, c) {
                return fn(a, b, c);
              });
            } else if (n === 2) {
              return _curry1(function(c) {
                return fn(a, b, c);
              });
            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
              return f3;
            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
              return _curry2(function(a, b) {
                return fn(a, b, c);
              });
            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
              return _curry2(function(a, c) {
                return fn(a, b, c);
              });
            } else if (n === 3 && b != null && b['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
              return _curry2(function(b, c) {
                return fn(a, b, c);
              });
            } else if (n === 3 && a != null && a['@@functional/placeholder'] === true) {
              return _curry1(function(a) {
                return fn(a, b, c);
              });
            } else if (n === 3 && b != null && b['@@functional/placeholder'] === true) {
              return _curry1(function(b) {
                return fn(a, b, c);
              });
            } else if (n === 3 && c != null && c['@@functional/placeholder'] === true) {
              return _curry1(function(c) {
                return fn(a, b, c);
              });
            } else {
              return fn(a, b, c);
            }
          };
        };
        var _curryN = function _curryN(length, received, fn) {
          return function() {
            var combined = [];
            var argsIdx = 0;
            var left = length;
            var combinedIdx = 0;
            while (combinedIdx < received.length || argsIdx < arguments.length) {
              var result;
              if (combinedIdx < received.length && (received[combinedIdx] == null || received[combinedIdx]['@@functional/placeholder'] !== true || argsIdx >= arguments.length)) {
                result = received[combinedIdx];
              } else {
                result = arguments[argsIdx];
                argsIdx += 1;
              }
              combined[combinedIdx] = result;
              if (result == null || result['@@functional/placeholder'] !== true) {
                left -= 1;
              }
              combinedIdx += 1;
            }
            return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
          };
        };
        var _filter = function _filter(fn, list) {
          var idx = 0,
              len = list.length,
              result = [];
          while (idx < len) {
            if (fn(list[idx])) {
              result[result.length] = list[idx];
            }
            idx += 1;
          }
          return result;
        };
        var _forceReduced = function _forceReduced(x) {
          return {
            '@@transducer/value': x,
            '@@transducer/reduced': true
          };
        };
        var _functionsWith = function _functionsWith(fn) {
          return function(obj) {
            return _filter(function(key) {
              return typeof obj[key] === 'function';
            }, fn(obj));
          };
        };
        var _has = function _has(prop, obj) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        var _identity = function _identity(x) {
          return x;
        };
        var _isArray = Array.isArray || function _isArray(val) {
          return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
        };
        var _isInteger = Number.isInteger || function _isInteger(n) {
          return n << 0 === n;
        };
        var _isNumber = function _isNumber(x) {
          return Object.prototype.toString.call(x) === '[object Number]';
        };
        var _isString = function _isString(x) {
          return Object.prototype.toString.call(x) === '[object String]';
        };
        var _isTransformer = function _isTransformer(obj) {
          return typeof obj['@@transducer/step'] === 'function';
        };
        var _map = function _map(fn, list) {
          var idx = 0,
              len = list.length,
              result = Array(len);
          while (idx < len) {
            result[idx] = fn(list[idx]);
            idx += 1;
          }
          return result;
        };
        var _pipe = function _pipe(f, g) {
          return function() {
            return g.call(this, f.apply(this, arguments));
          };
        };
        var _pipeP = function _pipeP(f, g) {
          return function() {
            var ctx = this;
            return f.apply(ctx, arguments).then(function(x) {
              return g.call(ctx, x);
            });
          };
        };
        var _quote = function _quote(s) {
          return '"' + s.replace(/"/g, '\\"') + '"';
        };
        var _reduced = function _reduced(x) {
          return x && x['@@transducer/reduced'] ? x : {
            '@@transducer/value': x,
            '@@transducer/reduced': true
          };
        };
        var _slice = function _slice(args, from, to) {
          switch (arguments.length) {
            case 1:
              return _slice(args, 0, args.length);
            case 2:
              return _slice(args, from, args.length);
            default:
              var list = [];
              var idx = 0;
              var len = Math.max(0, Math.min(args.length, to) - from);
              while (idx < len) {
                list[idx] = args[from + idx];
                idx += 1;
              }
              return list;
          }
        };
        var _toISOString = function() {
          var pad = function pad(n) {
            return (n < 10 ? '0' : '') + n;
          };
          return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
            return d.toISOString();
          } : function _toISOString(d) {
            return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
          };
        }();
        var _xdropRepeatsWith = function() {
          function XDropRepeatsWith(pred, xf) {
            this.xf = xf;
            this.pred = pred;
            this.lastValue = undefined;
            this.seenFirstValue = false;
          }
          XDropRepeatsWith.prototype['@@transducer/init'] = function() {
            return this.xf['@@transducer/init']();
          };
          XDropRepeatsWith.prototype['@@transducer/result'] = function(result) {
            return this.xf['@@transducer/result'](result);
          };
          XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
            var sameAsLast = false;
            if (!this.seenFirstValue) {
              this.seenFirstValue = true;
            } else if (this.pred(this.lastValue, input)) {
              sameAsLast = true;
            }
            this.lastValue = input;
            return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
          };
          return _curry2(function _xdropRepeatsWith(pred, xf) {
            return new XDropRepeatsWith(pred, xf);
          });
        }();
        var _xfBase = {
          init: function() {
            return this.xf['@@transducer/init']();
          },
          result: function(result) {
            return this.xf['@@transducer/result'](result);
          }
        };
        var _xfilter = function() {
          function XFilter(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XFilter.prototype['@@transducer/init'] = _xfBase.init;
          XFilter.prototype['@@transducer/result'] = _xfBase.result;
          XFilter.prototype['@@transducer/step'] = function(result, input) {
            return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
          };
          return _curry2(function _xfilter(f, xf) {
            return new XFilter(f, xf);
          });
        }();
        var _xfind = function() {
          function XFind(f, xf) {
            this.xf = xf;
            this.f = f;
            this.found = false;
          }
          XFind.prototype['@@transducer/init'] = _xfBase.init;
          XFind.prototype['@@transducer/result'] = function(result) {
            if (!this.found) {
              result = this.xf['@@transducer/step'](result, void 0);
            }
            return this.xf['@@transducer/result'](result);
          };
          XFind.prototype['@@transducer/step'] = function(result, input) {
            if (this.f(input)) {
              this.found = true;
              result = _reduced(this.xf['@@transducer/step'](result, input));
            }
            return result;
          };
          return _curry2(function _xfind(f, xf) {
            return new XFind(f, xf);
          });
        }();
        var _xfindIndex = function() {
          function XFindIndex(f, xf) {
            this.xf = xf;
            this.f = f;
            this.idx = -1;
            this.found = false;
          }
          XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
          XFindIndex.prototype['@@transducer/result'] = function(result) {
            if (!this.found) {
              result = this.xf['@@transducer/step'](result, -1);
            }
            return this.xf['@@transducer/result'](result);
          };
          XFindIndex.prototype['@@transducer/step'] = function(result, input) {
            this.idx += 1;
            if (this.f(input)) {
              this.found = true;
              result = _reduced(this.xf['@@transducer/step'](result, this.idx));
            }
            return result;
          };
          return _curry2(function _xfindIndex(f, xf) {
            return new XFindIndex(f, xf);
          });
        }();
        var _xfindLast = function() {
          function XFindLast(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XFindLast.prototype['@@transducer/init'] = _xfBase.init;
          XFindLast.prototype['@@transducer/result'] = function(result) {
            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
          };
          XFindLast.prototype['@@transducer/step'] = function(result, input) {
            if (this.f(input)) {
              this.last = input;
            }
            return result;
          };
          return _curry2(function _xfindLast(f, xf) {
            return new XFindLast(f, xf);
          });
        }();
        var _xfindLastIndex = function() {
          function XFindLastIndex(f, xf) {
            this.xf = xf;
            this.f = f;
            this.idx = -1;
            this.lastIdx = -1;
          }
          XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
          XFindLastIndex.prototype['@@transducer/result'] = function(result) {
            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
          };
          XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
            this.idx += 1;
            if (this.f(input)) {
              this.lastIdx = this.idx;
            }
            return result;
          };
          return _curry2(function _xfindLastIndex(f, xf) {
            return new XFindLastIndex(f, xf);
          });
        }();
        var _xmap = function() {
          function XMap(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XMap.prototype['@@transducer/init'] = _xfBase.init;
          XMap.prototype['@@transducer/result'] = _xfBase.result;
          XMap.prototype['@@transducer/step'] = function(result, input) {
            return this.xf['@@transducer/step'](result, this.f(input));
          };
          return _curry2(function _xmap(f, xf) {
            return new XMap(f, xf);
          });
        }();
        var _xtake = function() {
          function XTake(n, xf) {
            this.xf = xf;
            this.n = n;
          }
          XTake.prototype['@@transducer/init'] = _xfBase.init;
          XTake.prototype['@@transducer/result'] = _xfBase.result;
          XTake.prototype['@@transducer/step'] = function(result, input) {
            if (this.n === 0) {
              return _reduced(result);
            } else {
              this.n -= 1;
              return this.xf['@@transducer/step'](result, input);
            }
          };
          return _curry2(function _xtake(n, xf) {
            return new XTake(n, xf);
          });
        }();
        var _xtakeWhile = function() {
          function XTakeWhile(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
          XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
          XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
            return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
          };
          return _curry2(function _xtakeWhile(f, xf) {
            return new XTakeWhile(f, xf);
          });
        }();
        var _xwrap = function() {
          function XWrap(fn) {
            this.f = fn;
          }
          XWrap.prototype['@@transducer/init'] = function() {
            throw new Error('init not implemented on XWrap');
          };
          XWrap.prototype['@@transducer/result'] = function(acc) {
            return acc;
          };
          XWrap.prototype['@@transducer/step'] = function(acc, x) {
            return this.f(acc, x);
          };
          return function _xwrap(fn) {
            return new XWrap(fn);
          };
        }();
        var add = _curry2(function add(a, b) {
          return a + b;
        });
        var adjust = _curry3(function adjust(fn, idx, list) {
          if (idx >= list.length || idx < -list.length) {
            return list;
          }
          var start = idx < 0 ? list.length : 0;
          var _idx = start + idx;
          var _list = _concat(list);
          _list[_idx] = fn(list[_idx]);
          return _list;
        });
        var always = _curry1(function always(val) {
          return function() {
            return val;
          };
        });
        var aperture = _curry2(function aperture(n, list) {
          var idx = 0;
          var limit = list.length - (n - 1);
          var acc = new Array(limit >= 0 ? limit : 0);
          while (idx < limit) {
            acc[idx] = _slice(list, idx, idx + n);
            idx += 1;
          }
          return acc;
        });
        var append = _curry2(function append(el, list) {
          return _concat(list, [el]);
        });
        var apply = _curry2(function apply(fn, args) {
          return fn.apply(this, args);
        });
        var assoc = _curry3(function assoc(prop, val, obj) {
          var result = {};
          for (var p in obj) {
            result[p] = obj[p];
          }
          result[prop] = val;
          return result;
        });
        var assocPath = _curry3(function assocPath(path, val, obj) {
          switch (path.length) {
            case 0:
              return obj;
            case 1:
              return assoc(path[0], val, obj);
            default:
              return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
          }
        });
        var bind = _curry2(function bind(fn, thisObj) {
          return _arity(fn.length, function() {
            return fn.apply(thisObj, arguments);
          });
        });
        var both = _curry2(function both(f, g) {
          return function _both() {
            return f.apply(this, arguments) && g.apply(this, arguments);
          };
        });
        var comparator = _curry1(function comparator(pred) {
          return function(a, b) {
            return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
          };
        });
        var complement = _curry1(_complement);
        var cond = _curry1(function cond(pairs) {
          return function() {
            var idx = 0;
            while (idx < pairs.length) {
              if (pairs[idx][0].apply(this, arguments)) {
                return pairs[idx][1].apply(this, arguments);
              }
              idx += 1;
            }
          };
        });
        var containsWith = _curry3(_containsWith);
        var countBy = _curry2(function countBy(fn, list) {
          var counts = {};
          var len = list.length;
          var idx = 0;
          while (idx < len) {
            var key = fn(list[idx]);
            counts[key] = (_has(key, counts) ? counts[key] : 0) + 1;
            idx += 1;
          }
          return counts;
        });
        var createMapEntry = _curry2(function createMapEntry(key, val) {
          var obj = {};
          obj[key] = val;
          return obj;
        });
        var curryN = _curry2(function curryN(length, fn) {
          if (length === 1) {
            return _curry1(fn);
          }
          return _arity(length, _curryN(length, [], fn));
        });
        var dec = add(-1);
        var defaultTo = _curry2(function defaultTo(d, v) {
          return v == null ? d : v;
        });
        var differenceWith = _curry3(function differenceWith(pred, first, second) {
          var out = [];
          var idx = 0;
          var firstLen = first.length;
          var containsPred = containsWith(pred);
          while (idx < firstLen) {
            if (!containsPred(first[idx], second) && !containsPred(first[idx], out)) {
              out[out.length] = first[idx];
            }
            idx += 1;
          }
          return out;
        });
        var dissoc = _curry2(function dissoc(prop, obj) {
          var result = {};
          for (var p in obj) {
            if (p !== prop) {
              result[p] = obj[p];
            }
          }
          return result;
        });
        var dissocPath = _curry2(function dissocPath(path, obj) {
          switch (path.length) {
            case 0:
              return obj;
            case 1:
              return dissoc(path[0], obj);
            default:
              var head = path[0];
              var tail = _slice(path, 1);
              return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
          }
        });
        var divide = _curry2(function divide(a, b) {
          return a / b;
        });
        var dropLastWhile = _curry2(function dropLastWhile(pred, list) {
          var idx = list.length - 1;
          while (idx >= 0 && pred(list[idx])) {
            idx -= 1;
          }
          return _slice(list, 0, idx + 1);
        });
        var either = _curry2(function either(f, g) {
          return function _either() {
            return f.apply(this, arguments) || g.apply(this, arguments);
          };
        });
        var empty = _curry1(function empty(x) {
          if (x != null && typeof x.empty === 'function') {
            return x.empty();
          } else if (x != null && typeof x.constructor != null && typeof x.constructor.empty === 'function') {
            return x.constructor.empty();
          } else {
            switch (Object.prototype.toString.call(x)) {
              case '[object Array]':
                return [];
              case '[object Object]':
                return {};
              case '[object String]':
                return '';
            }
          }
        });
        var evolve = _curry2(function evolve(transformations, object) {
          var transformation,
              key,
              type,
              result = {};
          for (key in object) {
            transformation = transformations[key];
            type = typeof transformation;
            result[key] = type === 'function' ? transformation(object[key]) : type === 'object' ? evolve(transformations[key], object[key]) : object[key];
          }
          return result;
        });
        var fromPairs = _curry1(function fromPairs(pairs) {
          var idx = 0,
              len = pairs.length,
              out = {};
          while (idx < len) {
            if (_isArray(pairs[idx]) && pairs[idx].length) {
              out[pairs[idx][0]] = pairs[idx][1];
            }
            idx += 1;
          }
          return out;
        });
        var gt = _curry2(function gt(a, b) {
          return a > b;
        });
        var gte = _curry2(function gte(a, b) {
          return a >= b;
        });
        var has = _curry2(_has);
        var hasIn = _curry2(function hasIn(prop, obj) {
          return prop in obj;
        });
        var identical = _curry2(function identical(a, b) {
          if (a === b) {
            return a !== 0 || 1 / a === 1 / b;
          } else {
            return a !== a && b !== b;
          }
        });
        var identity = _curry1(_identity);
        var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
          return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
            return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
          });
        });
        var inc = add(1);
        var insert = _curry3(function insert(idx, elt, list) {
          idx = idx < list.length && idx >= 0 ? idx : list.length;
          var result = _slice(list);
          result.splice(idx, 0, elt);
          return result;
        });
        var insertAll = _curry3(function insertAll(idx, elts, list) {
          idx = idx < list.length && idx >= 0 ? idx : list.length;
          return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
        });
        var is = _curry2(function is(Ctor, val) {
          return val != null && val.constructor === Ctor || val instanceof Ctor;
        });
        var isArrayLike = _curry1(function isArrayLike(x) {
          if (_isArray(x)) {
            return true;
          }
          if (!x) {
            return false;
          }
          if (typeof x !== 'object') {
            return false;
          }
          if (x instanceof String) {
            return false;
          }
          if (x.nodeType === 1) {
            return !!x.length;
          }
          if (x.length === 0) {
            return true;
          }
          if (x.length > 0) {
            return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
          }
          return false;
        });
        var isEmpty = _curry1(function isEmpty(list) {
          return Object(list).length === 0;
        });
        var isNil = _curry1(function isNil(x) {
          return x == null;
        });
        var keys = function() {
          var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
          var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
          var contains = function contains(list, item) {
            var idx = 0;
            while (idx < list.length) {
              if (list[idx] === item) {
                return true;
              }
              idx += 1;
            }
            return false;
          };
          return typeof Object.keys === 'function' ? _curry1(function keys(obj) {
            return Object(obj) !== obj ? [] : Object.keys(obj);
          }) : _curry1(function keys(obj) {
            if (Object(obj) !== obj) {
              return [];
            }
            var prop,
                ks = [],
                nIdx;
            for (prop in obj) {
              if (_has(prop, obj)) {
                ks[ks.length] = prop;
              }
            }
            if (hasEnumBug) {
              nIdx = nonEnumerableProps.length - 1;
              while (nIdx >= 0) {
                prop = nonEnumerableProps[nIdx];
                if (_has(prop, obj) && !contains(ks, prop)) {
                  ks[ks.length] = prop;
                }
                nIdx -= 1;
              }
            }
            return ks;
          });
        }();
        var keysIn = _curry1(function keysIn(obj) {
          var prop,
              ks = [];
          for (prop in obj) {
            ks[ks.length] = prop;
          }
          return ks;
        });
        var length = _curry1(function length(list) {
          return list != null && is(Number, list.length) ? list.length : NaN;
        });
        var lt = _curry2(function lt(a, b) {
          return a < b;
        });
        var lte = _curry2(function lte(a, b) {
          return a <= b;
        });
        var mapAccum = _curry3(function mapAccum(fn, acc, list) {
          var idx = 0,
              len = list.length,
              result = [],
              tuple = [acc];
          while (idx < len) {
            tuple = fn(tuple[0], list[idx]);
            result[idx] = tuple[1];
            idx += 1;
          }
          return [tuple[0], result];
        });
        var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
          var idx = list.length - 1,
              result = [],
              tuple = [acc];
          while (idx >= 0) {
            tuple = fn(tuple[0], list[idx]);
            result[idx] = tuple[1];
            idx -= 1;
          }
          return [tuple[0], result];
        });
        var match = _curry2(function match(rx, str) {
          return str.match(rx) || [];
        });
        var mathMod = _curry2(function mathMod(m, p) {
          if (!_isInteger(m)) {
            return NaN;
          }
          if (!_isInteger(p) || p < 1) {
            return NaN;
          }
          return (m % p + p) % p;
        });
        var max = _curry2(function max(a, b) {
          return b > a ? b : a;
        });
        var maxBy = _curry3(function maxBy(f, a, b) {
          return f(b) > f(a) ? b : a;
        });
        var merge = _curry2(function merge(a, b) {
          var result = {};
          var ks = keys(a);
          var idx = 0;
          while (idx < ks.length) {
            result[ks[idx]] = a[ks[idx]];
            idx += 1;
          }
          ks = keys(b);
          idx = 0;
          while (idx < ks.length) {
            result[ks[idx]] = b[ks[idx]];
            idx += 1;
          }
          return result;
        });
        var min = _curry2(function min(a, b) {
          return b < a ? b : a;
        });
        var minBy = _curry3(function minBy(f, a, b) {
          return f(b) < f(a) ? b : a;
        });
        var modulo = _curry2(function modulo(a, b) {
          return a % b;
        });
        var multiply = _curry2(function multiply(a, b) {
          return a * b;
        });
        var nAry = _curry2(function nAry(n, fn) {
          switch (n) {
            case 0:
              return function() {
                return fn.call(this);
              };
            case 1:
              return function(a0) {
                return fn.call(this, a0);
              };
            case 2:
              return function(a0, a1) {
                return fn.call(this, a0, a1);
              };
            case 3:
              return function(a0, a1, a2) {
                return fn.call(this, a0, a1, a2);
              };
            case 4:
              return function(a0, a1, a2, a3) {
                return fn.call(this, a0, a1, a2, a3);
              };
            case 5:
              return function(a0, a1, a2, a3, a4) {
                return fn.call(this, a0, a1, a2, a3, a4);
              };
            case 6:
              return function(a0, a1, a2, a3, a4, a5) {
                return fn.call(this, a0, a1, a2, a3, a4, a5);
              };
            case 7:
              return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
              };
            case 8:
              return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
              };
            case 9:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
              };
            case 10:
              return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
              };
            default:
              throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
          }
        });
        var negate = _curry1(function negate(n) {
          return -n;
        });
        var not = _curry1(function not(a) {
          return !a;
        });
        var nth = _curry2(function nth(offset, list) {
          var idx = offset < 0 ? list.length + offset : offset;
          return _isString(list) ? list.charAt(idx) : list[idx];
        });
        var nthArg = _curry1(function nthArg(n) {
          return function() {
            return nth(n, arguments);
          };
        });
        var nthChar = _curry2(function nthChar(n, str) {
          return str.charAt(n < 0 ? str.length + n : n);
        });
        var nthCharCode = _curry2(function nthCharCode(n, str) {
          return str.charCodeAt(n < 0 ? str.length + n : n);
        });
        var of = _curry1(function of(x) {
          return [x];
        });
        var once = _curry1(function once(fn) {
          var called = false,
              result;
          return function() {
            if (called) {
              return result;
            }
            called = true;
            result = fn.apply(this, arguments);
            return result;
          };
        });
        var over = function() {
          var Identity = function(x) {
            return {
              value: x,
              map: function(f) {
                return Identity(f(x));
              }
            };
          };
          return _curry3(function over(lens, f, x) {
            return lens(function(y) {
              return Identity(f(y));
            })(x).value;
          });
        }();
        var path = _curry2(function path(paths, obj) {
          if (obj == null) {
            return;
          } else {
            var val = obj;
            for (var idx = 0,
                len = paths.length; idx < len && val != null; idx += 1) {
              val = val[paths[idx]];
            }
            return val;
          }
        });
        var pick = _curry2(function pick(names, obj) {
          var result = {};
          var idx = 0;
          while (idx < names.length) {
            if (names[idx] in obj) {
              result[names[idx]] = obj[names[idx]];
            }
            idx += 1;
          }
          return result;
        });
        var pickAll = _curry2(function pickAll(names, obj) {
          var result = {};
          var idx = 0;
          var len = names.length;
          while (idx < len) {
            var name = names[idx];
            result[name] = obj[name];
            idx += 1;
          }
          return result;
        });
        var pickBy = _curry2(function pickBy(test, obj) {
          var result = {};
          for (var prop in obj) {
            if (test(obj[prop], prop, obj)) {
              result[prop] = obj[prop];
            }
          }
          return result;
        });
        var prepend = _curry2(function prepend(el, list) {
          return _concat([el], list);
        });
        var prop = _curry2(function prop(p, obj) {
          return obj[p];
        });
        var propOr = _curry3(function propOr(val, p, obj) {
          return obj != null && _has(p, obj) ? obj[p] : val;
        });
        var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
          return pred(obj[name]);
        });
        var props = _curry2(function props(ps, obj) {
          var len = ps.length;
          var out = [];
          var idx = 0;
          while (idx < len) {
            out[idx] = obj[ps[idx]];
            idx += 1;
          }
          return out;
        });
        var range = _curry2(function range(from, to) {
          if (!(_isNumber(from) && _isNumber(to))) {
            throw new TypeError('Both arguments to range must be numbers');
          }
          var result = [];
          var n = from;
          while (n < to) {
            result.push(n);
            n += 1;
          }
          return result;
        });
        var reduceRight = _curry3(function reduceRight(fn, acc, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            acc = fn(acc, list[idx]);
            idx -= 1;
          }
          return acc;
        });
        var reduced = _curry1(_reduced);
        var remove = _curry3(function remove(start, count, list) {
          return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
        });
        var replace = _curry3(function replace(regex, replacement, str) {
          return str.replace(regex, replacement);
        });
        var reverse = _curry1(function reverse(list) {
          return _slice(list).reverse();
        });
        var scan = _curry3(function scan(fn, acc, list) {
          var idx = 0,
              len = list.length,
              result = [acc];
          while (idx < len) {
            acc = fn(acc, list[idx]);
            result[idx + 1] = acc;
            idx += 1;
          }
          return result;
        });
        var set = _curry3(function set(lens, v, x) {
          return over(lens, always(v), x);
        });
        var sort = _curry2(function sort(comparator, list) {
          return _slice(list).sort(comparator);
        });
        var sortBy = _curry2(function sortBy(fn, list) {
          return _slice(list).sort(function(a, b) {
            var aa = fn(a);
            var bb = fn(b);
            return aa < bb ? -1 : aa > bb ? 1 : 0;
          });
        });
        var subtract = _curry2(function subtract(a, b) {
          return a - b;
        });
        var takeLastWhile = _curry2(function takeLastWhile(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0 && fn(list[idx])) {
            idx -= 1;
          }
          return _slice(list, idx + 1, Infinity);
        });
        var tap = _curry2(function tap(fn, x) {
          fn(x);
          return x;
        });
        var test = _curry2(function test(pattern, str) {
          return _cloneRegExp(pattern).test(str);
        });
        var times = _curry2(function times(fn, n) {
          var len = Number(n);
          var list = new Array(len);
          var idx = 0;
          while (idx < len) {
            list[idx] = fn(idx);
            idx += 1;
          }
          return list;
        });
        var toPairs = _curry1(function toPairs(obj) {
          var pairs = [];
          for (var prop in obj) {
            if (_has(prop, obj)) {
              pairs[pairs.length] = [prop, obj[prop]];
            }
          }
          return pairs;
        });
        var toPairsIn = _curry1(function toPairsIn(obj) {
          var pairs = [];
          for (var prop in obj) {
            pairs[pairs.length] = [prop, obj[prop]];
          }
          return pairs;
        });
        var trim = function() {
          var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
          var zeroWidth = '\u200B';
          var hasProtoTrim = typeof String.prototype.trim === 'function';
          if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
            return _curry1(function trim(str) {
              var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
              var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
              return str.replace(beginRx, '').replace(endRx, '');
            });
          } else {
            return _curry1(function trim(str) {
              return str.trim();
            });
          }
        }();
        var type = _curry1(function type(val) {
          return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
        });
        var unapply = _curry1(function unapply(fn) {
          return function() {
            return fn(_slice(arguments));
          };
        });
        var unary = _curry1(function unary(fn) {
          return nAry(1, fn);
        });
        var uncurryN = _curry2(function uncurryN(depth, fn) {
          return curryN(depth, function() {
            var currentDepth = 1;
            var value = fn;
            var idx = 0;
            var endIdx;
            while (currentDepth <= depth && typeof value === 'function') {
              endIdx = currentDepth === depth ? arguments.length : idx + value.length;
              value = value.apply(this, _slice(arguments, idx, endIdx));
              currentDepth += 1;
              idx = endIdx;
            }
            return value;
          });
        });
        var unfold = _curry2(function unfold(fn, seed) {
          var pair = fn(seed);
          var result = [];
          while (pair && pair.length) {
            result[result.length] = pair[0];
            pair = fn(pair[1]);
          }
          return result;
        });
        var uniqWith = _curry2(function uniqWith(pred, list) {
          var idx = 0,
              len = list.length;
          var result = [],
              item;
          while (idx < len) {
            item = list[idx];
            if (!_containsWith(pred, item, result)) {
              result[result.length] = item;
            }
            idx += 1;
          }
          return result;
        });
        var update = _curry3(function update(idx, x, list) {
          return adjust(always(x), idx, list);
        });
        var values = _curry1(function values(obj) {
          var props = keys(obj);
          var len = props.length;
          var vals = [];
          var idx = 0;
          while (idx < len) {
            vals[idx] = obj[props[idx]];
            idx += 1;
          }
          return vals;
        });
        var valuesIn = _curry1(function valuesIn(obj) {
          var prop,
              vs = [];
          for (prop in obj) {
            vs[vs.length] = obj[prop];
          }
          return vs;
        });
        var view = function() {
          var Const = function(x) {
            return {
              value: x,
              map: function() {
                return this;
              }
            };
          };
          return _curry2(function view(lens, x) {
            return lens(Const)(x).value;
          });
        }();
        var where = _curry2(function where(spec, testObj) {
          for (var prop in spec) {
            if (_has(prop, spec) && !spec[prop](testObj[prop])) {
              return false;
            }
          }
          return true;
        });
        var wrap = _curry2(function wrap(fn, wrapper) {
          return curryN(fn.length, function() {
            return wrapper.apply(this, _concat([fn], arguments));
          });
        });
        var xprod = _curry2(function xprod(a, b) {
          var idx = 0;
          var ilen = a.length;
          var j;
          var jlen = b.length;
          var result = [];
          while (idx < ilen) {
            j = 0;
            while (j < jlen) {
              result[result.length] = [a[idx], b[j]];
              j += 1;
            }
            idx += 1;
          }
          return result;
        });
        var zip = _curry2(function zip(a, b) {
          var rv = [];
          var idx = 0;
          var len = Math.min(a.length, b.length);
          while (idx < len) {
            rv[idx] = [a[idx], b[idx]];
            idx += 1;
          }
          return rv;
        });
        var zipObj = _curry2(function zipObj(keys, values) {
          var idx = 0,
              len = keys.length,
              out = {};
          while (idx < len) {
            out[keys[idx]] = values[idx];
            idx += 1;
          }
          return out;
        });
        var zipWith = _curry3(function zipWith(fn, a, b) {
          var rv = [],
              idx = 0,
              len = Math.min(a.length, b.length);
          while (idx < len) {
            rv[idx] = fn(a[idx], b[idx]);
            idx += 1;
          }
          return rv;
        });
        var F = always(false);
        var T = always(true);
        var _checkForMethod = function _checkForMethod(methodname, fn) {
          return function() {
            var length = arguments.length;
            if (length === 0) {
              return fn();
            }
            var obj = arguments[length - 1];
            return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
          };
        };
        var _clone = function _clone(value, refFrom, refTo) {
          var copy = function copy(copiedValue) {
            var len = refFrom.length;
            var idx = 0;
            while (idx < len) {
              if (value === refFrom[idx]) {
                return refTo[idx];
              }
              idx += 1;
            }
            refFrom[idx + 1] = value;
            refTo[idx + 1] = copiedValue;
            for (var key in value) {
              copiedValue[key] = _clone(value[key], refFrom, refTo);
            }
            return copiedValue;
          };
          switch (type(value)) {
            case 'Object':
              return copy({});
            case 'Array':
              return copy([]);
            case 'Date':
              return new Date(value);
            case 'RegExp':
              return _cloneRegExp(value);
            default:
              return value;
          }
        };
        var _createPartialApplicator = function _createPartialApplicator(concat) {
          return function(fn) {
            var args = _slice(arguments, 1);
            return _arity(Math.max(0, fn.length - args.length), function() {
              return fn.apply(this, concat(args, arguments));
            });
          };
        };
        var _dispatchable = function _dispatchable(methodname, xf, fn) {
          return function() {
            var length = arguments.length;
            if (length === 0) {
              return fn();
            }
            var obj = arguments[length - 1];
            if (!_isArray(obj)) {
              var args = _slice(arguments, 0, length - 1);
              if (typeof obj[methodname] === 'function') {
                return obj[methodname].apply(obj, args);
              }
              if (_isTransformer(obj)) {
                var transducer = xf.apply(null, args);
                return transducer(obj);
              }
            }
            return fn.apply(this, arguments);
          };
        };
        var _equals = function _equals(a, b, stackA, stackB) {
          var typeA = type(a);
          if (typeA !== type(b)) {
            return false;
          }
          if (typeA === 'Boolean' || typeA === 'Number' || typeA === 'String') {
            return typeof a === 'object' ? typeof b === 'object' && identical(a.valueOf(), b.valueOf()) : identical(a, b);
          }
          if (identical(a, b)) {
            return true;
          }
          if (typeA === 'RegExp') {
            return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode;
          }
          if (Object(a) === a) {
            if (typeA === 'Date' && a.getTime() !== b.getTime()) {
              return false;
            }
            var keysA = keys(a);
            if (keysA.length !== keys(b).length) {
              return false;
            }
            var idx = stackA.length - 1;
            while (idx >= 0) {
              if (stackA[idx] === a) {
                return stackB[idx] === b;
              }
              idx -= 1;
            }
            stackA[stackA.length] = a;
            stackB[stackB.length] = b;
            idx = keysA.length - 1;
            while (idx >= 0) {
              var key = keysA[idx];
              if (!_has(key, b) || !_equals(b[key], a[key], stackA, stackB)) {
                return false;
              }
              idx -= 1;
            }
            stackA.pop();
            stackB.pop();
            return true;
          }
          return false;
        };
        var _hasMethod = function _hasMethod(methodName, obj) {
          return obj != null && !_isArray(obj) && typeof obj[methodName] === 'function';
        };
        var _makeFlat = function _makeFlat(recursive) {
          return function flatt(list) {
            var value,
                result = [],
                idx = 0,
                j,
                ilen = list.length,
                jlen;
            while (idx < ilen) {
              if (isArrayLike(list[idx])) {
                value = recursive ? flatt(list[idx]) : list[idx];
                j = 0;
                jlen = value.length;
                while (j < jlen) {
                  result[result.length] = value[j];
                  j += 1;
                }
              } else {
                result[result.length] = list[idx];
              }
              idx += 1;
            }
            return result;
          };
        };
        var _reduce = function() {
          function _arrayReduce(xf, acc, list) {
            var idx = 0,
                len = list.length;
            while (idx < len) {
              acc = xf['@@transducer/step'](acc, list[idx]);
              if (acc && acc['@@transducer/reduced']) {
                acc = acc['@@transducer/value'];
                break;
              }
              idx += 1;
            }
            return xf['@@transducer/result'](acc);
          }
          function _iterableReduce(xf, acc, iter) {
            var step = iter.next();
            while (!step.done) {
              acc = xf['@@transducer/step'](acc, step.value);
              if (acc && acc['@@transducer/reduced']) {
                acc = acc['@@transducer/value'];
                break;
              }
              step = iter.next();
            }
            return xf['@@transducer/result'](acc);
          }
          function _methodReduce(xf, acc, obj) {
            return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
          }
          var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
          return function _reduce(fn, acc, list) {
            if (typeof fn === 'function') {
              fn = _xwrap(fn);
            }
            if (isArrayLike(list)) {
              return _arrayReduce(fn, acc, list);
            }
            if (typeof list.reduce === 'function') {
              return _methodReduce(fn, acc, list);
            }
            if (list[symIterator] != null) {
              return _iterableReduce(fn, acc, list[symIterator]());
            }
            if (typeof list.next === 'function') {
              return _iterableReduce(fn, acc, list);
            }
            throw new TypeError('reduce: list must be array or iterable');
          };
        }();
        var _stepCat = function() {
          var _stepCatArray = {
            '@@transducer/init': Array,
            '@@transducer/step': function(xs, x) {
              return _concat(xs, [x]);
            },
            '@@transducer/result': _identity
          };
          var _stepCatString = {
            '@@transducer/init': String,
            '@@transducer/step': function(a, b) {
              return a + b;
            },
            '@@transducer/result': _identity
          };
          var _stepCatObject = {
            '@@transducer/init': Object,
            '@@transducer/step': function(result, input) {
              return merge(result, isArrayLike(input) ? createMapEntry(input[0], input[1]) : input);
            },
            '@@transducer/result': _identity
          };
          return function _stepCat(obj) {
            if (_isTransformer(obj)) {
              return obj;
            }
            if (isArrayLike(obj)) {
              return _stepCatArray;
            }
            if (typeof obj === 'string') {
              return _stepCatString;
            }
            if (typeof obj === 'object') {
              return _stepCatObject;
            }
            throw new Error('Cannot create transformer for ' + obj);
          };
        }();
        var _xall = function() {
          function XAll(f, xf) {
            this.xf = xf;
            this.f = f;
            this.all = true;
          }
          XAll.prototype['@@transducer/init'] = _xfBase.init;
          XAll.prototype['@@transducer/result'] = function(result) {
            if (this.all) {
              result = this.xf['@@transducer/step'](result, true);
            }
            return this.xf['@@transducer/result'](result);
          };
          XAll.prototype['@@transducer/step'] = function(result, input) {
            if (!this.f(input)) {
              this.all = false;
              result = _reduced(this.xf['@@transducer/step'](result, false));
            }
            return result;
          };
          return _curry2(function _xall(f, xf) {
            return new XAll(f, xf);
          });
        }();
        var _xany = function() {
          function XAny(f, xf) {
            this.xf = xf;
            this.f = f;
            this.any = false;
          }
          XAny.prototype['@@transducer/init'] = _xfBase.init;
          XAny.prototype['@@transducer/result'] = function(result) {
            if (!this.any) {
              result = this.xf['@@transducer/step'](result, false);
            }
            return this.xf['@@transducer/result'](result);
          };
          XAny.prototype['@@transducer/step'] = function(result, input) {
            if (this.f(input)) {
              this.any = true;
              result = _reduced(this.xf['@@transducer/step'](result, true));
            }
            return result;
          };
          return _curry2(function _xany(f, xf) {
            return new XAny(f, xf);
          });
        }();
        var _xdrop = function() {
          function XDrop(n, xf) {
            this.xf = xf;
            this.n = n;
          }
          XDrop.prototype['@@transducer/init'] = _xfBase.init;
          XDrop.prototype['@@transducer/result'] = _xfBase.result;
          XDrop.prototype['@@transducer/step'] = function(result, input) {
            if (this.n > 0) {
              this.n -= 1;
              return result;
            }
            return this.xf['@@transducer/step'](result, input);
          };
          return _curry2(function _xdrop(n, xf) {
            return new XDrop(n, xf);
          });
        }();
        var _xdropWhile = function() {
          function XDropWhile(f, xf) {
            this.xf = xf;
            this.f = f;
          }
          XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
          XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
          XDropWhile.prototype['@@transducer/step'] = function(result, input) {
            if (this.f) {
              if (this.f(input)) {
                return result;
              }
              this.f = null;
            }
            return this.xf['@@transducer/step'](result, input);
          };
          return _curry2(function _xdropWhile(f, xf) {
            return new XDropWhile(f, xf);
          });
        }();
        var _xgroupBy = function() {
          function XGroupBy(f, xf) {
            this.xf = xf;
            this.f = f;
            this.inputs = {};
          }
          XGroupBy.prototype['@@transducer/init'] = _xfBase.init;
          XGroupBy.prototype['@@transducer/result'] = function(result) {
            var key;
            for (key in this.inputs) {
              if (_has(key, this.inputs)) {
                result = this.xf['@@transducer/step'](result, this.inputs[key]);
                if (result['@@transducer/reduced']) {
                  result = result['@@transducer/value'];
                  break;
                }
              }
            }
            return this.xf['@@transducer/result'](result);
          };
          XGroupBy.prototype['@@transducer/step'] = function(result, input) {
            var key = this.f(input);
            this.inputs[key] = this.inputs[key] || [key, []];
            this.inputs[key][1] = append(input, this.inputs[key][1]);
            return result;
          };
          return _curry2(function _xgroupBy(f, xf) {
            return new XGroupBy(f, xf);
          });
        }();
        var addIndex = _curry1(function addIndex(fn) {
          return curryN(fn.length, function() {
            var idx = 0;
            var origFn = arguments[0];
            var list = arguments[arguments.length - 1];
            var args = _slice(arguments);
            args[0] = function() {
              var result = origFn.apply(this, _concat(arguments, [idx, list]));
              idx += 1;
              return result;
            };
            return fn.apply(this, args);
          });
        });
        var all = _curry2(_dispatchable('all', _xall, function all(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (!fn(list[idx])) {
              return false;
            }
            idx += 1;
          }
          return true;
        }));
        var and = _curry2(function and(a, b) {
          return _hasMethod('and', a) ? a.and(b) : a && b;
        });
        var any = _curry2(_dispatchable('any', _xany, function any(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (fn(list[idx])) {
              return true;
            }
            idx += 1;
          }
          return false;
        }));
        var binary = _curry1(function binary(fn) {
          return nAry(2, fn);
        });
        var clone = _curry1(function clone(value) {
          return _clone(value, [], []);
        });
        var concat = _curry2(function concat(set1, set2) {
          if (_isArray(set2)) {
            return _concat(set1, set2);
          } else if (_hasMethod('concat', set1)) {
            return set1.concat(set2);
          } else {
            throw new TypeError('can\'t concat ' + typeof set1);
          }
        });
        var curry = _curry1(function curry(fn) {
          return curryN(fn.length, fn);
        });
        var dropWhile = _curry2(_dispatchable('dropWhile', _xdropWhile, function dropWhile(pred, list) {
          var idx = 0,
              len = list.length;
          while (idx < len && pred(list[idx])) {
            idx += 1;
          }
          return _slice(list, idx);
        }));
        var equals = _curry2(function equals(a, b) {
          return _hasMethod('equals', a) ? a.equals(b) : _hasMethod('equals', b) ? b.equals(a) : _equals(a, b, [], []);
        });
        var filter = _curry2(_dispatchable('filter', _xfilter, _filter));
        var find = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx += 1;
          }
        }));
        var findIndex = _curry2(_dispatchable('findIndex', _xfindIndex, function findIndex(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }));
        var findLast = _curry2(_dispatchable('findLast', _xfindLast, function findLast(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx -= 1;
          }
        }));
        var findLastIndex = _curry2(_dispatchable('findLastIndex', _xfindLastIndex, function findLastIndex(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return idx;
            }
            idx -= 1;
          }
          return -1;
        }));
        var flatten = _curry1(_makeFlat(true));
        var flip = _curry1(function flip(fn) {
          return curry(function(a, b) {
            var args = _slice(arguments);
            args[0] = b;
            args[1] = a;
            return fn.apply(this, args);
          });
        });
        var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
          var len = list.length;
          var idx = 0;
          while (idx < len) {
            fn(list[idx]);
            idx += 1;
          }
          return list;
        }));
        var functions = _curry1(_functionsWith(keys));
        var functionsIn = _curry1(_functionsWith(keysIn));
        var groupBy = _curry2(_dispatchable('groupBy', _xgroupBy, function groupBy(fn, list) {
          return _reduce(function(acc, elt) {
            var key = fn(elt);
            acc[key] = append(elt, acc[key] || (acc[key] = []));
            return acc;
          }, {}, list);
        }));
        var head = nth(0);
        var intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
          var results = [],
              idx = 0;
          while (idx < list1.length) {
            if (_containsWith(pred, list1[idx], list2)) {
              results[results.length] = list1[idx];
            }
            idx += 1;
          }
          return uniqWith(pred, results);
        });
        var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
          var out = [];
          var idx = 0;
          var length = list.length;
          while (idx < length) {
            if (idx === length - 1) {
              out.push(list[idx]);
            } else {
              out.push(list[idx], separator);
            }
            idx += 1;
          }
          return out;
        }));
        var into = _curry3(function into(acc, xf, list) {
          return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), acc, list);
        });
        var invert = _curry1(function invert(obj) {
          var props = keys(obj);
          var len = props.length;
          var idx = 0;
          var out = {};
          while (idx < len) {
            var key = props[idx];
            var val = obj[key];
            var list = _has(val, out) ? out[val] : out[val] = [];
            list[list.length] = key;
            idx += 1;
          }
          return out;
        });
        var invertObj = _curry1(function invertObj(obj) {
          var props = keys(obj);
          var len = props.length;
          var idx = 0;
          var out = {};
          while (idx < len) {
            var key = props[idx];
            out[obj[key]] = key;
            idx += 1;
          }
          return out;
        });
        var last = nth(-1);
        var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
          if (_hasMethod('lastIndexOf', xs)) {
            return xs.lastIndexOf(target);
          } else {
            var idx = xs.length - 1;
            while (idx >= 0) {
              if (equals(xs[idx], target)) {
                return idx;
              }
              idx -= 1;
            }
            return -1;
          }
        });
        var map = _curry2(_dispatchable('map', _xmap, _map));
        var mapObj = _curry2(function mapObj(fn, obj) {
          return _reduce(function(acc, key) {
            acc[key] = fn(obj[key]);
            return acc;
          }, {}, keys(obj));
        });
        var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
          return _reduce(function(acc, key) {
            acc[key] = fn(obj[key], key, obj);
            return acc;
          }, {}, keys(obj));
        });
        var none = _curry2(_complement(_dispatchable('any', _xany, any)));
        var or = _curry2(function or(a, b) {
          return _hasMethod('or', a) ? a.or(b) : a || b;
        });
        var partial = curry(_createPartialApplicator(_concat));
        var partialRight = curry(_createPartialApplicator(flip(_concat)));
        var partition = _curry2(function partition(pred, list) {
          return _reduce(function(acc, elt) {
            var xs = acc[pred(elt) ? 0 : 1];
            xs[xs.length] = elt;
            return acc;
          }, [[], []], list);
        });
        var pathEq = _curry3(function pathEq(_path, val, obj) {
          return equals(path(_path, obj), val);
        });
        var pluck = _curry2(function pluck(p, list) {
          return map(prop(p), list);
        });
        var propEq = _curry3(function propEq(name, val, obj) {
          return propSatisfies(equals(val), name, obj);
        });
        var propIs = _curry3(function propIs(type, name, obj) {
          return propSatisfies(is(type), name, obj);
        });
        var reduce = _curry3(_reduce);
        var reject = _curry2(function reject(fn, list) {
          return filter(_complement(fn), list);
        });
        var repeat = _curry2(function repeat(value, n) {
          return times(always(value), n);
        });
        var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
          return Array.prototype.slice.call(list, fromIndex, toIndex);
        }));
        var splitEvery = _curry2(function splitEvery(n, list) {
          if (n <= 0) {
            throw new Error('First argument to splitEvery must be a positive integer');
          }
          var result = [];
          var idx = 0;
          while (idx < list.length) {
            result.push(slice(idx, idx += n, list));
          }
          return result;
        });
        var sum = reduce(add, 0);
        var tail = _checkForMethod('tail', slice(1, Infinity));
        var take = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
          return slice(0, n < 0 ? Infinity : n, xs);
        }));
        var takeWhile = _curry2(_dispatchable('takeWhile', _xtakeWhile, function takeWhile(fn, list) {
          var idx = 0,
              len = list.length;
          while (idx < len && fn(list[idx])) {
            idx += 1;
          }
          return _slice(list, 0, idx);
        }));
        var transduce = curryN(4, function transduce(xf, fn, acc, list) {
          return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
        });
        var unionWith = _curry3(function unionWith(pred, list1, list2) {
          return uniqWith(pred, _concat(list1, list2));
        });
        var uniq = uniqWith(equals);
        var unnest = _curry1(_makeFlat(false));
        var useWith = curry(function useWith(fn) {
          var transformers = _slice(arguments, 1);
          var tlen = transformers.length;
          return curry(_arity(tlen, function() {
            var args = [],
                idx = 0;
            while (idx < tlen) {
              args[idx] = transformers[idx](arguments[idx]);
              idx += 1;
            }
            return fn.apply(this, args.concat(_slice(arguments, tlen)));
          }));
        });
        var whereEq = _curry2(function whereEq(spec, testObj) {
          return where(mapObj(equals, spec), testObj);
        });
        var _flatCat = function() {
          var preservingReduced = function(xf) {
            return {
              '@@transducer/init': _xfBase.init,
              '@@transducer/result': function(result) {
                return xf['@@transducer/result'](result);
              },
              '@@transducer/step': function(result, input) {
                var ret = xf['@@transducer/step'](result, input);
                return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
              }
            };
          };
          return function _xcat(xf) {
            var rxf = preservingReduced(xf);
            return {
              '@@transducer/init': _xfBase.init,
              '@@transducer/result': function(result) {
                return rxf['@@transducer/result'](result);
              },
              '@@transducer/step': function(result, input) {
                return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
              }
            };
          };
        }();
        var _indexOf = function _indexOf(list, item, from) {
          var idx = from;
          while (idx < list.length) {
            if (equals(list[idx], item)) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        };
        var _predicateWrap = function _predicateWrap(predPicker) {
          return function(preds) {
            var predIterator = function() {
              var args = arguments;
              return predPicker(function(predicate) {
                return predicate.apply(null, args);
              }, preds);
            };
            return arguments.length > 1 ? predIterator.apply(null, _slice(arguments, 1)) : _arity(Math.max.apply(Math, pluck('length', preds)), predIterator);
          };
        };
        var _xchain = _curry2(function _xchain(f, xf) {
          return map(f, _flatCat(xf));
        });
        var allPass = _curry1(_predicateWrap(all));
        var anyPass = _curry1(_predicateWrap(any));
        var ap = _curry2(function ap(fns, vs) {
          return _hasMethod('ap', fns) ? fns.ap(vs) : _reduce(function(acc, fn) {
            return _concat(acc, map(fn, vs));
          }, [], fns);
        });
        var call = curry(function call(fn) {
          return fn.apply(this, _slice(arguments, 1));
        });
        var chain = _curry2(_dispatchable('chain', _xchain, function chain(fn, list) {
          return unnest(map(fn, list));
        }));
        var commuteMap = _curry3(function commuteMap(fn, of, list) {
          function consF(acc, ftor) {
            return ap(map(append, fn(ftor)), acc);
          }
          return _reduce(consF, of([]), list);
        });
        var constructN = _curry2(function constructN(n, Fn) {
          if (n > 10) {
            throw new Error('Constructor with greater than ten arguments');
          }
          if (n === 0) {
            return function() {
              return new Fn();
            };
          }
          return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
            switch (arguments.length) {
              case 1:
                return new Fn($0);
              case 2:
                return new Fn($0, $1);
              case 3:
                return new Fn($0, $1, $2);
              case 4:
                return new Fn($0, $1, $2, $3);
              case 5:
                return new Fn($0, $1, $2, $3, $4);
              case 6:
                return new Fn($0, $1, $2, $3, $4, $5);
              case 7:
                return new Fn($0, $1, $2, $3, $4, $5, $6);
              case 8:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
              case 9:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
              case 10:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
            }
          }));
        });
        var converge = curryN(3, function converge(after) {
          var fns = _slice(arguments, 1);
          return curryN(Math.max.apply(Math, pluck('length', fns)), function() {
            var args = arguments;
            var context = this;
            return after.apply(context, _map(function(fn) {
              return fn.apply(context, args);
            }, fns));
          });
        });
        var drop = _curry2(_dispatchable('drop', _xdrop, function drop(n, xs) {
          return slice(Math.max(0, n), Infinity, xs);
        }));
        var dropLast = _curry2(function dropLast(n, xs) {
          return take(n < xs.length ? xs.length - n : 0, xs);
        });
        var dropRepeatsWith = _curry2(_dispatchable('dropRepeatsWith', _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
          var result = [];
          var idx = 1;
          var len = list.length;
          if (len !== 0) {
            result[0] = list[0];
            while (idx < len) {
              if (!pred(last(result), list[idx])) {
                result[result.length] = list[idx];
              }
              idx += 1;
            }
          }
          return result;
        }));
        var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
          return equals(obj1[prop], obj2[prop]);
        });
        var indexOf = _curry2(function indexOf(target, xs) {
          return _hasMethod('indexOf', xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
        });
        var init = slice(0, -1);
        var isSet = _curry1(function isSet(list) {
          var len = list.length;
          var idx = 0;
          while (idx < len) {
            if (_indexOf(list, list[idx], idx + 1) >= 0) {
              return false;
            }
            idx += 1;
          }
          return true;
        });
        var lens = _curry2(function lens(getter, setter) {
          return function(f) {
            return function(s) {
              return map(function(v) {
                return setter(v, s);
              }, f(getter(s)));
            };
          };
        });
        var lensIndex = _curry1(function lensIndex(n) {
          return lens(nth(n), update(n));
        });
        var lensProp = _curry1(function lensProp(k) {
          return lens(prop(k), assoc(k));
        });
        var liftN = _curry2(function liftN(arity, fn) {
          var lifted = curryN(arity, fn);
          return curryN(arity, function() {
            return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
          });
        });
        var mean = _curry1(function mean(list) {
          return sum(list) / list.length;
        });
        var median = _curry1(function median(list) {
          var len = list.length;
          if (len === 0) {
            return NaN;
          }
          var width = 2 - len % 2;
          var idx = (len - width) / 2;
          return mean(_slice(list).sort(function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          }).slice(idx, idx + width));
        });
        var mergeAll = _curry1(function mergeAll(list) {
          return reduce(merge, {}, list);
        });
        var pipe = function pipe() {
          if (arguments.length === 0) {
            throw new Error('pipe requires at least one argument');
          }
          return curryN(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
        };
        var pipeP = function pipeP() {
          if (arguments.length === 0) {
            throw new Error('pipeP requires at least one argument');
          }
          return curryN(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
        };
        var product = reduce(multiply, 1);
        var project = useWith(_map, pickAll, identity);
        var takeLast = _curry2(function takeLast(n, xs) {
          return drop(n >= 0 ? xs.length - n : 0, xs);
        });
        var _contains = function _contains(a, list) {
          return _indexOf(list, a, 0) >= 0;
        };
        var _toString = function _toString(x, seen) {
          var recur = function recur(y) {
            var xs = seen.concat([x]);
            return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
          };
          var mapPairs = function(obj, keys) {
            return _map(function(k) {
              return _quote(k) + ': ' + recur(obj[k]);
            }, keys.slice().sort());
          };
          switch (Object.prototype.toString.call(x)) {
            case '[object Arguments]':
              return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
            case '[object Array]':
              return '[' + _map(recur, x).concat(mapPairs(x, reject(test(/^\d+$/), keys(x)))).join(', ') + ']';
            case '[object Boolean]':
              return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
            case '[object Date]':
              return 'new Date(' + _quote(_toISOString(x)) + ')';
            case '[object Null]':
              return 'null';
            case '[object Number]':
              return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
            case '[object String]':
              return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
            case '[object Undefined]':
              return 'undefined';
            default:
              return typeof x.constructor === 'function' && x.constructor.name !== 'Object' && typeof x.toString === 'function' && x.toString() !== '[object Object]' ? x.toString() : '{' + mapPairs(x, keys(x)).join(', ') + '}';
          }
        };
        var commute = commuteMap(identity);
        var compose = function compose() {
          if (arguments.length === 0) {
            throw new Error('compose requires at least one argument');
          }
          return pipe.apply(this, reverse(arguments));
        };
        var composeK = function composeK() {
          return arguments.length === 0 ? identity : compose.apply(this, map(chain, arguments));
        };
        var composeP = function composeP() {
          if (arguments.length === 0) {
            throw new Error('composeP requires at least one argument');
          }
          return pipeP.apply(this, reverse(arguments));
        };
        var construct = _curry1(function construct(Fn) {
          return constructN(Fn.length, Fn);
        });
        var contains = _curry2(_contains);
        var difference = _curry2(function difference(first, second) {
          var out = [];
          var idx = 0;
          var firstLen = first.length;
          while (idx < firstLen) {
            if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
              out[out.length] = first[idx];
            }
            idx += 1;
          }
          return out;
        });
        var dropRepeats = _curry1(_dispatchable('dropRepeats', _xdropRepeatsWith(equals), dropRepeatsWith(equals)));
        var intersection = _curry2(function intersection(list1, list2) {
          return uniq(_filter(flip(_contains)(list1), list2));
        });
        var lift = _curry1(function lift(fn) {
          return liftN(fn.length, fn);
        });
        var omit = _curry2(function omit(names, obj) {
          var result = {};
          for (var prop in obj) {
            if (!_contains(prop, names)) {
              result[prop] = obj[prop];
            }
          }
          return result;
        });
        var pipeK = function pipeK() {
          return composeK.apply(this, reverse(arguments));
        };
        var toString = _curry1(function toString(val) {
          return _toString(val, []);
        });
        var union = _curry2(compose(uniq, _concat));
        var uniqBy = _curry2(function uniqBy(fn, list) {
          var idx = 0,
              applied = [],
              result = [],
              appliedItem,
              item;
          while (idx < list.length) {
            item = list[idx];
            appliedItem = fn(item);
            if (!_contains(appliedItem, applied)) {
              result.push(item);
              applied.push(appliedItem);
            }
            idx += 1;
          }
          return result;
        });
        var invoker = _curry2(function invoker(arity, method) {
          return curryN(arity + 1, function() {
            var target = arguments[arity];
            if (target != null && is(Function, target[method])) {
              return target[method].apply(target, _slice(arguments, 0, arity));
            }
            throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
          });
        });
        var join = invoker(1, 'join');
        var memoize = _curry1(function memoize(fn) {
          var cache = {};
          return function() {
            var key = toString(arguments);
            if (!_has(key, cache)) {
              cache[key] = fn.apply(this, arguments);
            }
            return cache[key];
          };
        });
        var split = invoker(1, 'split');
        var toLower = invoker(0, 'toLowerCase');
        var toUpper = invoker(0, 'toUpperCase');
        var R = {
          F: F,
          T: T,
          __: __,
          add: add,
          addIndex: addIndex,
          adjust: adjust,
          all: all,
          allPass: allPass,
          always: always,
          and: and,
          any: any,
          anyPass: anyPass,
          ap: ap,
          aperture: aperture,
          append: append,
          apply: apply,
          assoc: assoc,
          assocPath: assocPath,
          binary: binary,
          bind: bind,
          both: both,
          call: call,
          chain: chain,
          clone: clone,
          commute: commute,
          commuteMap: commuteMap,
          comparator: comparator,
          complement: complement,
          compose: compose,
          composeK: composeK,
          composeP: composeP,
          concat: concat,
          cond: cond,
          construct: construct,
          constructN: constructN,
          contains: contains,
          containsWith: containsWith,
          converge: converge,
          countBy: countBy,
          createMapEntry: createMapEntry,
          curry: curry,
          curryN: curryN,
          dec: dec,
          defaultTo: defaultTo,
          difference: difference,
          differenceWith: differenceWith,
          dissoc: dissoc,
          dissocPath: dissocPath,
          divide: divide,
          drop: drop,
          dropLast: dropLast,
          dropLastWhile: dropLastWhile,
          dropRepeats: dropRepeats,
          dropRepeatsWith: dropRepeatsWith,
          dropWhile: dropWhile,
          either: either,
          empty: empty,
          eqProps: eqProps,
          equals: equals,
          evolve: evolve,
          filter: filter,
          find: find,
          findIndex: findIndex,
          findLast: findLast,
          findLastIndex: findLastIndex,
          flatten: flatten,
          flip: flip,
          forEach: forEach,
          fromPairs: fromPairs,
          functions: functions,
          functionsIn: functionsIn,
          groupBy: groupBy,
          gt: gt,
          gte: gte,
          has: has,
          hasIn: hasIn,
          head: head,
          identical: identical,
          identity: identity,
          ifElse: ifElse,
          inc: inc,
          indexOf: indexOf,
          init: init,
          insert: insert,
          insertAll: insertAll,
          intersection: intersection,
          intersectionWith: intersectionWith,
          intersperse: intersperse,
          into: into,
          invert: invert,
          invertObj: invertObj,
          invoker: invoker,
          is: is,
          isArrayLike: isArrayLike,
          isEmpty: isEmpty,
          isNil: isNil,
          isSet: isSet,
          join: join,
          keys: keys,
          keysIn: keysIn,
          last: last,
          lastIndexOf: lastIndexOf,
          length: length,
          lens: lens,
          lensIndex: lensIndex,
          lensProp: lensProp,
          lift: lift,
          liftN: liftN,
          lt: lt,
          lte: lte,
          map: map,
          mapAccum: mapAccum,
          mapAccumRight: mapAccumRight,
          mapObj: mapObj,
          mapObjIndexed: mapObjIndexed,
          match: match,
          mathMod: mathMod,
          max: max,
          maxBy: maxBy,
          mean: mean,
          median: median,
          memoize: memoize,
          merge: merge,
          mergeAll: mergeAll,
          min: min,
          minBy: minBy,
          modulo: modulo,
          multiply: multiply,
          nAry: nAry,
          negate: negate,
          none: none,
          not: not,
          nth: nth,
          nthArg: nthArg,
          nthChar: nthChar,
          nthCharCode: nthCharCode,
          of: of,
          omit: omit,
          once: once,
          or: or,
          over: over,
          partial: partial,
          partialRight: partialRight,
          partition: partition,
          path: path,
          pathEq: pathEq,
          pick: pick,
          pickAll: pickAll,
          pickBy: pickBy,
          pipe: pipe,
          pipeK: pipeK,
          pipeP: pipeP,
          pluck: pluck,
          prepend: prepend,
          product: product,
          project: project,
          prop: prop,
          propEq: propEq,
          propIs: propIs,
          propOr: propOr,
          propSatisfies: propSatisfies,
          props: props,
          range: range,
          reduce: reduce,
          reduceRight: reduceRight,
          reduced: reduced,
          reject: reject,
          remove: remove,
          repeat: repeat,
          replace: replace,
          reverse: reverse,
          scan: scan,
          set: set,
          slice: slice,
          sort: sort,
          sortBy: sortBy,
          split: split,
          splitEvery: splitEvery,
          subtract: subtract,
          sum: sum,
          tail: tail,
          take: take,
          takeLast: takeLast,
          takeLastWhile: takeLastWhile,
          takeWhile: takeWhile,
          tap: tap,
          test: test,
          times: times,
          toLower: toLower,
          toPairs: toPairs,
          toPairsIn: toPairsIn,
          toString: toString,
          toUpper: toUpper,
          transduce: transduce,
          trim: trim,
          type: type,
          unapply: unapply,
          unary: unary,
          uncurryN: uncurryN,
          unfold: unfold,
          union: union,
          unionWith: unionWith,
          uniq: uniq,
          uniqBy: uniqBy,
          uniqWith: uniqWith,
          unnest: unnest,
          update: update,
          useWith: useWith,
          values: values,
          valuesIn: valuesIn,
          view: view,
          where: where,
          whereEq: whereEq,
          wrap: wrap,
          xprod: xprod,
          zip: zip,
          zipObj: zipObj,
          zipWith: zipWith
        };
        if (typeof exports === 'object') {
          module.exports = R;
        } else if (typeof define === 'function' && define.amd) {
          define(function() {
            return R;
          });
        } else {
          this.R = R;
        }
      }.call(this));
    }, {}],
    39: [function(require, module, exports) {
      "use strict";
      function isInteger(n) {
        return parseInt(n, 10) === n;
      }
      function createRC4(N) {
        function identityPermutation() {
          var s = new Array(N);
          for (var i = 0; i < N; i++) {
            s[i] = i;
          }
          return s;
        }
        function seed(key) {
          if (key === undefined) {
            key = new Array(N);
            for (var k = 0; k < N; k++) {
              key[k] = Math.floor(Math.random() * N);
            }
          } else if (typeof key === "string") {
            key = "" + key;
            key = key.split("").map(function(c) {
              return c.charCodeAt(0) % N;
            });
          } else if (Array.isArray(key)) {
            if (!key.every(function(v) {
              return typeof v === "number" && v === (v | 0);
            })) {
              throw new TypeError("invalid seed key specified: not array of integers");
            }
          } else {
            throw new TypeError("invalid seed key specified");
          }
          var keylen = key.length;
          var s = identityPermutation();
          var j = 0;
          for (var i = 0; i < N; i++) {
            j = (j + s[i] + key[i % keylen]) % N;
            var tmp = s[i];
            s[i] = s[j];
            s[j] = tmp;
          }
          return s;
        }
        function RC4(key) {
          this.s = seed(key);
          this.i = 0;
          this.j = 0;
        }
        RC4.prototype.randomNative = function() {
          this.i = (this.i + 1) % N;
          this.j = (this.j + this.s[this.i]) % N;
          var tmp = this.s[this.i];
          this.s[this.i] = this.s[this.j];
          this.s[this.j] = tmp;
          var k = this.s[(this.s[this.i] + this.s[this.j]) % N];
          return k;
        };
        RC4.prototype.randomUInt32 = function() {
          var a = this.randomByte();
          var b = this.randomByte();
          var c = this.randomByte();
          var d = this.randomByte();
          return ((a * 256 + b) * 256 + c) * 256 + d;
        };
        RC4.prototype.randomFloat = function() {
          return this.randomUInt32() / 0x100000000;
        };
        RC4.prototype.random = function() {
          var a;
          var b;
          if (arguments.length === 1) {
            a = 0;
            b = arguments[0];
          } else if (arguments.length === 2) {
            a = arguments[0];
            b = arguments[1];
          } else {
            throw new TypeError("random takes one or two integer arguments");
          }
          if (!isInteger(a) || !isInteger(b)) {
            throw new TypeError("random takes one or two integer arguments");
          }
          return a + this.randomUInt32() % (b - a + 1);
        };
        RC4.prototype.currentState = function() {
          return {
            i: this.i,
            j: this.j,
            s: this.s.slice()
          };
        };
        RC4.prototype.setState = function(state) {
          var s = state.s;
          var i = state.i;
          var j = state.j;
          if (!(i === (i | 0) && 0 <= i && i < N)) {
            throw new Error("state.i should be integer [0, " + (N - 1) + "]");
          }
          if (!(j === (j | 0) && 0 <= j && j < N)) {
            throw new Error("state.j should be integer [0, " + (N - 1) + "]");
          }
          if (!Array.isArray(s) || s.length !== N) {
            throw new Error("state should be array of length " + N);
          }
          for (var k = 0; k < N; k++) {
            if (s.indexOf(k) === -1) {
              throw new Error("state should be permutation of 0.." + (N - 1) + ": " + k + " is missing");
            }
          }
          this.i = i;
          this.j = j;
          this.s = s.slice();
        };
        return RC4;
      }
      var RC4 = createRC4(256);
      RC4.prototype.randomByte = RC4.prototype.randomNative;
      var RC4small = createRC4(16);
      RC4small.prototype.randomByte = function() {
        var a = this.randomNative();
        var b = this.randomNative();
        return a * 16 + b;
      };
      var ordA = "a".charCodeAt(0);
      var ord0 = "0".charCodeAt(0);
      function toHex(n) {
        return n < 10 ? String.fromCharCode(ord0 + n) : String.fromCharCode(ordA + n - 10);
      }
      function fromHex(c) {
        return parseInt(c, 16);
      }
      RC4small.prototype.currentStateString = function() {
        var state = this.currentState();
        var i = toHex(state.i);
        var j = toHex(state.j);
        var res = i + j + state.s.map(toHex).join("");
        return res;
      };
      RC4small.prototype.setStateString = function(stateString) {
        if (!stateString.match(/^[0-9a-f]{18}$/)) {
          throw new TypeError("RC4small stateString should be 18 hex character string");
        }
        var i = fromHex(stateString[0]);
        var j = fromHex(stateString[1]);
        var s = stateString.split("").slice(2).map(fromHex);
        this.setState({
          i: i,
          j: j,
          s: s
        });
      };
      RC4.RC4small = RC4small;
      module.exports = RC4;
    }, {}],
    40: [function(require, module, exports) {
      ((typeof define === "function" && define.amd && function(m) {
        define("samsam", m);
      }) || (typeof module === "object" && function(m) {
        module.exports = m();
      }) || function(m) {
        this.samsam = m();
      })(function() {
        var o = Object.prototype;
        var div = typeof document !== "undefined" && document.createElement("div");
        function isNaN(value) {
          var val = value;
          return typeof value === "number" && value !== val;
        }
        function getClass(value) {
          return o.toString.call(value).split(/[ \]]/)[1];
        }
        function isArguments(object) {
          if (getClass(object) === 'Arguments') {
            return true;
          }
          if (typeof object !== "object" || typeof object.length !== "number" || getClass(object) === "Array") {
            return false;
          }
          if (typeof object.callee == "function") {
            return true;
          }
          try {
            object[object.length] = 6;
            delete object[object.length];
          } catch (e) {
            return true;
          }
          return false;
        }
        function isElement(object) {
          if (!object || object.nodeType !== 1 || !div) {
            return false;
          }
          try {
            object.appendChild(div);
            object.removeChild(div);
          } catch (e) {
            return false;
          }
          return true;
        }
        function keys(object) {
          var ks = [],
              prop;
          for (prop in object) {
            if (o.hasOwnProperty.call(object, prop)) {
              ks.push(prop);
            }
          }
          return ks;
        }
        function isDate(value) {
          return typeof value.getTime == "function" && value.getTime() == value.valueOf();
        }
        function isNegZero(value) {
          return value === 0 && 1 / value === -Infinity;
        }
        function identical(obj1, obj2) {
          if (obj1 === obj2 || (isNaN(obj1) && isNaN(obj2))) {
            return obj1 !== 0 || isNegZero(obj1) === isNegZero(obj2);
          }
        }
        function deepEqualCyclic(obj1, obj2) {
          var objects1 = [],
              objects2 = [],
              paths1 = [],
              paths2 = [],
              compared = {};
          function isObject(value) {
            if (typeof value === 'object' && value !== null && !(value instanceof Boolean) && !(value instanceof Date) && !(value instanceof Number) && !(value instanceof RegExp) && !(value instanceof String)) {
              return true;
            }
            return false;
          }
          function getIndex(objects, obj) {
            var i;
            for (i = 0; i < objects.length; i++) {
              if (objects[i] === obj) {
                return i;
              }
            }
            return -1;
          }
          return (function deepEqual(obj1, obj2, path1, path2) {
            var type1 = typeof obj1;
            var type2 = typeof obj2;
            if (obj1 === obj2 || isNaN(obj1) || isNaN(obj2) || obj1 == null || obj2 == null || type1 !== "object" || type2 !== "object") {
              return identical(obj1, obj2);
            }
            if (isElement(obj1) || isElement(obj2)) {
              return false;
            }
            var isDate1 = isDate(obj1),
                isDate2 = isDate(obj2);
            if (isDate1 || isDate2) {
              if (!isDate1 || !isDate2 || obj1.getTime() !== obj2.getTime()) {
                return false;
              }
            }
            if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
              if (obj1.toString() !== obj2.toString()) {
                return false;
              }
            }
            var class1 = getClass(obj1);
            var class2 = getClass(obj2);
            var keys1 = keys(obj1);
            var keys2 = keys(obj2);
            if (isArguments(obj1) || isArguments(obj2)) {
              if (obj1.length !== obj2.length) {
                return false;
              }
            } else {
              if (type1 !== type2 || class1 !== class2 || keys1.length !== keys2.length) {
                return false;
              }
            }
            var key,
                i,
                l,
                value1,
                value2,
                isObject1,
                isObject2,
                index1,
                index2,
                newPath1,
                newPath2;
            for (i = 0, l = keys1.length; i < l; i++) {
              key = keys1[i];
              if (!o.hasOwnProperty.call(obj2, key)) {
                return false;
              }
              value1 = obj1[key];
              value2 = obj2[key];
              isObject1 = isObject(value1);
              isObject2 = isObject(value2);
              index1 = isObject1 ? getIndex(objects1, value1) : -1;
              index2 = isObject2 ? getIndex(objects2, value2) : -1;
              newPath1 = index1 !== -1 ? paths1[index1] : path1 + '[' + JSON.stringify(key) + ']';
              newPath2 = index2 !== -1 ? paths2[index2] : path2 + '[' + JSON.stringify(key) + ']';
              if (compared[newPath1 + newPath2]) {
                return true;
              }
              if (index1 === -1 && isObject1) {
                objects1.push(value1);
                paths1.push(newPath1);
              }
              if (index2 === -1 && isObject2) {
                objects2.push(value2);
                paths2.push(newPath2);
              }
              if (isObject1 && isObject2) {
                compared[newPath1 + newPath2] = true;
              }
              if (!deepEqual(value1, value2, newPath1, newPath2)) {
                return false;
              }
            }
            return true;
          }(obj1, obj2, '$1', '$2'));
        }
        var match;
        function arrayContains(array, subset) {
          if (subset.length === 0) {
            return true;
          }
          var i,
              l,
              j,
              k;
          for (i = 0, l = array.length; i < l; ++i) {
            if (match(array[i], subset[0])) {
              for (j = 0, k = subset.length; j < k; ++j) {
                if (!match(array[i + j], subset[j])) {
                  return false;
                }
              }
              return true;
            }
          }
          return false;
        }
        match = function match(object, matcher) {
          if (matcher && typeof matcher.test === "function") {
            return matcher.test(object);
          }
          if (typeof matcher === "function") {
            return matcher(object) === true;
          }
          if (typeof matcher === "string") {
            matcher = matcher.toLowerCase();
            var notNull = typeof object === "string" || !!object;
            return notNull && (String(object)).toLowerCase().indexOf(matcher) >= 0;
          }
          if (typeof matcher === "number") {
            return matcher === object;
          }
          if (typeof matcher === "boolean") {
            return matcher === object;
          }
          if (typeof(matcher) === "undefined") {
            return typeof(object) === "undefined";
          }
          if (matcher === null) {
            return object === null;
          }
          if (getClass(object) === "Array" && getClass(matcher) === "Array") {
            return arrayContains(object, matcher);
          }
          if (matcher && typeof matcher === "object") {
            if (matcher === object) {
              return true;
            }
            var prop;
            for (prop in matcher) {
              var value = object[prop];
              if (typeof value === "undefined" && typeof object.getAttribute === "function") {
                value = object.getAttribute(prop);
              }
              if (matcher[prop] === null || typeof matcher[prop] === 'undefined') {
                if (value !== matcher[prop]) {
                  return false;
                }
              } else if (typeof value === "undefined" || !match(value, matcher[prop])) {
                return false;
              }
            }
            return true;
          }
          throw new Error("Matcher was not a string, a number, a " + "function, a boolean or an object");
        };
        return {
          isArguments: isArguments,
          isElement: isElement,
          isDate: isDate,
          isNegZero: isNegZero,
          identical: identical,
          deepEqual: deepEqualCyclic,
          match: match,
          keys: keys
        };
      });
    }, {}],
    41: [function(require, module, exports) {
      ;
      (function(f) {
        'use strict';
        if (typeof module !== 'undefined') {
          module.exports = f(require('./index'));
        } else if (typeof define === 'function' && define.amd != null) {
          define(['ramda'], f);
        } else {
          self.sanctuary = f(self.R);
        }
      }(function(R) {
        'use strict';
        var S = {};
        var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
        var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
        var _ = R.__;
        var placeholder = function(x) {
          return x != null && x['@@functional/placeholder'] === true;
        };
        var formatters = {
          '{}': R.identity,
          '{card}': R.ifElse(R.lte(_, 10), R.nth(_, ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']), String),
          '{ord}': R.nth(_, ['first', 'second', 'third']),
          '{quote}': function(s) {
            return '\u2018' + s + '\u2019';
          },
          '{repr}': R.toString,
          '{type}': R.pipe(String, R.match(/^function (\w*)/), R.nth(1))
        };
        var format = R.curry(function(template, values) {
          var idx = -1;
          return template.replace(/[{].*?[}]/g, function(match) {
            return formatters[match](values[idx += 1]);
          });
        });
        var Accessible = function Accessible() {};
        var Integer = function Integer() {};
        var List = function List() {};
        var TypeRep = function TypeRep() {};
        var a = {name: 'a'};
        var b = {name: 'b'};
        var c = {name: 'c'};
        var _is = function(type, x) {
          if (x == null)
            return false;
          switch (type) {
            case Accessible:
              return true;
            case Integer:
              return _is(Number, x) && Math.floor(x) === Number(x) && x >= MIN_SAFE_INTEGER && x <= MAX_SAFE_INTEGER;
            case List:
              return !_is(Function, x) && _is(Number, x.length) && x.length >= 0;
            case TypeRep:
              return _is(Function, x);
            default:
              return Object(x) instanceof type;
          }
        };
        var arity = function(n, f) {
          switch (n) {
            case 0:
              return function() {
                return f.apply(this, arguments);
              };
            case 1:
              return function(a) {
                return f.apply(this, arguments);
              };
            case 2:
              return function(a, b) {
                return f.apply(this, arguments);
              };
            case 3:
              return function(a, b, c) {
                return f.apply(this, arguments);
              };
          }
        };
        var curry = function(name, types, _values, f) {
          return arity(R.filter(placeholder, _values).length, function() {
            var values = _values;
            var paramIndexes = [];
            for (var idx = 0; idx < values.length; idx += 1) {
              if (placeholder(values[idx])) {
                paramIndexes.push(idx);
              }
            }
            if (arguments.length > paramIndexes.length) {
              throw new TypeError(format('{quote} requires {card} {}; received {card} arguments', [name, values.length, values.length === 1 ? 'argument' : 'arguments', values.length + arguments.length - paramIndexes.length]));
            }
            for (var argIndex = 0; argIndex < arguments.length; argIndex += 1) {
              var arg = arguments[argIndex];
              var paramIndex = paramIndexes[argIndex];
              var type = types[paramIndex];
              if (placeholder(arg)) {
                continue;
              } else if (type === a || type === b || type === c) {
                for (idx = 0; idx < values.length; idx += 1) {
                  var val = values[idx];
                  if (types[idx] === type && !placeholder(val) && !(R.type(val) === R.type(arg) && val.type === arg.type)) {
                    throw new TypeError(format('{quote} requires its {ord} and {ord} arguments ' + 'to be of the same type; {repr} and {repr} are not', paramIndex > idx ? [name, idx, paramIndex, val, arg] : [name, paramIndex, idx, arg, val]));
                  }
                }
              } else if (type === Accessible) {
                if (arg == null) {
                  throw new TypeError(format('The {ord} argument to {quote} cannot be null or undefined', [paramIndex, name]));
                }
              } else if (!_is(type, arg)) {
                throw new TypeError(format('{quote} requires a value of type {type} as its {ord} argument; ' + 'received {repr}', [name, type, paramIndex, arg]));
              }
              values = R.update(paramIndex, arg, values);
            }
            var args = R.reject(placeholder, values);
            return args.length === values.length ? f.apply(this, args) : curry(name, types, values, f);
          });
        };
        var def = function(name, types, f) {
          return curry(name, types, R.map(function() {
            return _;
          }, types), f);
        };
        var compose2 = function(f, g) {
          return function(x) {
            return f(g(x));
          };
        };
        var extend = function(Child, Parent) {
          function Ctor() {
            this.constructor = Child;
          }
          Ctor.prototype = Parent.prototype;
          Child.prototype = new Ctor();
          Child.super_ = Parent.prototype;
        };
        var filter = function(pred, m) {
          return m.chain(function(x) {
            return pred(x) ? m.of(x) : m.empty();
          });
        };
        var assertMethodExists = function(method, x) {
          if (x == null || typeof x[method] !== 'function') {
            throw new TypeError(format('{repr} does not have {} {quote} method', [x, R.test(/^[aeiou]/i, method) ? 'an' : 'a', method]));
          }
        };
        var invoke = R.curry(function(method, args, x) {
          assertMethodExists(method, x);
          return x[method].apply(x, args);
        });
        var negativeZero = R.either(R.equals(-0), R.equals(new Number(-0)));
        var self = function() {
          return this;
        };
        var toString = function(name) {
          return def(name + '#toString', [], function() {
            return name + '(' + R.toString(this.value) + ')';
          });
        };
        var is = S.is = def('is', [TypeRep, a], _is);
        var I = S.I = def('I', [a], function(x) {
          return x;
        });
        var K = S.K = def('K', [a, b], function(x, y) {
          return x;
        });
        var compose = S.compose = def('compose', [Function, Function, a], function(f, g, x) {
          return f(g(x));
        });
        S.pipe = def('pipe', [List, a], function(fs, x) {
          return R.reduceRight(compose2, I, fs)(x);
        });
        S.meld = def('meld', [List], function(fs) {
          return R.curryN(1 + R.sum(R.map(R.length, fs)) - fs.length, function() {
            var args = Array.prototype.slice.call(arguments);
            for (var idx = 0; idx < fs.length; idx += 1) {
              args.unshift(fs[idx].apply(this, args.splice(0, fs[idx].length)));
            }
            return args[0];
          });
        });
        var Maybe = S.Maybe = function Maybe() {
          throw new Error('Cannot instantiate Maybe');
        };
        Maybe.empty = def('Maybe.empty', [], function() {
          return Nothing();
        });
        Maybe.of = def('Maybe.of', [a], function(x) {
          return Just(x);
        });
        Maybe.prototype.empty = def('Maybe#empty', [], Maybe.empty);
        Maybe.prototype.filter = def('Maybe#filter', [Function], function(pred) {
          return filter(pred, this);
        });
        Maybe.prototype.of = def('Maybe#of', [a], Maybe.of);
        Maybe.prototype.type = Maybe;
        var Nothing = S.Nothing = function Nothing() {
          if (!(this instanceof Nothing)) {
            return new Nothing();
          }
        };
        extend(Nothing, Maybe);
        Nothing.prototype.ap = def('Nothing#ap', [Maybe], self);
        Nothing.prototype.chain = def('Nothing#chain', [Function], self);
        Nothing.prototype.concat = def('Nothing#concat', [Maybe], function(maybe) {
          if (maybe instanceof Just) {
            assertMethodExists('concat', maybe.value);
          }
          return maybe;
        });
        Nothing.prototype.equals = def('Nothing#equals', [a], is(Nothing));
        Nothing.prototype.extend = def('Nothing#extend', [Function], self);
        Nothing.prototype.map = def('Nothing#map', [Function], self);
        Nothing.prototype.reduce = def('Nothing#reduce', [Function, a], function(f, z) {
          return z;
        });
        Nothing.prototype.toBoolean = def('Nothing#toBoolean', [], R.always(false));
        Nothing.prototype.toString = def('Nothing#toString', [], R.always('Nothing()'));
        var Just = S.Just = function Just(value) {
          if (!(this instanceof Just)) {
            return new Just(value);
          } else {
            this.value = value;
          }
        };
        extend(Just, Maybe);
        Just.prototype.ap = def('Just#ap', [Maybe], function(maybe) {
          return maybe.map(this.value);
        });
        Just.prototype.chain = def('Just#chain', [Function], function(f) {
          return f(this.value);
        });
        Just.prototype.concat = def('Just#concat', [Maybe], function(maybe) {
          assertMethodExists('concat', this.value);
          if (maybe instanceof Just) {
            assertMethodExists('concat', maybe.value);
            return Just(this.value.concat(maybe.value));
          } else {
            return this;
          }
        });
        Just.prototype.equals = def('Just#equals', [a], function(x) {
          return x instanceof Just && R.eqProps('value', x, this);
        });
        Just.prototype.extend = def('Just#extend', [Function], function(f) {
          return Just(f(this));
        });
        Just.prototype.map = def('Just#map', [Function], function(f) {
          return Just(f(this.value));
        });
        Just.prototype.reduce = def('Just#reduce', [Function, a], function(f, z) {
          return f(z, this.value);
        });
        Just.prototype.toBoolean = def('Just#toBoolean', [], R.always(true));
        Just.prototype.toString = toString('Just');
        var fromMaybe = S.fromMaybe = def('fromMaybe', [a, Maybe], function(x, maybe) {
          return maybe instanceof Just ? maybe.value : x;
        });
        var toMaybe = S.toMaybe = def('toMaybe', [a], R.ifElse(R.isNil, Nothing, Just));
        var maybe = S.maybe = def('maybe', [a, Function, Maybe], function(x, f, maybe) {
          return fromMaybe(x, maybe.map(f));
        });
        var catMaybes = S.catMaybes = def('catMaybes', [List], R.chain(maybe([], R.of)));
        S.mapMaybe = def('mapMaybe', [Function, List], R.compose(catMaybes, R.map));
        var encase = S.encase = def('encase', [Function], function(f) {
          return R.curryN(f.length, function() {
            try {
              return Just(f.apply(this, arguments));
            } catch (err) {
              return Nothing();
            }
          });
        });
        var Either = S.Either = function Either() {
          throw new Error('Cannot instantiate Either');
        };
        Either.of = def('Either.of', [a], function(x) {
          return Right(x);
        });
        Either.prototype.of = def('Either#of', [a], Either.of);
        Either.prototype.type = Either;
        var Left = S.Left = function Left(value) {
          if (!(this instanceof Left)) {
            return new Left(value);
          }
          this.value = value;
        };
        extend(Left, Either);
        Left.prototype.ap = def('Left#ap', [Either], self);
        Left.prototype.chain = def('Left#chain', [Function], self);
        Left.prototype.concat = def('Left#concat', [Either], function(either) {
          assertMethodExists('concat', this.value);
          assertMethodExists('concat', either.value);
          return is(Left, either) ? Left(this.value.concat(either.value)) : either;
        });
        Left.prototype.equals = def('Left#equals', [a], function(x) {
          return x instanceof Left && R.eqProps('value', x, this);
        });
        Left.prototype.extend = def('Left#extend', [Function], self);
        Left.prototype.map = def('Left#map', [Function], self);
        Left.prototype.toBoolean = def('Left#toBoolean', [], R.always(false));
        Left.prototype.toString = toString('Left');
        var Right = S.Right = function Right(value) {
          if (!(this instanceof Right)) {
            return new Right(value);
          }
          this.value = value;
        };
        extend(Right, Either);
        Right.prototype.ap = def('Right#ap', [Either], function(either) {
          return either.map(this.value);
        });
        Right.prototype.chain = def('Right#chain', [Function], function(f) {
          return f(this.value);
        });
        Right.prototype.concat = def('Right#concat', [Either], function(either) {
          assertMethodExists('concat', this.value);
          assertMethodExists('concat', either.value);
          return is(Right, either) ? Right(this.value.concat(either.value)) : this;
        });
        Right.prototype.equals = def('Right#equals', [a], function(x) {
          return x instanceof Right && R.eqProps('value', x, this);
        });
        Right.prototype.extend = def('Right#extend', [Function], function(f) {
          return Right(f(this));
        });
        Right.prototype.map = def('Right#map', [Function], function(f) {
          return Right(f(this.value));
        });
        Right.prototype.toBoolean = def('Right#toBoolean', [], R.always(true));
        Right.prototype.toString = toString('Right');
        S.either = def('either', [Function, Function, Either], function(l, r, either) {
          return either instanceof Left ? l(either.value) : r(either.value);
        });
        S.encaseEither = def('encaseEither', [Function, Function], function(f, g) {
          return R.curryN(g.length, function() {
            try {
              return Right(g.apply(this, arguments));
            } catch (err) {
              return Left(f(err));
            }
          });
        });
        S.maybeToEither = def('maybeToEither', [a, Maybe], function(x, maybe) {
          return maybe instanceof Nothing ? Left(x) : Right(maybe.value);
        });
        var toBoolean = R.cond([[is(Array), R.complement(R.isEmpty)], [is(Boolean), I], [R.T, invoke('toBoolean', [])]]);
        var empty = R.cond([[is(Array), function() {
          return [];
        }], [is(Boolean), K(false)], [R.T, invoke('empty', [])]]);
        S.and = def('and', [a, a], function(x, y) {
          return toBoolean(x) ? y : x;
        });
        var or = S.or = def('or', [a, a], function(x, y) {
          return toBoolean(x) ? x : y;
        });
        S.xor = def('xor', [a, a], function(x, y) {
          var xBool = toBoolean(x);
          var yBool = toBoolean(y);
          var xEmpty = empty(x);
          return xBool !== yBool ? or(x, y) : xEmpty;
        });
        var slice = S.slice = def('slice', [Integer, Integer, List], function(start, end, xs) {
          var len = xs.length;
          var startIdx = negativeZero(start) ? len : start < 0 ? start + len : start;
          var endIdx = negativeZero(end) ? len : end < 0 ? end + len : end;
          return (Math.abs(start) <= len && Math.abs(end) <= len && startIdx <= endIdx) ? Just(R.slice(startIdx, endIdx, xs)) : Nothing();
        });
        var at = S.at = def('at', [Integer, List], function(n, xs) {
          return R.map(R.head, slice(n, n === -1 ? -0 : n + 1, xs));
        });
        S.head = def('head', [List], at(0));
        S.last = def('last', [List], at(-1));
        S.tail = def('tail', [List], slice(1, -0));
        S.init = def('init', [List], slice(0, -1));
        S.take = def('take', [Integer, List], function(n, xs) {
          return n < 0 || negativeZero(n) ? Nothing() : slice(0, n, xs);
        });
        S.takeLast = def('takeLast', [Integer, List], function(n, xs) {
          return n < 0 || negativeZero(n) ? Nothing() : slice(-n, -0, xs);
        });
        S.drop = def('drop', [Integer, List], function(n, xs) {
          return n < 0 || negativeZero(n) ? Nothing() : slice(n, -0, xs);
        });
        S.dropLast = def('dropLast', [Integer, List], function(n, xs) {
          return n < 0 || negativeZero(n) ? Nothing() : slice(0, -n, xs);
        });
        S.find = def('find', [Function, List], function(pred, xs) {
          for (var idx = 0,
              len = xs.length; idx < len; idx += 1) {
            if (pred(xs[idx])) {
              return Just(xs[idx]);
            }
          }
          return Nothing();
        });
        var sanctifyIndexOf = function(name) {
          return def(name, [a, List], R.pipe(R[name], Just, R.filter(R.gte(_, 0))));
        };
        S.indexOf = sanctifyIndexOf('indexOf');
        S.lastIndexOf = sanctifyIndexOf('lastIndexOf');
        S.pluck = def('pluck', [TypeRep, String, List], function(type, key, xs) {
          return R.map(get(type, key), xs);
        });
        var get = S.get = def('get', [TypeRep, String, Accessible], function(type, key, obj) {
          return filter(is(type), Just(obj[key]));
        });
        S.gets = def('gets', [TypeRep, List, Accessible], function(type, keys, obj) {
          var f = function(m, k) {
            return R.chain(get(Accessible, k), m);
          };
          return filter(is(type), R.reduce(f, Just(obj), keys));
        });
        S.parseDate = def('parseDate', [String], function(s) {
          var d = new Date(s);
          return d.valueOf() === d.valueOf() ? Just(d) : Nothing();
        });
        var requiredNonCapturingGroup = function(xs) {
          return '(?:' + xs.join('|') + ')';
        };
        var optionalNonCapturingGroup = function(xs) {
          return requiredNonCapturingGroup(xs) + '?';
        };
        var validFloatRepr = R.test(new RegExp('^' + '\\s*' + '[+-]?' + requiredNonCapturingGroup(['Infinity', 'NaN', requiredNonCapturingGroup(['[0-9]+', '[0-9]+[.][0-9]+', '[0-9]+[.]', '[.][0-9]+']) + optionalNonCapturingGroup(['[Ee]' + '[+-]?' + '[0-9]+'])]) + '\\s*' + '$'));
        S.parseFloat = def('parseFloat', [String], R.pipe(Just, R.filter(validFloatRepr), R.map(parseFloat)));
        S.parseInt = def('parseInt', [Integer, String], function(radix, s) {
          if (radix < 2 || radix > 36) {
            throw new RangeError('Radix not in [2 .. 36]');
          }
          var charset = R.take(radix, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
          return R.pipe(Just, R.filter(R.pipe(R.replace(/^[+-]/, ''), radix === 16 ? R.replace(/^0x/i, '') : I, R.split(''), R.all(R.pipe(R.toUpper, R.indexOf(_, charset), R.gte(_, 0))))), R.map(R.partialRight(parseInt, radix)), R.filter(is(Integer)))(s);
        });
        S.parseJson = def('parseJson', [String], encase(function(s) {
          return JSON.parse(s);
        }));
        S.match = def('match', [RegExp, String], function(pattern, s) {
          return R.map(R.map(toMaybe), toMaybe(s.match(pattern)));
        });
        S.words = def('words', [String], compose(R.reject(R.isEmpty), R.split(/\s+/)));
        S.unwords = def('unwords', [List], R.join(' '));
        S.lines = def('lines', [String], compose(R.match(/^(?=[\s\S]).*/gm), R.replace(/\r\n?/g, '\n')));
        S.unlines = def('unlines', [List], compose(R.join(''), R.map(R.concat(_, '\n'))));
        return S;
      }));
    }, {"ramda": 38}],
    42: [function(require, module, exports) {
      var sinon = (function() {
        "use strict";
        var sinonModule;
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          sinonModule = module.exports = require('./sinon/util/core');
          require('./sinon/extend');
          require('./sinon/walk');
          require('./sinon/typeOf');
          require('./sinon/times_in_words');
          require('./sinon/spy');
          require('./sinon/call');
          require('./sinon/behavior');
          require('./sinon/stub');
          require('./sinon/mock');
          require('./sinon/collection');
          require('./sinon/assert');
          require('./sinon/sandbox');
          require('./sinon/test');
          require('./sinon/test_case');
          require('./sinon/match');
          require('./sinon/format');
          require('./sinon/log_error');
        }
        if (isAMD) {
          define(loadDependencies);
        } else if (isNode) {
          loadDependencies(require, module.exports, module);
          sinonModule = module.exports;
        } else {
          sinonModule = {};
        }
        return sinonModule;
      }());
    }, {
      "./sinon/assert": 43,
      "./sinon/behavior": 44,
      "./sinon/call": 45,
      "./sinon/collection": 46,
      "./sinon/extend": 47,
      "./sinon/format": 48,
      "./sinon/log_error": 49,
      "./sinon/match": 50,
      "./sinon/mock": 51,
      "./sinon/sandbox": 52,
      "./sinon/spy": 53,
      "./sinon/stub": 54,
      "./sinon/test": 55,
      "./sinon/test_case": 56,
      "./sinon/times_in_words": 57,
      "./sinon/typeOf": 58,
      "./sinon/util/core": 59,
      "./sinon/walk": 66
    }],
    43: [function(require, module, exports) {
      (function(global) {
        (function(sinonGlobal, global) {
          "use strict";
          var slice = Array.prototype.slice;
          function makeApi(sinon) {
            var assert;
            function verifyIsStub() {
              var method;
              for (var i = 0,
                  l = arguments.length; i < l; ++i) {
                method = arguments[i];
                if (!method) {
                  assert.fail("fake is not a spy");
                }
                if (method.proxy && method.proxy.isSinonProxy) {
                  verifyIsStub(method.proxy);
                } else {
                  if (typeof method !== "function") {
                    assert.fail(method + " is not a function");
                  }
                  if (typeof method.getCall !== "function") {
                    assert.fail(method + " is not stubbed");
                  }
                }
              }
            }
            function verifyIsValidAssertion(assertionMethod, assertionArgs) {
              switch (assertionMethod) {
                case "notCalled":
                case "called":
                case "calledOnce":
                case "calledTwice":
                case "calledThrice":
                  if (assertionArgs.length !== 0) {
                    assert.fail(assertionMethod + " takes 1 argument but was called with " + (assertionArgs.length + 1) + " arguments");
                  }
                  break;
                default:
                  break;
              }
            }
            function failAssertion(object, msg) {
              object = object || global;
              var failMethod = object.fail || assert.fail;
              failMethod.call(object, msg);
            }
            function mirrorPropAsAssertion(name, method, message) {
              if (arguments.length === 2) {
                message = method;
                method = name;
              }
              assert[name] = function(fake) {
                verifyIsStub(fake);
                var args = slice.call(arguments, 1);
                verifyIsValidAssertion(name, args);
                var failed = false;
                if (typeof method === "function") {
                  failed = !method(fake);
                } else {
                  failed = typeof fake[method] === "function" ? !fake[method].apply(fake, args) : !fake[method];
                }
                if (failed) {
                  failAssertion(this, (fake.printf || fake.proxy.printf).apply(fake, [message].concat(args)));
                } else {
                  assert.pass(name);
                }
              };
            }
            function exposedName(prefix, prop) {
              return !prefix || /^fail/.test(prop) ? prop : prefix + prop.slice(0, 1).toUpperCase() + prop.slice(1);
            }
            assert = {
              failException: "AssertError",
              fail: function fail(message) {
                var error = new Error(message);
                error.name = this.failException || assert.failException;
                throw error;
              },
              pass: function pass() {},
              callOrder: function assertCallOrder() {
                verifyIsStub.apply(null, arguments);
                var expected = "";
                var actual = "";
                if (!sinon.calledInOrder(arguments)) {
                  try {
                    expected = [].join.call(arguments, ", ");
                    var calls = slice.call(arguments);
                    var i = calls.length;
                    while (i) {
                      if (!calls[--i].called) {
                        calls.splice(i, 1);
                      }
                    }
                    actual = sinon.orderByFirstCall(calls).join(", ");
                  } catch (e) {}
                  failAssertion(this, "expected " + expected + " to be " + "called in order but were called as " + actual);
                } else {
                  assert.pass("callOrder");
                }
              },
              callCount: function assertCallCount(method, count) {
                verifyIsStub(method);
                if (method.callCount !== count) {
                  var msg = "expected %n to be called " + sinon.timesInWords(count) + " but was called %c%C";
                  failAssertion(this, method.printf(msg));
                } else {
                  assert.pass("callCount");
                }
              },
              expose: function expose(target, options) {
                if (!target) {
                  throw new TypeError("target is null or undefined");
                }
                var o = options || {};
                var prefix = typeof o.prefix === "undefined" && "assert" || o.prefix;
                var includeFail = typeof o.includeFail === "undefined" || !!o.includeFail;
                for (var method in this) {
                  if (method !== "expose" && (includeFail || !/^(fail)/.test(method))) {
                    target[exposedName(prefix, method)] = this[method];
                  }
                }
                return target;
              },
              match: function match(actual, expectation) {
                var matcher = sinon.match(expectation);
                if (matcher.test(actual)) {
                  assert.pass("match");
                } else {
                  var formatted = ["expected value to match", "    expected = " + sinon.format(expectation), "    actual = " + sinon.format(actual)];
                  failAssertion(this, formatted.join("\n"));
                }
              }
            };
            mirrorPropAsAssertion("called", "expected %n to have been called at least once but was never called");
            mirrorPropAsAssertion("notCalled", function(spy) {
              return !spy.called;
            }, "expected %n to not have been called but was called %c%C");
            mirrorPropAsAssertion("calledOnce", "expected %n to be called once but was called %c%C");
            mirrorPropAsAssertion("calledTwice", "expected %n to be called twice but was called %c%C");
            mirrorPropAsAssertion("calledThrice", "expected %n to be called thrice but was called %c%C");
            mirrorPropAsAssertion("calledOn", "expected %n to be called with %1 as this but was called with %t");
            mirrorPropAsAssertion("alwaysCalledOn", "expected %n to always be called with %1 as this but was called with %t");
            mirrorPropAsAssertion("calledWithNew", "expected %n to be called with new");
            mirrorPropAsAssertion("alwaysCalledWithNew", "expected %n to always be called with new");
            mirrorPropAsAssertion("calledWith", "expected %n to be called with arguments %*%C");
            mirrorPropAsAssertion("calledWithMatch", "expected %n to be called with match %*%C");
            mirrorPropAsAssertion("alwaysCalledWith", "expected %n to always be called with arguments %*%C");
            mirrorPropAsAssertion("alwaysCalledWithMatch", "expected %n to always be called with match %*%C");
            mirrorPropAsAssertion("calledWithExactly", "expected %n to be called with exact arguments %*%C");
            mirrorPropAsAssertion("alwaysCalledWithExactly", "expected %n to always be called with exact arguments %*%C");
            mirrorPropAsAssertion("neverCalledWith", "expected %n to never be called with arguments %*%C");
            mirrorPropAsAssertion("neverCalledWithMatch", "expected %n to never be called with match %*%C");
            mirrorPropAsAssertion("threw", "%n did not throw exception%C");
            mirrorPropAsAssertion("alwaysThrew", "%n did not always throw exception%C");
            sinon.assert = assert;
            return assert;
          }
          var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
          var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
          function loadDependencies(require, exports, module) {
            var sinon = require('./util/core');
            require('./match');
            require('./format');
            module.exports = makeApi(sinon);
          }
          if (isAMD) {
            define(loadDependencies);
            return;
          }
          if (isNode) {
            loadDependencies(require, module.exports, module);
            return;
          }
          if (sinonGlobal) {
            makeApi(sinonGlobal);
          }
        }(typeof sinon === "object" && sinon, typeof global !== "undefined" ? global : self));
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./format": 48,
      "./match": 50,
      "./util/core": 59
    }],
    44: [function(require, module, exports) {
      (function(process) {
        (function(sinonGlobal) {
          "use strict";
          var slice = Array.prototype.slice;
          var join = Array.prototype.join;
          var useLeftMostCallback = -1;
          var useRightMostCallback = -2;
          var nextTick = (function() {
            if (typeof process === "object" && typeof process.nextTick === "function") {
              return process.nextTick;
            }
            if (typeof setImmediate === "function") {
              return setImmediate;
            }
            return function(callback) {
              setTimeout(callback, 0);
            };
          })();
          function throwsException(error, message) {
            if (typeof error === "string") {
              this.exception = new Error(message || "");
              this.exception.name = error;
            } else if (!error) {
              this.exception = new Error("Error");
            } else {
              this.exception = error;
            }
            return this;
          }
          function getCallback(behavior, args) {
            var callArgAt = behavior.callArgAt;
            if (callArgAt >= 0) {
              return args[callArgAt];
            }
            var argumentList;
            if (callArgAt === useLeftMostCallback) {
              argumentList = args;
            }
            if (callArgAt === useRightMostCallback) {
              argumentList = slice.call(args).reverse();
            }
            var callArgProp = behavior.callArgProp;
            for (var i = 0,
                l = argumentList.length; i < l; ++i) {
              if (!callArgProp && typeof argumentList[i] === "function") {
                return argumentList[i];
              }
              if (callArgProp && argumentList[i] && typeof argumentList[i][callArgProp] === "function") {
                return argumentList[i][callArgProp];
              }
            }
            return null;
          }
          function makeApi(sinon) {
            function getCallbackError(behavior, func, args) {
              if (behavior.callArgAt < 0) {
                var msg;
                if (behavior.callArgProp) {
                  msg = sinon.functionName(behavior.stub) + " expected to yield to '" + behavior.callArgProp + "', but no object with such a property was passed.";
                } else {
                  msg = sinon.functionName(behavior.stub) + " expected to yield, but no callback was passed.";
                }
                if (args.length > 0) {
                  msg += " Received [" + join.call(args, ", ") + "]";
                }
                return msg;
              }
              return "argument at index " + behavior.callArgAt + " is not a function: " + func;
            }
            function callCallback(behavior, args) {
              if (typeof behavior.callArgAt === "number") {
                var func = getCallback(behavior, args);
                if (typeof func !== "function") {
                  throw new TypeError(getCallbackError(behavior, func, args));
                }
                if (behavior.callbackAsync) {
                  nextTick(function() {
                    func.apply(behavior.callbackContext, behavior.callbackArguments);
                  });
                } else {
                  func.apply(behavior.callbackContext, behavior.callbackArguments);
                }
              }
            }
            var proto = {
              create: function create(stub) {
                var behavior = sinon.extend({}, sinon.behavior);
                delete behavior.create;
                behavior.stub = stub;
                return behavior;
              },
              isPresent: function isPresent() {
                return (typeof this.callArgAt === "number" || this.exception || typeof this.returnArgAt === "number" || this.returnThis || this.returnValueDefined);
              },
              invoke: function invoke(context, args) {
                callCallback(this, args);
                if (this.exception) {
                  throw this.exception;
                } else if (typeof this.returnArgAt === "number") {
                  return args[this.returnArgAt];
                } else if (this.returnThis) {
                  return context;
                }
                return this.returnValue;
              },
              onCall: function onCall(index) {
                return this.stub.onCall(index);
              },
              onFirstCall: function onFirstCall() {
                return this.stub.onFirstCall();
              },
              onSecondCall: function onSecondCall() {
                return this.stub.onSecondCall();
              },
              onThirdCall: function onThirdCall() {
                return this.stub.onThirdCall();
              },
              withArgs: function withArgs() {
                throw new Error("Defining a stub by invoking \"stub.onCall(...).withArgs(...)\" " + "is not supported. Use \"stub.withArgs(...).onCall(...)\" " + "to define sequential behavior for calls with certain arguments.");
              },
              callsArg: function callsArg(pos) {
                if (typeof pos !== "number") {
                  throw new TypeError("argument index is not number");
                }
                this.callArgAt = pos;
                this.callbackArguments = [];
                this.callbackContext = undefined;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              callsArgOn: function callsArgOn(pos, context) {
                if (typeof pos !== "number") {
                  throw new TypeError("argument index is not number");
                }
                if (typeof context !== "object") {
                  throw new TypeError("argument context is not an object");
                }
                this.callArgAt = pos;
                this.callbackArguments = [];
                this.callbackContext = context;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              callsArgWith: function callsArgWith(pos) {
                if (typeof pos !== "number") {
                  throw new TypeError("argument index is not number");
                }
                this.callArgAt = pos;
                this.callbackArguments = slice.call(arguments, 1);
                this.callbackContext = undefined;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              callsArgOnWith: function callsArgWith(pos, context) {
                if (typeof pos !== "number") {
                  throw new TypeError("argument index is not number");
                }
                if (typeof context !== "object") {
                  throw new TypeError("argument context is not an object");
                }
                this.callArgAt = pos;
                this.callbackArguments = slice.call(arguments, 2);
                this.callbackContext = context;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              yields: function() {
                this.callArgAt = useLeftMostCallback;
                this.callbackArguments = slice.call(arguments, 0);
                this.callbackContext = undefined;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              yieldsRight: function() {
                this.callArgAt = useRightMostCallback;
                this.callbackArguments = slice.call(arguments, 0);
                this.callbackContext = undefined;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              yieldsOn: function(context) {
                if (typeof context !== "object") {
                  throw new TypeError("argument context is not an object");
                }
                this.callArgAt = useLeftMostCallback;
                this.callbackArguments = slice.call(arguments, 1);
                this.callbackContext = context;
                this.callArgProp = undefined;
                this.callbackAsync = false;
                return this;
              },
              yieldsTo: function(prop) {
                this.callArgAt = useLeftMostCallback;
                this.callbackArguments = slice.call(arguments, 1);
                this.callbackContext = undefined;
                this.callArgProp = prop;
                this.callbackAsync = false;
                return this;
              },
              yieldsToOn: function(prop, context) {
                if (typeof context !== "object") {
                  throw new TypeError("argument context is not an object");
                }
                this.callArgAt = useLeftMostCallback;
                this.callbackArguments = slice.call(arguments, 2);
                this.callbackContext = context;
                this.callArgProp = prop;
                this.callbackAsync = false;
                return this;
              },
              throws: throwsException,
              throwsException: throwsException,
              returns: function returns(value) {
                this.returnValue = value;
                this.returnValueDefined = true;
                this.exception = undefined;
                return this;
              },
              returnsArg: function returnsArg(pos) {
                if (typeof pos !== "number") {
                  throw new TypeError("argument index is not number");
                }
                this.returnArgAt = pos;
                return this;
              },
              returnsThis: function returnsThis() {
                this.returnThis = true;
                return this;
              }
            };
            function createAsyncVersion(syncFnName) {
              return function() {
                var result = this[syncFnName].apply(this, arguments);
                this.callbackAsync = true;
                return result;
              };
            }
            for (var method in proto) {
              if (proto.hasOwnProperty(method) && method.match(/^(callsArg|yields)/) && !method.match(/Async/)) {
                proto[method + "Async"] = createAsyncVersion(method);
              }
            }
            sinon.behavior = proto;
            return proto;
          }
          var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
          var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
          function loadDependencies(require, exports, module) {
            var sinon = require('./util/core');
            require('./extend');
            module.exports = makeApi(sinon);
          }
          if (isAMD) {
            define(loadDependencies);
            return;
          }
          if (isNode) {
            loadDependencies(require, module.exports, module);
            return;
          }
          if (sinonGlobal) {
            makeApi(sinonGlobal);
          }
        }(typeof sinon === "object" && sinon));
      }).call(this, require('_process'));
    }, {
      "./extend": 47,
      "./util/core": 59,
      "_process": 36
    }],
    45: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        var slice = Array.prototype.slice;
        function makeApi(sinon) {
          function throwYieldError(proxy, text, args) {
            var msg = sinon.functionName(proxy) + text;
            if (args.length) {
              msg += " Received [" + slice.call(args).join(", ") + "]";
            }
            throw new Error(msg);
          }
          var callProto = {
            calledOn: function calledOn(thisValue) {
              if (sinon.match && sinon.match.isMatcher(thisValue)) {
                return thisValue.test(this.thisValue);
              }
              return this.thisValue === thisValue;
            },
            calledWith: function calledWith() {
              var l = arguments.length;
              if (l > this.args.length) {
                return false;
              }
              for (var i = 0; i < l; i += 1) {
                if (!sinon.deepEqual(arguments[i], this.args[i])) {
                  return false;
                }
              }
              return true;
            },
            calledWithMatch: function calledWithMatch() {
              var l = arguments.length;
              if (l > this.args.length) {
                return false;
              }
              for (var i = 0; i < l; i += 1) {
                var actual = this.args[i];
                var expectation = arguments[i];
                if (!sinon.match || !sinon.match(expectation).test(actual)) {
                  return false;
                }
              }
              return true;
            },
            calledWithExactly: function calledWithExactly() {
              return arguments.length === this.args.length && this.calledWith.apply(this, arguments);
            },
            notCalledWith: function notCalledWith() {
              return !this.calledWith.apply(this, arguments);
            },
            notCalledWithMatch: function notCalledWithMatch() {
              return !this.calledWithMatch.apply(this, arguments);
            },
            returned: function returned(value) {
              return sinon.deepEqual(value, this.returnValue);
            },
            threw: function threw(error) {
              if (typeof error === "undefined" || !this.exception) {
                return !!this.exception;
              }
              return this.exception === error || this.exception.name === error;
            },
            calledWithNew: function calledWithNew() {
              return this.proxy.prototype && this.thisValue instanceof this.proxy;
            },
            calledBefore: function(other) {
              return this.callId < other.callId;
            },
            calledAfter: function(other) {
              return this.callId > other.callId;
            },
            callArg: function(pos) {
              this.args[pos]();
            },
            callArgOn: function(pos, thisValue) {
              this.args[pos].apply(thisValue);
            },
            callArgWith: function(pos) {
              this.callArgOnWith.apply(this, [pos, null].concat(slice.call(arguments, 1)));
            },
            callArgOnWith: function(pos, thisValue) {
              var args = slice.call(arguments, 2);
              this.args[pos].apply(thisValue, args);
            },
            "yield": function() {
              this.yieldOn.apply(this, [null].concat(slice.call(arguments, 0)));
            },
            yieldOn: function(thisValue) {
              var args = this.args;
              for (var i = 0,
                  l = args.length; i < l; ++i) {
                if (typeof args[i] === "function") {
                  args[i].apply(thisValue, slice.call(arguments, 1));
                  return;
                }
              }
              throwYieldError(this.proxy, " cannot yield since no callback was passed.", args);
            },
            yieldTo: function(prop) {
              this.yieldToOn.apply(this, [prop, null].concat(slice.call(arguments, 1)));
            },
            yieldToOn: function(prop, thisValue) {
              var args = this.args;
              for (var i = 0,
                  l = args.length; i < l; ++i) {
                if (args[i] && typeof args[i][prop] === "function") {
                  args[i][prop].apply(thisValue, slice.call(arguments, 2));
                  return;
                }
              }
              throwYieldError(this.proxy, " cannot yield to '" + prop + "' since no callback was passed.", args);
            },
            getStackFrames: function() {
              return this.stack && this.stack.split("\n").slice(3);
            },
            toString: function() {
              var callStr = this.proxy ? this.proxy.toString() + "(" : "";
              var args = [];
              if (!this.args) {
                return ":(";
              }
              for (var i = 0,
                  l = this.args.length; i < l; ++i) {
                args.push(sinon.format(this.args[i]));
              }
              callStr = callStr + args.join(", ") + ")";
              if (typeof this.returnValue !== "undefined") {
                callStr += " => " + sinon.format(this.returnValue);
              }
              if (this.exception) {
                callStr += " !" + this.exception.name;
                if (this.exception.message) {
                  callStr += "(" + this.exception.message + ")";
                }
              }
              if (this.stack) {
                callStr += this.getStackFrames()[0].replace(/^\s*(?:at\s+|@)?/, " at ");
              }
              return callStr;
            }
          };
          callProto.invokeCallback = callProto.yield;
          function createSpyCall(spy, thisValue, args, returnValue, exception, id, stack) {
            if (typeof id !== "number") {
              throw new TypeError("Call id is not a number");
            }
            var proxyCall = sinon.create(callProto);
            proxyCall.proxy = spy;
            proxyCall.thisValue = thisValue;
            proxyCall.args = args;
            proxyCall.returnValue = returnValue;
            proxyCall.exception = exception;
            proxyCall.callId = id;
            proxyCall.stack = stack;
            return proxyCall;
          }
          createSpyCall.toString = callProto.toString;
          sinon.spyCall = createSpyCall;
          return createSpyCall;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          require('./match');
          require('./format');
          module.exports = makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./format": 48,
      "./match": 50,
      "./util/core": 59
    }],
    46: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        var push = [].push;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function getFakes(fakeCollection) {
          if (!fakeCollection.fakes) {
            fakeCollection.fakes = [];
          }
          return fakeCollection.fakes;
        }
        function each(fakeCollection, method) {
          var fakes = getFakes(fakeCollection);
          for (var i = 0,
              l = fakes.length; i < l; i += 1) {
            if (typeof fakes[i][method] === "function") {
              fakes[i][method]();
            }
          }
        }
        function compact(fakeCollection) {
          var fakes = getFakes(fakeCollection);
          var i = 0;
          while (i < fakes.length) {
            fakes.splice(i, 1);
          }
        }
        function makeApi(sinon) {
          var collection = {
            verify: function resolve() {
              each(this, "verify");
            },
            restore: function restore() {
              each(this, "restore");
              compact(this);
            },
            reset: function restore() {
              each(this, "reset");
            },
            verifyAndRestore: function verifyAndRestore() {
              var exception;
              try {
                this.verify();
              } catch (e) {
                exception = e;
              }
              this.restore();
              if (exception) {
                throw exception;
              }
            },
            add: function add(fake) {
              push.call(getFakes(this), fake);
              return fake;
            },
            spy: function spy() {
              return this.add(sinon.spy.apply(sinon, arguments));
            },
            stub: function stub(object, property, value) {
              if (property) {
                var original = object[property];
                if (typeof original !== "function") {
                  if (!hasOwnProperty.call(object, property)) {
                    throw new TypeError("Cannot stub non-existent own property " + property);
                  }
                  object[property] = value;
                  return this.add({restore: function() {
                      object[property] = original;
                    }});
                }
              }
              if (!property && !!object && typeof object === "object") {
                var stubbedObj = sinon.stub.apply(sinon, arguments);
                for (var prop in stubbedObj) {
                  if (typeof stubbedObj[prop] === "function") {
                    this.add(stubbedObj[prop]);
                  }
                }
                return stubbedObj;
              }
              return this.add(sinon.stub.apply(sinon, arguments));
            },
            mock: function mock() {
              return this.add(sinon.mock.apply(sinon, arguments));
            },
            inject: function inject(obj) {
              var col = this;
              obj.spy = function() {
                return col.spy.apply(col, arguments);
              };
              obj.stub = function() {
                return col.stub.apply(col, arguments);
              };
              obj.mock = function() {
                return col.mock.apply(col, arguments);
              };
              return obj;
            }
          };
          sinon.collection = collection;
          return collection;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          require('./mock');
          require('./spy');
          require('./stub');
          module.exports = makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./mock": 51,
      "./spy": 53,
      "./stub": 54,
      "./util/core": 59
    }],
    47: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          var hasDontEnumBug = (function() {
            var obj = {
              constructor: function() {
                return "0";
              },
              toString: function() {
                return "1";
              },
              valueOf: function() {
                return "2";
              },
              toLocaleString: function() {
                return "3";
              },
              prototype: function() {
                return "4";
              },
              isPrototypeOf: function() {
                return "5";
              },
              propertyIsEnumerable: function() {
                return "6";
              },
              hasOwnProperty: function() {
                return "7";
              },
              length: function() {
                return "8";
              },
              unique: function() {
                return "9";
              }
            };
            var result = [];
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                result.push(obj[prop]());
              }
            }
            return result.join("") !== "0123456789";
          })();
          function extend(target) {
            var sources = Array.prototype.slice.call(arguments, 1);
            var source,
                i,
                prop;
            for (i = 0; i < sources.length; i++) {
              source = sources[i];
              for (prop in source) {
                if (source.hasOwnProperty(prop)) {
                  target[prop] = source[prop];
                }
              }
              if (hasDontEnumBug && source.hasOwnProperty("toString") && source.toString !== target.toString) {
                target.toString = source.toString;
              }
            }
            return target;
          }
          sinon.extend = extend;
          return sinon.extend;
        }
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          module.exports = makeApi(sinon);
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {"./util/core": 59}],
    48: [function(require, module, exports) {
      (function(sinonGlobal, formatio) {
        "use strict";
        function makeApi(sinon) {
          function valueFormatter(value) {
            return "" + value;
          }
          function getFormatioFormatter() {
            var formatter = formatio.configure({
              quoteStrings: false,
              limitChildrenCount: 250
            });
            function format() {
              return formatter.ascii.apply(formatter, arguments);
            }
            return format;
          }
          function getNodeFormatter() {
            try {
              var util = require('util');
            } catch (e) {}
            function format(v) {
              var isObjectWithNativeToString = typeof v === "object" && v.toString === Object.prototype.toString;
              return isObjectWithNativeToString ? util.inspect(v) : v;
            }
            return util ? format : valueFormatter;
          }
          var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
          var formatter;
          if (isNode) {
            try {
              formatio = require('formatio');
            } catch (e) {}
          }
          if (formatio) {
            formatter = getFormatioFormatter();
          } else if (isNode) {
            formatter = getNodeFormatter();
          } else {
            formatter = valueFormatter;
          }
          sinon.format = formatter;
          return sinon.format;
        }
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          module.exports = makeApi(sinon);
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon, typeof formatio === "object" && formatio));
    }, {
      "./util/core": 59,
      "formatio": 3,
      "util": 70
    }],
    49: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        var realSetTimeout = setTimeout;
        function makeApi(sinon) {
          function log() {}
          function logError(label, err) {
            var msg = label + " threw exception: ";
            function throwLoggedError() {
              err.message = msg + err.message;
              throw err;
            }
            sinon.log(msg + "[" + err.name + "] " + err.message);
            if (err.stack) {
              sinon.log(err.stack);
            }
            if (logError.useImmediateExceptions) {
              throwLoggedError();
            } else {
              logError.setTimeout(throwLoggedError, 0);
            }
          }
          logError.useImmediateExceptions = false;
          logError.setTimeout = function(func, timeout) {
            realSetTimeout(func, timeout);
          };
          var exports = {};
          exports.log = sinon.log = log;
          exports.logError = sinon.logError = logError;
          return exports;
        }
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          module.exports = makeApi(sinon);
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {"./util/core": 59}],
    50: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          function assertType(value, type, name) {
            var actual = sinon.typeOf(value);
            if (actual !== type) {
              throw new TypeError("Expected type of " + name + " to be " + type + ", but was " + actual);
            }
          }
          var matcher = {toString: function() {
              return this.message;
            }};
          function isMatcher(object) {
            return matcher.isPrototypeOf(object);
          }
          function matchObject(expectation, actual) {
            if (actual === null || actual === undefined) {
              return false;
            }
            for (var key in expectation) {
              if (expectation.hasOwnProperty(key)) {
                var exp = expectation[key];
                var act = actual[key];
                if (isMatcher(exp)) {
                  if (!exp.test(act)) {
                    return false;
                  }
                } else if (sinon.typeOf(exp) === "object") {
                  if (!matchObject(exp, act)) {
                    return false;
                  }
                } else if (!sinon.deepEqual(exp, act)) {
                  return false;
                }
              }
            }
            return true;
          }
          function match(expectation, message) {
            var m = sinon.create(matcher);
            var type = sinon.typeOf(expectation);
            switch (type) {
              case "object":
                if (typeof expectation.test === "function") {
                  m.test = function(actual) {
                    return expectation.test(actual) === true;
                  };
                  m.message = "match(" + sinon.functionName(expectation.test) + ")";
                  return m;
                }
                var str = [];
                for (var key in expectation) {
                  if (expectation.hasOwnProperty(key)) {
                    str.push(key + ": " + expectation[key]);
                  }
                }
                m.test = function(actual) {
                  return matchObject(expectation, actual);
                };
                m.message = "match(" + str.join(", ") + ")";
                break;
              case "number":
                m.test = function(actual) {
                  return expectation == actual;
                };
                break;
              case "string":
                m.test = function(actual) {
                  if (typeof actual !== "string") {
                    return false;
                  }
                  return actual.indexOf(expectation) !== -1;
                };
                m.message = "match(\"" + expectation + "\")";
                break;
              case "regexp":
                m.test = function(actual) {
                  if (typeof actual !== "string") {
                    return false;
                  }
                  return expectation.test(actual);
                };
                break;
              case "function":
                m.test = expectation;
                if (message) {
                  m.message = message;
                } else {
                  m.message = "match(" + sinon.functionName(expectation) + ")";
                }
                break;
              default:
                m.test = function(actual) {
                  return sinon.deepEqual(expectation, actual);
                };
            }
            if (!m.message) {
              m.message = "match(" + expectation + ")";
            }
            return m;
          }
          matcher.or = function(m2) {
            if (!arguments.length) {
              throw new TypeError("Matcher expected");
            } else if (!isMatcher(m2)) {
              m2 = match(m2);
            }
            var m1 = this;
            var or = sinon.create(matcher);
            or.test = function(actual) {
              return m1.test(actual) || m2.test(actual);
            };
            or.message = m1.message + ".or(" + m2.message + ")";
            return or;
          };
          matcher.and = function(m2) {
            if (!arguments.length) {
              throw new TypeError("Matcher expected");
            } else if (!isMatcher(m2)) {
              m2 = match(m2);
            }
            var m1 = this;
            var and = sinon.create(matcher);
            and.test = function(actual) {
              return m1.test(actual) && m2.test(actual);
            };
            and.message = m1.message + ".and(" + m2.message + ")";
            return and;
          };
          match.isMatcher = isMatcher;
          match.any = match(function() {
            return true;
          }, "any");
          match.defined = match(function(actual) {
            return actual !== null && actual !== undefined;
          }, "defined");
          match.truthy = match(function(actual) {
            return !!actual;
          }, "truthy");
          match.falsy = match(function(actual) {
            return !actual;
          }, "falsy");
          match.same = function(expectation) {
            return match(function(actual) {
              return expectation === actual;
            }, "same(" + expectation + ")");
          };
          match.typeOf = function(type) {
            assertType(type, "string", "type");
            return match(function(actual) {
              return sinon.typeOf(actual) === type;
            }, "typeOf(\"" + type + "\")");
          };
          match.instanceOf = function(type) {
            assertType(type, "function", "type");
            return match(function(actual) {
              return actual instanceof type;
            }, "instanceOf(" + sinon.functionName(type) + ")");
          };
          function createPropertyMatcher(propertyTest, messagePrefix) {
            return function(property, value) {
              assertType(property, "string", "property");
              var onlyProperty = arguments.length === 1;
              var message = messagePrefix + "(\"" + property + "\"";
              if (!onlyProperty) {
                message += ", " + value;
              }
              message += ")";
              return match(function(actual) {
                if (actual === undefined || actual === null || !propertyTest(actual, property)) {
                  return false;
                }
                return onlyProperty || sinon.deepEqual(value, actual[property]);
              }, message);
            };
          }
          match.has = createPropertyMatcher(function(actual, property) {
            if (typeof actual === "object") {
              return property in actual;
            }
            return actual[property] !== undefined;
          }, "has");
          match.hasOwn = createPropertyMatcher(function(actual, property) {
            return actual.hasOwnProperty(property);
          }, "hasOwn");
          match.bool = match.typeOf("boolean");
          match.number = match.typeOf("number");
          match.string = match.typeOf("string");
          match.object = match.typeOf("object");
          match.func = match.typeOf("function");
          match.array = match.typeOf("array");
          match.regexp = match.typeOf("regexp");
          match.date = match.typeOf("date");
          sinon.match = match;
          return match;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          require('./typeOf');
          module.exports = makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./typeOf": 58,
      "./util/core": 59
    }],
    51: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          var push = [].push;
          var match = sinon.match;
          function mock(object) {
            if (!object) {
              return sinon.expectation.create("Anonymous mock");
            }
            return mock.create(object);
          }
          function each(collection, callback) {
            if (!collection) {
              return;
            }
            for (var i = 0,
                l = collection.length; i < l; i += 1) {
              callback(collection[i]);
            }
          }
          function arrayEquals(arr1, arr2, compareLength) {
            if (compareLength && (arr1.length !== arr2.length)) {
              return false;
            }
            for (var i = 0,
                l = arr1.length; i < l; i++) {
              if (!sinon.deepEqual(arr1[i], arr2[i])) {
                return false;
              }
            }
            return true;
          }
          sinon.extend(mock, {
            create: function create(object) {
              if (!object) {
                throw new TypeError("object is null");
              }
              var mockObject = sinon.extend({}, mock);
              mockObject.object = object;
              delete mockObject.create;
              return mockObject;
            },
            expects: function expects(method) {
              if (!method) {
                throw new TypeError("method is falsy");
              }
              if (!this.expectations) {
                this.expectations = {};
                this.proxies = [];
              }
              if (!this.expectations[method]) {
                this.expectations[method] = [];
                var mockObject = this;
                sinon.wrapMethod(this.object, method, function() {
                  return mockObject.invokeMethod(method, this, arguments);
                });
                push.call(this.proxies, method);
              }
              var expectation = sinon.expectation.create(method);
              push.call(this.expectations[method], expectation);
              return expectation;
            },
            restore: function restore() {
              var object = this.object;
              each(this.proxies, function(proxy) {
                if (typeof object[proxy].restore === "function") {
                  object[proxy].restore();
                }
              });
            },
            verify: function verify() {
              var expectations = this.expectations || {};
              var messages = [];
              var met = [];
              each(this.proxies, function(proxy) {
                each(expectations[proxy], function(expectation) {
                  if (!expectation.met()) {
                    push.call(messages, expectation.toString());
                  } else {
                    push.call(met, expectation.toString());
                  }
                });
              });
              this.restore();
              if (messages.length > 0) {
                sinon.expectation.fail(messages.concat(met).join("\n"));
              } else if (met.length > 0) {
                sinon.expectation.pass(messages.concat(met).join("\n"));
              }
              return true;
            },
            invokeMethod: function invokeMethod(method, thisValue, args) {
              var expectations = this.expectations && this.expectations[method] ? this.expectations[method] : [];
              var expectationsWithMatchingArgs = [];
              var currentArgs = args || [];
              var i,
                  available;
              for (i = 0; i < expectations.length; i += 1) {
                var expectedArgs = expectations[i].expectedArguments || [];
                if (arrayEquals(expectedArgs, currentArgs, expectations[i].expectsExactArgCount)) {
                  expectationsWithMatchingArgs.push(expectations[i]);
                }
              }
              for (i = 0; i < expectationsWithMatchingArgs.length; i += 1) {
                if (!expectationsWithMatchingArgs[i].met() && expectationsWithMatchingArgs[i].allowsCall(thisValue, args)) {
                  return expectationsWithMatchingArgs[i].apply(thisValue, args);
                }
              }
              var messages = [];
              var exhausted = 0;
              for (i = 0; i < expectationsWithMatchingArgs.length; i += 1) {
                if (expectationsWithMatchingArgs[i].allowsCall(thisValue, args)) {
                  available = available || expectationsWithMatchingArgs[i];
                } else {
                  exhausted += 1;
                }
              }
              if (available && exhausted === 0) {
                return available.apply(thisValue, args);
              }
              for (i = 0; i < expectations.length; i += 1) {
                push.call(messages, "    " + expectations[i].toString());
              }
              messages.unshift("Unexpected call: " + sinon.spyCall.toString.call({
                proxy: method,
                args: args
              }));
              sinon.expectation.fail(messages.join("\n"));
            }
          });
          var times = sinon.timesInWords;
          var slice = Array.prototype.slice;
          function callCountInWords(callCount) {
            if (callCount === 0) {
              return "never called";
            }
            return "called " + times(callCount);
          }
          function expectedCallCountInWords(expectation) {
            var min = expectation.minCalls;
            var max = expectation.maxCalls;
            if (typeof min === "number" && typeof max === "number") {
              var str = times(min);
              if (min !== max) {
                str = "at least " + str + " and at most " + times(max);
              }
              return str;
            }
            if (typeof min === "number") {
              return "at least " + times(min);
            }
            return "at most " + times(max);
          }
          function receivedMinCalls(expectation) {
            var hasMinLimit = typeof expectation.minCalls === "number";
            return !hasMinLimit || expectation.callCount >= expectation.minCalls;
          }
          function receivedMaxCalls(expectation) {
            if (typeof expectation.maxCalls !== "number") {
              return false;
            }
            return expectation.callCount === expectation.maxCalls;
          }
          function verifyMatcher(possibleMatcher, arg) {
            var isMatcher = match && match.isMatcher(possibleMatcher);
            return isMatcher && possibleMatcher.test(arg) || true;
          }
          sinon.expectation = {
            minCalls: 1,
            maxCalls: 1,
            create: function create(methodName) {
              var expectation = sinon.extend(sinon.stub.create(), sinon.expectation);
              delete expectation.create;
              expectation.method = methodName;
              return expectation;
            },
            invoke: function invoke(func, thisValue, args) {
              this.verifyCallAllowed(thisValue, args);
              return sinon.spy.invoke.apply(this, arguments);
            },
            atLeast: function atLeast(num) {
              if (typeof num !== "number") {
                throw new TypeError("'" + num + "' is not number");
              }
              if (!this.limitsSet) {
                this.maxCalls = null;
                this.limitsSet = true;
              }
              this.minCalls = num;
              return this;
            },
            atMost: function atMost(num) {
              if (typeof num !== "number") {
                throw new TypeError("'" + num + "' is not number");
              }
              if (!this.limitsSet) {
                this.minCalls = null;
                this.limitsSet = true;
              }
              this.maxCalls = num;
              return this;
            },
            never: function never() {
              return this.exactly(0);
            },
            once: function once() {
              return this.exactly(1);
            },
            twice: function twice() {
              return this.exactly(2);
            },
            thrice: function thrice() {
              return this.exactly(3);
            },
            exactly: function exactly(num) {
              if (typeof num !== "number") {
                throw new TypeError("'" + num + "' is not a number");
              }
              this.atLeast(num);
              return this.atMost(num);
            },
            met: function met() {
              return !this.failed && receivedMinCalls(this);
            },
            verifyCallAllowed: function verifyCallAllowed(thisValue, args) {
              if (receivedMaxCalls(this)) {
                this.failed = true;
                sinon.expectation.fail(this.method + " already called " + times(this.maxCalls));
              }
              if ("expectedThis" in this && this.expectedThis !== thisValue) {
                sinon.expectation.fail(this.method + " called with " + thisValue + " as thisValue, expected " + this.expectedThis);
              }
              if (!("expectedArguments" in this)) {
                return;
              }
              if (!args) {
                sinon.expectation.fail(this.method + " received no arguments, expected " + sinon.format(this.expectedArguments));
              }
              if (args.length < this.expectedArguments.length) {
                sinon.expectation.fail(this.method + " received too few arguments (" + sinon.format(args) + "), expected " + sinon.format(this.expectedArguments));
              }
              if (this.expectsExactArgCount && args.length !== this.expectedArguments.length) {
                sinon.expectation.fail(this.method + " received too many arguments (" + sinon.format(args) + "), expected " + sinon.format(this.expectedArguments));
              }
              for (var i = 0,
                  l = this.expectedArguments.length; i < l; i += 1) {
                if (!verifyMatcher(this.expectedArguments[i], args[i])) {
                  sinon.expectation.fail(this.method + " received wrong arguments " + sinon.format(args) + ", didn't match " + this.expectedArguments.toString());
                }
                if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                  sinon.expectation.fail(this.method + " received wrong arguments " + sinon.format(args) + ", expected " + sinon.format(this.expectedArguments));
                }
              }
            },
            allowsCall: function allowsCall(thisValue, args) {
              if (this.met() && receivedMaxCalls(this)) {
                return false;
              }
              if ("expectedThis" in this && this.expectedThis !== thisValue) {
                return false;
              }
              if (!("expectedArguments" in this)) {
                return true;
              }
              args = args || [];
              if (args.length < this.expectedArguments.length) {
                return false;
              }
              if (this.expectsExactArgCount && args.length !== this.expectedArguments.length) {
                return false;
              }
              for (var i = 0,
                  l = this.expectedArguments.length; i < l; i += 1) {
                if (!verifyMatcher(this.expectedArguments[i], args[i])) {
                  return false;
                }
                if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                  return false;
                }
              }
              return true;
            },
            withArgs: function withArgs() {
              this.expectedArguments = slice.call(arguments);
              return this;
            },
            withExactArgs: function withExactArgs() {
              this.withArgs.apply(this, arguments);
              this.expectsExactArgCount = true;
              return this;
            },
            on: function on(thisValue) {
              this.expectedThis = thisValue;
              return this;
            },
            toString: function() {
              var args = (this.expectedArguments || []).slice();
              if (!this.expectsExactArgCount) {
                push.call(args, "[...]");
              }
              var callStr = sinon.spyCall.toString.call({
                proxy: this.method || "anonymous mock expectation",
                args: args
              });
              var message = callStr.replace(", [...", "[, ...") + " " + expectedCallCountInWords(this);
              if (this.met()) {
                return "Expectation met: " + message;
              }
              return "Expected " + message + " (" + callCountInWords(this.callCount) + ")";
            },
            verify: function verify() {
              if (!this.met()) {
                sinon.expectation.fail(this.toString());
              } else {
                sinon.expectation.pass(this.toString());
              }
              return true;
            },
            pass: function pass(message) {
              sinon.assert.pass(message);
            },
            fail: function fail(message) {
              var exception = new Error(message);
              exception.name = "ExpectationError";
              throw exception;
            }
          };
          sinon.mock = mock;
          return mock;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          require('./times_in_words');
          require('./call');
          require('./extend');
          require('./match');
          require('./spy');
          require('./stub');
          require('./format');
          module.exports = makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./call": 45,
      "./extend": 47,
      "./format": 48,
      "./match": 50,
      "./spy": 53,
      "./stub": 54,
      "./times_in_words": 57,
      "./util/core": 59
    }],
    52: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          var push = [].push;
          function exposeValue(sandbox, config, key, value) {
            if (!value) {
              return;
            }
            if (config.injectInto && !(key in config.injectInto)) {
              config.injectInto[key] = value;
              sandbox.injectedKeys.push(key);
            } else {
              push.call(sandbox.args, value);
            }
          }
          function prepareSandboxFromConfig(config) {
            var sandbox = sinon.create(sinon.sandbox);
            if (config.useFakeServer) {
              if (typeof config.useFakeServer === "object") {
                sandbox.serverPrototype = config.useFakeServer;
              }
              sandbox.useFakeServer();
            }
            if (config.useFakeTimers) {
              if (typeof config.useFakeTimers === "object") {
                sandbox.useFakeTimers.apply(sandbox, config.useFakeTimers);
              } else {
                sandbox.useFakeTimers();
              }
            }
            return sandbox;
          }
          sinon.sandbox = sinon.extend(sinon.create(sinon.collection), {
            useFakeTimers: function useFakeTimers() {
              this.clock = sinon.useFakeTimers.apply(sinon, arguments);
              return this.add(this.clock);
            },
            serverPrototype: sinon.fakeServer,
            useFakeServer: function useFakeServer() {
              var proto = this.serverPrototype || sinon.fakeServer;
              if (!proto || !proto.create) {
                return null;
              }
              this.server = proto.create();
              return this.add(this.server);
            },
            inject: function(obj) {
              sinon.collection.inject.call(this, obj);
              if (this.clock) {
                obj.clock = this.clock;
              }
              if (this.server) {
                obj.server = this.server;
                obj.requests = this.server.requests;
              }
              obj.match = sinon.match;
              return obj;
            },
            restore: function() {
              sinon.collection.restore.apply(this, arguments);
              this.restoreContext();
            },
            restoreContext: function() {
              if (this.injectedKeys) {
                for (var i = 0,
                    j = this.injectedKeys.length; i < j; i++) {
                  delete this.injectInto[this.injectedKeys[i]];
                }
                this.injectedKeys = [];
              }
            },
            create: function(config) {
              if (!config) {
                return sinon.create(sinon.sandbox);
              }
              var sandbox = prepareSandboxFromConfig(config);
              sandbox.args = sandbox.args || [];
              sandbox.injectedKeys = [];
              sandbox.injectInto = config.injectInto;
              var prop,
                  value;
              var exposed = sandbox.inject({});
              if (config.properties) {
                for (var i = 0,
                    l = config.properties.length; i < l; i++) {
                  prop = config.properties[i];
                  value = exposed[prop] || prop === "sandbox" && sandbox;
                  exposeValue(sandbox, config, prop, value);
                }
              } else {
                exposeValue(sandbox, config, "sandbox", value);
              }
              return sandbox;
            },
            match: sinon.match
          });
          sinon.sandbox.useFakeXMLHttpRequest = sinon.sandbox.useFakeServer;
          return sinon.sandbox;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          require('./extend');
          require('./util/fake_server_with_clock');
          require('./util/fake_timers');
          require('./collection');
          module.exports = makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./collection": 46,
      "./extend": 47,
      "./util/core": 59,
      "./util/fake_server_with_clock": 62,
      "./util/fake_timers": 63
    }],
    53: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          var push = Array.prototype.push;
          var slice = Array.prototype.slice;
          var callId = 0;
          function spy(object, property, types) {
            if (!property && typeof object === "function") {
              return spy.create(object);
            }
            if (!object && !property) {
              return spy.create(function() {});
            }
            if (types) {
              var methodDesc = sinon.getPropertyDescriptor(object, property);
              for (var i = 0; i < types.length; i++) {
                methodDesc[types[i]] = spy.create(methodDesc[types[i]]);
              }
              return sinon.wrapMethod(object, property, methodDesc);
            }
            return sinon.wrapMethod(object, property, spy.create(object[property]));
          }
          function matchingFake(fakes, args, strict) {
            if (!fakes) {
              return undefined;
            }
            for (var i = 0,
                l = fakes.length; i < l; i++) {
              if (fakes[i].matches(args, strict)) {
                return fakes[i];
              }
            }
          }
          function incrementCallCount() {
            this.called = true;
            this.callCount += 1;
            this.notCalled = false;
            this.calledOnce = this.callCount === 1;
            this.calledTwice = this.callCount === 2;
            this.calledThrice = this.callCount === 3;
          }
          function createCallProperties() {
            this.firstCall = this.getCall(0);
            this.secondCall = this.getCall(1);
            this.thirdCall = this.getCall(2);
            this.lastCall = this.getCall(this.callCount - 1);
          }
          var vars = "a,b,c,d,e,f,g,h,i,j,k,l";
          function createProxy(func, proxyLength) {
            var p;
            if (proxyLength) {
              eval("p = (function proxy(" + vars.substring(0, proxyLength * 2 - 1) + ") { return p.invoke(func, this, slice.call(arguments)); });");
            } else {
              p = function proxy() {
                return p.invoke(func, this, slice.call(arguments));
              };
            }
            p.isSinonProxy = true;
            return p;
          }
          var uuid = 0;
          var spyApi = {
            reset: function() {
              if (this.invoking) {
                var err = new Error("Cannot reset Sinon function while invoking it. " + "Move the call to .reset outside of the callback.");
                err.name = "InvalidResetException";
                throw err;
              }
              this.called = false;
              this.notCalled = true;
              this.calledOnce = false;
              this.calledTwice = false;
              this.calledThrice = false;
              this.callCount = 0;
              this.firstCall = null;
              this.secondCall = null;
              this.thirdCall = null;
              this.lastCall = null;
              this.args = [];
              this.returnValues = [];
              this.thisValues = [];
              this.exceptions = [];
              this.callIds = [];
              this.stacks = [];
              if (this.fakes) {
                for (var i = 0; i < this.fakes.length; i++) {
                  this.fakes[i].reset();
                }
              }
              return this;
            },
            create: function create(func, spyLength) {
              var name;
              if (typeof func !== "function") {
                func = function() {};
              } else {
                name = sinon.functionName(func);
              }
              if (!spyLength) {
                spyLength = func.length;
              }
              var proxy = createProxy(func, spyLength);
              sinon.extend(proxy, spy);
              delete proxy.create;
              sinon.extend(proxy, func);
              proxy.reset();
              proxy.prototype = func.prototype;
              proxy.displayName = name || "spy";
              proxy.toString = sinon.functionToString;
              proxy.instantiateFake = sinon.spy.create;
              proxy.id = "spy#" + uuid++;
              return proxy;
            },
            invoke: function invoke(func, thisValue, args) {
              var matching = matchingFake(this.fakes, args);
              var exception,
                  returnValue;
              incrementCallCount.call(this);
              push.call(this.thisValues, thisValue);
              push.call(this.args, args);
              push.call(this.callIds, callId++);
              createCallProperties.call(this);
              try {
                this.invoking = true;
                if (matching) {
                  returnValue = matching.invoke(func, thisValue, args);
                } else {
                  returnValue = (this.func || func).apply(thisValue, args);
                }
                var thisCall = this.getCall(this.callCount - 1);
                if (thisCall.calledWithNew() && typeof returnValue !== "object") {
                  returnValue = thisValue;
                }
              } catch (e) {
                exception = e;
              } finally {
                delete this.invoking;
              }
              push.call(this.exceptions, exception);
              push.call(this.returnValues, returnValue);
              push.call(this.stacks, new Error().stack);
              createCallProperties.call(this);
              if (exception !== undefined) {
                throw exception;
              }
              return returnValue;
            },
            named: function named(name) {
              this.displayName = name;
              return this;
            },
            getCall: function getCall(i) {
              if (i < 0 || i >= this.callCount) {
                return null;
              }
              return sinon.spyCall(this, this.thisValues[i], this.args[i], this.returnValues[i], this.exceptions[i], this.callIds[i], this.stacks[i]);
            },
            getCalls: function() {
              var calls = [];
              var i;
              for (i = 0; i < this.callCount; i++) {
                calls.push(this.getCall(i));
              }
              return calls;
            },
            calledBefore: function calledBefore(spyFn) {
              if (!this.called) {
                return false;
              }
              if (!spyFn.called) {
                return true;
              }
              return this.callIds[0] < spyFn.callIds[spyFn.callIds.length - 1];
            },
            calledAfter: function calledAfter(spyFn) {
              if (!this.called || !spyFn.called) {
                return false;
              }
              return this.callIds[this.callCount - 1] > spyFn.callIds[spyFn.callCount - 1];
            },
            withArgs: function() {
              var args = slice.call(arguments);
              if (this.fakes) {
                var match = matchingFake(this.fakes, args, true);
                if (match) {
                  return match;
                }
              } else {
                this.fakes = [];
              }
              var original = this;
              var fake = this.instantiateFake();
              fake.matchingAguments = args;
              fake.parent = this;
              push.call(this.fakes, fake);
              fake.withArgs = function() {
                return original.withArgs.apply(original, arguments);
              };
              for (var i = 0; i < this.args.length; i++) {
                if (fake.matches(this.args[i])) {
                  incrementCallCount.call(fake);
                  push.call(fake.thisValues, this.thisValues[i]);
                  push.call(fake.args, this.args[i]);
                  push.call(fake.returnValues, this.returnValues[i]);
                  push.call(fake.exceptions, this.exceptions[i]);
                  push.call(fake.callIds, this.callIds[i]);
                }
              }
              createCallProperties.call(fake);
              return fake;
            },
            matches: function(args, strict) {
              var margs = this.matchingAguments;
              if (margs.length <= args.length && sinon.deepEqual(margs, args.slice(0, margs.length))) {
                return !strict || margs.length === args.length;
              }
            },
            printf: function(format) {
              var spyInstance = this;
              var args = slice.call(arguments, 1);
              var formatter;
              return (format || "").replace(/%(.)/g, function(match, specifyer) {
                formatter = spyApi.formatters[specifyer];
                if (typeof formatter === "function") {
                  return formatter.call(null, spyInstance, args);
                } else if (!isNaN(parseInt(specifyer, 10))) {
                  return sinon.format(args[specifyer - 1]);
                }
                return "%" + specifyer;
              });
            }
          };
          function delegateToCalls(method, matchAny, actual, notCalled) {
            spyApi[method] = function() {
              if (!this.called) {
                if (notCalled) {
                  return notCalled.apply(this, arguments);
                }
                return false;
              }
              var currentCall;
              var matches = 0;
              for (var i = 0,
                  l = this.callCount; i < l; i += 1) {
                currentCall = this.getCall(i);
                if (currentCall[actual || method].apply(currentCall, arguments)) {
                  matches += 1;
                  if (matchAny) {
                    return true;
                  }
                }
              }
              return matches === this.callCount;
            };
          }
          delegateToCalls("calledOn", true);
          delegateToCalls("alwaysCalledOn", false, "calledOn");
          delegateToCalls("calledWith", true);
          delegateToCalls("calledWithMatch", true);
          delegateToCalls("alwaysCalledWith", false, "calledWith");
          delegateToCalls("alwaysCalledWithMatch", false, "calledWithMatch");
          delegateToCalls("calledWithExactly", true);
          delegateToCalls("alwaysCalledWithExactly", false, "calledWithExactly");
          delegateToCalls("neverCalledWith", false, "notCalledWith", function() {
            return true;
          });
          delegateToCalls("neverCalledWithMatch", false, "notCalledWithMatch", function() {
            return true;
          });
          delegateToCalls("threw", true);
          delegateToCalls("alwaysThrew", false, "threw");
          delegateToCalls("returned", true);
          delegateToCalls("alwaysReturned", false, "returned");
          delegateToCalls("calledWithNew", true);
          delegateToCalls("alwaysCalledWithNew", false, "calledWithNew");
          delegateToCalls("callArg", false, "callArgWith", function() {
            throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
          });
          spyApi.callArgWith = spyApi.callArg;
          delegateToCalls("callArgOn", false, "callArgOnWith", function() {
            throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
          });
          spyApi.callArgOnWith = spyApi.callArgOn;
          delegateToCalls("yield", false, "yield", function() {
            throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
          });
          spyApi.invokeCallback = spyApi.yield;
          delegateToCalls("yieldOn", false, "yieldOn", function() {
            throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
          });
          delegateToCalls("yieldTo", false, "yieldTo", function(property) {
            throw new Error(this.toString() + " cannot yield to '" + property + "' since it was not yet invoked.");
          });
          delegateToCalls("yieldToOn", false, "yieldToOn", function(property) {
            throw new Error(this.toString() + " cannot yield to '" + property + "' since it was not yet invoked.");
          });
          spyApi.formatters = {
            c: function(spyInstance) {
              return sinon.timesInWords(spyInstance.callCount);
            },
            n: function(spyInstance) {
              return spyInstance.toString();
            },
            C: function(spyInstance) {
              var calls = [];
              for (var i = 0,
                  l = spyInstance.callCount; i < l; ++i) {
                var stringifiedCall = "    " + spyInstance.getCall(i).toString();
                if (/\n/.test(calls[i - 1])) {
                  stringifiedCall = "\n" + stringifiedCall;
                }
                push.call(calls, stringifiedCall);
              }
              return calls.length > 0 ? "\n" + calls.join("\n") : "";
            },
            t: function(spyInstance) {
              var objects = [];
              for (var i = 0,
                  l = spyInstance.callCount; i < l; ++i) {
                push.call(objects, sinon.format(spyInstance.thisValues[i]));
              }
              return objects.join(", ");
            },
            "*": function(spyInstance, args) {
              var formatted = [];
              for (var i = 0,
                  l = args.length; i < l; ++i) {
                push.call(formatted, sinon.format(args[i]));
              }
              return formatted.join(", ");
            }
          };
          sinon.extend(spy, spyApi);
          spy.spyCall = sinon.spyCall;
          sinon.spy = spy;
          return spy;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var core = require('./util/core');
          require('./call');
          require('./extend');
          require('./times_in_words');
          require('./format');
          module.exports = makeApi(core);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./call": 45,
      "./extend": 47,
      "./format": 48,
      "./times_in_words": 57,
      "./util/core": 59
    }],
    54: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          function stub(object, property, func) {
            if (!!func && typeof func !== "function" && typeof func !== "object") {
              throw new TypeError("Custom stub should be a function or a property descriptor");
            }
            var wrapper;
            if (func) {
              if (typeof func === "function") {
                wrapper = sinon.spy && sinon.spy.create ? sinon.spy.create(func) : func;
              } else {
                wrapper = func;
                if (sinon.spy && sinon.spy.create) {
                  var types = sinon.objectKeys(wrapper);
                  for (var i = 0; i < types.length; i++) {
                    wrapper[types[i]] = sinon.spy.create(wrapper[types[i]]);
                  }
                }
              }
            } else {
              var stubLength = 0;
              if (typeof object === "object" && typeof object[property] === "function") {
                stubLength = object[property].length;
              }
              wrapper = stub.create(stubLength);
            }
            if (!object && typeof property === "undefined") {
              return sinon.stub.create();
            }
            if (typeof property === "undefined" && typeof object === "object") {
              sinon.walk(object || {}, function(value, prop, propOwner) {
                if (propOwner !== Object.prototype && prop !== "constructor" && typeof sinon.getPropertyDescriptor(propOwner, prop).value === "function") {
                  stub(object, prop);
                }
              });
              return object;
            }
            return sinon.wrapMethod(object, property, wrapper);
          }
          function getParentBehaviour(stubInstance) {
            return (stubInstance.parent && getCurrentBehavior(stubInstance.parent));
          }
          function getDefaultBehavior(stubInstance) {
            return stubInstance.defaultBehavior || getParentBehaviour(stubInstance) || sinon.behavior.create(stubInstance);
          }
          function getCurrentBehavior(stubInstance) {
            var behavior = stubInstance.behaviors[stubInstance.callCount - 1];
            return behavior && behavior.isPresent() ? behavior : getDefaultBehavior(stubInstance);
          }
          var uuid = 0;
          var proto = {
            create: function create(stubLength) {
              var functionStub = function() {
                return getCurrentBehavior(functionStub).invoke(this, arguments);
              };
              functionStub.id = "stub#" + uuid++;
              var orig = functionStub;
              functionStub = sinon.spy.create(functionStub, stubLength);
              functionStub.func = orig;
              sinon.extend(functionStub, stub);
              functionStub.instantiateFake = sinon.stub.create;
              functionStub.displayName = "stub";
              functionStub.toString = sinon.functionToString;
              functionStub.defaultBehavior = null;
              functionStub.behaviors = [];
              return functionStub;
            },
            resetBehavior: function() {
              var i;
              this.defaultBehavior = null;
              this.behaviors = [];
              delete this.returnValue;
              delete this.returnArgAt;
              this.returnThis = false;
              if (this.fakes) {
                for (i = 0; i < this.fakes.length; i++) {
                  this.fakes[i].resetBehavior();
                }
              }
            },
            onCall: function onCall(index) {
              if (!this.behaviors[index]) {
                this.behaviors[index] = sinon.behavior.create(this);
              }
              return this.behaviors[index];
            },
            onFirstCall: function onFirstCall() {
              return this.onCall(0);
            },
            onSecondCall: function onSecondCall() {
              return this.onCall(1);
            },
            onThirdCall: function onThirdCall() {
              return this.onCall(2);
            }
          };
          function createBehavior(behaviorMethod) {
            return function() {
              this.defaultBehavior = this.defaultBehavior || sinon.behavior.create(this);
              this.defaultBehavior[behaviorMethod].apply(this.defaultBehavior, arguments);
              return this;
            };
          }
          for (var method in sinon.behavior) {
            if (sinon.behavior.hasOwnProperty(method) && !proto.hasOwnProperty(method) && method !== "create" && method !== "withArgs" && method !== "invoke") {
              proto[method] = createBehavior(method);
            }
          }
          sinon.extend(stub, proto);
          sinon.stub = stub;
          return stub;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var core = require('./util/core');
          require('./behavior');
          require('./spy');
          require('./extend');
          module.exports = makeApi(core);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./behavior": 44,
      "./extend": 47,
      "./spy": 53,
      "./util/core": 59
    }],
    55: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          var slice = Array.prototype.slice;
          function test(callback) {
            var type = typeof callback;
            if (type !== "function") {
              throw new TypeError("sinon.test needs to wrap a test function, got " + type);
            }
            function sinonSandboxedTest() {
              var config = sinon.getConfig(sinon.config);
              config.injectInto = config.injectIntoThis && this || config.injectInto;
              var sandbox = sinon.sandbox.create(config);
              var args = slice.call(arguments);
              var oldDone = args.length && args[args.length - 1];
              var exception,
                  result;
              if (typeof oldDone === "function") {
                args[args.length - 1] = function sinonDone(res) {
                  if (res) {
                    sandbox.restore();
                  } else {
                    sandbox.verifyAndRestore();
                  }
                  oldDone(res);
                };
              }
              try {
                result = callback.apply(this, args.concat(sandbox.args));
              } catch (e) {
                exception = e;
              }
              if (typeof exception !== "undefined") {
                sandbox.restore();
                throw exception;
              } else if (typeof oldDone !== "function") {
                sandbox.verifyAndRestore();
              }
              return result;
            }
            if (callback.length) {
              return function sinonAsyncSandboxedTest(done) {
                return sinonSandboxedTest.apply(this, arguments);
              };
            }
            return sinonSandboxedTest;
          }
          test.config = {
            injectIntoThis: true,
            injectInto: null,
            properties: ["spy", "stub", "mock", "clock", "server", "requests"],
            useFakeTimers: true,
            useFakeServer: true
          };
          sinon.test = test;
          return test;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var core = require('./util/core');
          require('./sandbox');
          module.exports = makeApi(core);
        }
        if (isAMD) {
          define(loadDependencies);
        } else if (isNode) {
          loadDependencies(require, module.exports, module);
        } else if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon || null));
    }, {
      "./sandbox": 52,
      "./util/core": 59
    }],
    56: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function createTest(property, setUp, tearDown) {
          return function() {
            if (setUp) {
              setUp.apply(this, arguments);
            }
            var exception,
                result;
            try {
              result = property.apply(this, arguments);
            } catch (e) {
              exception = e;
            }
            if (tearDown) {
              tearDown.apply(this, arguments);
            }
            if (exception) {
              throw exception;
            }
            return result;
          };
        }
        function makeApi(sinon) {
          function testCase(tests, prefix) {
            if (!tests || typeof tests !== "object") {
              throw new TypeError("sinon.testCase needs an object with test functions");
            }
            prefix = prefix || "test";
            var rPrefix = new RegExp("^" + prefix);
            var methods = {};
            var setUp = tests.setUp;
            var tearDown = tests.tearDown;
            var testName,
                property,
                method;
            for (testName in tests) {
              if (tests.hasOwnProperty(testName) && !/^(setUp|tearDown)$/.test(testName)) {
                property = tests[testName];
                if (typeof property === "function" && rPrefix.test(testName)) {
                  method = property;
                  if (setUp || tearDown) {
                    method = createTest(property, setUp, tearDown);
                  }
                  methods[testName] = sinon.test(method);
                } else {
                  methods[testName] = tests[testName];
                }
              }
            }
            return methods;
          }
          sinon.testCase = testCase;
          return testCase;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var core = require('./util/core');
          require('./test');
          module.exports = makeApi(core);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {
      "./test": 55,
      "./util/core": 59
    }],
    57: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          function timesInWords(count) {
            switch (count) {
              case 1:
                return "once";
              case 2:
                return "twice";
              case 3:
                return "thrice";
              default:
                return (count || 0) + " times";
            }
          }
          sinon.timesInWords = timesInWords;
          return sinon.timesInWords;
        }
        function loadDependencies(require, exports, module) {
          var core = require('./util/core');
          module.exports = makeApi(core);
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {"./util/core": 59}],
    58: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          function typeOf(value) {
            if (value === null) {
              return "null";
            } else if (value === undefined) {
              return "undefined";
            }
            var string = Object.prototype.toString.call(value);
            return string.substring(8, string.length - 1).toLowerCase();
          }
          sinon.typeOf = typeOf;
          return sinon.typeOf;
        }
        function loadDependencies(require, exports, module) {
          var core = require('./util/core');
          module.exports = makeApi(core);
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {"./util/core": 59}],
    59: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        var div = typeof document !== "undefined" && document.createElement("div");
        var hasOwn = Object.prototype.hasOwnProperty;
        function isDOMNode(obj) {
          var success = false;
          try {
            obj.appendChild(div);
            success = div.parentNode === obj;
          } catch (e) {
            return false;
          } finally {
            try {
              obj.removeChild(div);
            } catch (e) {}
          }
          return success;
        }
        function isElement(obj) {
          return div && obj && obj.nodeType === 1 && isDOMNode(obj);
        }
        function isFunction(obj) {
          return typeof obj === "function" || !!(obj && obj.constructor && obj.call && obj.apply);
        }
        function isReallyNaN(val) {
          return typeof val === "number" && isNaN(val);
        }
        function mirrorProperties(target, source) {
          for (var prop in source) {
            if (!hasOwn.call(target, prop)) {
              target[prop] = source[prop];
            }
          }
        }
        function isRestorable(obj) {
          return typeof obj === "function" && typeof obj.restore === "function" && obj.restore.sinon;
        }
        var hasES5Support = "keys" in Object;
        function makeApi(sinon) {
          sinon.wrapMethod = function wrapMethod(object, property, method) {
            if (!object) {
              throw new TypeError("Should wrap property of object");
            }
            if (typeof method !== "function" && typeof method !== "object") {
              throw new TypeError("Method wrapper should be a function or a property descriptor");
            }
            function checkWrappedMethod(wrappedMethod) {
              var error;
              if (!isFunction(wrappedMethod)) {
                error = new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " + property + " as function");
              } else if (wrappedMethod.restore && wrappedMethod.restore.sinon) {
                error = new TypeError("Attempted to wrap " + property + " which is already wrapped");
              } else if (wrappedMethod.calledBefore) {
                var verb = wrappedMethod.returns ? "stubbed" : "spied on";
                error = new TypeError("Attempted to wrap " + property + " which is already " + verb);
              }
              if (error) {
                if (wrappedMethod && wrappedMethod.stackTrace) {
                  error.stack += "\n--------------\n" + wrappedMethod.stackTrace;
                }
                throw error;
              }
            }
            var error,
                wrappedMethod,
                i;
            var owned = object.hasOwnProperty ? object.hasOwnProperty(property) : hasOwn.call(object, property);
            if (hasES5Support) {
              var methodDesc = (typeof method === "function") ? {value: method} : method;
              var wrappedMethodDesc = sinon.getPropertyDescriptor(object, property);
              if (!wrappedMethodDesc) {
                error = new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " + property + " as function");
              } else if (wrappedMethodDesc.restore && wrappedMethodDesc.restore.sinon) {
                error = new TypeError("Attempted to wrap " + property + " which is already wrapped");
              }
              if (error) {
                if (wrappedMethodDesc && wrappedMethodDesc.stackTrace) {
                  error.stack += "\n--------------\n" + wrappedMethodDesc.stackTrace;
                }
                throw error;
              }
              var types = sinon.objectKeys(methodDesc);
              for (i = 0; i < types.length; i++) {
                wrappedMethod = wrappedMethodDesc[types[i]];
                checkWrappedMethod(wrappedMethod);
              }
              mirrorProperties(methodDesc, wrappedMethodDesc);
              for (i = 0; i < types.length; i++) {
                mirrorProperties(methodDesc[types[i]], wrappedMethodDesc[types[i]]);
              }
              Object.defineProperty(object, property, methodDesc);
            } else {
              wrappedMethod = object[property];
              checkWrappedMethod(wrappedMethod);
              object[property] = method;
              method.displayName = property;
            }
            method.displayName = property;
            method.stackTrace = (new Error("Stack Trace for original")).stack;
            method.restore = function() {
              if (!owned) {
                try {
                  delete object[property];
                } catch (e) {}
              } else if (hasES5Support) {
                Object.defineProperty(object, property, wrappedMethodDesc);
              }
              if (object[property] === method) {
                object[property] = wrappedMethod;
              }
            };
            method.restore.sinon = true;
            if (!hasES5Support) {
              mirrorProperties(method, wrappedMethod);
            }
            return method;
          };
          sinon.create = function create(proto) {
            var F = function() {};
            F.prototype = proto;
            return new F();
          };
          sinon.deepEqual = function deepEqual(a, b) {
            if (sinon.match && sinon.match.isMatcher(a)) {
              return a.test(b);
            }
            if (typeof a !== "object" || typeof b !== "object") {
              return isReallyNaN(a) && isReallyNaN(b) || a === b;
            }
            if (isElement(a) || isElement(b)) {
              return a === b;
            }
            if (a === b) {
              return true;
            }
            if ((a === null && b !== null) || (a !== null && b === null)) {
              return false;
            }
            if (a instanceof RegExp && b instanceof RegExp) {
              return (a.source === b.source) && (a.global === b.global) && (a.ignoreCase === b.ignoreCase) && (a.multiline === b.multiline);
            }
            var aString = Object.prototype.toString.call(a);
            if (aString !== Object.prototype.toString.call(b)) {
              return false;
            }
            if (aString === "[object Date]") {
              return a.valueOf() === b.valueOf();
            }
            var prop;
            var aLength = 0;
            var bLength = 0;
            if (aString === "[object Array]" && a.length !== b.length) {
              return false;
            }
            for (prop in a) {
              if (hasOwn.call(a, prop)) {
                aLength += 1;
                if (!(prop in b)) {
                  return false;
                }
                if (!deepEqual(a[prop], b[prop])) {
                  return false;
                }
              }
            }
            for (prop in b) {
              if (hasOwn.call(b, prop)) {
                bLength += 1;
              }
            }
            return aLength === bLength;
          };
          sinon.functionName = function functionName(func) {
            var name = func.displayName || func.name;
            if (!name) {
              var matches = func.toString().match(/function ([^\s\(]+)/);
              name = matches && matches[1];
            }
            return name;
          };
          sinon.functionToString = function toString() {
            if (this.getCall && this.callCount) {
              var thisValue,
                  prop;
              var i = this.callCount;
              while (i--) {
                thisValue = this.getCall(i).thisValue;
                for (prop in thisValue) {
                  if (thisValue[prop] === this) {
                    return prop;
                  }
                }
              }
            }
            return this.displayName || "sinon fake";
          };
          sinon.objectKeys = function objectKeys(obj) {
            if (obj !== Object(obj)) {
              throw new TypeError("sinon.objectKeys called on a non-object");
            }
            var keys = [];
            var key;
            for (key in obj) {
              if (hasOwn.call(obj, key)) {
                keys.push(key);
              }
            }
            return keys;
          };
          sinon.getPropertyDescriptor = function getPropertyDescriptor(object, property) {
            var proto = object;
            var descriptor;
            while (proto && !(descriptor = Object.getOwnPropertyDescriptor(proto, property))) {
              proto = Object.getPrototypeOf(proto);
            }
            return descriptor;
          };
          sinon.getConfig = function(custom) {
            var config = {};
            custom = custom || {};
            var defaults = sinon.defaultConfig;
            for (var prop in defaults) {
              if (defaults.hasOwnProperty(prop)) {
                config[prop] = custom.hasOwnProperty(prop) ? custom[prop] : defaults[prop];
              }
            }
            return config;
          };
          sinon.defaultConfig = {
            injectIntoThis: true,
            injectInto: null,
            properties: ["spy", "stub", "mock", "clock", "server", "requests"],
            useFakeTimers: true,
            useFakeServer: true
          };
          sinon.timesInWords = function timesInWords(count) {
            return count === 1 && "once" || count === 2 && "twice" || count === 3 && "thrice" || (count || 0) + " times";
          };
          sinon.calledInOrder = function(spies) {
            for (var i = 1,
                l = spies.length; i < l; i++) {
              if (!spies[i - 1].calledBefore(spies[i]) || !spies[i].called) {
                return false;
              }
            }
            return true;
          };
          sinon.orderByFirstCall = function(spies) {
            return spies.sort(function(a, b) {
              var aCall = a.getCall(0);
              var bCall = b.getCall(0);
              var aId = aCall && aCall.callId || -1;
              var bId = bCall && bCall.callId || -1;
              return aId < bId ? -1 : 1;
            });
          };
          sinon.createStubInstance = function(constructor) {
            if (typeof constructor !== "function") {
              throw new TypeError("The constructor should be a function.");
            }
            return sinon.stub(sinon.create(constructor.prototype));
          };
          sinon.restore = function(object) {
            if (object !== null && typeof object === "object") {
              for (var prop in object) {
                if (isRestorable(object[prop])) {
                  object[prop].restore();
                }
              }
            } else if (isRestorable(object)) {
              object.restore();
            }
          };
          return sinon;
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports) {
          makeApi(exports);
        }
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {}],
    60: [function(require, module, exports) {
      if (typeof sinon === "undefined") {
        this.sinon = {};
      }
      (function() {
        "use strict";
        var push = [].push;
        function makeApi(sinon) {
          sinon.Event = function Event(type, bubbles, cancelable, target) {
            this.initEvent(type, bubbles, cancelable, target);
          };
          sinon.Event.prototype = {
            initEvent: function(type, bubbles, cancelable, target) {
              this.type = type;
              this.bubbles = bubbles;
              this.cancelable = cancelable;
              this.target = target;
            },
            stopPropagation: function() {},
            preventDefault: function() {
              this.defaultPrevented = true;
            }
          };
          sinon.ProgressEvent = function ProgressEvent(type, progressEventRaw, target) {
            this.initEvent(type, false, false, target);
            this.loaded = typeof progressEventRaw.loaded === "number" ? progressEventRaw.loaded : null;
            this.total = typeof progressEventRaw.total === "number" ? progressEventRaw.total : null;
            this.lengthComputable = !!progressEventRaw.total;
          };
          sinon.ProgressEvent.prototype = new sinon.Event();
          sinon.ProgressEvent.prototype.constructor = sinon.ProgressEvent;
          sinon.CustomEvent = function CustomEvent(type, customData, target) {
            this.initEvent(type, false, false, target);
            this.detail = customData.detail || null;
          };
          sinon.CustomEvent.prototype = new sinon.Event();
          sinon.CustomEvent.prototype.constructor = sinon.CustomEvent;
          sinon.EventTarget = {
            addEventListener: function addEventListener(event, listener) {
              this.eventListeners = this.eventListeners || {};
              this.eventListeners[event] = this.eventListeners[event] || [];
              push.call(this.eventListeners[event], listener);
            },
            removeEventListener: function removeEventListener(event, listener) {
              var listeners = this.eventListeners && this.eventListeners[event] || [];
              for (var i = 0,
                  l = listeners.length; i < l; ++i) {
                if (listeners[i] === listener) {
                  return listeners.splice(i, 1);
                }
              }
            },
            dispatchEvent: function dispatchEvent(event) {
              var type = event.type;
              var listeners = this.eventListeners && this.eventListeners[type] || [];
              for (var i = 0; i < listeners.length; i++) {
                if (typeof listeners[i] === "function") {
                  listeners[i].call(this, event);
                } else {
                  listeners[i].handleEvent(event);
                }
              }
              return !!event.defaultPrevented;
            }
          };
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require) {
          var sinon = require('./core');
          makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
        } else if (isNode) {
          loadDependencies(require);
        } else {
          makeApi(sinon);
        }
      }());
    }, {"./core": 59}],
    61: [function(require, module, exports) {
      (function() {
        "use strict";
        var push = [].push;
        function responseArray(handler) {
          var response = handler;
          if (Object.prototype.toString.call(handler) !== "[object Array]") {
            response = [200, {}, handler];
          }
          if (typeof response[2] !== "string") {
            throw new TypeError("Fake server response body should be string, but was " + typeof response[2]);
          }
          return response;
        }
        var wloc = typeof window !== "undefined" ? window.location : {};
        var rCurrLoc = new RegExp("^" + wloc.protocol + "//" + wloc.host);
        function matchOne(response, reqMethod, reqUrl) {
          var rmeth = response.method;
          var matchMethod = !rmeth || rmeth.toLowerCase() === reqMethod.toLowerCase();
          var url = response.url;
          var matchUrl = !url || url === reqUrl || (typeof url.test === "function" && url.test(reqUrl));
          return matchMethod && matchUrl;
        }
        function match(response, request) {
          var requestUrl = request.url;
          if (!/^https?:\/\//.test(requestUrl) || rCurrLoc.test(requestUrl)) {
            requestUrl = requestUrl.replace(rCurrLoc, "");
          }
          if (matchOne(response, this.getHTTPMethod(request), requestUrl)) {
            if (typeof response.response === "function") {
              var ru = response.url;
              var args = [request].concat(ru && typeof ru.exec === "function" ? ru.exec(requestUrl).slice(1) : []);
              return response.response.apply(response, args);
            }
            return true;
          }
          return false;
        }
        function makeApi(sinon) {
          sinon.fakeServer = {
            create: function(config) {
              var server = sinon.create(this);
              server.configure(config);
              if (!sinon.xhr.supportsCORS) {
                this.xhr = sinon.useFakeXDomainRequest();
              } else {
                this.xhr = sinon.useFakeXMLHttpRequest();
              }
              server.requests = [];
              this.xhr.onCreate = function(xhrObj) {
                server.addRequest(xhrObj);
              };
              return server;
            },
            configure: function(config) {
              var whitelist = {
                "autoRespond": true,
                "autoRespondAfter": true,
                "respondImmediately": true,
                "fakeHTTPMethods": true
              };
              var setting;
              config = config || {};
              for (setting in config) {
                if (whitelist.hasOwnProperty(setting) && config.hasOwnProperty(setting)) {
                  this[setting] = config[setting];
                }
              }
            },
            addRequest: function addRequest(xhrObj) {
              var server = this;
              push.call(this.requests, xhrObj);
              xhrObj.onSend = function() {
                server.handleRequest(this);
                if (server.respondImmediately) {
                  server.respond();
                } else if (server.autoRespond && !server.responding) {
                  setTimeout(function() {
                    server.responding = false;
                    server.respond();
                  }, server.autoRespondAfter || 10);
                  server.responding = true;
                }
              };
            },
            getHTTPMethod: function getHTTPMethod(request) {
              if (this.fakeHTTPMethods && /post/i.test(request.method)) {
                var matches = (request.requestBody || "").match(/_method=([^\b;]+)/);
                return matches ? matches[1] : request.method;
              }
              return request.method;
            },
            handleRequest: function handleRequest(xhr) {
              if (xhr.async) {
                if (!this.queue) {
                  this.queue = [];
                }
                push.call(this.queue, xhr);
              } else {
                this.processRequest(xhr);
              }
            },
            log: function log(response, request) {
              var str;
              str = "Request:\n" + sinon.format(request) + "\n\n";
              str += "Response:\n" + sinon.format(response) + "\n\n";
              sinon.log(str);
            },
            respondWith: function respondWith(method, url, body) {
              if (arguments.length === 1 && typeof method !== "function") {
                this.response = responseArray(method);
                return;
              }
              if (!this.responses) {
                this.responses = [];
              }
              if (arguments.length === 1) {
                body = method;
                url = method = null;
              }
              if (arguments.length === 2) {
                body = url;
                url = method;
                method = null;
              }
              push.call(this.responses, {
                method: method,
                url: url,
                response: typeof body === "function" ? body : responseArray(body)
              });
            },
            respond: function respond() {
              if (arguments.length > 0) {
                this.respondWith.apply(this, arguments);
              }
              var queue = this.queue || [];
              var requests = queue.splice(0, queue.length);
              for (var i = 0; i < requests.length; i++) {
                this.processRequest(requests[i]);
              }
            },
            processRequest: function processRequest(request) {
              try {
                if (request.aborted) {
                  return;
                }
                var response = this.response || [404, {}, ""];
                if (this.responses) {
                  for (var l = this.responses.length,
                      i = l - 1; i >= 0; i--) {
                    if (match.call(this, this.responses[i], request)) {
                      response = this.responses[i].response;
                      break;
                    }
                  }
                }
                if (request.readyState !== 4) {
                  this.log(response, request);
                  request.respond(response[0], response[1], response[2]);
                }
              } catch (e) {
                sinon.logError("Fake server request processing", e);
              }
            },
            restore: function restore() {
              return this.xhr.restore && this.xhr.restore.apply(this.xhr, arguments);
            }
          };
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, exports, module) {
          var sinon = require('./core');
          require('./fake_xdomain_request');
          require('./fake_xml_http_request');
          require('../format');
          makeApi(sinon);
          module.exports = sinon;
        }
        if (isAMD) {
          define(loadDependencies);
        } else if (isNode) {
          loadDependencies(require, module.exports, module);
        } else {
          makeApi(sinon);
        }
      }());
    }, {
      "../format": 48,
      "./core": 59,
      "./fake_xdomain_request": 64,
      "./fake_xml_http_request": 65
    }],
    62: [function(require, module, exports) {
      (function() {
        "use strict";
        function makeApi(sinon) {
          function Server() {}
          Server.prototype = sinon.fakeServer;
          sinon.fakeServerWithClock = new Server();
          sinon.fakeServerWithClock.addRequest = function addRequest(xhr) {
            if (xhr.async) {
              if (typeof setTimeout.clock === "object") {
                this.clock = setTimeout.clock;
              } else {
                this.clock = sinon.useFakeTimers();
                this.resetClock = true;
              }
              if (!this.longestTimeout) {
                var clockSetTimeout = this.clock.setTimeout;
                var clockSetInterval = this.clock.setInterval;
                var server = this;
                this.clock.setTimeout = function(fn, timeout) {
                  server.longestTimeout = Math.max(timeout, server.longestTimeout || 0);
                  return clockSetTimeout.apply(this, arguments);
                };
                this.clock.setInterval = function(fn, timeout) {
                  server.longestTimeout = Math.max(timeout, server.longestTimeout || 0);
                  return clockSetInterval.apply(this, arguments);
                };
              }
            }
            return sinon.fakeServer.addRequest.call(this, xhr);
          };
          sinon.fakeServerWithClock.respond = function respond() {
            var returnVal = sinon.fakeServer.respond.apply(this, arguments);
            if (this.clock) {
              this.clock.tick(this.longestTimeout || 0);
              this.longestTimeout = 0;
              if (this.resetClock) {
                this.clock.restore();
                this.resetClock = false;
              }
            }
            return returnVal;
          };
          sinon.fakeServerWithClock.restore = function restore() {
            if (this.clock) {
              this.clock.restore();
            }
            return sinon.fakeServer.restore.apply(this, arguments);
          };
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require) {
          var sinon = require('./core');
          require('./fake_server');
          require('./fake_timers');
          makeApi(sinon);
        }
        if (isAMD) {
          define(loadDependencies);
        } else if (isNode) {
          loadDependencies(require);
        } else {
          makeApi(sinon);
        }
      }());
    }, {
      "./core": 59,
      "./fake_server": 61,
      "./fake_timers": 63
    }],
    63: [function(require, module, exports) {
      (function() {
        "use strict";
        function makeApi(s, lol) {
          var llx = typeof lolex !== "undefined" ? lolex : lol;
          s.useFakeTimers = function() {
            var now;
            var methods = Array.prototype.slice.call(arguments);
            if (typeof methods[0] === "string") {
              now = 0;
            } else {
              now = methods.shift();
            }
            var clock = llx.install(now || 0, methods);
            clock.restore = clock.uninstall;
            return clock;
          };
          s.clock = {create: function(now) {
              return llx.createClock(now);
            }};
          s.timers = {
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            setImmediate: (typeof setImmediate !== "undefined" ? setImmediate : undefined),
            clearImmediate: (typeof clearImmediate !== "undefined" ? clearImmediate : undefined),
            setInterval: setInterval,
            clearInterval: clearInterval,
            Date: Date
          };
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        function loadDependencies(require, epxorts, module, lolex) {
          var core = require('./core');
          makeApi(core, lolex);
          module.exports = core;
        }
        if (isAMD) {
          define(loadDependencies);
        } else if (isNode) {
          loadDependencies(require, module.exports, module, require('lolex'));
        } else {
          makeApi(sinon);
        }
      }());
    }, {
      "./core": 59,
      "lolex": 35
    }],
    64: [function(require, module, exports) {
      (function(global) {
        function getGlobal() {
          "use strict";
          return typeof window !== "undefined" ? window : global;
        }
        if (typeof sinon === "undefined") {
          if (typeof this === "undefined") {
            getGlobal().sinon = {};
          } else {
            this.sinon = {};
          }
        }
        (function(global) {
          "use strict";
          var xdr = {XDomainRequest: global.XDomainRequest};
          xdr.GlobalXDomainRequest = global.XDomainRequest;
          xdr.supportsXDR = typeof xdr.GlobalXDomainRequest !== "undefined";
          xdr.workingXDR = xdr.supportsXDR ? xdr.GlobalXDomainRequest : false;
          function makeApi(sinon) {
            sinon.xdr = xdr;
            function FakeXDomainRequest() {
              this.readyState = FakeXDomainRequest.UNSENT;
              this.requestBody = null;
              this.requestHeaders = {};
              this.status = 0;
              this.timeout = null;
              if (typeof FakeXDomainRequest.onCreate === "function") {
                FakeXDomainRequest.onCreate(this);
              }
            }
            function verifyState(x) {
              if (x.readyState !== FakeXDomainRequest.OPENED) {
                throw new Error("INVALID_STATE_ERR");
              }
              if (x.sendFlag) {
                throw new Error("INVALID_STATE_ERR");
              }
            }
            function verifyRequestSent(x) {
              if (x.readyState === FakeXDomainRequest.UNSENT) {
                throw new Error("Request not sent");
              }
              if (x.readyState === FakeXDomainRequest.DONE) {
                throw new Error("Request done");
              }
            }
            function verifyResponseBodyType(body) {
              if (typeof body !== "string") {
                var error = new Error("Attempted to respond to fake XDomainRequest with " + body + ", which is not a string.");
                error.name = "InvalidBodyException";
                throw error;
              }
            }
            sinon.extend(FakeXDomainRequest.prototype, sinon.EventTarget, {
              open: function open(method, url) {
                this.method = method;
                this.url = url;
                this.responseText = null;
                this.sendFlag = false;
                this.readyStateChange(FakeXDomainRequest.OPENED);
              },
              readyStateChange: function readyStateChange(state) {
                this.readyState = state;
                var eventName = "";
                switch (this.readyState) {
                  case FakeXDomainRequest.UNSENT:
                    break;
                  case FakeXDomainRequest.OPENED:
                    break;
                  case FakeXDomainRequest.LOADING:
                    if (this.sendFlag) {
                      eventName = "onprogress";
                    }
                    break;
                  case FakeXDomainRequest.DONE:
                    if (this.isTimeout) {
                      eventName = "ontimeout";
                    } else if (this.errorFlag || (this.status < 200 || this.status > 299)) {
                      eventName = "onerror";
                    } else {
                      eventName = "onload";
                    }
                    break;
                }
                if (eventName) {
                  if (typeof this[eventName] === "function") {
                    try {
                      this[eventName]();
                    } catch (e) {
                      sinon.logError("Fake XHR " + eventName + " handler", e);
                    }
                  }
                }
              },
              send: function send(data) {
                verifyState(this);
                if (!/^(get|head)$/i.test(this.method)) {
                  this.requestBody = data;
                }
                this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
                this.errorFlag = false;
                this.sendFlag = true;
                this.readyStateChange(FakeXDomainRequest.OPENED);
                if (typeof this.onSend === "function") {
                  this.onSend(this);
                }
              },
              abort: function abort() {
                this.aborted = true;
                this.responseText = null;
                this.errorFlag = true;
                if (this.readyState > sinon.FakeXDomainRequest.UNSENT && this.sendFlag) {
                  this.readyStateChange(sinon.FakeXDomainRequest.DONE);
                  this.sendFlag = false;
                }
              },
              setResponseBody: function setResponseBody(body) {
                verifyRequestSent(this);
                verifyResponseBodyType(body);
                var chunkSize = this.chunkSize || 10;
                var index = 0;
                this.responseText = "";
                do {
                  this.readyStateChange(FakeXDomainRequest.LOADING);
                  this.responseText += body.substring(index, index + chunkSize);
                  index += chunkSize;
                } while (index < body.length);
                this.readyStateChange(FakeXDomainRequest.DONE);
              },
              respond: function respond(status, contentType, body) {
                this.status = typeof status === "number" ? status : 200;
                this.setResponseBody(body || "");
              },
              simulatetimeout: function simulatetimeout() {
                this.status = 0;
                this.isTimeout = true;
                this.responseText = undefined;
                this.readyStateChange(FakeXDomainRequest.DONE);
              }
            });
            sinon.extend(FakeXDomainRequest, {
              UNSENT: 0,
              OPENED: 1,
              LOADING: 3,
              DONE: 4
            });
            sinon.useFakeXDomainRequest = function useFakeXDomainRequest() {
              sinon.FakeXDomainRequest.restore = function restore(keepOnCreate) {
                if (xdr.supportsXDR) {
                  global.XDomainRequest = xdr.GlobalXDomainRequest;
                }
                delete sinon.FakeXDomainRequest.restore;
                if (keepOnCreate !== true) {
                  delete sinon.FakeXDomainRequest.onCreate;
                }
              };
              if (xdr.supportsXDR) {
                global.XDomainRequest = sinon.FakeXDomainRequest;
              }
              return sinon.FakeXDomainRequest;
            };
            sinon.FakeXDomainRequest = FakeXDomainRequest;
          }
          var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
          var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
          function loadDependencies(require, exports, module) {
            var sinon = require('./core');
            require('../extend');
            require('./event');
            require('../log_error');
            makeApi(sinon);
            module.exports = sinon;
          }
          if (isAMD) {
            define(loadDependencies);
          } else if (isNode) {
            loadDependencies(require, module.exports, module);
          } else {
            makeApi(sinon);
          }
        })(typeof global !== "undefined" ? global : self);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../extend": 47,
      "../log_error": 49,
      "./core": 59,
      "./event": 60
    }],
    65: [function(require, module, exports) {
      (function(global) {
        (function(sinonGlobal, global) {
          "use strict";
          function getWorkingXHR(globalScope) {
            var supportsXHR = typeof globalScope.XMLHttpRequest !== "undefined";
            if (supportsXHR) {
              return globalScope.XMLHttpRequest;
            }
            var supportsActiveX = typeof globalScope.ActiveXObject !== "undefined";
            if (supportsActiveX) {
              return function() {
                return new globalScope.ActiveXObject("MSXML2.XMLHTTP.3.0");
              };
            }
            return false;
          }
          var supportsProgress = typeof ProgressEvent !== "undefined";
          var supportsCustomEvent = typeof CustomEvent !== "undefined";
          var supportsFormData = typeof FormData !== "undefined";
          var supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
          var supportsBlob = (function() {
            try {
              return !!new Blob();
            } catch (e) {
              return false;
            }
          })();
          var sinonXhr = {XMLHttpRequest: global.XMLHttpRequest};
          sinonXhr.GlobalXMLHttpRequest = global.XMLHttpRequest;
          sinonXhr.GlobalActiveXObject = global.ActiveXObject;
          sinonXhr.supportsActiveX = typeof sinonXhr.GlobalActiveXObject !== "undefined";
          sinonXhr.supportsXHR = typeof sinonXhr.GlobalXMLHttpRequest !== "undefined";
          sinonXhr.workingXHR = getWorkingXHR(global);
          sinonXhr.supportsCORS = sinonXhr.supportsXHR && "withCredentials" in (new sinonXhr.GlobalXMLHttpRequest());
          var unsafeHeaders = {
            "Accept-Charset": true,
            "Accept-Encoding": true,
            Connection: true,
            "Content-Length": true,
            Cookie: true,
            Cookie2: true,
            "Content-Transfer-Encoding": true,
            Date: true,
            Expect: true,
            Host: true,
            "Keep-Alive": true,
            Referer: true,
            TE: true,
            Trailer: true,
            "Transfer-Encoding": true,
            Upgrade: true,
            "User-Agent": true,
            Via: true
          };
          function UploadProgress() {
            this.eventListeners = {
              abort: [],
              error: [],
              load: [],
              loadend: [],
              progress: []
            };
          }
          UploadProgress.prototype.addEventListener = function addEventListener(event, listener) {
            this.eventListeners[event].push(listener);
          };
          UploadProgress.prototype.removeEventListener = function removeEventListener(event, listener) {
            var listeners = this.eventListeners[event] || [];
            for (var i = 0,
                l = listeners.length; i < l; ++i) {
              if (listeners[i] === listener) {
                return listeners.splice(i, 1);
              }
            }
          };
          UploadProgress.prototype.dispatchEvent = function dispatchEvent(event) {
            var listeners = this.eventListeners[event.type] || [];
            for (var i = 0,
                listener; (listener = listeners[i]) != null; i++) {
              listener(event);
            }
          };
          function FakeXMLHttpRequest() {
            this.readyState = FakeXMLHttpRequest.UNSENT;
            this.requestHeaders = {};
            this.requestBody = null;
            this.status = 0;
            this.statusText = "";
            this.upload = new UploadProgress();
            this.responseType = "";
            this.response = "";
            if (sinonXhr.supportsCORS) {
              this.withCredentials = false;
            }
            var xhr = this;
            var events = ["loadstart", "load", "abort", "error", "loadend"];
            function addEventListener(eventName) {
              xhr.addEventListener(eventName, function(event) {
                var listener = xhr["on" + eventName];
                if (listener && typeof listener === "function") {
                  listener.call(this, event);
                }
              });
            }
            for (var i = events.length - 1; i >= 0; i--) {
              addEventListener(events[i]);
            }
            if (typeof FakeXMLHttpRequest.onCreate === "function") {
              FakeXMLHttpRequest.onCreate(this);
            }
          }
          function verifyState(xhr) {
            if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
              throw new Error("INVALID_STATE_ERR");
            }
            if (xhr.sendFlag) {
              throw new Error("INVALID_STATE_ERR");
            }
          }
          function getHeader(headers, header) {
            header = header.toLowerCase();
            for (var h in headers) {
              if (h.toLowerCase() === header) {
                return h;
              }
            }
            return null;
          }
          function each(collection, callback) {
            if (!collection) {
              return;
            }
            for (var i = 0,
                l = collection.length; i < l; i += 1) {
              callback(collection[i]);
            }
          }
          function some(collection, callback) {
            for (var index = 0; index < collection.length; index++) {
              if (callback(collection[index]) === true) {
                return true;
              }
            }
            return false;
          }
          var apply = function(obj, method, args) {
            switch (args.length) {
              case 0:
                return obj[method]();
              case 1:
                return obj[method](args[0]);
              case 2:
                return obj[method](args[0], args[1]);
              case 3:
                return obj[method](args[0], args[1], args[2]);
              case 4:
                return obj[method](args[0], args[1], args[2], args[3]);
              case 5:
                return obj[method](args[0], args[1], args[2], args[3], args[4]);
            }
          };
          FakeXMLHttpRequest.filters = [];
          FakeXMLHttpRequest.addFilter = function addFilter(fn) {
            this.filters.push(fn);
          };
          var IE6Re = /MSIE 6/;
          FakeXMLHttpRequest.defake = function defake(fakeXhr, xhrArgs) {
            var xhr = new sinonXhr.workingXHR();
            each(["open", "setRequestHeader", "send", "abort", "getResponseHeader", "getAllResponseHeaders", "addEventListener", "overrideMimeType", "removeEventListener"], function(method) {
              fakeXhr[method] = function() {
                return apply(xhr, method, arguments);
              };
            });
            var copyAttrs = function(args) {
              each(args, function(attr) {
                try {
                  fakeXhr[attr] = xhr[attr];
                } catch (e) {
                  if (!IE6Re.test(navigator.userAgent)) {
                    throw e;
                  }
                }
              });
            };
            var stateChange = function stateChange() {
              fakeXhr.readyState = xhr.readyState;
              if (xhr.readyState >= FakeXMLHttpRequest.HEADERS_RECEIVED) {
                copyAttrs(["status", "statusText"]);
              }
              if (xhr.readyState >= FakeXMLHttpRequest.LOADING) {
                copyAttrs(["responseText", "response"]);
              }
              if (xhr.readyState === FakeXMLHttpRequest.DONE) {
                copyAttrs(["responseXML"]);
              }
              if (fakeXhr.onreadystatechange) {
                fakeXhr.onreadystatechange.call(fakeXhr, {target: fakeXhr});
              }
            };
            if (xhr.addEventListener) {
              for (var event in fakeXhr.eventListeners) {
                if (fakeXhr.eventListeners.hasOwnProperty(event)) {
                  each(fakeXhr.eventListeners[event], function(handler) {
                    xhr.addEventListener(event, handler);
                  });
                }
              }
              xhr.addEventListener("readystatechange", stateChange);
            } else {
              xhr.onreadystatechange = stateChange;
            }
            apply(xhr, "open", xhrArgs);
          };
          FakeXMLHttpRequest.useFilters = false;
          function verifyRequestOpened(xhr) {
            if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
              throw new Error("INVALID_STATE_ERR - " + xhr.readyState);
            }
          }
          function verifyRequestSent(xhr) {
            if (xhr.readyState === FakeXMLHttpRequest.DONE) {
              throw new Error("Request done");
            }
          }
          function verifyHeadersReceived(xhr) {
            if (xhr.async && xhr.readyState !== FakeXMLHttpRequest.HEADERS_RECEIVED) {
              throw new Error("No headers received");
            }
          }
          function verifyResponseBodyType(body) {
            if (typeof body !== "string") {
              var error = new Error("Attempted to respond to fake XMLHttpRequest with " + body + ", which is not a string.");
              error.name = "InvalidBodyException";
              throw error;
            }
          }
          function convertToArrayBuffer(body) {
            var buffer = new ArrayBuffer(body.length);
            var view = new Uint8Array(buffer);
            for (var i = 0; i < body.length; i++) {
              var charCode = body.charCodeAt(i);
              if (charCode >= 256) {
                throw new TypeError("arraybuffer or blob responseTypes require binary string, " + "invalid character " + body[i] + " found.");
              }
              view[i] = charCode;
            }
            return buffer;
          }
          function isXmlContentType(contentType) {
            return !contentType || /(text\/xml)|(application\/xml)|(\+xml)/.test(contentType);
          }
          function convertResponseBody(responseType, contentType, body) {
            if (responseType === "" || responseType === "text") {
              return body;
            } else if (supportsArrayBuffer && responseType === "arraybuffer") {
              return convertToArrayBuffer(body);
            } else if (responseType === "json") {
              try {
                return JSON.parse(body);
              } catch (e) {
                return null;
              }
            } else if (supportsBlob && responseType === "blob") {
              var blobOptions = {};
              if (contentType) {
                blobOptions.type = contentType;
              }
              return new Blob([convertToArrayBuffer(body)], blobOptions);
            } else if (responseType === "document") {
              if (isXmlContentType(contentType)) {
                return FakeXMLHttpRequest.parseXML(body);
              }
              return null;
            }
            throw new Error("Invalid responseType " + responseType);
          }
          function clearResponse(xhr) {
            if (xhr.responseType === "" || xhr.responseType === "text") {
              xhr.response = xhr.responseText = "";
            } else {
              xhr.response = xhr.responseText = null;
            }
            xhr.responseXML = null;
          }
          FakeXMLHttpRequest.parseXML = function parseXML(text) {
            if (text !== "") {
              try {
                if (typeof DOMParser !== "undefined") {
                  var parser = new DOMParser();
                  return parser.parseFromString(text, "text/xml");
                }
                var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(text);
                return xmlDoc;
              } catch (e) {}
            }
            return null;
          };
          FakeXMLHttpRequest.statusCodes = {
            100: "Continue",
            101: "Switching Protocols",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            300: "Multiple Choice",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported"
          };
          function makeApi(sinon) {
            sinon.xhr = sinonXhr;
            sinon.extend(FakeXMLHttpRequest.prototype, sinon.EventTarget, {
              async: true,
              open: function open(method, url, async, username, password) {
                this.method = method;
                this.url = url;
                this.async = typeof async === "boolean" ? async : true;
                this.username = username;
                this.password = password;
                clearResponse(this);
                this.requestHeaders = {};
                this.sendFlag = false;
                if (FakeXMLHttpRequest.useFilters === true) {
                  var xhrArgs = arguments;
                  var defake = some(FakeXMLHttpRequest.filters, function(filter) {
                    return filter.apply(this, xhrArgs);
                  });
                  if (defake) {
                    return FakeXMLHttpRequest.defake(this, arguments);
                  }
                }
                this.readyStateChange(FakeXMLHttpRequest.OPENED);
              },
              readyStateChange: function readyStateChange(state) {
                this.readyState = state;
                var readyStateChangeEvent = new sinon.Event("readystatechange", false, false, this);
                var event,
                    progress;
                if (typeof this.onreadystatechange === "function") {
                  try {
                    this.onreadystatechange(readyStateChangeEvent);
                  } catch (e) {
                    sinon.logError("Fake XHR onreadystatechange handler", e);
                  }
                }
                if (this.readyState === FakeXMLHttpRequest.DONE) {
                  progress = {
                    loaded: this.progress || 0,
                    total: this.progress || 0
                  };
                  if (this.status === 0) {
                    event = this.aborted ? "abort" : "error";
                  } else {
                    event = "load";
                  }
                  if (supportsProgress) {
                    this.upload.dispatchEvent(new sinon.ProgressEvent("progress", progress, this));
                    this.upload.dispatchEvent(new sinon.ProgressEvent(event, progress, this));
                    this.upload.dispatchEvent(new sinon.ProgressEvent("loadend", progress, this));
                  }
                  this.dispatchEvent(new sinon.ProgressEvent("progress", progress, this));
                  this.dispatchEvent(new sinon.ProgressEvent(event, progress, this));
                  this.dispatchEvent(new sinon.ProgressEvent("loadend", progress, this));
                }
                this.dispatchEvent(readyStateChangeEvent);
              },
              setRequestHeader: function setRequestHeader(header, value) {
                verifyState(this);
                if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
                  throw new Error("Refused to set unsafe header \"" + header + "\"");
                }
                if (this.requestHeaders[header]) {
                  this.requestHeaders[header] += "," + value;
                } else {
                  this.requestHeaders[header] = value;
                }
              },
              setResponseHeaders: function setResponseHeaders(headers) {
                verifyRequestOpened(this);
                this.responseHeaders = {};
                for (var header in headers) {
                  if (headers.hasOwnProperty(header)) {
                    this.responseHeaders[header] = headers[header];
                  }
                }
                if (this.async) {
                  this.readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
                } else {
                  this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
                }
              },
              send: function send(data) {
                verifyState(this);
                if (!/^(get|head)$/i.test(this.method)) {
                  var contentType = getHeader(this.requestHeaders, "Content-Type");
                  if (this.requestHeaders[contentType]) {
                    var value = this.requestHeaders[contentType].split(";");
                    this.requestHeaders[contentType] = value[0] + ";charset=utf-8";
                  } else if (supportsFormData && !(data instanceof FormData)) {
                    this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
                  }
                  this.requestBody = data;
                }
                this.errorFlag = false;
                this.sendFlag = this.async;
                clearResponse(this);
                this.readyStateChange(FakeXMLHttpRequest.OPENED);
                if (typeof this.onSend === "function") {
                  this.onSend(this);
                }
                this.dispatchEvent(new sinon.Event("loadstart", false, false, this));
              },
              abort: function abort() {
                this.aborted = true;
                clearResponse(this);
                this.errorFlag = true;
                this.requestHeaders = {};
                this.responseHeaders = {};
                if (this.readyState > FakeXMLHttpRequest.UNSENT && this.sendFlag) {
                  this.readyStateChange(FakeXMLHttpRequest.DONE);
                  this.sendFlag = false;
                }
                this.readyState = FakeXMLHttpRequest.UNSENT;
              },
              error: function error() {
                clearResponse(this);
                this.errorFlag = true;
                this.requestHeaders = {};
                this.responseHeaders = {};
                this.readyStateChange(FakeXMLHttpRequest.DONE);
              },
              getResponseHeader: function getResponseHeader(header) {
                if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
                  return null;
                }
                if (/^Set-Cookie2?$/i.test(header)) {
                  return null;
                }
                header = getHeader(this.responseHeaders, header);
                return this.responseHeaders[header] || null;
              },
              getAllResponseHeaders: function getAllResponseHeaders() {
                if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
                  return "";
                }
                var headers = "";
                for (var header in this.responseHeaders) {
                  if (this.responseHeaders.hasOwnProperty(header) && !/^Set-Cookie2?$/i.test(header)) {
                    headers += header + ": " + this.responseHeaders[header] + "\r\n";
                  }
                }
                return headers;
              },
              setResponseBody: function setResponseBody(body) {
                verifyRequestSent(this);
                verifyHeadersReceived(this);
                verifyResponseBodyType(body);
                var contentType = this.getResponseHeader("Content-Type");
                var isTextResponse = this.responseType === "" || this.responseType === "text";
                clearResponse(this);
                if (this.async) {
                  var chunkSize = this.chunkSize || 10;
                  var index = 0;
                  do {
                    this.readyStateChange(FakeXMLHttpRequest.LOADING);
                    if (isTextResponse) {
                      this.responseText = this.response += body.substring(index, index + chunkSize);
                    }
                    index += chunkSize;
                  } while (index < body.length);
                }
                this.response = convertResponseBody(this.responseType, contentType, body);
                if (isTextResponse) {
                  this.responseText = this.response;
                }
                if (this.responseType === "document") {
                  this.responseXML = this.response;
                } else if (this.responseType === "" && isXmlContentType(contentType)) {
                  this.responseXML = FakeXMLHttpRequest.parseXML(this.responseText);
                }
                this.progress = body.length;
                this.readyStateChange(FakeXMLHttpRequest.DONE);
              },
              respond: function respond(status, headers, body) {
                this.status = typeof status === "number" ? status : 200;
                this.statusText = FakeXMLHttpRequest.statusCodes[this.status];
                this.setResponseHeaders(headers || {});
                this.setResponseBody(body || "");
              },
              uploadProgress: function uploadProgress(progressEventRaw) {
                if (supportsProgress) {
                  this.upload.dispatchEvent(new sinon.ProgressEvent("progress", progressEventRaw));
                }
              },
              downloadProgress: function downloadProgress(progressEventRaw) {
                if (supportsProgress) {
                  this.dispatchEvent(new sinon.ProgressEvent("progress", progressEventRaw));
                }
              },
              uploadError: function uploadError(error) {
                if (supportsCustomEvent) {
                  this.upload.dispatchEvent(new sinon.CustomEvent("error", {detail: error}));
                }
              }
            });
            sinon.extend(FakeXMLHttpRequest, {
              UNSENT: 0,
              OPENED: 1,
              HEADERS_RECEIVED: 2,
              LOADING: 3,
              DONE: 4
            });
            sinon.useFakeXMLHttpRequest = function() {
              FakeXMLHttpRequest.restore = function restore(keepOnCreate) {
                if (sinonXhr.supportsXHR) {
                  global.XMLHttpRequest = sinonXhr.GlobalXMLHttpRequest;
                }
                if (sinonXhr.supportsActiveX) {
                  global.ActiveXObject = sinonXhr.GlobalActiveXObject;
                }
                delete FakeXMLHttpRequest.restore;
                if (keepOnCreate !== true) {
                  delete FakeXMLHttpRequest.onCreate;
                }
              };
              if (sinonXhr.supportsXHR) {
                global.XMLHttpRequest = FakeXMLHttpRequest;
              }
              if (sinonXhr.supportsActiveX) {
                global.ActiveXObject = function ActiveXObject(objId) {
                  if (objId === "Microsoft.XMLHTTP" || /^Msxml2\.XMLHTTP/i.test(objId)) {
                    return new FakeXMLHttpRequest();
                  }
                  return new sinonXhr.GlobalActiveXObject(objId);
                };
              }
              return FakeXMLHttpRequest;
            };
            sinon.FakeXMLHttpRequest = FakeXMLHttpRequest;
          }
          var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
          var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
          function loadDependencies(require, exports, module) {
            var sinon = require('./core');
            require('../extend');
            require('./event');
            require('../log_error');
            makeApi(sinon);
            module.exports = sinon;
          }
          if (isAMD) {
            define(loadDependencies);
            return;
          }
          if (isNode) {
            loadDependencies(require, module.exports, module);
            return;
          }
          if (sinonGlobal) {
            makeApi(sinonGlobal);
          }
        }(typeof sinon === "object" && sinon, typeof global !== "undefined" ? global : self));
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../extend": 47,
      "../log_error": 49,
      "./core": 59,
      "./event": 60
    }],
    66: [function(require, module, exports) {
      (function(sinonGlobal) {
        "use strict";
        function makeApi(sinon) {
          function walkInternal(obj, iterator, context, originalObj, seen) {
            var proto,
                prop;
            if (typeof Object.getOwnPropertyNames !== "function") {
              for (prop in obj) {
                iterator.call(context, obj[prop], prop, obj);
              }
              return;
            }
            Object.getOwnPropertyNames(obj).forEach(function(k) {
              if (!seen[k]) {
                seen[k] = true;
                var target = typeof Object.getOwnPropertyDescriptor(obj, k).get === "function" ? originalObj : obj;
                iterator.call(context, target[k], k, target);
              }
            });
            proto = Object.getPrototypeOf(obj);
            if (proto) {
              walkInternal(proto, iterator, context, originalObj, seen);
            }
          }
          function walk(obj, iterator, context) {
            return walkInternal(obj, iterator, context, obj, {});
          }
          sinon.walk = walk;
          return sinon.walk;
        }
        function loadDependencies(require, exports, module) {
          var sinon = require('./util/core');
          module.exports = makeApi(sinon);
        }
        var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
        var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
        if (isAMD) {
          define(loadDependencies);
          return;
        }
        if (isNode) {
          loadDependencies(require, module.exports, module);
          return;
        }
        if (sinonGlobal) {
          makeApi(sinonGlobal);
        }
      }(typeof sinon === "object" && sinon));
    }, {"./util/core": 59}],
    67: [function(require, module, exports) {
      "use strict";
      var assert = require('assert');
      function Done(x) {
        this.x = x;
      }
      function Cont(tramp, cont) {
        assert(typeof cont === "function");
        this.tramp = tramp;
        this.cont = cont;
      }
      function isTrampoline(t) {
        return t instanceof Done || t instanceof Cont;
      }
      function wrap(t) {
        return isTrampoline(t) ? t : new Done(t);
      }
      function lazy(computation) {
        assert(typeof computation === "function", "lazy: computation should be function");
        return wrap().jump(computation);
      }
      Done.prototype.jump = function(f) {
        return new Cont(this, function(x) {
          return wrap(f(x));
        });
      };
      Cont.prototype.jump = Done.prototype.jump;
      function execute(curr, params) {
        params = params || {};
        var debug = params.debug || false;
        var log = params.log || console.log;
        var stack = [];
        while (true) {
          if (debug) {
            log("trampoline execute: stack size " + stack.length);
          }
          if (curr instanceof Done) {
            if (stack.length === 0) {
              return curr.x;
            } else {
              curr = stack[stack.length - 1](curr.x);
              stack.pop();
            }
          } else {
            assert(curr instanceof Cont);
            stack.push(curr.cont);
            curr = curr.tramp;
          }
        }
      }
      Done.prototype.run = Cont.prototype.run = function(params) {
        return execute(this, params);
      };
      module.exports = {
        isTrampoline: isTrampoline,
        wrap: wrap,
        lazy: lazy
      };
    }, {"assert": 2}],
    68: [function(require, module, exports) {
      "use strict";
      function unescapeString(str) {
        return str.replace(/\\(?:'|"|\\|n|x[0-9a-fA-F]{2})/g, function(match) {
          switch (match[1]) {
            case "'":
              return "'";
            case "\"":
              return "\"";
            case "\\":
              return "\\";
            case "n":
              return "\n";
            case "x":
              return String.fromCharCode(parseInt(match.substr(2), 16));
          }
        });
      }
      function lex(input) {
        var m = input.match(/^([ \t\r\n]+|[\u22a4\u22a5\u2227\u2228\u00d7\u2192\u2026]|\ud835\udfd9|_\|_|\*|\(\)|"(?:[^"\\]|\\[\\'"n]|\\x[0-9a-fA-F]{2})*"|'(?:[^'\\]|\\[\\'"n]|\\x[0-9a-fA-F]{2})*'|[0-9a-zA-Z_\$@]+|,|->|:|;|&|\||\.\.\.|\(|\)|\[|\]|\{|\}|\?)*$/);
        if (m === null) {
          throw new SyntaxError("Cannot lex type signature");
        }
        m = input.match(/([ \t\r\n]+|[\u22a4\u22a5\u2227\u2228\u00d7\u2192\u2026]|\ud835\udfd9|_\|_|\*|\(\)|"(?:[^"\\]|\\[\\'"n]|\\x[0-9a-fA-F]{2})*"|'(?:[^'\\]|\\[\\'"n]|\\x[0-9a-fA-F]{2})*'|[0-9a-zA-Z_\$@]+|,|->|:|;|&|\||\.\.\.|\(|\)|\[|\]|\{|\}|\?)/g);
        return m.map(function(token) {
          switch (token) {
            case "_|_":
              return {type: "false"};
            case "\u22a5":
              return {type: "false"};
            case "*":
              return {type: "true"};
            case "\u22a4":
              return {type: "true"};
            case "()":
              return {type: "unit"};
            case "\ud835\udfd9":
              return {type: "unit"};
            case "true":
              return {
                type: "bool",
                value: true
              };
            case "false":
              return {
                type: "bool",
                value: false
              };
            case "rec":
              return {type: "rec"};
            case "&":
              return {type: "&"};
            case "\u2227":
              return {type: "&"};
            case "|":
              return {type: "|"};
            case "\u2228":
              return {type: "|"};
            case ",":
              return {type: ","};
            case "\u00d7":
              return {type: ","};
            case ";":
              return {type: ";"};
            case ":":
              return {type: ":"};
            case "(":
              return {type: "("};
            case ")":
              return {type: ")"};
            case "[":
              return {type: "["};
            case "]":
              return {type: "]"};
            case "{":
              return {type: "{"};
            case "}":
              return {type: "}"};
            case "?":
              return {type: "?"};
            case "->":
              return {type: "->"};
            case "\u2192":
              return {type: "->"};
            case "...":
              return {type: "..."};
            case "\u2026":
              return {type: "..."};
          }
          if (token.match(/^[ \r\r\n]+$/)) {
            return null;
          }
          if (token.match(/^[0-9]+/)) {
            return {
              type: "number",
              value: parseInt(token, 10)
            };
          }
          if (token[0] === "'" || token[0] === "\"") {
            token = token.slice(1, -1);
            return {
              type: "string",
              value: unescapeString(token)
            };
          }
          return {
            type: "ident",
            value: token
          };
        }).filter(function(token) {
          return token !== null;
        });
      }
      function makePunctParser(type) {
        return function(state) {
          if (state.pos >= state.len) {
            throw new SyntaxError("Expecting identifier, end-of-input found");
          }
          var token = state.tokens[state.pos];
          if (token.type !== type) {
            throw new SyntaxError("Expecting '" + type + "', found: " + token.type);
          }
          state.pos += 1;
          return type;
        };
      }
      var colonParser = makePunctParser(":");
      var openCurlyParser = makePunctParser("{");
      var closeCurlyParser = makePunctParser("}");
      var semicolonParser = makePunctParser(";");
      var openParenParser = makePunctParser("(");
      var closeParenParser = makePunctParser(")");
      var openBracketParser = makePunctParser("[");
      var closeBracketParser = makePunctParser("]");
      var recKeywordParser = makePunctParser("rec");
      var arrowParser = makePunctParser("->");
      function nameParser(state) {
        if (state.pos >= state.len) {
          throw new SyntaxError("Expecting identifier, end-of-input found");
        }
        var token = state.tokens[state.pos];
        if (token.type !== "ident") {
          throw new SyntaxError("Expecting 'ident', found: " + token.type);
        }
        state.pos += 1;
        return token.value;
      }
      function recursiveParser(state) {
        recKeywordParser(state);
        var name = nameParser(state);
        arrowParser(state);
        var value = typeParser(state);
        return {
          type: "recursive",
          name: name,
          arg: value
        };
      }
      function recordParser(state) {
        openCurlyParser(state);
        var token = state.tokens[state.pos];
        if (token && token.type === "}") {
          closeCurlyParser(state);
          return {
            type: "record",
            fields: {}
          };
        }
        var fields = {};
        while (true) {
          var name = nameParser(state);
          colonParser(state);
          var value = typeParser(state);
          fields[name] = value;
          token = state.tokens[state.pos];
          if (token && token.type === "}") {
            closeCurlyParser(state);
            break;
          } else if (token && token.type === ";") {
            semicolonParser(state);
          } else {
            throw new SyntaxError("Expecting '}' or ';', found: " + token.type);
          }
        }
        return {
          type: "record",
          fields: fields
        };
      }
      function postfix(parser, postfixToken, constructor) {
        return function(state) {
          var arg = parser(state);
          var token = state.tokens[state.pos];
          if (token && token.type === postfixToken) {
            state.pos += 1;
            return {
              type: constructor,
              arg: arg
            };
          } else {
            return arg;
          }
        };
      }
      var optionalParser = postfix(terminalParser, "?", "optional");
      function applicationParser(state) {
        var rator = optionalParser(state);
        var rands = [];
        while (true) {
          var pos = state.pos;
          try {
            var arg = optionalParser(state);
            rands.push(arg);
          } catch (err) {
            state.pos = pos;
            break;
          }
        }
        if (rands.length === 0) {
          return rator;
        } else {
          return {
            type: "application",
            callee: rator,
            args: rands
          };
        }
      }
      function separatedBy(parser, separator, constructor) {
        return function(state) {
          var list = [parser(state)];
          while (true) {
            var token = state.tokens[state.pos];
            if (token && token.type === separator) {
              state.pos += 1;
            } else {
              break;
            }
            list.push(parser(state));
          }
          if (list.length === 1) {
            return list[0];
          } else {
            return {
              type: constructor,
              args: list
            };
          }
        };
      }
      var conjunctionParser = separatedBy(applicationParser, "&", "conjunction");
      var disjunctionParser = separatedBy(conjunctionParser, "|", "disjunction");
      var variadicParser = postfix(disjunctionParser, "...", "variadic");
      function namedParser(state) {
        var token1 = state.tokens[state.pos];
        var token2 = state.tokens[state.pos + 1];
        if (token1 && token2 && token1.type === "ident" && token2.type === ":") {
          state.pos += 2;
          var arg = namedParser(state);
          return {
            type: "named",
            name: token1.value,
            arg: arg
          };
        } else {
          return variadicParser(state);
        }
      }
      var productParser = separatedBy(namedParser, ",", "product");
      function functionParser(state) {
        var v = productParser(state);
        var token = state.tokens[state.pos];
        if (token && token.type === "->") {
          state.pos += 1;
          var result = functionParser(state);
          return {
            type: "function",
            arg: v,
            result: result
          };
        } else {
          return v;
        }
      }
      function typeParser(state) {
        return functionParser(state);
      }
      function parenthesesParser(state) {
        openParenParser(state);
        var type = typeParser(state);
        closeParenParser(state);
        return type;
      }
      function bracketParser(state) {
        openBracketParser(state);
        var type = typeParser(state);
        closeBracketParser(state);
        return {
          type: "brackets",
          arg: type
        };
      }
      function terminalParser(state) {
        if (state.pos >= state.len) {
          throw new SyntaxError("Expecting terminal, end-of-input found");
        }
        var token = state.tokens[state.pos];
        switch (token.type) {
          case "false":
          case "true":
          case "unit":
          case "string":
          case "number":
          case "bool":
          case "ident":
            state.pos += 1;
            return token;
          case "{":
            return recordParser(state);
          case "(":
            return parenthesesParser(state);
          case "[":
            return bracketParser(state);
          case "rec":
            return recursiveParser(state);
          default:
            throw new SyntaxError("Expecting terminal, " + token.type + " found");
        }
      }
      function parse(input) {
        var tokens = lex(input);
        var state = {
          pos: 0,
          len: tokens.length,
          tokens: tokens
        };
        var res = typeParser(state);
        if (state.pos !== state.len) {
          throw new SyntaxError("expecting end-of-input, " + tokens[state.pos].type + " found");
        }
        return res;
      }
      function recordFreeVars(fields) {
        var res = [];
        for (var k in fields) {
          var t = fields[k];
          res = res.concat(freeVarsImpl(t));
        }
        return res;
      }
      function concatFreeVars(ts) {
        var res = [];
        for (var i = 0; i < ts.length; i++) {
          var t = ts[i];
          res = res.concat(freeVarsImpl(t));
        }
        return res;
      }
      function freeVarsImpl(t) {
        switch (t.type) {
          case "false":
          case "true":
          case "unit":
          case "string":
          case "number":
          case "bool":
            return [];
          case "ident":
            return [t.value];
          case "record":
            return recordFreeVars(t.fields);
          case "named":
            return freeVarsImpl(t.arg);
          case "conjunction":
            return concatFreeVars(t.args);
          case "disjunction":
            return concatFreeVars(t.args);
          case "product":
            return concatFreeVars(t.args);
          case "recursive":
            return freeVarsImpl(t.arg).filter(function(n) {
              return n !== t.name;
            });
          case "optional":
            return freeVarsImpl(t.arg);
          case "brackets":
            return freeVarsImpl(t.arg);
          case "variadic":
            return freeVarsImpl(t.arg);
          case "application":
            return freeVarsImpl(t.callee).concat(concatFreeVars(t.args));
          case "function":
            return freeVarsImpl(t.arg).concat(freeVarsImpl(t.result));
        }
      }
      function uniq(arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
          var x = arr[i];
          if (res.indexOf(x) === -1) {
            res.push(x);
          }
        }
        return res;
      }
      function freeVars(t) {
        var fvs = freeVarsImpl(t);
        fvs.sort();
        return uniq(fvs);
      }
      parse.freeVars = freeVars;
      module.exports = parse;
    }, {}],
    69: [function(require, module, exports) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }, {}],
    70: [function(require, module, exports) {
      (function(process, global) {
        var formatRegExp = /%[sdj%]/g;
        exports.format = function(f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }
          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function(x) {
            if (x === '%%')
              return '%';
            if (i >= len)
              return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };
        exports.deprecate = function(fn, msg) {
          if (isUndefined(global.process)) {
            return function() {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }
          if (process.noDeprecation === true) {
            return fn;
          }
          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }
          return deprecated;
        };
        var debugs = {};
        var debugEnviron;
        exports.debuglog = function(set) {
          if (isUndefined(debugEnviron))
            debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function() {};
            }
          }
          return debugs[set];
        };
        function inspect(obj, opts) {
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          if (arguments.length >= 3)
            ctx.depth = arguments[2];
          if (arguments.length >= 4)
            ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            ctx.showHidden = opts;
          } else if (opts) {
            exports._extend(ctx, opts);
          }
          if (isUndefined(ctx.showHidden))
            ctx.showHidden = false;
          if (isUndefined(ctx.depth))
            ctx.depth = 2;
          if (isUndefined(ctx.colors))
            ctx.colors = false;
          if (isUndefined(ctx.customInspect))
            ctx.customInspect = true;
          if (ctx.colors)
            ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          'regexp': 'red'
        };
        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];
          if (style) {
            return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }
        function stylizeNoColor(str, styleType) {
          return str;
        }
        function arrayToHash(array) {
          var hash = {};
          array.forEach(function(val, idx) {
            hash[val] = true;
          });
          return hash;
        }
        function formatValue(ctx, value, recurseTimes) {
          if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);
          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }
          var base = '',
              array = false,
              braces = ['{', '}'];
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }
          if (isError(value)) {
            base = ' ' + formatError(value);
          }
          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }
          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }
          ctx.seen.push(value);
          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function(key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }
          ctx.seen.pop();
          return reduceToSingleString(output, base, braces);
        }
        function formatPrimitive(ctx, value) {
          if (isUndefined(value))
            return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value))
            return ctx.stylize('' + value, 'number');
          if (isBoolean(value))
            return ctx.stylize('' + value, 'boolean');
          if (isNull(value))
            return ctx.stylize('null', 'null');
        }
        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }
        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0,
              l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function(key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }
        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name,
              str,
              desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function(line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }
          return name + ': ' + str;
        }
        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function(prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0)
              numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);
          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }
          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;
        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;
        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;
        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;
        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;
        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;
        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;
        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;
        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;
        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;
        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;
        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;
        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;
        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;
        exports.isBuffer = require('./support/isBuffer');
        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }
        exports.log = function() {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };
        exports.inherits = require('inherits');
        exports._extend = function(origin, add) {
          if (!add || !isObject(add))
            return origin;
          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };
        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./support/isBuffer": 69,
      "_process": 36,
      "inherits": 5
    }],
    71: [function(require, module, exports) {
      var indexOf = require('indexof');
      var Object_keys = function(obj) {
        if (Object.keys)
          return Object.keys(obj);
        else {
          var res = [];
          for (var key in obj)
            res.push(key);
          return res;
        }
      };
      var forEach = function(xs, fn) {
        if (xs.forEach)
          return xs.forEach(fn);
        else
          for (var i = 0; i < xs.length; i++) {
            fn(xs[i], i, xs);
          }
      };
      var defineProp = (function() {
        try {
          Object.defineProperty({}, '_', {});
          return function(obj, name, value) {
            Object.defineProperty(obj, name, {
              writable: true,
              enumerable: false,
              configurable: true,
              value: value
            });
          };
        } catch (e) {
          return function(obj, name, value) {
            obj[name] = value;
          };
        }
      }());
      var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function', 'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError', 'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];
      function Context() {}
      Context.prototype = {};
      var Script = exports.Script = function NodeScript(code) {
        if (!(this instanceof Script))
          return new Script(code);
        this.code = code;
      };
      Script.prototype.runInContext = function(context) {
        if (!(context instanceof Context)) {
          throw new TypeError("needs a 'context' argument.");
        }
        var iframe = document.createElement('iframe');
        if (!iframe.style)
          iframe.style = {};
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        var win = iframe.contentWindow;
        var wEval = win.eval,
            wExecScript = win.execScript;
        if (!wEval && wExecScript) {
          wExecScript.call(win, 'null');
          wEval = win.eval;
        }
        forEach(Object_keys(context), function(key) {
          win[key] = context[key];
        });
        forEach(globals, function(key) {
          if (context[key]) {
            win[key] = context[key];
          }
        });
        var winKeys = Object_keys(win);
        var res = wEval.call(win, this.code);
        forEach(Object_keys(win), function(key) {
          if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
          }
        });
        forEach(globals, function(key) {
          if (!(key in context)) {
            defineProp(context, key, win[key]);
          }
        });
        document.body.removeChild(iframe);
        return res;
      };
      Script.prototype.runInThisContext = function() {
        return eval(this.code);
      };
      Script.prototype.runInNewContext = function(context) {
        var ctx = Script.createContext(context);
        var res = this.runInContext(ctx);
        forEach(Object_keys(ctx), function(key) {
          context[key] = ctx[key];
        });
        return res;
      };
      forEach(Object_keys(Script.prototype), function(name) {
        exports[name] = Script[name] = function(code) {
          var s = Script(code);
          return s[name].apply(s, [].slice.call(arguments, 1));
        };
      });
      exports.createScript = function(code) {
        return exports.Script(code);
      };
      exports.createContext = Script.createContext = function(context) {
        var copy = new Context();
        if (typeof context === 'object') {
          forEach(Object_keys(context), function(key) {
            copy[key] = context[key];
          });
        }
        return copy;
      };
    }, {"indexof": 4}],
    72: [function(require, module, exports) {
      module.exports = function _isTransformer(obj) {
        return typeof obj['@@transducer/step'] === 'function';
      };
    }, {}],
    73: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('F', function() {
        it('always returns false', function() {
          eq(R.F(), false);
          eq(R.F(10), false);
          eq(R.F(true), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    74: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('T', function() {
        it('always returns true', function() {
          eq(R.T(), true);
          eq(R.T(10), true);
          eq(R.T(true), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    75: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('add', function() {
        it('adds together two numbers', function() {
          eq(R.add(3, 7), 10);
        });
        it('coerces its arguments to numbers', function() {
          eq(R.add('1', '2'), 3);
          eq(R.add(1, '2'), 3);
          eq(R.add(true, false), 1);
          eq(R.add(null, null), 0);
          eq(R.add(undefined, undefined), NaN);
          eq(R.add(new Date(1), new Date(2)), 3);
        });
        it('is curried', function() {
          var incr = R.add(1);
          eq(incr(42), 43);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    76: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('addIndex', function() {
        describe('unary functions like `map`', function() {
          var times2 = function(x) {
            return x * 2;
          };
          var addIndexParam = function(x, idx) {
            return x + idx;
          };
          var squareEnds = function(x, idx, list) {
            return (idx === 0 || idx === list.length - 1) ? x * x : x;
          };
          var mapIndexed = R.addIndex(R.map);
          it('works just like a normal map', function() {
            eq(mapIndexed(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
          });
          it('passes the index as a second parameter to the callback', function() {
            eq(mapIndexed(addIndexParam, [8, 6, 7, 5, 3, 0, 9]), [8, 7, 9, 8, 7, 5, 15]);
          });
          it('passes the entire list as a third parameter to the callback', function() {
            eq(mapIndexed(squareEnds, [8, 6, 7, 5, 3, 0, 9]), [64, 6, 7, 5, 3, 0, 81]);
          });
          it('acts as a curried function', function() {
            var makeSquareEnds = mapIndexed(squareEnds);
            eq(makeSquareEnds([8, 6, 7, 5, 3, 0, 9]), [64, 6, 7, 5, 3, 0, 81]);
          });
        });
        describe('binary functions like `reduce`', function() {
          var reduceIndexed = R.addIndex(R.reduce);
          var timesIndexed = function(tot, num, idx) {
            return tot + (num * idx);
          };
          var objectify = function(acc, elem, idx) {
            acc[elem] = idx;
            return acc;
          };
          it('passes the index as a third parameter to the predicate', function() {
            eq(reduceIndexed(timesIndexed, 0, [1, 2, 3, 4, 5]), 40);
            eq(reduceIndexed(objectify, {}, ['a', 'b', 'c', 'd', 'e']), {
              a: 0,
              b: 1,
              c: 2,
              d: 3,
              e: 4
            });
          });
          it('passes the entire list as a fourth parameter to the predicate', function() {
            var list = [1, 2, 3];
            reduceIndexed(function(acc, x, idx, ls) {
              eq(ls, list);
              return acc;
            }, 0, list);
          });
        });
        describe('works with functions like `all` that do not typically have index applied', function() {
          var allIndexed = R.addIndex(R.all);
          var superDiagonal = allIndexed(R.gt);
          it('passes the index as a second parameter', function() {
            eq(superDiagonal([8, 6, 5, 4, 9]), true);
            eq(superDiagonal([8, 6, 1, 3, 9]), false);
          });
        });
        describe('works with arbitrary user-defined functions', function() {
          var mapFilter = function(m, f, list) {
            return R.filter(R.compose(f, m), list);
          };
          var mapFilterIndexed = R.addIndex(mapFilter);
          it('passes the index as an additional parameter', function() {
            eq(mapFilterIndexed(R.multiply, R.gt(R.__, 13), [8, 6, 7, 5, 3, 0, 9]), [7, 5, 9]);
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    77: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('adjust', function() {
        it('applies the given function to the value at the given index of the supplied array', function() {
          eq(R.adjust(R.add(1), 2, [0, 1, 2, 3]), [0, 1, 3, 3]);
        });
        it('offsets negative indexes from the end of the array', function() {
          eq(R.adjust(R.add(1), -3, [0, 1, 2, 3]), [0, 2, 2, 3]);
        });
        it('returns the original array if the supplied index is out of bounds', function() {
          var list = [0, 1, 2, 3];
          eq(R.adjust(R.add(1), 4, list), list);
          eq(R.adjust(R.add(1), -5, list), list);
        });
        it('does not mutate the original array', function() {
          var list = [0, 1, 2, 3];
          eq(R.adjust(R.add(1), 2, list), [0, 1, 3, 3]);
          eq(list, [0, 1, 2, 3]);
        });
        it('curries the arguments', function() {
          eq(R.adjust(R.add(1))(2)([0, 1, 2, 3]), [0, 1, 3, 3]);
        });
        it('accepts an array-like object', function() {
          function args() {
            return arguments;
          }
          eq(R.adjust(R.add(1), 2, args(0, 1, 2, 3)), [0, 1, 3, 3]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    78: [function(require, module, exports) {
      var listXf = require('./helpers/listXf');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('all', function() {
        var even = function(n) {
          return n % 2 === 0;
        };
        var T = function() {
          return true;
        };
        var isFalse = function(x) {
          return x === false;
        };
        var intoArray = R.into([]);
        it('returns true if all elements satisfy the predicate', function() {
          eq(R.all(even, [2, 4, 6, 8, 10, 12]), true);
          eq(R.all(isFalse, [false, false, false]), true);
        });
        it('returns false if any element fails to satisfy the predicate', function() {
          eq(R.all(even, [2, 4, 6, 8, 9, 10]), false);
        });
        it('returns true for an empty list', function() {
          eq(R.all(T, []), true);
        });
        it('returns true into array if all elements satisfy the predicate', function() {
          eq(intoArray(R.all(even), [2, 4, 6, 8, 10, 12]), [true]);
          eq(intoArray(R.all(isFalse), [false, false, false]), [true]);
        });
        it('returns false into array if any element fails to satisfy the predicate', function() {
          eq(intoArray(R.all(even), [2, 4, 6, 8, 9, 10]), [false]);
        });
        it('returns true into array for an empty list', function() {
          eq(intoArray(R.all(T), []), [true]);
        });
        it('works with more complex objects', function() {
          var xs = [{x: 'abc'}, {x: 'ade'}, {x: 'fghiajk'}];
          function len3(o) {
            return o.x.length === 3;
          }
          function hasA(o) {
            return o.x.indexOf('a') > -1;
          }
          eq(R.all(len3, xs), false);
          eq(R.all(hasA, xs), true);
        });
        it('dispatches when given a transformer in list position', function() {
          eq(R.all(even, listXf), {
            all: true,
            f: even,
            xf: listXf
          });
        });
        it('is curried', function() {
          var count = 0;
          var test = function(n) {
            count += 1;
            return even(n);
          };
          eq(R.all(test)([2, 4, 6, 7, 8, 10]), false);
        });
      });
    }, {
      "..": 1,
      "./helpers/listXf": 148,
      "./shared/eq": 254
    }],
    79: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('allPass', function() {
        var odd = function(n) {
          return n % 2 !== 0;
        };
        var lt20 = function(n) {
          return n < 20;
        };
        var gt5 = function(n) {
          return n > 5;
        };
        var plusEq = function(w, x, y, z) {
          return w + x === y + z;
        };
        it('reports whether all predicates are satisfied by a given value', function() {
          var ok = R.allPass([odd, lt20, gt5]);
          eq(ok(7), true);
          eq(ok(9), true);
          eq(ok(10), false);
          eq(ok(3), false);
          eq(ok(21), false);
        });
        it('returns true on empty predicate list', function() {
          eq(R.allPass([])(3), true);
        });
        it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
          eq(R.allPass([odd, gt5, plusEq]).length, 4);
          eq(R.allPass([odd, gt5, plusEq])(9, 9, 9, 9), true);
          eq(R.allPass([odd, gt5, plusEq])(9)(9)(9)(9), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    80: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('always', function() {
        it('returns a function that returns the object initially supplied', function() {
          var theMeaning = R.always(42);
          eq(theMeaning(), 42);
          eq(theMeaning(10), 42);
          eq(theMeaning(false), 42);
        });
        it('works with various types', function() {
          eq(R.always(false)(), false);
          eq(R.always('abc')(), 'abc');
          eq(R.always({
            a: 1,
            b: 2
          })(), {
            a: 1,
            b: 2
          });
          var obj = {
            a: 1,
            b: 2
          };
          eq(R.always(obj)(), obj);
          var now = new Date(1776, 6, 4);
          eq(R.always(now)(), new Date(1776, 6, 4));
          eq(R.always(undefined)(), undefined);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    81: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('and', function() {
        it('compares two values with js &&', function() {
          eq(R.and(true, true), true);
          eq(R.and(true, false), false);
          eq(R.and(false, true), false);
          eq(R.and(false, false), false);
        });
        it('is curried', function() {
          var halfTruth = R.and(true);
          eq(halfTruth(false), false);
          eq(halfTruth(true), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    82: [function(require, module, exports) {
      var listXf = require('./helpers/listXf');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('any', function() {
        var odd = function(n) {
          return n % 2 === 1;
        };
        var T = function() {
          return true;
        };
        var intoArray = R.into([]);
        it('returns true if any element satisfies the predicate', function() {
          eq(R.any(odd, [2, 4, 6, 8, 10, 11, 12]), true);
        });
        it('returns false if all elements fails to satisfy the predicate', function() {
          eq(R.any(odd, [2, 4, 6, 8, 10, 12]), false);
        });
        it('returns true into array if any element satisfies the predicate', function() {
          eq(intoArray(R.any(odd), [2, 4, 6, 8, 10, 11, 12]), [true]);
        });
        it('returns false if all elements fails to satisfy the predicate', function() {
          eq(intoArray(R.any(odd), [2, 4, 6, 8, 10, 12]), [false]);
        });
        it('works with more complex objects', function() {
          var people = [{
            first: 'Paul',
            last: 'Grenier'
          }, {
            first: 'Mike',
            last: 'Hurley'
          }, {
            first: 'Will',
            last: 'Klein'
          }];
          var alliterative = function(person) {
            return person.first.charAt(0) === person.last.charAt(0);
          };
          eq(R.any(alliterative, people), false);
          people.push({
            first: 'Scott',
            last: 'Sauyet'
          });
          eq(R.any(alliterative, people), true);
        });
        it('can use a configurable function', function() {
          var teens = [{
            name: 'Alice',
            age: 14
          }, {
            name: 'Betty',
            age: 18
          }, {
            name: 'Cindy',
            age: 17
          }];
          var atLeast = function(age) {
            return function(person) {
              return person.age >= age;
            };
          };
          eq(R.any(atLeast(16), teens), true);
          eq(R.any(atLeast(21), teens), false);
        });
        it('returns false for an empty list', function() {
          eq(R.any(T, []), false);
        });
        it('returns false into array for an empty list', function() {
          eq(intoArray(R.any(T), []), [false]);
        });
        it('dispatches when given a transformer in list position', function() {
          eq(R.any(odd, listXf), {
            any: false,
            f: odd,
            xf: listXf
          });
        });
        it('is curried', function() {
          var count = 0;
          var test = function(n) {
            count += 1;
            return odd(n);
          };
          eq(R.any(test)([2, 4, 6, 7, 8, 10]), true);
        });
      });
    }, {
      "..": 1,
      "./helpers/listXf": 148,
      "./shared/eq": 254
    }],
    83: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('anyPass', function() {
        var odd = function(n) {
          return n % 2 !== 0;
        };
        var gt20 = function(n) {
          return n > 20;
        };
        var lt5 = function(n) {
          return n < 5;
        };
        var plusEq = function(w, x, y, z) {
          return w + x === y + z;
        };
        it('reports whether any predicates are satisfied by a given value', function() {
          var ok = R.anyPass([odd, gt20, lt5]);
          eq(ok(7), true);
          eq(ok(9), true);
          eq(ok(10), false);
          eq(ok(18), false);
          eq(ok(3), true);
          eq(ok(22), true);
        });
        it('returns false for an empty predicate list', function() {
          eq(R.anyPass([])(3), false);
        });
        it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
          eq(R.anyPass([odd, lt5, plusEq]).length, 4);
          eq(R.anyPass([odd, lt5, plusEq])(6, 7, 8, 9), false);
          eq(R.anyPass([odd, lt5, plusEq])(6)(7)(8)(9), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    84: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('ap', function() {
        function mult2(x) {
          return x * 2;
        }
        function plus3(x) {
          return x + 3;
        }
        it('interprets [a] as an applicative', function() {
          eq(R.ap([mult2, plus3], [1, 2, 3]), [2, 4, 6, 4, 5, 6]);
        });
        it('interprets ((->) r) as an applicative', function() {
          var f = function(r) {
            return function(a) {
              return r + a;
            };
          };
          var g = function(r) {
            return r * 2;
          };
          var h = R.ap(f, g);
          eq(h(10), 10 + (10 * 2));
          eq(R.ap(R.add)(g)(10), 10 + (10 * 2));
        });
        it('dispatches to the passed object\'s ap method when values is a non-Array object', function() {
          var obj = {ap: function(n) {
              return 'called ap with ' + n;
            }};
          eq(R.ap(obj, 10), obj.ap(10));
        });
        it('is curried', function() {
          var val = R.ap([mult2, plus3]);
          eq(typeof val, 'function');
          eq(val([1, 2, 3]), [2, 4, 6, 4, 5, 6]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    85: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('aperture', function() {
        var sevenLs = [1, 2, 3, 4, 5, 6, 7];
        it('creates a list of n-tuples from a list', function() {
          eq(R.aperture(1, sevenLs), [[1], [2], [3], [4], [5], [6], [7]]);
          eq(R.aperture(2, sevenLs), [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
          eq(R.aperture(3, sevenLs), [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]);
          eq(R.aperture(4, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
        });
        it('returns an empty list when `n` > `list.length`', function() {
          eq(R.aperture(6, [1, 2, 3]), []);
          eq(R.aperture(1, []), []);
        });
        it('is curried', function() {
          var pairwise = R.aperture(2);
          eq(pairwise(sevenLs), [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
        });
        it('can act as a transducer', function() {
          eq(R.into([], R.aperture(2), sevenLs), [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    86: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('append', function() {
        it('adds the element to the end of the list', function() {
          eq(R.append('z', ['x', 'y']), ['x', 'y', 'z']);
          eq(R.append(['a', 'z'], ['x', 'y']), ['x', 'y', ['a', 'z']]);
        });
        it('works on empty list', function() {
          eq(R.append(1, []), [1]);
        });
        it('is curried', function() {
          eq(typeof R.append(4), 'function');
          eq(R.append(1)([4, 3, 2]), [4, 3, 2, 1]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    87: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('apply', function() {
        it('applies function to argument list', function() {
          eq(R.apply(Math.max, [1, 2, 3, -99, 42, 6, 7]), 42);
        });
        it('is curried', function() {
          eq(R.apply(Math.max)([1, 2, 3, -99, 42, 6, 7]), 42);
        });
        it('provides no way to specify context', function() {
          var obj = {method: function() {
              return this === obj;
            }};
          eq(R.apply(obj.method, []), false);
          eq(R.apply(R.bind(obj.method, obj), []), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    88: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('applySpec', function() {
        it('works with empty spec', function() {
          eq(R.applySpec({})(), {});
        });
        it('works with unary functions', function() {
          eq(R.applySpec({
            v: R.inc,
            u: R.dec
          })(1), {
            v: 2,
            u: 0
          });
        });
        it('works with binary functions', function() {
          eq(R.applySpec({sum: R.add})(1, 2), {sum: 3});
        });
        it('works with nested specs', function() {
          eq(R.applySpec({
            unnested: R.always(0),
            nested: {sum: R.add}
          })(1, 2), {
            unnested: 0,
            nested: {sum: 3}
          });
        });
        it('retains the highest arity', function() {
          var f = R.applySpec({
            f1: R.nAry(2, R.T),
            f2: R.nAry(5, R.T)
          });
          eq(f.length, 5);
        });
        it('returns a curried function', function() {
          eq(R.applySpec({sum: R.add})(1)(2), {sum: 3});
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    89: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      describe('around', function() {
        it('wraps a function with functions before and after', function() {
          assert.strictEqual(R.around(R.inc, R.negate, R.dec, 42), R.compose(R.negate, R.dec, R.inc)(42));
          assert.strictEqual(R.around(R.identity, R.inc, R.negate, 42), R.compose(R.inc, R.negate)(42));
          assert.strictEqual(R.around(R.inc, R.identity, R.negate, 42), R.compose(R.negate, R.inc)(42));
          assert.strictEqual(R.around(R.inc, R.negate, R.identity, 42), R.compose(R.negate, R.inc)(42));
        });
        it('is curried', function() {
          assert.strictEqual(R.around(R.inc)(R.negate)(R.dec)(42), R.compose(R.negate, R.dec, R.inc)(42));
        });
      });
    }, {
      "..": 1,
      "assert": 2
    }],
    90: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('assoc', function() {
        it('makes a shallow clone of an object, overriding only the specified property', function() {
          var obj1 = {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5
          };
          var obj2 = R.assoc('e', {x: 42}, obj1);
          eq(obj2, {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: {x: 42},
            f: 5
          });
          assert.strictEqual(obj2.a, obj1.a);
          assert.strictEqual(obj2.b, obj1.b);
          assert.strictEqual(obj2.f, obj1.f);
        });
        it('is the equivalent of clone and set if the property is not on the original', function() {
          var obj1 = {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5
          };
          var obj2 = R.assoc('z', {x: 42}, obj1);
          eq(obj2, {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5,
            z: {x: 42}
          });
          assert.strictEqual(obj2.a, obj1.a);
          assert.strictEqual(obj2.b, obj1.b);
          assert.strictEqual(obj2.f, obj1.f);
        });
        it('is curried', function() {
          var obj1 = {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5
          };
          var expected = {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: {x: 42},
            f: 5
          };
          var f = R.assoc('e');
          var g = f({x: 42});
          eq(f({x: 42}, obj1), expected);
          eq(g(obj1), expected);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    91: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('assocPath', function() {
        it('makes a shallow clone of an object, overriding only what is necessary for the path', function() {
          var obj1 = {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                i: 5,
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          };
          var obj2 = R.assocPath(['f', 'g', 'i'], {x: 42}, obj1);
          eq(obj2, {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                i: {x: 42},
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          });
          assert.strictEqual(obj2.a, obj1.a);
          assert.strictEqual(obj2.m, obj1.m);
          assert.strictEqual(obj2.f.g.h, obj1.f.g.h);
          assert.strictEqual(obj2.f.g.j, obj1.f.g.j);
        });
        it('is the equivalent of clone and setPath if the property is not on the original', function() {
          var obj1 = {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5
          };
          var obj2 = R.assocPath(['x', 'y', 'z'], {w: 42}, obj1);
          eq(obj2, {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5,
            x: {y: {z: {w: 42}}}
          });
          assert.strictEqual(obj2.a, obj1.a);
          assert.strictEqual(obj2.b, obj1.b);
          assert.strictEqual(obj2.f, obj1.f);
        });
        it('is curried', function() {
          var obj1 = {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                i: 5,
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          };
          var expected = {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                i: {x: 42},
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          };
          var f = R.assocPath(['f', 'g', 'i']);
          var g = f({x: 42});
          eq(f({x: 42}, obj1), expected);
          eq(g(obj1), expected);
        });
        it('empty path replaces the the whole object', function() {
          eq(R.assocPath([], 3, {
            a: 1,
            b: 2
          }), 3);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    92: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('binary', function() {
        it('turns multiple-argument function into binary one', function() {
          R.binary(function(x, y, z) {
            eq(arguments.length, 2);
            eq(typeof z, 'undefined');
          })(10, 20, 30);
        });
        it('initial arguments are passed through normally', function() {
          R.binary(function(x, y, z) {
            eq(x, 10);
            eq(y, 20);
            void z;
          })(10, 20, 30);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    93: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('bind', function() {
        function Foo(x) {
          this.x = x;
        }
        function add(x) {
          return this.x + x;
        }
        function Bar(x, y) {
          this.x = x;
          this.y = y;
        }
        Bar.prototype = new Foo();
        Bar.prototype.getX = function() {
          return 'prototype getX';
        };
        it('returns a function', function() {
          eq(typeof R.bind(add, Foo), 'function');
        });
        it('returns a function bound to the specified context object', function() {
          var f = new Foo(12);
          function isFoo() {
            return this instanceof Foo;
          }
          var isFooBound = R.bind(isFoo, f);
          eq(isFoo(), false);
          eq(isFooBound(), true);
        });
        it('works with built-in types', function() {
          var abc = R.bind(String.prototype.toLowerCase, 'ABCDEFG');
          eq(typeof abc, 'function');
          eq(abc(), 'abcdefg');
        });
        it('works with user-defined types', function() {
          var f = new Foo(12);
          function getX() {
            return this.x;
          }
          var getXFooBound = R.bind(getX, f);
          eq(getXFooBound(), 12);
        });
        it('works with plain objects', function() {
          var pojso = {x: 100};
          function incThis() {
            return this.x + 1;
          }
          var incPojso = R.bind(incThis, pojso);
          eq(typeof incPojso, 'function');
          eq(incPojso(), 101);
        });
        it('does not interfere with existing object methods', function() {
          var b = new Bar('a', 'b');
          function getX() {
            return this.x;
          }
          var getXBarBound = R.bind(getX, b);
          eq(b.getX(), 'prototype getX');
          eq(getXBarBound(), 'a');
        });
        it('is curried', function() {
          var f = new Foo(1);
          eq(R.bind(add)(f)(10), 11);
        });
        it('preserves arity', function() {
          var f0 = function() {
            return 0;
          };
          var f1 = function(a) {
            return a;
          };
          var f2 = function(a, b) {
            return a + b;
          };
          var f3 = function(a, b, c) {
            return a + b + c;
          };
          eq(R.bind(f0, {}).length, 0);
          eq(R.bind(f1, {}).length, 1);
          eq(R.bind(f2, {}).length, 2);
          eq(R.bind(f3, {}).length, 3);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    94: [function(require, module, exports) {
      var S = require('sanctuary');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('both', function() {
        it('combines two boolean-returning functions into one', function() {
          var even = function(x) {
            return x % 2 === 0;
          };
          var gt10 = function(x) {
            return x > 10;
          };
          var f = R.both(even, gt10);
          eq(f(8), false);
          eq(f(13), false);
          eq(f(14), true);
        });
        it('accepts functions that take multiple parameters', function() {
          var between = function(a, b, c) {
            return a < b && b < c;
          };
          var total20 = function(a, b, c) {
            return a + b + c === 20;
          };
          var f = R.both(between, total20);
          eq(f(4, 5, 11), true);
          eq(f(12, 2, 6), false);
          eq(f(5, 6, 15), false);
        });
        it('does not evaluate the second expression if the first one is false', function() {
          var F = function() {
            return false;
          };
          var Z = function() {
            effect = 'Z got evaluated';
          };
          var effect = 'not evaluated';
          R.both(F, Z)();
          eq(effect, 'not evaluated');
        });
        it('is curried', function() {
          var even = function(x) {
            return x % 2 === 0;
          };
          var gt10 = function(x) {
            return x > 10;
          };
          var evenAnd = R.both(even);
          eq(typeof evenAnd(gt10), 'function');
          eq(evenAnd(gt10)(11), false);
          eq(evenAnd(gt10)(12), true);
        });
        it('accepts fantasy-land applicative functors', function() {
          var Just = S.Just;
          var Nothing = S.Nothing;
          eq(R.both(Just(true), Just(true)), Just(true));
          eq(R.both(Just(true), Just(false)), Just(false));
          eq(R.both(Just(true), Nothing()), Nothing());
          eq(R.both(Nothing(), Just(false)), Nothing());
          eq(R.both(Nothing(), Nothing()), Nothing());
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "sanctuary": 41
    }],
    95: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('call', function() {
        it('returns the result of calling its first argument with the remaining arguments', function() {
          eq(R.call(Math.max, 1, 2, 3, -99, 42, 6, 7), 42);
        });
        it('accepts one or more arguments', function() {
          var fn = function() {
            return arguments.length;
          };
          eq(R.call(fn), 0);
          eq(R.call(fn, 'x'), 1);
          eq(R.call(fn, 'x', 'y'), 2);
          eq(R.call(fn, 'x', 'y', 'z'), 3);
        });
        it('provides no way to specify context', function() {
          var obj = {method: function() {
              return this === obj;
            }};
          eq(R.call(obj.method), false);
          eq(R.call(R.bind(obj.method, obj)), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    96: [function(require, module, exports) {
      var listXf = require('./helpers/listXf');
      var R = require('..');
      var eq = require('./shared/eq');
      var _isTransformer = require('../src/internal/_isTransformer');
      describe('chain', function() {
        var intoArray = R.into([]);
        function add1(x) {
          return [x + 1];
        }
        function dec(x) {
          return [x - 1];
        }
        function times2(x) {
          return [x * 2];
        }
        it('maps a function over a nested list and returns the (shallow) flattened result', function() {
          eq(R.chain(times2, [1, 2, 3, 1, 0, 10, -3, 5, 7]), [2, 4, 6, 2, 0, 20, -6, 10, 14]);
          eq(R.chain(times2, [1, 2, 3]), [2, 4, 6]);
        });
        it('does not flatten recursively', function() {
          function f(xs) {
            return xs[0] ? [xs[0]] : [];
          }
          eq(R.chain(f, [[1], [[2], 100], [], [3, [4]]]), [1, [2], 3]);
        });
        it('maps a function (a -> [b]) into a (shallow) flat result', function() {
          eq(intoArray(R.chain(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
        });
        it('interprets ((->) r) as a monad', function() {
          var h = function(r) {
            return r * 2;
          };
          var f = function(a) {
            return function(r) {
              return r + a;
            };
          };
          var bound = R.chain(h, f);
          eq(bound(10), (10 * 2) + 10);
        });
        it('dispatches to objects that implement `chain`', function() {
          var obj = {
            x: 100,
            chain: function(f) {
              return f(this.x);
            }
          };
          eq(R.chain(add1, obj), [101]);
        });
        it('dispatches to transformer objects', function() {
          eq(_isTransformer(R.chain(add1, listXf)), true);
        });
        it('composes', function() {
          var mdouble = R.chain(times2);
          var mdec = R.chain(dec);
          eq(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
        });
        it('can compose transducer-style', function() {
          var mdouble = R.chain(times2);
          var mdec = R.chain(dec);
          var xcomp = R.compose(mdec, mdouble);
          eq(intoArray(xcomp, [10, 20, 30]), [18, 38, 58]);
        });
        it('is curried', function() {
          var flatInc = R.chain(add1);
          eq(flatInc([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6, 7]);
        });
        it('correctly reports the arity of curried versions', function() {
          var inc = R.chain(add1);
          eq(inc.length, 1);
        });
      });
    }, {
      "..": 1,
      "../src/internal/_isTransformer": 72,
      "./helpers/listXf": 148,
      "./shared/eq": 254
    }],
    97: [function(require, module, exports) {
      var eq = require('./shared/eq');
      var R = require('..');
      describe('clamp', function() {
        it('clamps to the lower bound', function() {
          eq(R.clamp(1, 10, 0), 1);
          eq(R.clamp(3, 12, 1), 3);
          eq(R.clamp(-15, 3, -100), -15);
        });
        it('clamps to the upper bound', function() {
          eq(R.clamp(1, 10, 20), 10);
          eq(R.clamp(3, 12, 23), 12);
          eq(R.clamp(-15, 3, 16), 3);
        });
        it('leaves it alone when within the bound', function() {
          eq(R.clamp(1, 10, 4), 4);
          eq(R.clamp(3, 12, 6), 6);
          eq(R.clamp(-15, 3, 0), 0);
        });
        it('works with letters as well', function() {
          eq(R.clamp('d', 'n', 'f'), 'f');
          eq(R.clamp('d', 'n', 'a'), 'd');
          eq(R.clamp('d', 'n', 'q'), 'n');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    98: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('deep clone integers, strings and booleans', function() {
        it('clones integers', function() {
          eq(R.clone(-4), -4);
          eq(R.clone(9007199254740991), 9007199254740991);
        });
        it('clones floats', function() {
          eq(R.clone(-4.5), -4.5);
          eq(R.clone(0.0), 0.0);
        });
        it('clones strings', function() {
          eq(R.clone('ramda'), 'ramda');
        });
        it('clones booleans', function() {
          eq(R.clone(true), true);
        });
      });
      describe('deep clone objects', function() {
        it('clones shallow object', function() {
          var obj = {
            a: 1,
            b: 'ramda',
            c: true,
            d: new Date(2013, 11, 25)
          };
          var clone = R.clone(obj);
          obj.c = false;
          obj.d.setDate(31);
          eq(clone, {
            a: 1,
            b: 'ramda',
            c: true,
            d: new Date(2013, 11, 25)
          });
        });
        it('clones deep object', function() {
          var obj = {a: {b: {c: 'ramda'}}};
          var clone = R.clone(obj);
          obj.a.b.c = null;
          eq(clone, {a: {b: {c: 'ramda'}}});
        });
        it('clones objects with circular references', function() {
          var x = {c: null};
          var y = {a: x};
          var z = {b: y};
          x.c = z;
          var clone = R.clone(x);
          assert.notStrictEqual(x, clone);
          assert.notStrictEqual(x.c, clone.c);
          assert.notStrictEqual(x.c.b, clone.c.b);
          assert.notStrictEqual(x.c.b.a, clone.c.b.a);
          assert.notStrictEqual(x.c.b.a.c, clone.c.b.a.c);
          eq(R.keys(clone), R.keys(x));
          eq(R.keys(clone.c), R.keys(x.c));
          eq(R.keys(clone.c.b), R.keys(x.c.b));
          eq(R.keys(clone.c.b.a), R.keys(x.c.b.a));
          eq(R.keys(clone.c.b.a.c), R.keys(x.c.b.a.c));
          x.c.b = 1;
          assert.notDeepEqual(clone.c.b, x.c.b);
        });
        it('clone instances', function() {
          var Obj = function(x) {
            this.x = x;
          };
          Obj.prototype.get = function() {
            return this.x;
          };
          Obj.prototype.set = function(x) {
            this.x = x;
          };
          var obj = new Obj(10);
          eq(obj.get(), 10);
          var clone = R.clone(obj);
          eq(clone.get(), 10);
          assert.notStrictEqual(obj, clone);
          obj.set(11);
          eq(obj.get(), 11);
          eq(clone.get(), 10);
        });
      });
      describe('deep clone arrays', function() {
        it('clones shallow arrays', function() {
          var list = [1, 2, 3];
          var clone = R.clone(list);
          list.pop();
          eq(clone, [1, 2, 3]);
        });
        it('clones deep arrays', function() {
          var list = [1, [1, 2, 3], [[[5]]]];
          var clone = R.clone(list);
          assert.notStrictEqual(list, clone);
          assert.notStrictEqual(list[2], clone[2]);
          assert.notStrictEqual(list[2][0], clone[2][0]);
          eq(clone, [1, [1, 2, 3], [[[5]]]]);
        });
      });
      describe('deep clone functions', function() {
        it('keep reference to function', function() {
          var fn = function(x) {
            return x + x;
          };
          var list = [{a: fn}];
          var clone = R.clone(list);
          eq(clone[0].a(10), 20);
          eq(list[0].a, clone[0].a);
        });
      });
      describe('built-in types', function() {
        it('clones Date object', function() {
          var date = new Date(2014, 10, 14, 23, 59, 59, 999);
          var clone = R.clone(date);
          assert.notStrictEqual(date, clone);
          eq(clone, new Date(2014, 10, 14, 23, 59, 59, 999));
          eq(clone.getDay(), 5);
        });
        it('clones RegExp object', function() {
          R.forEach(function(pattern) {
            var clone = R.clone(pattern);
            assert.notStrictEqual(clone, pattern);
            eq(clone.constructor, RegExp);
            eq(clone.source, pattern.source);
            eq(clone.global, pattern.global);
            eq(clone.ignoreCase, pattern.ignoreCase);
            eq(clone.multiline, pattern.multiline);
          }, [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim]);
        });
      });
      describe('deep clone deep nested mixed objects', function() {
        it('clones array with objects', function() {
          var list = [{a: {b: 1}}, [{c: {d: 1}}]];
          var clone = R.clone(list);
          list[1][0] = null;
          eq(clone, [{a: {b: 1}}, [{c: {d: 1}}]]);
        });
        it('clones array with arrays', function() {
          var list = [[1], [[3]]];
          var clone = R.clone(list);
          list[1][0] = null;
          eq(clone, [[1], [[3]]]);
        });
        it('clones array with mutual ref object', function() {
          var obj = {a: 1};
          var list = [{b: obj}, {b: obj}];
          var clone = R.clone(list);
          assert.strictEqual(list[0].b, list[1].b);
          assert.strictEqual(clone[0].b, clone[1].b);
          assert.notStrictEqual(clone[0].b, list[0].b);
          assert.notStrictEqual(clone[1].b, list[1].b);
          eq(clone[0].b, {a: 1});
          eq(clone[1].b, {a: 1});
          obj.a = 2;
          eq(clone[0].b, {a: 1});
          eq(clone[1].b, {a: 1});
        });
      });
      describe('deep clone edge cases', function() {
        it('nulls, undefineds and empty objects and arrays', function() {
          eq(R.clone(null), null);
          eq(R.clone(undefined), undefined);
          assert.notStrictEqual(R.clone(undefined), null);
          var obj = {};
          assert.notStrictEqual(R.clone(obj), obj);
          var list = [];
          assert.notStrictEqual(R.clone(list), list);
        });
      });
      describe('Let `R.clone` use an arbitrary user defined `clone` method', function() {
        it('dispatches to `clone` method if present', function() {
          function ArbitraryClone(x) {
            this.value = x;
          }
          ArbitraryClone.prototype.clone = function() {
            return new ArbitraryClone(this.value);
          };
          var obj = new ArbitraryClone(42);
          var arbitraryClonedObj = R.clone(obj);
          eq(arbitraryClonedObj, new ArbitraryClone(42));
          eq(arbitraryClonedObj instanceof ArbitraryClone, true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    99: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('comparator', function() {
        it('builds a comparator function for sorting out of a simple predicate that reports whether the first param is smaller', function() {
          eq([3, 1, 8, 1, 2, 5].sort(R.comparator(function(a, b) {
            return a < b;
          })), [1, 1, 2, 3, 5, 8]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    100: [function(require, module, exports) {
      var S = require('sanctuary');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('complement', function() {
        it('creates boolean-returning function that reverses another', function() {
          var even = function(x) {
            return x % 2 === 0;
          };
          var f = R.complement(even);
          eq(f(8), false);
          eq(f(13), true);
        });
        it('accepts a function that take multiple parameters', function() {
          var between = function(a, b, c) {
            return a < b && b < c;
          };
          var f = R.complement(between);
          eq(f(4, 5, 11), false);
          eq(f(12, 2, 6), true);
        });
        it('accepts fantasy-land functors', function() {
          var Just = S.Just;
          var Nothing = S.Nothing;
          eq(R.complement(Just(true)), Just(false));
          eq(R.complement(Just(false)), Just(true));
          eq(R.complement(Nothing()), Nothing());
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "sanctuary": 41
    }],
    101: [function(require, module, exports) {
      var assert = require('assert');
      var jsv = require('jsverify');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('compose', function() {
        it('is a variadic function', function() {
          eq(typeof R.compose, 'function');
          eq(R.compose.length, 0);
        });
        it('performs right-to-left function composition', function() {
          var f = R.compose(R.map, R.multiply, parseInt);
          eq(f.length, 2);
          eq(f('10')([1, 2, 3]), [10, 20, 30]);
          eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
        });
        it('passes context to functions', function() {
          function x(val) {
            return this.x * val;
          }
          function y(val) {
            return this.y * val;
          }
          function z(val) {
            return this.z * val;
          }
          var context = {
            a: R.compose(x, y, z),
            x: 4,
            y: 2,
            z: 1
          };
          eq(context.a(5), 40);
        });
        it('throws if given no arguments', function() {
          assert.throws(function() {
            R.compose();
          }, function(err) {
            return err.constructor === Error && err.message === 'compose requires at least one argument';
          });
        });
        it('can be applied to one argument', function() {
          var f = function(a, b, c) {
            return [a, b, c];
          };
          var g = R.compose(f);
          eq(g.length, 3);
          eq(g(1, 2, 3), [1, 2, 3]);
        });
      });
      describe('compose properties', function() {
        jsv.property('composes two functions', jsv.fn(), jsv.fn(), jsv.nat, function(f, g, x) {
          return R.equals(R.compose(f, g)(x), f(g(x)));
        });
        jsv.property('associative', jsv.fn(), jsv.fn(), jsv.fn(), jsv.nat, function(f, g, h, x) {
          var result = f(g(h(x)));
          return R.all(R.equals(result), [R.compose(f, g, h)(x), R.compose(f, R.compose(g, h))(x), R.compose(R.compose(f, g), h)(x)]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2,
      "jsverify": 20
    }],
    102: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var Identity = function(x) {
        this.value = x;
      };
      Identity.prototype.chain = function(f) {
        return f(this.value);
      };
      describe('composeK', function() {
        it('is a variadic function', function() {
          eq(typeof R.composeK, 'function');
          eq(R.composeK.length, 0);
        });
        it('performs right-to-left Kleisli composition', function() {
          var f = function(x) {
            return new Identity(x - 1);
          };
          var g = function(x) {
            return new Identity(x * x);
          };
          var h = function(x) {
            return new Identity(x + 1);
          };
          var fn = R.composeK(h, g, f);
          var id = new Identity(8);
          eq(fn(id).value, 50);
          eq(fn(id).value, R.compose(R.chain(h), R.chain(g), R.chain(f))(id).value);
        });
        it('returns the identity function given no arguments', function() {
          var identity = R.composeK();
          eq(identity.length, 1);
          eq(identity(R.__).length, 1);
          eq(identity(42), 42);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    103: [function(require, module, exports) {
      var assert = require('assert');
      var Q = require('q');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('composeP', function() {
        it('is a variadic function', function() {
          eq(typeof R.composeP, 'function');
          eq(R.composeP.length, 0);
        });
        it('performs right-to-left composition of Promise-returning functions', function(done) {
          var f = function(a) {
            return Q.Promise(function(res) {
              res([a]);
            });
          };
          var g = function(a, b) {
            return Q.Promise(function(res) {
              res([a, b]);
            });
          };
          eq(R.composeP(f).length, 1);
          eq(R.composeP(g).length, 2);
          eq(R.composeP(f, f).length, 1);
          eq(R.composeP(f, g).length, 2);
          eq(R.composeP(g, f).length, 1);
          eq(R.composeP(g, g).length, 2);
          R.composeP(f, g)(1).then(function(result) {
            eq(result, [[1, undefined]]);
            R.composeP(g, f)(1).then(function(result) {
              eq(result, [[1], undefined]);
              R.composeP(f, g)(1, 2).then(function(result) {
                eq(result, [[1, 2]]);
                R.composeP(g, f)(1, 2).then(function(result) {
                  eq(result, [[1], undefined]);
                  done();
                })['catch'](done);
              })['catch'](done);
            })['catch'](done);
          })['catch'](done);
        });
        it('throws if given no arguments', function() {
          assert.throws(function() {
            R.composeP();
          }, function(err) {
            return err.constructor === Error && err.message === 'composeP requires at least one argument';
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2,
      "q": 37
    }],
    104: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('concat', function() {
        it('adds combines the elements of the two lists', function() {
          eq(R.concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd']);
          eq(R.concat([], ['c', 'd']), ['c', 'd']);
        });
        var z1 = {
          x: 'z1',
          concat: function(that) {
            return this.x + ' ' + that.x;
          }
        };
        var z2 = {x: 'z2'};
        it('adds combines the elements of the two lists', function() {
          eq(R.concat(['a', 'b'], ['c', 'd']), ['a', 'b', 'c', 'd']);
          eq(R.concat([], ['c', 'd']), ['c', 'd']);
        });
        it('works on strings', function() {
          eq(R.concat('foo', 'bar'), 'foobar');
          eq(R.concat('x', ''), 'x');
          eq(R.concat('', 'x'), 'x');
          eq(R.concat('', ''), '');
        });
        it('delegates to non-String object with a concat method, as second param', function() {
          eq(R.concat(z1, z2), 'z1 z2');
        });
        it('is curried', function() {
          var conc123 = R.concat([1, 2, 3]);
          eq(conc123([4, 5, 6]), [1, 2, 3, 4, 5, 6]);
          eq(conc123(['a', 'b', 'c']), [1, 2, 3, 'a', 'b', 'c']);
        });
        it('is curried like a binary operator, that accepts an initial placeholder', function() {
          var appendBar = R.concat(R.__, 'bar');
          eq(typeof appendBar, 'function');
          eq(appendBar('foo'), 'foobar');
        });
        it('throws if attempting to combine an array with a non-array', function() {
          assert.throws(function() {
            return R.concat([1], 2);
          }, TypeError);
        });
        it('throws if not an array, String, or object with a concat method', function() {
          assert.throws(function() {
            return R.concat({}, {});
          }, TypeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    105: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('cond', function() {
        it('returns a function', function() {
          eq(typeof R.cond([]), 'function');
        });
        it('returns a conditional function', function() {
          var fn = R.cond([[R.equals(0), R.always('water freezes at 0°C')], [R.equals(100), R.always('water boils at 100°C')], [R.T, function(temp) {
            return 'nothing special happens at ' + temp + '°C';
          }]]);
          eq(fn(0), 'water freezes at 0°C');
          eq(fn(50), 'nothing special happens at 50°C');
          eq(fn(100), 'water boils at 100°C');
        });
        it('returns a function which returns undefined if none of the predicates matches', function() {
          var fn = R.cond([[R.equals('foo'), R.always(1)], [R.equals('bar'), R.always(2)]]);
          eq(fn('quux'), undefined);
        });
        it('predicates are tested in order', function() {
          var fn = R.cond([[R.T, R.always('foo')], [R.T, R.always('bar')], [R.T, R.always('baz')]]);
          eq(fn(), 'foo');
        });
        it('forwards all arguments to predicates and to transformers', function() {
          var fn = R.cond([[function(_, x) {
            return x === 42;
          }, function() {
            return arguments.length;
          }]]);
          eq(fn(21, 42, 84), 3);
        });
        it('retains highest predicate arity', function() {
          var fn = R.cond([[R.nAry(2, R.T), R.T], [R.nAry(3, R.T), R.T], [R.nAry(1, R.T), R.T]]);
          eq(fn.length, 3);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    106: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('construct', function() {
        var Rectangle = function(w, h) {
          this.width = w;
          this.height = h;
        };
        Rectangle.prototype.area = function() {
          return this.width * this.height;
        };
        it('turns a constructor function into one that can be called without `new`', function() {
          var rect = R.construct(Rectangle);
          var r1 = rect(3, 4);
          eq(r1.constructor, Rectangle);
          eq(r1.width, 3);
          eq(r1.area(), 12);
          var regex = R.construct(RegExp);
          var word = regex('word', 'gi');
          eq(word.constructor, RegExp);
          eq(word.source, 'word');
          eq(word.global, true);
        });
        it('can be used to create Date object', function() {
          var date = R.construct(Date)(1984, 3, 26, 0, 0, 0, 0);
          eq(date.constructor, Date);
          eq(date.getFullYear(), 1984);
        });
        it('supports constructors with no arguments', function() {
          function Foo() {}
          var foo = R.construct(Foo)();
          eq(foo.constructor, Foo);
        });
        it('does not support constructor with greater than ten arguments', function() {
          assert.throws(function() {
            function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
              this.eleventh = $10;
            }
            R.construct(Foo);
          }, function(err) {
            return (err instanceof Error && err.message === 'Constructor with greater than ten arguments');
          });
        });
        it('returns a curried function', function() {
          var rect = R.construct(Rectangle);
          var rect3 = rect(3);
          var r1 = rect3(4);
          eq(r1.constructor, Rectangle);
          eq(r1.width, 3);
          eq(r1.height, 4);
          eq(r1.area(), 12);
          var regex = R.construct(RegExp);
          var word = regex('word');
          var complete = word('gi');
          eq(complete.constructor, RegExp);
          eq(complete.source, 'word');
          eq(complete.global, true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    107: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('constructN', function() {
        var Circle = function(r) {
          this.r = r;
          this.colors = Array.prototype.slice.call(arguments, 1);
        };
        Circle.prototype.area = function() {
          return Math.PI * Math.pow(this.r, 2);
        };
        it('turns a constructor function into a function with n arguments', function() {
          var circle = R.constructN(2, Circle);
          var c1 = circle(1, 'red');
          eq(c1.constructor, Circle);
          eq(c1.r, 1);
          eq(c1.area(), Math.PI);
          eq(c1.colors, ['red']);
          var regex = R.constructN(1, RegExp);
          var pattern = regex('[a-z]');
          eq(pattern.constructor, RegExp);
          eq(pattern.source, '[a-z]');
        });
        it('can be used to create Date object', function() {
          var date = R.constructN(3, Date)(1984, 3, 26);
          eq(date.constructor, Date);
          eq(date.getFullYear(), 1984);
        });
        it('supports constructors with no arguments', function() {
          function Foo() {}
          var foo = R.constructN(0, Foo)();
          eq(foo.constructor, Foo);
        });
        it('does not support constructor with greater than ten arguments', function() {
          assert.throws(function() {
            function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
              this.eleventh = $10;
            }
            R.constructN(11, Foo);
          }, function(err) {
            return (err instanceof Error && err.message === 'Constructor with greater than ten arguments');
          });
        });
        it('is curried', function() {
          function G(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
          }
          var construct2 = R.constructN(2);
          eq(typeof construct2, 'function');
          var g2 = construct2(G);
          eq(typeof g2, 'function');
          eq(g2('a', 'b').constructor, G);
          eq(g2('a')('b').constructor, G);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    108: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('contains', function() {
        it('returns true if an element is in a list', function() {
          eq(R.contains(7, [1, 2, 3, 9, 8, 7, 100, 200, 300]), true);
        });
        it('returns false if an element is not in a list', function() {
          eq(R.contains(99, [1, 2, 3, 9, 8, 7, 100, 200, 300]), false);
        });
        it('returns false for the empty list', function() {
          eq(R.contains(1, []), false);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.contains(0, [-0]), false);
          eq(R.contains(-0, [0]), false);
          eq(R.contains(NaN, [NaN]), true);
          eq(R.contains(new Just([42]), [new Just([42])]), true);
        });
        it('is curried', function() {
          eq(typeof R.contains(7), 'function');
          eq(R.contains(7)([1, 2, 3]), false);
          eq(R.contains(7)([1, 2, 7, 3]), true);
        });
        it('is curried like a binary operator, that accepts an initial placeholder', function() {
          var isDigit = R.contains(R.__, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
          eq(typeof isDigit, 'function');
          eq(isDigit('0'), true);
          eq(isDigit('1'), true);
          eq(isDigit('x'), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    109: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('converge', function() {
        var mult = function(a, b) {
          return a * b;
        };
        var f1 = R.converge(mult, [function(a) {
          return a;
        }, function(a) {
          return a;
        }]);
        var f2 = R.converge(mult, [function(a) {
          return a;
        }, function(a, b) {
          return b;
        }]);
        var f3 = R.converge(mult, [function(a) {
          return a;
        }, function(a, b, c) {
          return c;
        }]);
        it('passes the results of applying the arguments individually to two separate functions into a single one', function() {
          eq(R.converge(mult, [R.add(1), R.add(3)])(2), 15);
        });
        it('returns a function with the length of the "longest" argument', function() {
          eq(f1.length, 1);
          eq(f2.length, 2);
          eq(f3.length, 3);
        });
        it('passes context to its functions', function() {
          var a = function(x) {
            return this.f1(x);
          };
          var b = function(x) {
            return this.f2(x);
          };
          var c = function(x, y) {
            return this.f3(x, y);
          };
          var d = R.converge(c, [a, b]);
          var context = {
            f1: R.add(1),
            f2: R.add(2),
            f3: R.add
          };
          eq(a.call(context, 1), 2);
          eq(b.call(context, 1), 3);
          eq(d.call(context, 1), 5);
        });
        it('returns a curried function', function() {
          eq(f2(6)(7), 42);
          eq(f3(R.__).length, 3);
        });
        it('works with empty functions list', function() {
          var fn = R.converge(function() {
            return arguments.length;
          }, []);
          eq(fn.length, 0);
          eq(fn(), 0);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    110: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var albums = [{
        title: 'Art of the Fugue',
        artist: 'Glenn Gould',
        genre: 'Baroque'
      }, {
        title: 'A Farewell to Kings',
        artist: 'Rush',
        genre: 'Rock'
      }, {
        title: 'Timeout',
        artist: 'Dave Brubeck Quartet',
        genre: 'Jazz'
      }, {
        title: 'Fly By Night',
        artist: 'Rush',
        genre: 'Rock'
      }, {
        title: 'Goldberg Variations',
        artist: 'Daniel Barenboim',
        genre: 'Baroque'
      }, {
        title: 'New World Symphony',
        artist: 'Leonard Bernstein',
        genre: 'Romantic'
      }, {
        title: 'Romance with the Unseen',
        artist: 'Don Byron',
        genre: 'Jazz'
      }, {
        title: 'Somewhere In Time',
        artist: 'Iron Maiden',
        genre: 'Metal'
      }, {
        title: 'In Times of Desparation',
        artist: 'Danny Holt',
        genre: 'Modern'
      }, {
        title: 'Evita',
        artist: 'Various',
        genre: 'Broadway'
      }, {
        title: 'Five Leaves Left',
        artist: 'Nick Drake',
        genre: 'Folk'
      }, {
        title: 'The Magic Flute',
        artist: 'John Eliot Gardiner',
        genre: 'Classical'
      }];
      var derivedGenre = (function() {
        var remap = {
          Baroque: 'Classical',
          Modern: 'Classical',
          Romantic: 'Classical',
          Metal: 'Rock'
        };
        return function(album) {
          var genre = R.prop('genre', album);
          return remap[genre] || genre;
        };
      }());
      describe('countBy', function() {
        it('counts by a simple property of the objects', function() {
          eq(R.countBy(R.prop('genre'), albums), {
            Baroque: 2,
            Rock: 2,
            Jazz: 2,
            Romantic: 1,
            Metal: 1,
            Modern: 1,
            Broadway: 1,
            Folk: 1,
            Classical: 1
          });
        });
        it('counts by a more complex function on the objects', function() {
          eq(R.countBy(derivedGenre, albums), {
            Classical: 5,
            Rock: 3,
            Jazz: 2,
            Broadway: 1,
            Folk: 1
          });
        });
        it('is curried', function() {
          var counter = R.countBy(R.prop('genre'));
          eq(counter(albums), {
            Baroque: 2,
            Rock: 2,
            Jazz: 2,
            Romantic: 1,
            Metal: 1,
            Modern: 1,
            Broadway: 1,
            Folk: 1,
            Classical: 1
          });
        });
        it('ignores inherited properties', function() {
          var result = R.countBy(R.identity, ['abc', 'toString']);
          eq(result.abc, 1);
          eq(result.toString, 1);
        });
        it('can act as a transducer', function() {
          var transducer = R.compose(R.countBy(R.prop('genre')), R.map(R.adjust(R.toString, 1)));
          eq(R.into({}, transducer, albums), {
            Baroque: '2',
            Rock: '2',
            Jazz: '2',
            Romantic: '1',
            Metal: '1',
            Modern: '1',
            Broadway: '1',
            Folk: '1',
            Classical: '1'
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    111: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('curry', function() {
        it('curries a single value', function() {
          var f = R.curry(function(a, b, c, d) {
            return (a + b * c) / d;
          });
          var g = f(12);
          eq(g(3, 6, 2), 15);
        });
        it('curries multiple values', function() {
          var f = R.curry(function(a, b, c, d) {
            return (a + b * c) / d;
          });
          var g = f(12, 3);
          eq(g(6, 2), 15);
          var h = f(12, 3, 6);
          eq(h(2), 15);
        });
        it('allows further currying of a curried function', function() {
          var f = R.curry(function(a, b, c, d) {
            return (a + b * c) / d;
          });
          var g = f(12);
          eq(g(3, 6, 2), 15);
          var h = g(3);
          eq(h(6, 2), 15);
          eq(g(3, 6)(2), 15);
        });
        it('properly reports the length of the curried function', function() {
          var f = R.curry(function(a, b, c, d) {
            return (a + b * c) / d;
          });
          eq(f.length, 4);
          var g = f(12);
          eq(g.length, 3);
          var h = g(3);
          eq(h.length, 2);
          eq(g(3, 6).length, 1);
        });
        it('preserves context', function() {
          var ctx = {x: 10};
          var f = function(a, b) {
            return a + b * this.x;
          };
          var g = R.curry(f);
          eq(g.call(ctx, 2, 4), 42);
          eq(g.call(ctx, 2).call(ctx, 4), 42);
        });
        it('supports R.__ placeholder', function() {
          var f = function(a, b, c) {
            return [a, b, c];
          };
          var g = R.curry(f);
          var _ = R.__;
          eq(g(1)(2)(3), [1, 2, 3]);
          eq(g(1)(2, 3), [1, 2, 3]);
          eq(g(1, 2)(3), [1, 2, 3]);
          eq(g(1, 2, 3), [1, 2, 3]);
          eq(g(_, 2, 3)(1), [1, 2, 3]);
          eq(g(1, _, 3)(2), [1, 2, 3]);
          eq(g(1, 2, _)(3), [1, 2, 3]);
          eq(g(1, _, _)(2)(3), [1, 2, 3]);
          eq(g(_, 2, _)(1)(3), [1, 2, 3]);
          eq(g(_, _, 3)(1)(2), [1, 2, 3]);
          eq(g(1, _, _)(2, 3), [1, 2, 3]);
          eq(g(_, 2, _)(1, 3), [1, 2, 3]);
          eq(g(_, _, 3)(1, 2), [1, 2, 3]);
          eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
          eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
          eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
          eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
          eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
        });
        it('supports @@functional/placeholder', function() {
          var f = function(a, b, c) {
            return [a, b, c];
          };
          var g = R.curry(f);
          var _ = {
            '@@functional/placeholder': true,
            x: Math.random()
          };
          eq(g(1)(2)(3), [1, 2, 3]);
          eq(g(1)(2, 3), [1, 2, 3]);
          eq(g(1, 2)(3), [1, 2, 3]);
          eq(g(1, 2, 3), [1, 2, 3]);
          eq(g(_, 2, 3)(1), [1, 2, 3]);
          eq(g(1, _, 3)(2), [1, 2, 3]);
          eq(g(1, 2, _)(3), [1, 2, 3]);
          eq(g(1, _, _)(2)(3), [1, 2, 3]);
          eq(g(_, 2, _)(1)(3), [1, 2, 3]);
          eq(g(_, _, 3)(1)(2), [1, 2, 3]);
          eq(g(1, _, _)(2, 3), [1, 2, 3]);
          eq(g(_, 2, _)(1, 3), [1, 2, 3]);
          eq(g(_, _, 3)(1, 2), [1, 2, 3]);
          eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
          eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
          eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
          eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
          eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
        });
        it('forwards extra arguments', function() {
          var f = function(a, b, c) {
            void c;
            return Array.prototype.slice.call(arguments);
          };
          var g = R.curry(f);
          eq(g(1, 2, 3), [1, 2, 3]);
          eq(g(1, 2, 3, 4), [1, 2, 3, 4]);
          eq(g(1, 2)(3, 4), [1, 2, 3, 4]);
          eq(g(1)(2, 3, 4), [1, 2, 3, 4]);
          eq(g(1)(2)(3, 4), [1, 2, 3, 4]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    112: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('curryN', function() {
        function source(a, b, c, d) {
          void d;
          return a * b * c;
        }
        it('accepts an arity', function() {
          var curried = R.curryN(3, source);
          eq(curried(1)(2)(3), 6);
          eq(curried(1, 2)(3), 6);
          eq(curried(1)(2, 3), 6);
          eq(curried(1, 2, 3), 6);
        });
        it('can be partially applied', function() {
          var curry3 = R.curryN(3);
          var curried = curry3(source);
          eq(curried.length, 3);
          eq(curried(1)(2)(3), 6);
          eq(curried(1, 2)(3), 6);
          eq(curried(1)(2, 3), 6);
          eq(curried(1, 2, 3), 6);
        });
        it('preserves context', function() {
          var ctx = {x: 10};
          var f = function(a, b) {
            return a + b * this.x;
          };
          var g = R.curryN(2, f);
          eq(g.call(ctx, 2, 4), 42);
          eq(g.call(ctx, 2).call(ctx, 4), 42);
        });
        it('supports R.__ placeholder', function() {
          var f = function() {
            return Array.prototype.slice.call(arguments);
          };
          var g = R.curryN(3, f);
          var _ = R.__;
          eq(g(1)(2)(3), [1, 2, 3]);
          eq(g(1)(2, 3), [1, 2, 3]);
          eq(g(1, 2)(3), [1, 2, 3]);
          eq(g(1, 2, 3), [1, 2, 3]);
          eq(g(_, 2, 3)(1), [1, 2, 3]);
          eq(g(1, _, 3)(2), [1, 2, 3]);
          eq(g(1, 2, _)(3), [1, 2, 3]);
          eq(g(1, _, _)(2)(3), [1, 2, 3]);
          eq(g(_, 2, _)(1)(3), [1, 2, 3]);
          eq(g(_, _, 3)(1)(2), [1, 2, 3]);
          eq(g(1, _, _)(2, 3), [1, 2, 3]);
          eq(g(_, 2, _)(1, 3), [1, 2, 3]);
          eq(g(_, _, 3)(1, 2), [1, 2, 3]);
          eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
          eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
          eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
          eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
          eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
        });
        it('supports @@functional/placeholder', function() {
          var f = function() {
            return Array.prototype.slice.call(arguments);
          };
          var g = R.curryN(3, f);
          var _ = {
            '@@functional/placeholder': true,
            x: Math.random()
          };
          eq(g(1)(2)(3), [1, 2, 3]);
          eq(g(1)(2, 3), [1, 2, 3]);
          eq(g(1, 2)(3), [1, 2, 3]);
          eq(g(1, 2, 3), [1, 2, 3]);
          eq(g(_, 2, 3)(1), [1, 2, 3]);
          eq(g(1, _, 3)(2), [1, 2, 3]);
          eq(g(1, 2, _)(3), [1, 2, 3]);
          eq(g(1, _, _)(2)(3), [1, 2, 3]);
          eq(g(_, 2, _)(1)(3), [1, 2, 3]);
          eq(g(_, _, 3)(1)(2), [1, 2, 3]);
          eq(g(1, _, _)(2, 3), [1, 2, 3]);
          eq(g(_, 2, _)(1, 3), [1, 2, 3]);
          eq(g(_, _, 3)(1, 2), [1, 2, 3]);
          eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
          eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
          eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
          eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
          eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
        });
        it('forwards extra arguments', function() {
          var f = function() {
            return Array.prototype.slice.call(arguments);
          };
          var g = R.curryN(3, f);
          eq(g(1, 2, 3), [1, 2, 3]);
          eq(g(1, 2, 3, 4), [1, 2, 3, 4]);
          eq(g(1, 2)(3, 4), [1, 2, 3, 4]);
          eq(g(1)(2, 3, 4), [1, 2, 3, 4]);
          eq(g(1)(2)(3, 4), [1, 2, 3, 4]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    113: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dec', function() {
        it('decrements its argument', function() {
          eq(R.dec(-1), -2);
          eq(R.dec(0), -1);
          eq(R.dec(1), 0);
          eq(R.dec(12.34), 11.34);
          eq(R.dec(-Infinity), -Infinity);
          eq(R.dec(Infinity), Infinity);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    114: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('defaultTo', function() {
        var defaultTo42 = R.defaultTo(42);
        it('returns the default value if input is null, undefined or NaN', function() {
          eq(42, defaultTo42(null));
          eq(42, defaultTo42(undefined));
          eq(42, defaultTo42(NaN));
        });
        it('returns the input value if it is not null/undefined', function() {
          eq('a real value', defaultTo42('a real value'));
        });
        it('returns the input value even if it is considered falsy', function() {
          eq('', defaultTo42(''));
          eq(0, defaultTo42(0));
          eq(false, defaultTo42(false));
          eq([], defaultTo42([]));
        });
        it('can be called with both arguments directly', function() {
          eq(42, R.defaultTo(42, null));
          eq('a real value', R.defaultTo(42, 'a real value'));
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    115: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('difference', function() {
        var M = [1, 2, 3, 4];
        var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
        var N = [3, 4, 5, 6];
        var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
        var Z = [3, 4, 5, 6, 10];
        var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
        it('finds the set of all elements in the first list not contained in the second', function() {
          eq(R.difference(M, N), [1, 2]);
        });
        it('does not allow duplicates in the output even if the input lists had duplicates', function() {
          eq(R.difference(M2, N2), [1, 2]);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.difference([0], [-0]).length, 1);
          eq(R.difference([-0], [0]).length, 1);
          eq(R.difference([NaN], [NaN]).length, 0);
          eq(R.difference([new Just([42])], [new Just([42])]).length, 0);
        });
        it('works for arrays of different lengths', function() {
          eq(R.difference(Z, Z2), [10]);
          eq(R.difference(Z2, Z), [1, 2, 7, 8]);
        });
        it('will not create a "sparse" array', function() {
          eq(R.difference(M2, [3]).length, 3);
        });
        it('returns an empty array if there are no different elements', function() {
          eq(R.difference(M2, M), []);
          eq(R.difference(M, M2), []);
          eq(R.difference([], M2), []);
        });
        it('is curried', function() {
          eq(typeof R.difference([1, 2, 3]), 'function');
          eq(R.difference([1, 2, 3])([1, 3]), [2]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    116: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('differenceWith', function() {
        var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
        var Ro2 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 1}, {a: 2}, {a: 3}, {a: 4}];
        var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
        var So2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}, {a: 3}, {a: 4}, {a: 5}, {a: 6}];
        var eqA = function(r, s) {
          return r.a === s.a;
        };
        var identical = function(a, b) {
          return a === b;
        };
        it('combines two lists into the set of all their elements based on the passed-in equality predicate', function() {
          eq(R.differenceWith(eqA, Ro, So), [{a: 1}, {a: 2}]);
        });
        it('does not allow duplicates in the output even if the input lists had duplicates', function() {
          eq(R.differenceWith(eqA, Ro2, So2), [{a: 1}, {a: 2}]);
        });
        it('does not return a "sparse" array', function() {
          eq(R.differenceWith(identical, [1, 3, 2, 1, 3, 1, 2, 3], [3]).length, 2);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    117: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dissoc', function() {
        it('copies an object omitting the specified property', function() {
          eq(R.dissoc('b', {
            a: 1,
            b: 2,
            c: 3
          }), {
            a: 1,
            c: 3
          });
          eq(R.dissoc('d', {
            a: 1,
            b: 2,
            c: 3
          }), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('includes prototype properties', function() {
          function Rectangle(width, height) {
            this.width = width;
            this.height = height;
          }
          var area = Rectangle.prototype.area = function() {
            return this.width * this.height;
          };
          var rect = new Rectangle(7, 6);
          eq(R.dissoc('area', rect), {
            width: 7,
            height: 6
          });
          eq(R.dissoc('width', rect), {
            height: 6,
            area: area
          });
          eq(R.dissoc('depth', rect), {
            width: 7,
            height: 6,
            area: area
          });
        });
        it('coerces non-string types', function() {
          eq(R.dissoc(42, {
            a: 1,
            b: 2,
            42: 3
          }), {
            a: 1,
            b: 2
          });
          eq(R.dissoc(null, {
            a: 1,
            b: 2,
            'null': 3
          }), {
            a: 1,
            b: 2
          });
          eq(R.dissoc(undefined, {
            a: 1,
            b: 2,
            undefined: 3
          }), {
            a: 1,
            b: 2
          });
        });
        it('is curried', function() {
          eq(R.dissoc('b')({
            a: 1,
            b: 2,
            c: 3
          }), {
            a: 1,
            c: 3
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    118: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dissocPath', function() {
        it('makes a shallow clone of an object, omitting only what is necessary for the path', function() {
          var obj1 = {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                i: 5,
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          };
          var obj2 = R.dissocPath(['f', 'g', 'i'], obj1);
          eq(obj2, {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          });
          assert.strictEqual(obj2.a, obj1.a);
          assert.strictEqual(obj2.m, obj1.m);
          assert.strictEqual(obj2.f.g.h, obj1.f.g.h);
          assert.strictEqual(obj2.f.g.j, obj1.f.g.j);
        });
        it('does not try to omit inner properties that do not exist', function() {
          var obj1 = {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5
          };
          var obj2 = R.dissocPath(['x', 'y', 'z'], obj1);
          eq(obj2, {
            a: 1,
            b: {
              c: 2,
              d: 3
            },
            e: 4,
            f: 5
          });
          assert.strictEqual(obj2.a, obj1.a);
          assert.strictEqual(obj2.b, obj1.b);
          assert.strictEqual(obj2.f, obj1.f);
        });
        it('leaves an empty object when all properties omitted', function() {
          var obj1 = {
            a: 1,
            b: {c: 2},
            d: 3
          };
          var obj2 = R.dissocPath(['b', 'c'], obj1);
          eq(obj2, {
            a: 1,
            b: {},
            d: 3
          });
        });
        it('flattens properties from prototype', function() {
          var F = function() {};
          F.prototype.a = 1;
          var obj1 = new F();
          obj1.b = {
            c: 2,
            d: 3
          };
          var obj2 = R.dissocPath(['b', 'c'], obj1);
          eq(obj2, {
            a: 1,
            b: {d: 3}
          });
        });
        it('is curried', function() {
          var obj1 = {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                i: 5,
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          };
          var expected = {
            a: {
              b: 1,
              c: 2,
              d: {e: 3}
            },
            f: {g: {
                h: 4,
                j: {
                  k: 6,
                  l: 7
                }
              }},
            m: 8
          };
          var f = R.dissocPath(['f', 'g', 'i']);
          eq(f(obj1), expected);
        });
        it('accepts empty path', function() {
          eq(R.dissocPath([], {
            a: 1,
            b: 2
          }), {
            a: 1,
            b: 2
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    119: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('divide', function() {
        it('divides two numbers', function() {
          eq(R.divide(28, 7), 4);
        });
        it('is curried', function() {
          var into28 = R.divide(28);
          eq(into28(7), 4);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var half = R.divide(R.__, 2);
          eq(half(40), 20);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    120: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('drop', function() {
        it('skips the first `n` elements from a list, returning the remainder', function() {
          eq(R.drop(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['d', 'e', 'f', 'g']);
        });
        it('returns an empty array if `n` is too large', function() {
          eq(R.drop(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
        });
        it('returns an equivalent list if `n` is <= 0', function() {
          eq(R.drop(0, [1, 2, 3]), [1, 2, 3]);
          eq(R.drop(-1, [1, 2, 3]), [1, 2, 3]);
          eq(R.drop(-Infinity, [1, 2, 3]), [1, 2, 3]);
        });
        it('never returns the input array', function() {
          var xs = [1, 2, 3];
          assert.notStrictEqual(R.drop(0, xs), xs);
          assert.notStrictEqual(R.drop(-1, xs), xs);
        });
        it('can operate on strings', function() {
          eq(R.drop(3, 'Ramda'), 'da');
          eq(R.drop(4, 'Ramda'), 'a');
          eq(R.drop(5, 'Ramda'), '');
          eq(R.drop(6, 'Ramda'), '');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    121: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dropLast', function() {
        it('skips the last `n` elements from a list, returning the remainder', function() {
          eq(R.dropLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c', 'd']);
        });
        it('returns an empty array if `n` is too large', function() {
          eq(R.dropLast(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
        });
        it('returns an equivalent list if `n` is <= 0', function() {
          eq(R.dropLast(0, [1, 2, 3]), [1, 2, 3]);
          eq(R.dropLast(-1, [1, 2, 3]), [1, 2, 3]);
          eq(R.dropLast(-Infinity, [1, 2, 3]), [1, 2, 3]);
        });
        it('never returns the input array', function() {
          var xs = [1, 2, 3];
          assert.notStrictEqual(R.dropLast(0, xs), xs);
          assert.notStrictEqual(R.dropLast(-1, xs), xs);
        });
        it('can operate on strings', function() {
          eq(R.dropLast(3, 'Ramda'), 'Ra');
        });
        it('is curried', function() {
          var dropLast2 = R.dropLast(2);
          eq(dropLast2(['a', 'b', 'c', 'd', 'e']), ['a', 'b', 'c']);
          eq(dropLast2(['x', 'y', 'z']), ['x']);
        });
        it('can act as a transducer', function() {
          var dropLast2 = R.dropLast(2);
          assert.deepEqual(R.into([], dropLast2, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
          assert.deepEqual(R.into([], dropLast2, [1]), []);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    122: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dropLastWhile', function() {
        it('skips elements while the function reports `true`', function() {
          eq(R.dropLastWhile(function(x) {
            return x >= 5;
          }, [1, 3, 5, 7, 9]), [1, 3]);
        });
        it('returns an empty list for an empty list', function() {
          eq(R.dropLastWhile(function() {
            return false;
          }, []), []);
          eq(R.dropLastWhile(function() {
            return true;
          }, []), []);
        });
        it('starts at the right arg and acknowledges undefined', function() {
          var sublist = R.dropLastWhile(function(x) {
            return x !== void 0;
          }, [1, 3, void 0, 5, 7]);
          eq(sublist.length, 3);
          eq(sublist[0], 1);
          eq(sublist[1], 3);
          eq(sublist[2], void 0);
        });
        it('is curried', function() {
          var dropGt7 = R.dropLastWhile(function(x) {
            return x > 7;
          });
          eq(dropGt7([1, 3, 5, 7, 9]), [1, 3, 5, 7]);
          eq(dropGt7([1, 3, 5]), [1, 3, 5]);
        });
        it('can act as a transducer', function() {
          var dropLt7 = R.dropLastWhile(function(x) {
            return x < 7;
          });
          eq(R.into([], dropLt7, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
          eq(R.into([], dropLt7, [1, 3, 5]), []);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    123: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dropRepeats', function() {
        var objs = [1, 2, 3, 4, 5, 3, 2];
        var objs2 = [1, 2, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2];
        it('removes repeated elements', function() {
          eq(R.dropRepeats(objs2), objs);
          eq(R.dropRepeats(objs), objs);
        });
        it('returns an empty array for an empty array', function() {
          eq(R.dropRepeats([]), []);
        });
        it('can act as a transducer', function() {
          eq(R.into([], R.dropRepeats, objs2), objs);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.dropRepeats([0, -0]).length, 2);
          eq(R.dropRepeats([-0, 0]).length, 2);
          eq(R.dropRepeats([NaN, NaN]).length, 1);
          eq(R.dropRepeats([new Just([42]), new Just([42])]).length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    124: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dropRepeatsWith', function() {
        var objs = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}, {i: 3}];
        var objs2 = [{i: 1}, {i: 1}, {i: 1}, {i: 2}, {i: 3}, {i: 3}, {i: 4}, {i: 4}, {i: 5}, {i: 3}];
        var eqI = R.eqProps('i');
        it('removes repeated elements based on predicate', function() {
          eq(R.dropRepeatsWith(eqI, objs2), objs);
          eq(R.dropRepeatsWith(eqI, objs), objs);
        });
        it('keeps elements from the left', function() {
          eq(R.dropRepeatsWith(eqI, [{
            i: 1,
            n: 1
          }, {
            i: 1,
            n: 2
          }, {
            i: 1,
            n: 3
          }, {
            i: 4,
            n: 1
          }, {
            i: 4,
            n: 2
          }]), [{
            i: 1,
            n: 1
          }, {
            i: 4,
            n: 1
          }]);
        });
        it('returns an empty array for an empty array', function() {
          eq(R.dropRepeatsWith(eqI, []), []);
        });
        it('is curried', function() {
          eq(typeof R.dropRepeatsWith(eqI), 'function');
          eq(R.dropRepeatsWith(eqI)(objs), objs);
          eq(R.dropRepeatsWith(eqI)(objs2), objs);
        });
        it('can act as a transducer', function() {
          eq(R.into([], R.dropRepeatsWith(eqI), objs2), objs);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    125: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('dropWhile', function() {
        it('skips elements while the function reports `true`', function() {
          eq(R.dropWhile(function(x) {
            return x < 5;
          }, [1, 3, 5, 7, 9]), [5, 7, 9]);
        });
        it('returns an empty list for an empty list', function() {
          eq(R.dropWhile(function() {
            return false;
          }, []), []);
          eq(R.dropWhile(function() {
            return true;
          }, []), []);
        });
        it('starts at the right arg and acknowledges undefined', function() {
          var sublist = R.dropWhile(function(x) {
            return x !== void 0;
          }, [1, 3, void 0, 5, 7]);
          eq(sublist.length, 3);
          eq(sublist[0], void 0);
          eq(sublist[1], 5);
          eq(sublist[2], 7);
        });
        it('is curried', function() {
          var dropLt7 = R.dropWhile(function(x) {
            return x < 7;
          });
          eq(dropLt7([1, 3, 5, 7, 9]), [7, 9]);
          eq(dropLt7([2, 4, 6, 8, 10]), [8, 10]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    126: [function(require, module, exports) {
      var S = require('sanctuary');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('either', function() {
        it('combines two boolean-returning functions into one', function() {
          var even = function(x) {
            return x % 2 === 0;
          };
          var gt10 = function(x) {
            return x > 10;
          };
          var f = R.either(even, gt10);
          eq(f(8), true);
          eq(f(13), true);
          eq(f(7), false);
        });
        it('accepts functions that take multiple parameters', function() {
          var between = function(a, b, c) {
            return a < b && b < c;
          };
          var total20 = function(a, b, c) {
            return a + b + c === 20;
          };
          var f = R.either(between, total20);
          eq(f(4, 5, 8), true);
          eq(f(12, 2, 6), true);
          eq(f(7, 5, 1), false);
        });
        it('does not evaluate the second expression if the first one is true', function() {
          var T = function() {
            return true;
          };
          var Z = function() {
            effect = 'Z got evaluated';
          };
          var effect = 'not evaluated';
          R.either(T, Z)();
          eq(effect, 'not evaluated');
        });
        it('is curried', function() {
          var even = function(x) {
            return x % 2 === 0;
          };
          var gt10 = function(x) {
            return x > 10;
          };
          var evenOr = R.either(even);
          eq(typeof evenOr(gt10), 'function');
          eq(evenOr(gt10)(11), true);
          eq(evenOr(gt10)(9), false);
        });
        it('accepts fantasy-land applicative functors', function() {
          var Just = S.Just;
          var Nothing = S.Nothing;
          eq(R.either(Just(true), Just(true)), Just(true));
          eq(R.either(Just(true), Just(false)), Just(true));
          eq(R.either(Just(false), Just(false)), Just(false));
          eq(R.either(Just(true), Nothing()), Nothing());
          eq(R.either(Nothing(), Just(false)), Nothing());
          eq(R.either(Nothing(), Nothing()), Nothing());
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "sanctuary": 41
    }],
    127: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('empty', function() {
        it('dispatches to `empty` method', function() {
          function Nothing() {}
          Nothing.prototype.empty = function() {
            return new Nothing();
          };
          function Just(x) {
            this.value = x;
          }
          Just.prototype.empty = function() {
            return new Nothing();
          };
          eq(R.empty(new Nothing()).constructor, Nothing);
          eq(R.empty(new Just(123)).constructor, Nothing);
        });
        it('dispatches to `empty` function on constructor', function() {
          function Nothing() {}
          Nothing.empty = function() {
            return new Nothing();
          };
          function Just(x) {
            this.value = x;
          }
          Just.empty = function() {
            return new Nothing();
          };
          eq(R.empty(new Nothing()).constructor, Nothing);
          eq(R.empty(new Just(123)).constructor, Nothing);
        });
        it('returns empty array given array', function() {
          eq(R.empty([1, 2, 3]), []);
        });
        it('returns empty object given object', function() {
          eq(R.empty({
            x: 1,
            y: 2
          }), {});
        });
        it('returns empty string given string', function() {
          eq(R.empty('abc'), '');
          eq(R.empty(new String('abc')), '');
        });
        it('returns empty arguments object given arguments object', function() {
          var x = (function() {
            return arguments;
          }(1, 2, 3));
          eq(R.empty(x), (function() {
            return arguments;
          }()));
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    128: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('eqBy', function() {
        it('determines whether two values map to the same value in the codomain', function() {
          eq(R.eqBy(Math.abs, 5, 5), true);
          eq(R.eqBy(Math.abs, 5, -5), true);
          eq(R.eqBy(Math.abs, -5, 5), true);
          eq(R.eqBy(Math.abs, -5, -5), true);
          eq(R.eqBy(Math.abs, 42, 99), false);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.eqBy(R.identity, 0, -0), false);
          eq(R.eqBy(R.identity, -0, 0), false);
          eq(R.eqBy(R.identity, NaN, NaN), true);
          eq(R.eqBy(R.identity, new Just([42]), new Just([42])), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    129: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('eqProps', function() {
        it('reports whether two objects have the same value for a given property', function() {
          eq(R.eqProps('name', {
            name: 'fred',
            age: 10
          }, {
            name: 'fred',
            age: 12
          }), true);
          eq(R.eqProps('name', {
            name: 'fred',
            age: 10
          }, {
            name: 'franny',
            age: 10
          }), false);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.eqProps('value', {value: 0}, {value: -0}), false);
          eq(R.eqProps('value', {value: -0}, {value: 0}), false);
          eq(R.eqProps('value', {value: NaN}, {value: NaN}), true);
          eq(R.eqProps('value', {value: new Just([42])}, {value: new Just([42])}), true);
        });
        it('is curried', function() {
          var sameName = R.eqProps('name');
          eq(sameName({
            name: 'fred',
            age: 10
          }, {
            name: 'fred',
            age: 12
          }), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    130: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('equals', function() {
        var a = [];
        var b = a;
        it('tests for deep equality of its operands', function() {
          eq(R.equals(100, 100), true);
          eq(R.equals(100, '100'), false);
          eq(R.equals([], []), true);
          eq(R.equals(a, b), true);
        });
        it('considers equal Boolean primitives equal', function() {
          eq(R.equals(true, true), true);
          eq(R.equals(false, false), true);
          eq(R.equals(true, false), false);
          eq(R.equals(false, true), false);
        });
        it('considers equivalent Boolean objects equal', function() {
          eq(R.equals(new Boolean(true), new Boolean(true)), true);
          eq(R.equals(new Boolean(false), new Boolean(false)), true);
          eq(R.equals(new Boolean(true), new Boolean(false)), false);
          eq(R.equals(new Boolean(false), new Boolean(true)), false);
        });
        it('never considers Boolean primitive equal to Boolean object', function() {
          eq(R.equals(true, new Boolean(true)), false);
          eq(R.equals(new Boolean(true), true), false);
          eq(R.equals(false, new Boolean(false)), false);
          eq(R.equals(new Boolean(false), false), false);
        });
        it('considers equal number primitives equal', function() {
          eq(R.equals(0, 0), true);
          eq(R.equals(0, 1), false);
          eq(R.equals(1, 0), false);
        });
        it('considers equivalent Number objects equal', function() {
          eq(R.equals(new Number(0), new Number(0)), true);
          eq(R.equals(new Number(0), new Number(1)), false);
          eq(R.equals(new Number(1), new Number(0)), false);
        });
        it('never considers number primitive equal to Number object', function() {
          eq(R.equals(0, new Number(0)), false);
          eq(R.equals(new Number(0), 0), false);
        });
        it('considers equal string primitives equal', function() {
          eq(R.equals('', ''), true);
          eq(R.equals('', 'x'), false);
          eq(R.equals('x', ''), false);
          eq(R.equals('foo', 'foo'), true);
          eq(R.equals('foo', 'bar'), false);
          eq(R.equals('bar', 'foo'), false);
        });
        it('considers equivalent String objects equal', function() {
          eq(R.equals(new String(''), new String('')), true);
          eq(R.equals(new String(''), new String('x')), false);
          eq(R.equals(new String('x'), new String('')), false);
          eq(R.equals(new String('foo'), new String('foo')), true);
          eq(R.equals(new String('foo'), new String('bar')), false);
          eq(R.equals(new String('bar'), new String('foo')), false);
        });
        it('never considers string primitive equal to String object', function() {
          eq(R.equals('', new String('')), false);
          eq(R.equals(new String(''), ''), false);
          eq(R.equals('x', new String('x')), false);
          eq(R.equals(new String('x'), 'x'), false);
        });
        it('handles objects', function() {
          eq(R.equals({}, {}), true);
          eq(R.equals({
            a: 1,
            b: 2
          }, {
            a: 1,
            b: 2
          }), true);
          eq(R.equals({
            a: 2,
            b: 3
          }, {
            b: 3,
            a: 2
          }), true);
          eq(R.equals({
            a: 2,
            b: 3
          }, {
            a: 3,
            b: 3
          }), false);
          eq(R.equals({
            a: 2,
            b: 3,
            c: 1
          }, {
            a: 2,
            b: 3
          }), false);
        });
        it('considers equivalent Arguments objects equal', function() {
          var a = (function() {
            return arguments;
          }());
          var b = (function() {
            return arguments;
          }());
          var c = (function() {
            return arguments;
          }(1, 2, 3));
          var d = (function() {
            return arguments;
          }(1, 2, 3));
          eq(R.equals(a, b), true);
          eq(R.equals(b, a), true);
          eq(R.equals(c, d), true);
          eq(R.equals(d, c), true);
          eq(R.equals(a, c), false);
          eq(R.equals(c, a), false);
        });
        it('considers equivalent Error objects equal', function() {
          eq(R.equals(new Error('XXX'), new Error('XXX')), true);
          eq(R.equals(new Error('XXX'), new Error('YYY')), false);
          eq(R.equals(new Error('XXX'), new TypeError('XXX')), false);
          eq(R.equals(new Error('XXX'), new TypeError('YYY')), false);
        });
        var supportsSticky = false;
        try {
          RegExp('', 'y');
          supportsSticky = true;
        } catch (e) {}
        var supportsUnicode = false;
        try {
          RegExp('', 'u');
          supportsUnicode = true;
        } catch (e) {}
        it('handles regex', function() {
          eq(R.equals(/\s/, /\s/), true);
          eq(R.equals(/\s/, /\d/), false);
          eq(R.equals(/a/gi, /a/ig), true);
          eq(R.equals(/a/mgi, /a/img), true);
          eq(R.equals(/a/gi, /a/i), false);
          if (supportsSticky) {}
          if (supportsUnicode) {}
        });
        var listA = [1, 2, 3];
        var listB = [1, 3, 2];
        it('handles lists', function() {
          eq(R.equals([], {}), false);
          eq(R.equals(listA, listB), false);
        });
        var c = {};
        c.v = c;
        var d = {};
        d.v = d;
        var e = [];
        e.push(e);
        var f = [];
        f.push(f);
        var nestA = {
          a: [1, 2, {c: 1}],
          b: 1
        };
        var nestB = {
          a: [1, 2, {c: 1}],
          b: 1
        };
        var nestC = {
          a: [1, 2, {c: 2}],
          b: 1
        };
        it('handles recursive data structures', function() {
          eq(R.equals(c, d), true);
          eq(R.equals(e, f), true);
          eq(R.equals(nestA, nestB), true);
          eq(R.equals(nestA, nestC), false);
        });
        it('handles dates', function() {
          eq(R.equals(new Date(0), new Date(0)), true);
          eq(R.equals(new Date(1), new Date(1)), true);
          eq(R.equals(new Date(0), new Date(1)), false);
          eq(R.equals(new Date(1), new Date(0)), false);
        });
        it('requires that both objects have the same enumerable properties with the same values', function() {
          var a1 = [];
          var a2 = [];
          a2.x = 0;
          var b1 = new Boolean(false);
          var b2 = new Boolean(false);
          b2.x = 0;
          var d1 = new Date(0);
          var d2 = new Date(0);
          d2.x = 0;
          var n1 = new Number(0);
          var n2 = new Number(0);
          n2.x = 0;
          var r1 = /(?:)/;
          var r2 = /(?:)/;
          r2.x = 0;
          var s1 = new String('');
          var s2 = new String('');
          s2.x = 0;
          eq(R.equals(a1, a2), false);
          eq(R.equals(b1, b2), false);
          eq(R.equals(d1, d2), false);
          eq(R.equals(n1, n2), false);
          eq(R.equals(r1, r2), false);
          eq(R.equals(s1, s2), false);
        });
        if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
          var typArr1 = new ArrayBuffer(10);
          typArr1[0] = 1;
          var typArr2 = new ArrayBuffer(10);
          typArr2[0] = 1;
          var typArr3 = new ArrayBuffer(10);
          var intTypArr = new Int8Array(typArr1);
          typArr3[0] = 0;
          it('handles typed arrays', function() {
            eq(R.equals(typArr1, typArr2), true);
            eq(R.equals(typArr1, typArr3), false);
            eq(R.equals(typArr1, intTypArr), false);
          });
        }
        if (typeof Promise !== 'undefined') {
          it('compares Promise objects by identity', function() {
            var p = Promise.resolve(42);
            var q = Promise.resolve(42);
            eq(R.equals(p, p), true);
            eq(R.equals(p, q), false);
          });
        }
        if (typeof Map !== 'undefined') {
          it('compares Map objects by value', function() {
            eq(R.equals(new Map([]), new Map([])), true);
            eq(R.equals(new Map([]), new Map([[1, 'a']])), false);
            eq(R.equals(new Map([[1, 'a']]), new Map([])), false);
            eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
            eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
            eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
            eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
            eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
            eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);
          });
        }
        if (typeof Set !== 'undefined') {
          it('compares Set objects by value', function() {
            eq(R.equals(new Set([]), new Set([])), true);
            eq(R.equals(new Set([]), new Set([1])), false);
            eq(R.equals(new Set([1]), new Set([])), false);
            eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
            eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
            eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
            eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
          });
        }
        if (typeof WeakMap !== 'undefined') {
          it('compares WeakMap objects by identity', function() {
            var m = new WeakMap([]);
            eq(R.equals(m, m), true);
            eq(R.equals(m, new WeakMap([])), false);
          });
        }
        if (typeof WeakSet !== 'undefined') {
          it('compares WeakSet objects by identity', function() {
            var s = new WeakSet([]);
            eq(R.equals(s, s), true);
            eq(R.equals(s, new WeakSet([])), false);
          });
        }
        it('dispatches to `equals` method recursively', function() {
          function Left(x) {
            this.value = x;
          }
          Left.prototype.equals = function(x) {
            return x instanceof Left && R.equals(x.value, this.value);
          };
          function Right(x) {
            this.value = x;
          }
          Right.prototype.equals = function(x) {
            return x instanceof Right && R.equals(x.value, this.value);
          };
          eq(R.equals(new Left([42]), new Left([42])), true);
          eq(R.equals(new Left([42]), new Left([43])), false);
          eq(R.equals(new Left(42), {value: 42}), false);
          eq(R.equals({value: 42}, new Left(42)), false);
          eq(R.equals(new Left(42), new Right(42)), false);
          eq(R.equals(new Right(42), new Left(42)), false);
          eq(R.equals([new Left(42)], [new Left(42)]), true);
          eq(R.equals([new Left(42)], [new Right(42)]), false);
          eq(R.equals([new Right(42)], [new Left(42)]), false);
          eq(R.equals([new Right(42)], [new Right(42)]), true);
        });
        it('is commutative', function() {
          function Point(x, y) {
            this.x = x;
            this.y = y;
          }
          Point.prototype.equals = function(point) {
            return point instanceof Point && this.x === point.x && this.y === point.y;
          };
          function ColorPoint(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
          }
          ColorPoint.prototype = new Point(0, 0);
          ColorPoint.prototype.equals = function(point) {
            return point instanceof ColorPoint && this.x === point.x && this.y === point.y && this.color === point.color;
          };
          eq(R.equals(new Point(2, 2), new ColorPoint(2, 2, 'red')), false);
          eq(R.equals(new ColorPoint(2, 2, 'red'), new Point(2, 2)), false);
        });
        it('is curried', function() {
          var isA = R.equals(a);
          eq(isA([]), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    131: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('evolve', function() {
        it('creates a new object by evolving the `object` according to the `transformation` functions', function() {
          var transf = {
            elapsed: R.add(1),
            remaining: R.add(-1)
          };
          var object = {
            name: 'Tomato',
            elapsed: 100,
            remaining: 1400
          };
          var expected = {
            name: 'Tomato',
            elapsed: 101,
            remaining: 1399
          };
          eq(R.evolve(transf, object), expected);
        });
        it('does not invoke function if object does not contain the key', function() {
          var transf = {
            n: R.add(1),
            m: R.add(1)
          };
          var object = {m: 3};
          var expected = {m: 4};
          eq(R.evolve(transf, object), expected);
        });
        it('is not destructive', function() {
          var transf = {
            elapsed: R.add(1),
            remaining: R.add(-1)
          };
          var object = {
            name: 'Tomato',
            elapsed: 100,
            remaining: 1400
          };
          var expected = {
            name: 'Tomato',
            elapsed: 100,
            remaining: 1400
          };
          R.evolve(transf, object);
          eq(object, expected);
        });
        it('is recursive', function() {
          var transf = {nested: {
              second: R.add(-1),
              third: R.add(1)
            }};
          var object = {
            first: 1,
            nested: {
              second: 2,
              third: 3
            }
          };
          var expected = {
            first: 1,
            nested: {
              second: 1,
              third: 4
            }
          };
          eq(R.evolve(transf, object), expected);
        });
        it('is curried', function() {
          var tick = R.evolve({
            elapsed: R.add(1),
            remaining: R.add(-1)
          });
          var object = {
            name: 'Tomato',
            elapsed: 100,
            remaining: 1400
          };
          var expected = {
            name: 'Tomato',
            elapsed: 101,
            remaining: 1399
          };
          eq(tick(object), expected);
        });
        it('ignores primitive value transformations', function() {
          var transf = {
            n: 2,
            m: 'foo'
          };
          var object = {
            n: 0,
            m: 1
          };
          var expected = {
            n: 0,
            m: 1
          };
          eq(R.evolve(transf, object), expected);
        });
        it('ignores null transformations', function() {
          var transf = {n: null};
          var object = {n: 0};
          var expected = {n: 0};
          eq(R.evolve(transf, object), expected);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    132: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('filter', function() {
        var even = function(x) {
          return x % 2 === 0;
        };
        it('reduces an array to those matching a filter', function() {
          eq(R.filter(even, [1, 2, 3, 4, 5]), [2, 4]);
        });
        it('returns an empty array if no element matches', function() {
          eq(R.filter(function(x) {
            return x > 100;
          }, [1, 9, 99]), []);
        });
        it('returns an empty array if asked to filter an empty array', function() {
          eq(R.filter(function(x) {
            return x > 100;
          }, []), []);
        });
        it('filters objects', function() {
          var positive = function(x) {
            return x > 0;
          };
          eq(R.filter(positive, {}), {});
          eq(R.filter(positive, {
            x: 0,
            y: 0,
            z: 0
          }), {});
          eq(R.filter(positive, {
            x: 1,
            y: 0,
            z: 0
          }), {x: 1});
          eq(R.filter(positive, {
            x: 1,
            y: 2,
            z: 0
          }), {
            x: 1,
            y: 2
          });
          eq(R.filter(positive, {
            x: 1,
            y: 2,
            z: 3
          }), {
            x: 1,
            y: 2,
            z: 3
          });
        });
        it('dispatches to passed-in non-Array object with a `filter` method', function() {
          var f = {filter: function(f) {
              return f('called f.filter');
            }};
          eq(R.filter(function(s) {
            return s;
          }, f), 'called f.filter');
        });
        it('is curried', function() {
          var onlyEven = R.filter(even);
          eq(onlyEven([1, 2, 3, 4, 5, 6, 7]), [2, 4, 6]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    133: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('find', function() {
        var obj1 = {x: 100};
        var obj2 = {x: 200};
        var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
        var even = function(x) {
          return x % 2 === 0;
        };
        var gt100 = function(x) {
          return x > 100;
        };
        var isStr = function(x) {
          return typeof x === 'string';
        };
        var xGt100 = function(o) {
          return o && o.x > 100;
        };
        var intoArray = R.into([]);
        it('returns the first element that satisfies the predicate', function() {
          eq(R.find(even, a), 10);
          eq(R.find(gt100, a), 200);
          eq(R.find(isStr, a), 'cow');
          eq(R.find(xGt100, a), obj2);
        });
        it('transduces the first element that satisfies the predicate into an array', function() {
          eq(intoArray(R.find(even), a), [10]);
          eq(intoArray(R.find(gt100), a), [200]);
          eq(intoArray(R.find(isStr), a), ['cow']);
          eq(intoArray(R.find(xGt100), a), [obj2]);
        });
        it('returns `undefined` when no element satisfies the predicate', function() {
          eq(R.find(even, ['zing']), undefined);
        });
        it('returns `undefined` in array when no element satisfies the predicate into an array', function() {
          eq(intoArray(R.find(even), ['zing']), [undefined]);
        });
        it('returns `undefined` when given an empty list', function() {
          eq(R.find(even, []), undefined);
        });
        it('returns `undefined` into an array when given an empty list', function() {
          eq(intoArray(R.find(even), []), [undefined]);
        });
        it('is curried', function() {
          eq(typeof R.find(even), 'function');
          eq(R.find(even)(a), 10);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    134: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('findIndex', function() {
        var obj1 = {x: 100};
        var obj2 = {x: 200};
        var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
        var even = function(x) {
          return x % 2 === 0;
        };
        var gt100 = function(x) {
          return x > 100;
        };
        var isStr = function(x) {
          return typeof x === 'string';
        };
        var xGt100 = function(o) {
          return o && o.x > 100;
        };
        var intoArray = R.into([]);
        it('returns the index of the first element that satisfies the predicate', function() {
          eq(R.findIndex(even, a), 1);
          eq(R.findIndex(gt100, a), 8);
          eq(R.findIndex(isStr, a), 3);
          eq(R.findIndex(xGt100, a), 10);
        });
        it('returns the index of the first element that satisfies the predicate into an array', function() {
          eq(intoArray(R.findIndex(even), a), [1]);
          eq(intoArray(R.findIndex(gt100), a), [8]);
          eq(intoArray(R.findIndex(isStr), a), [3]);
          eq(intoArray(R.findIndex(xGt100), a), [10]);
        });
        it('returns -1 when no element satisfies the predicate', function() {
          eq(R.findIndex(even, ['zing']), -1);
          eq(R.findIndex(even, []), -1);
        });
        it('returns -1 in array when no element satisfies the predicate into an array', function() {
          eq(intoArray(R.findIndex(even), ['zing']), [-1]);
        });
        it('is curried', function() {
          eq(typeof R.findIndex(even), 'function');
          eq(R.findIndex(even)(a), 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    135: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('findLast', function() {
        var obj1 = {x: 100};
        var obj2 = {x: 200};
        var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
        var even = function(x) {
          return x % 2 === 0;
        };
        var gt100 = function(x) {
          return x > 100;
        };
        var isStr = function(x) {
          return typeof x === 'string';
        };
        var xGt100 = function(o) {
          return o && o.x > 100;
        };
        var intoArray = R.into([]);
        it('returns the index of the last element that satisfies the predicate', function() {
          eq(R.findLast(even, a), 0);
          eq(R.findLast(gt100, a), 300);
          eq(R.findLast(isStr, a), 'cow');
          eq(R.findLast(xGt100, a), obj2);
        });
        it('returns the index of the last element that satisfies the predicate into an array', function() {
          eq(intoArray(R.findLast(even), a), [0]);
          eq(intoArray(R.findLast(gt100), a), [300]);
          eq(intoArray(R.findLast(isStr), a), ['cow']);
          eq(intoArray(R.findLast(xGt100), a), [obj2]);
        });
        it('returns `undefined` when no element satisfies the predicate', function() {
          eq(R.findLast(even, ['zing']), undefined);
        });
        it('returns `undefined` into an array when no element satisfies the predicate', function() {
          eq(intoArray(R.findLast(even), ['zing']), [undefined]);
        });
        it('works when the first element matches', function() {
          eq(R.findLast(even, [2, 3, 5]), 2);
        });
        it('does not go into an infinite loop on an empty array', function() {
          eq(R.findLast(even, []), undefined);
        });
        it('is curried', function() {
          eq(typeof R.findLast(even), 'function');
          eq(R.findLast(even)(a), 0);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    136: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('findLastIndex', function() {
        var obj1 = {x: 100};
        var obj2 = {x: 200};
        var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
        var even = function(x) {
          return x % 2 === 0;
        };
        var gt100 = function(x) {
          return x > 100;
        };
        var isStr = function(x) {
          return typeof x === 'string';
        };
        var xGt100 = function(o) {
          return o && o.x > 100;
        };
        var intoArray = R.into([]);
        it('returns the index of the last element that satisfies the predicate', function() {
          eq(R.findLastIndex(even, a), 15);
          eq(R.findLastIndex(gt100, a), 9);
          eq(R.findLastIndex(isStr, a), 3);
          eq(R.findLastIndex(xGt100, a), 10);
        });
        it('returns -1 when no element satisfies the predicate', function() {
          eq(R.findLastIndex(even, ['zing']), -1);
        });
        it('returns the index of the last element into an array that satisfies the predicate', function() {
          eq(intoArray(R.findLastIndex(even), a), [15]);
          eq(intoArray(R.findLastIndex(gt100), a), [9]);
          eq(intoArray(R.findLastIndex(isStr), a), [3]);
          eq(intoArray(R.findLastIndex(xGt100), a), [10]);
        });
        it('returns -1 into an array when no element satisfies the predicate', function() {
          eq(intoArray(R.findLastIndex(even), ['zing']), [-1]);
        });
        it('works when the first element matches', function() {
          eq(R.findLastIndex(even, [2, 3, 5]), 0);
        });
        it('does not go into an infinite loop on an empty array', function() {
          eq(R.findLastIndex(even, []), -1);
        });
        it('is curried', function() {
          eq(typeof R.findLastIndex(even), 'function');
          eq(R.findLastIndex(even)(a), 15);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    137: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('flatten', function() {
        it('turns a nested list into one flat list', function() {
          var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
          eq(R.flatten(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
          nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
          eq(R.flatten(nest), [3, 2, 1, 0, -1, -2, -3]);
          eq(R.flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
        });
        it('is not destructive', function() {
          var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
          assert.notStrictEqual(R.flatten(nest), nest);
        });
        it('handles ridiculously large inputs', function() {
          this.timeout(10000);
          eq(R.flatten([new Array(1000000), R.range(0, 56000), 5, 1, 3]).length, 1056003);
        });
        it('handles array-like objects', function() {
          var o = {
            length: 3,
            0: [1, 2, [3]],
            1: [],
            2: ['a', 'b', 'c', ['d', 'e']]
          };
          eq(R.flatten(o), [1, 2, 3, 'a', 'b', 'c', 'd', 'e']);
        });
        it('flattens an array of empty arrays', function() {
          eq(R.flatten([[], [], []]), []);
          eq(R.flatten([]), []);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    138: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('flip', function() {
        it('returns a function which inverts the first two arguments to the supplied function', function() {
          var f = function(a, b, c) {
            return a + ' ' + b + ' ' + c;
          };
          var g = R.flip(f);
          eq(f('a', 'b', 'c'), 'a b c');
          eq(g('a', 'b', 'c'), 'b a c');
        });
        it('returns a curried function', function() {
          var f = function(a, b, c) {
            return a + ' ' + b + ' ' + c;
          };
          var g = R.flip(f)('a');
          eq(g('b', 'c'), 'b a c');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    139: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('forEach', function() {
        var list = [{
          x: 1,
          y: 2
        }, {
          x: 100,
          y: 200
        }, {
          x: 300,
          y: 400
        }, {
          x: 234,
          y: 345
        }];
        it('performs the passed in function on each element of the list', function() {
          var sideEffect = {};
          R.forEach(function(elem) {
            sideEffect[elem.x] = elem.y;
          }, list);
          eq(sideEffect, {
            1: 2,
            100: 200,
            300: 400,
            234: 345
          });
        });
        it('returns the original list', function() {
          var s = '';
          eq(R.forEach(function(obj) {
            s += obj.x;
          }, list), list);
          eq('1100300234', s);
        });
        it('handles empty list', function() {
          eq(R.forEach(function(x) {
            return x * x;
          }, []), []);
        });
        it('dispatches to `forEach` method', function() {
          var dispatched = false;
          var fn = function() {};
          function DummyList() {}
          DummyList.prototype.forEach = function(callback) {
            dispatched = true;
            eq(callback, fn);
          };
          R.forEach(fn, new DummyList());
          eq(dispatched, true);
        });
        it('is curried', function() {
          var xStr = '';
          var xe = R.forEach(function(x) {
            xStr += (x + ' ');
          });
          eq(typeof xe, 'function');
          xe([1, 2, 4]);
          eq(xStr, '1 2 4 ');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    140: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('fromPairs', function() {
        it('combines an array of two-element arrays into an object', function() {
          eq(R.fromPairs([['a', 1], ['b', 2], ['c', 3]]), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('gives later entries precedence over earlier ones', function() {
          eq(R.fromPairs([['x', 1], ['x', 2]]), {x: 2});
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    141: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var _isTransformer = require('../src/internal/_isTransformer');
      describe('groupBy', function() {
        it('splits the list into groups according to the grouping function', function() {
          var grade = function(score) {
            return (score < 65) ? 'F' : (score < 70) ? 'D' : (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
          };
          var students = [{
            name: 'Abby',
            score: 84
          }, {
            name: 'Brad',
            score: 73
          }, {
            name: 'Chris',
            score: 89
          }, {
            name: 'Dianne',
            score: 99
          }, {
            name: 'Eddy',
            score: 58
          }, {
            name: 'Fred',
            score: 67
          }, {
            name: 'Gillian',
            score: 91
          }, {
            name: 'Hannah',
            score: 78
          }, {
            name: 'Irene',
            score: 85
          }, {
            name: 'Jack',
            score: 69
          }];
          var byGrade = function(student) {
            return grade(student.score || 0);
          };
          eq(R.groupBy(byGrade, students), {
            A: [{
              name: 'Dianne',
              score: 99
            }, {
              name: 'Gillian',
              score: 91
            }],
            B: [{
              name: 'Abby',
              score: 84
            }, {
              name: 'Chris',
              score: 89
            }, {
              name: 'Irene',
              score: 85
            }],
            C: [{
              name: 'Brad',
              score: 73
            }, {
              name: 'Hannah',
              score: 78
            }],
            D: [{
              name: 'Fred',
              score: 67
            }, {
              name: 'Jack',
              score: 69
            }],
            F: [{
              name: 'Eddy',
              score: 58
            }]
          });
        });
        it('is curried', function() {
          var splitByType = R.groupBy(R.prop('type'));
          eq(splitByType([{
            type: 'A',
            val: 10
          }, {
            type: 'B',
            val: 20
          }, {
            type: 'A',
            val: 30
          }, {
            type: 'A',
            val: 40
          }, {
            type: 'C',
            val: 50
          }, {
            type: 'B',
            val: 60
          }]), {
            A: [{
              type: 'A',
              val: 10
            }, {
              type: 'A',
              val: 30
            }, {
              type: 'A',
              val: 40
            }],
            B: [{
              type: 'B',
              val: 20
            }, {
              type: 'B',
              val: 60
            }],
            C: [{
              type: 'C',
              val: 50
            }]
          });
        });
        it('returns an empty object if given an empty array', function() {
          eq(R.groupBy(R.prop('x'), []), {});
        });
        it('dispatches on transformer objects in list position', function() {
          var byType = R.prop('type');
          var xf = {
            '@@transducer/init': function() {
              return {};
            },
            '@@transducer/result': function(x) {
              return x;
            },
            '@@transducer/step': R.merge
          };
          eq(_isTransformer(R.groupBy(byType, xf)), true);
        });
      });
    }, {
      "..": 1,
      "../src/internal/_isTransformer": 72,
      "./shared/eq": 254
    }],
    142: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('groupWith', function() {
        it('splits the list into groups according to the grouping function', function() {
          eq(R.groupWith(R.equals, [1, 2, 2, 3]), [[1], [2, 2], [3]]);
          eq(R.groupWith(R.equals, [1, 1, 1, 1]), [[1, 1, 1, 1]]);
          eq(R.groupWith(R.equals, [1, 2, 3, 4]), [[1], [2], [3], [4]]);
        });
        it('returns an empty array if given an empty array', function() {
          eq(R.groupWith(R.equals, []), []);
        });
        it('can be turned into the original list through concatenation', function() {
          var list = [1, 1, 2, 3, 4, 4, 5, 5];
          eq(R.unnest(R.groupWith(R.equals, list)), list);
          eq(R.unnest(R.groupWith(R.complement(R.equals), list)), list);
          eq(R.unnest(R.groupWith(R.T, list)), list);
          eq(R.unnest(R.groupWith(R.F, list)), list);
        });
        it('also works on strings', function() {
          eq(R.groupWith(R.equals)('Mississippi'), ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    143: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('gt', function() {
        it('reports whether one item is less than another', function() {
          eq(R.gt(3, 5), false);
          eq(R.gt(6, 4), true);
          eq(R.gt(7.0, 7.0), false);
          eq(R.gt('abc', 'xyz'), false);
          eq(R.gt('abcd', 'abc'), true);
        });
        it('is curried', function() {
          var lt20 = R.gt(20);
          eq(lt20(10), true);
          eq(lt20(20), false);
          eq(lt20(25), false);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var gt20 = R.gt(R.__, 20);
          eq(gt20(10), false);
          eq(gt20(20), false);
          eq(gt20(25), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    144: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('gte', function() {
        it('reports whether one item is less than another', function() {
          eq(R.gte(3, 5), false);
          eq(R.gte(6, 4), true);
          eq(R.gte(7.0, 7.0), true);
          eq(R.gte('abc', 'xyz'), false);
          eq(R.gte('abcd', 'abc'), true);
        });
        it('is curried', function() {
          var lte20 = R.gte(20);
          eq(lte20(10), true);
          eq(lte20(20), true);
          eq(lte20(25), false);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var gte20 = R.gte(R.__, 20);
          eq(gte20(10), false);
          eq(gte20(20), true);
          eq(gte20(25), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    145: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('has', function() {
        var fred = {
          name: 'Fred',
          age: 23
        };
        var anon = {age: 99};
        it('returns true if the specified property is present', function() {
          eq(R.has('name', fred), true);
        });
        it('returns false if the specified property is absent', function() {
          eq(R.has('name', anon), false);
        });
        it('does not check properties from the prototype chain', function() {
          var Person = function() {};
          Person.prototype.age = function() {};
          var bob = new Person();
          eq(R.has('age', bob), false);
        });
        it('is curried, op-style', function() {
          var hasName = R.has('name');
          eq(hasName(fred), true);
          eq(hasName(anon), false);
          var point = {
            x: 0,
            y: 0
          };
          var pointHas = R.has(R.__, point);
          eq(pointHas('x'), true);
          eq(pointHas('y'), true);
          eq(pointHas('z'), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    146: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('hasIn', function() {
        var fred = {
          name: 'Fred',
          age: 23
        };
        var anon = {age: 99};
        it('returns a function that checks the appropriate property', function() {
          var nm = R.hasIn('name');
          eq(typeof nm, 'function');
          eq(nm(fred), true);
          eq(nm(anon), false);
        });
        it('checks properties from the prototype chain', function() {
          var Person = function() {};
          Person.prototype.age = function() {};
          var bob = new Person();
          eq(R.hasIn('age', bob), true);
        });
        it('works properly when called with two arguments', function() {
          eq(R.hasIn('name', fred), true);
          eq(R.hasIn('name', anon), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    147: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('head', function() {
        it('returns the first element of an ordered collection', function() {
          eq(R.head([1, 2, 3]), 1);
          eq(R.head([2, 3]), 2);
          eq(R.head([3]), 3);
          eq(R.head([]), undefined);
          eq(R.head('abc'), 'a');
          eq(R.head('bc'), 'b');
          eq(R.head('c'), 'c');
          eq(R.head(''), '');
        });
        it('throws if applied to null or undefined', function() {
          assert.throws(function() {
            R.head(null);
          }, TypeError);
          assert.throws(function() {
            R.head(undefined);
          }, TypeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    148: [function(require, module, exports) {
      module.exports = {
        '@@transducer/init': function() {
          return [];
        },
        '@@transducer/step': function(acc, x) {
          return acc.concat([x]);
        },
        '@@transducer/result': function(x) {
          return x;
        }
      };
    }, {}],
    149: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('identical', function() {
        var a = [];
        var b = a;
        it('has Object.is semantics', function() {
          eq(R.identical(100, 100), true);
          eq(R.identical(100, '100'), false);
          eq(R.identical('string', 'string'), true);
          eq(R.identical([], []), false);
          eq(R.identical(a, b), true);
          eq(R.identical(undefined, undefined), true);
          eq(R.identical(null, undefined), false);
          eq(R.identical(-0, 0), false);
          eq(R.identical(0, -0), false);
          eq(R.identical(NaN, NaN), true);
          eq(R.identical(NaN, 42), false);
          eq(R.identical(42, NaN), false);
          eq(R.identical(0, new Number(0)), false);
          eq(R.identical(new Number(0), 0), false);
          eq(R.identical(new Number(0), new Number(0)), false);
        });
        it('is curried', function() {
          var isA = R.identical(a);
          eq(isA([]), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    150: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('identity', function() {
        it('returns its first argument', function() {
          eq(R.identity(undefined), undefined);
          eq(R.identity('foo'), 'foo');
          eq(R.identity('foo', 'bar'), 'foo');
        });
        it('has length 1', function() {
          eq(R.identity.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    151: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('ifElse', function() {
        var t = function(a) {
          return a + 1;
        };
        var identity = function(a) {
          return a;
        };
        var isArray = function(a) {
          return Object.prototype.toString.call(a) === '[object Array]';
        };
        it('calls the truth case function if the validator returns a truthy value', function() {
          var v = function(a) {
            return typeof a === 'number';
          };
          eq(R.ifElse(v, t, identity)(10), 11);
        });
        it('calls the false case function if the validator returns a falsy value', function() {
          var v = function(a) {
            return typeof a === 'number';
          };
          eq(R.ifElse(v, t, identity)('hello'), 'hello');
        });
        it('calls the true case on array items and the false case on non array items', function() {
          var list = [[1, 2, 3, 4, 5], 10, [0, 1], 15];
          var arrayToLength = R.map(R.ifElse(isArray, R.prop('length'), identity));
          eq(arrayToLength(list), [5, 10, 2, 15]);
        });
        it('passes the arguments to the true case function', function() {
          var v = function() {
            return true;
          };
          var onTrue = function(a, b) {
            eq(a, 123);
            eq(b, 'abc');
          };
          R.ifElse(v, onTrue, identity)(123, 'abc');
        });
        it('passes the arguments to the false case function', function() {
          var v = function() {
            return false;
          };
          var onFalse = function(a, b) {
            eq(a, 123);
            eq(b, 'abc');
          };
          R.ifElse(v, identity, onFalse)(123, 'abc');
        });
        it('returns a function whose arity equals the max arity of the three arguments to `ifElse`', function() {
          function a0() {
            return 0;
          }
          function a1(x) {
            return x;
          }
          function a2(x, y) {
            return x + y;
          }
          eq(R.ifElse(a0, a1, a2).length, 2);
          eq(R.ifElse(a0, a2, a1).length, 2);
          eq(R.ifElse(a1, a0, a2).length, 2);
          eq(R.ifElse(a1, a2, a0).length, 2);
          eq(R.ifElse(a2, a0, a1).length, 2);
          eq(R.ifElse(a2, a1, a0).length, 2);
        });
        it('returns a curried function', function() {
          var v = function(a) {
            return typeof a === 'number';
          };
          var ifIsNumber = R.ifElse(v);
          eq(ifIsNumber(t, identity)(15), 16);
          eq(ifIsNumber(t, identity)('hello'), 'hello');
          var fn = R.ifElse(R.gt, R.subtract, R.add);
          eq(fn(2)(7), 9);
          eq(fn(2, 7), 9);
          eq(fn(7)(2), 5);
          eq(fn(7, 2), 5);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    152: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('inc', function() {
        it('increments its argument', function() {
          eq(R.inc(-1), 0);
          eq(R.inc(0), 1);
          eq(R.inc(1), 2);
          eq(R.inc(12.34), 13.34);
          eq(R.inc(-Infinity), -Infinity);
          eq(R.inc(Infinity), Infinity);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    153: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('indexBy', function() {
        it('indexes list by the given property', function() {
          var list = [{
            id: 'xyz',
            title: 'A'
          }, {
            id: 'abc',
            title: 'B'
          }];
          var indexed = R.indexBy(R.prop('id'), list);
          eq(indexed, {
            abc: {
              id: 'abc',
              title: 'B'
            },
            xyz: {
              id: 'xyz',
              title: 'A'
            }
          });
        });
        it('indexes list by the given property upper case', function() {
          var list = [{
            id: 'xyz',
            title: 'A'
          }, {
            id: 'abc',
            title: 'B'
          }];
          var indexed = R.indexBy(R.compose(R.toUpper, R.prop('id')), list);
          eq(indexed, {
            ABC: {
              id: 'abc',
              title: 'B'
            },
            XYZ: {
              id: 'xyz',
              title: 'A'
            }
          });
        });
        it('is curried', function() {
          var list = [{
            id: 'xyz',
            title: 'A'
          }, {
            id: 'abc',
            title: 'B'
          }];
          var indexed = R.indexBy(R.prop('id'))(list);
          eq(indexed, {
            abc: {
              id: 'abc',
              title: 'B'
            },
            xyz: {
              id: 'xyz',
              title: 'A'
            }
          });
        });
        it('can act as a transducer', function() {
          var list = [{
            id: 'xyz',
            title: 'A'
          }, {
            id: 'abc',
            title: 'B'
          }];
          var transducer = R.compose(R.indexBy(R.prop('id')), R.map(R.pipe(R.adjust(R.toUpper, 0), R.adjust(R.omit('id'), 1))));
          var result = R.into({}, transducer, list);
          eq(result, {
            ABC: {title: 'B'},
            XYZ: {title: 'A'}
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    154: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('indexOf', function() {
        it("returns a number indicating an object's position in a list", function() {
          var list = [0, 10, 20, 30];
          eq(R.indexOf(30, list), 3);
        });
        it('returns -1 if the object is not in the list', function() {
          var list = [0, 10, 20, 30];
          eq(R.indexOf(40, list), -1);
        });
        var input = [1, 2, 3, 4, 5];
        it('returns the index of the first item', function() {
          eq(R.indexOf(1, input), 0);
        });
        it('returns the index of the last item', function() {
          eq(R.indexOf(5, input), 4);
        });
        var list = [1, 2, 3];
        list[-2] = 4;
        it('finds 1', function() {
          eq(R.indexOf(1, list), 0);
        });
        it('finds 1 and is result strictly it', function() {
          eq(R.indexOf(1, list), 0);
        });
        it('does not find 4', function() {
          eq(R.indexOf(4, list), -1);
        });
        it('does not consider "1" equal to 1', function() {
          eq(R.indexOf('1', list), -1);
        });
        it('returns -1 for an empty array', function() {
          eq(R.indexOf('x', []), -1);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.indexOf(0, [-0]), -1);
          eq(R.indexOf(-0, [0]), -1);
          eq(R.indexOf(NaN, [NaN]), 0);
          eq(R.indexOf(new Just([42]), [new Just([42])]), 0);
        });
        it('dispatches to `indexOf` method', function() {
          function Empty() {}
          Empty.prototype.indexOf = R.always(-1);
          function List(head, tail) {
            this.head = head;
            this.tail = tail;
          }
          List.prototype.indexOf = function(x) {
            var idx = this.tail.indexOf(x);
            return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1;
          };
          var list = new List('b', new List('a', new List('n', new List('a', new List('n', new List('a', new Empty()))))));
          eq(R.indexOf('a', 'banana'), 1);
          eq(R.indexOf('x', 'banana'), -1);
          eq(R.indexOf('a', list), 1);
          eq(R.indexOf('x', list), -1);
        });
        it('is curried', function() {
          var curried = R.indexOf(3);
          eq(curried(list), 2);
        });
        it('finds function, compared by identity', function() {
          var f = function() {};
          var g = function() {};
          var list = [g, f, g, f];
          eq(R.indexOf(f, list), 1);
        });
        it('does not find function, compared by identity', function() {
          var f = function() {};
          var g = function() {};
          var h = function() {};
          var list = [g, f];
          eq(R.indexOf(h, list), -1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    155: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('init', function() {
        it('returns all but the last element of an ordered collection', function() {
          eq(R.init([1, 2, 3]), [1, 2]);
          eq(R.init([2, 3]), [2]);
          eq(R.init([3]), []);
          eq(R.init([]), []);
          eq(R.init('abc'), 'ab');
          eq(R.init('bc'), 'b');
          eq(R.init('c'), '');
          eq(R.init(''), '');
        });
        it('throws if applied to null or undefined', function() {
          assert.throws(function() {
            R.init(null);
          }, TypeError);
          assert.throws(function() {
            R.init(undefined);
          }, TypeError);
        });
        it('handles array-like object', function() {
          var args = (function() {
            return arguments;
          }(1, 2, 3, 4, 5));
          eq(R.init(args), [1, 2, 3, 4]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    156: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('insert', function() {
        it('inserts an element into the given list', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insert(2, 'x', list), ['a', 'b', 'x', 'c', 'd', 'e']);
        });
        it('inserts another list as an element', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insert(2, ['s', 't'], list), ['a', 'b', ['s', 't'], 'c', 'd', 'e']);
        });
        it('appends to the end of the list if the index is too large', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insert(8, 'z', list), ['a', 'b', 'c', 'd', 'e', 'z']);
        });
        it('is curried', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insert(8)('z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
          eq(R.insert(8, 'z')(list), ['a', 'b', 'c', 'd', 'e', 'z']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    157: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('insertAll', function() {
        it('inserts a list of elements into the given list', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insertAll(2, ['x', 'y', 'z'], list), ['a', 'b', 'x', 'y', 'z', 'c', 'd', 'e']);
        });
        it('appends to the end of the list if the index is too large', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insertAll(8, ['p', 'q', 'r'], list), ['a', 'b', 'c', 'd', 'e', 'p', 'q', 'r']);
        });
        it('is curried', function() {
          var list = ['a', 'b', 'c', 'd', 'e'];
          eq(R.insertAll(8)(['p', 'q', 'r'], list), ['a', 'b', 'c', 'd', 'e', 'p', 'q', 'r']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    158: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('intersection', function() {
        var M = [1, 2, 3, 4];
        var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
        var N = [3, 4, 5, 6];
        var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
        it('combines two lists into the set of common elements', function() {
          eq(R.intersection(M, N), [3, 4]);
        });
        it('does not allow duplicates in the output even if the input lists had duplicates', function() {
          eq(R.intersection(M2, N2), [3, 4]);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.intersection([0], [-0]).length, 0);
          eq(R.intersection([-0], [0]).length, 0);
          eq(R.intersection([NaN], [NaN]).length, 1);
          eq(R.intersection([new Just([42])], [new Just([42])]).length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    159: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('intersectionWith', function() {
        var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
        var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
        var eqA = function(r, s) {
          return r.a === s.a;
        };
        it('combines two lists into the set of all their elements based on the passed-in equality predicate', function() {
          eq(R.intersectionWith(eqA, Ro, So), [{a: 3}, {a: 4}]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    160: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('intersperse', function() {
        it('interposes a separator between list items', function() {
          eq(R.intersperse('n', ['ba', 'a', 'a']), ['ba', 'n', 'a', 'n', 'a']);
          eq(R.intersperse('bar', ['foo']), ['foo']);
          eq(R.intersperse('bar', []), []);
        });
        it('dispatches', function() {
          var obj = {intersperse: function(x) {
              return 'override ' + x;
            }};
          eq(R.intersperse('x', obj), 'override x');
        });
        it('is curried', function() {
          eq(R.intersperse('n')(['ba', 'a', 'a']), ['ba', 'n', 'a', 'n', 'a']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    161: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('into', function() {
        var add = R.add;
        var isOdd = function(b) {
          return b % 2 === 1;
        };
        var addXf = {
          '@@transducer/step': add,
          '@@transducer/init': R.always(0),
          '@@transducer/result': R.identity
        };
        it('transduces into arrays', function() {
          eq(R.into([], R.map(add(1)), [1, 2, 3, 4]), [2, 3, 4, 5]);
          eq(R.into([], R.filter(isOdd), [1, 2, 3, 4]), [1, 3]);
          eq(R.into([], R.compose(R.map(add(1)), R.take(2)), [1, 2, 3, 4]), [2, 3]);
        });
        it('transduces into strings', function() {
          eq(R.into('', R.map(add(1)), [1, 2, 3, 4]), '2345');
          eq(R.into('', R.filter(isOdd), [1, 2, 3, 4]), '13');
          eq(R.into('', R.compose(R.map(add(1)), R.take(2)), [1, 2, 3, 4]), '23');
        });
        it('transduces into objects', function() {
          eq(R.into({}, R.identity, [['a', 1], ['b', 2]]), {
            a: 1,
            b: 2
          });
          eq(R.into({}, R.identity, [{a: 1}, {
            b: 2,
            c: 3
          }]), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('dispatches to objects that implement `reduce`', function() {
          var obj = {
            x: [1, 2, 3],
            reduce: function() {
              return 'override';
            }
          };
          eq(R.into([], R.map(add(1)), obj), 'override');
          eq(R.into([], R.filter(isOdd), obj), 'override');
        });
        it('is curried', function() {
          var intoArray = R.into([]);
          var add2 = R.map(add(2));
          var result = intoArray(add2);
          eq(result([1, 2, 3, 4]), [3, 4, 5, 6]);
        });
        it('allows custom transformer', function() {
          var intoSum = R.into(addXf);
          var add2 = R.map(add(2));
          var result = intoSum(add2);
          eq(result([1, 2, 3, 4]), 18);
        });
        it('correctly reports the arity of curried versions', function() {
          var sum = R.into([], R.map(add));
          eq(sum.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    162: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('invariants', function() {
        it('-- applying function f with length n (where n > 0) to no arguments gives function with length n', function() {
          for (var prop in R) {
            if (typeof R[prop] === 'function' && R[prop].length > 0) {
              var result = R[prop]();
              eq(typeof result, 'function');
              eq(result.length, R[prop].length);
            }
          }
        });
        it('-- applying function f with length n (where n > 0) to R.__ gives function with length n', function() {
          for (var prop in R) {
            if (typeof R[prop] === 'function' && R[prop].length > 0) {
              var result = R[prop](R.__);
              eq(typeof result, 'function');
              eq(result.length, R[prop].length);
            }
          }
        });
        it('-- applying function f with length n (where n > 1) to any value other than R.__ gives function with length n - 1', function() {
          var testPartialApplication = function(fn, name) {
            if (fn.length > 1) {
              var result = fn(null);
              eq(typeof result, 'function');
              eq(result.length, fn.length - 1);
              testPartialApplication(result, name + "'");
            }
          };
          for (var prop in R) {
            if (typeof R[prop] === 'function') {
              testPartialApplication(R[prop], prop);
            }
          }
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    163: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('invert', function() {
        it('takes a list or object and returns an object of lists', function() {
          eq(typeof R.invert([]), 'object');
          eq(typeof R.invert({}), 'object');
          var inverted = R.invert([0]);
          var keys = R.keys(inverted);
          eq(R.is(Array, inverted[keys.pop()]), true);
        });
        it('returns an empty object when applied to a primitive', function() {
          eq(R.invert(42), {});
          eq(R.invert('abc'), {});
        });
        it('returns an empty object when applied to null/undefined', function() {
          eq(R.invert(null), {});
          eq(R.invert(undefined), {});
        });
        it('returns the input\'s values as keys, and keys as values of an array', function() {
          eq(R.invert(['a', 'b', 'c']), {
            a: ['0'],
            b: ['1'],
            c: ['2']
          });
          eq(R.invert({
            x: 'a',
            y: 'b',
            z: 'c'
          }), {
            a: ['x'],
            b: ['y'],
            c: ['z']
          });
        });
        it('puts keys that have the same value into the appropriate an array', function() {
          eq(R.invert(['a', 'b', 'a']), {
            a: ['0', '2'],
            b: ['1']
          });
          var inverted = R.invert({
            x: 'a',
            y: 'b',
            z: 'a',
            _id: 'a'
          });
          eq(R.indexOf('x', inverted.a) >= 0, true);
          eq(R.indexOf('z', inverted.a) >= 0, true);
          eq(R.indexOf('_id', inverted.a) >= 0, true);
          eq(inverted.b, ['y']);
        });
        it('is not destructive', function() {
          var input = {
            x: 'a',
            y: 'b',
            z: 'a',
            _id: 'a'
          };
          R.invert(input);
          eq(input, {
            x: 'a',
            y: 'b',
            z: 'a',
            _id: 'a'
          });
        });
        it('ignores inherited properties', function() {
          eq(R.invert({x: 'hasOwnProperty'}), {hasOwnProperty: ['x']});
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    164: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('invertObj', function() {
        it('takes a list or object and returns an object', function() {
          eq(typeof R.invertObj([]), 'object');
          eq(typeof R.invertObj({}), 'object');
        });
        it('returns an empty object when applied to a primitive', function() {
          eq(R.invertObj(42), {});
          eq(R.invertObj('abc'), {});
        });
        it('returns an empty object when applied to null/undefined', function() {
          eq(R.invertObj(null), {});
          eq(R.invertObj(undefined), {});
        });
        it('returns the input\'s values as keys, and keys as values', function() {
          eq(R.invertObj(['a', 'b', 'c']), {
            a: '0',
            b: '1',
            c: '2'
          });
          eq(R.invertObj({
            x: 'a',
            y: 'b',
            z: 'c'
          }), {
            a: 'x',
            b: 'y',
            c: 'z'
          });
        });
        it('prefers the last key found when handling keys with the same value', function() {
          eq(R.invertObj(['a', 'b', 'a']), {
            a: '2',
            b: '1'
          });
          eq(R.invertObj({
            x: 'a',
            y: 'b',
            z: 'a',
            _id: 'a'
          }), {
            a: '_id',
            b: 'y'
          });
        });
        it('is not destructive', function() {
          var input = {
            x: 'a',
            y: 'b',
            z: 'a',
            _id: 'a'
          };
          R.invertObj(input);
          eq(input, {
            x: 'a',
            y: 'b',
            z: 'a',
            _id: 'a'
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    165: [function(require, module, exports) {
      var assert = require('assert');
      var vm = require('vm');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('invoker', function() {
        var concat2 = R.invoker(2, 'concat');
        it('returns a function with correct arity', function() {
          eq(concat2.length, 3);
        });
        it('calls the method on the object', function() {
          eq(concat2(3, 4, [1, 2]), [1, 2, 3, 4]);
        });
        it('throws a descriptive TypeError if method does not exist', function() {
          assert.throws(function() {
            R.invoker(0, 'foo')(null);
          }, function(err) {
            return err.constructor === TypeError && err.message === 'null does not have a method named "foo"';
          });
          assert.throws(function() {
            R.invoker(0, 'foo')([1, 2, 3]);
          }, function(err) {
            return err.constructor === TypeError && err.message === '[1, 2, 3] does not have a method named "foo"';
          });
          assert.throws(function() {
            R.invoker(0, 'length')([1, 2, 3]);
          }, function(err) {
            return err.constructor === TypeError && err.message === '[1, 2, 3] does not have a method named "length"';
          });
        });
        it('does not rely on constructor identity', function() {
          eq(concat2([2], [3], vm.runInNewContext('[1]')), [1, 2, 3]);
        });
        it('curries the method call', function() {
          eq(concat2(3)(4)([1, 2]), [1, 2, 3, 4]);
          eq(concat2(3, 4)([1, 2]), [1, 2, 3, 4]);
          eq(concat2(3)(4, [1, 2]), [1, 2, 3, 4]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2,
      "vm": 71
    }],
    166: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('is', function() {
        it('works with built-in types', function() {
          eq(R.is(Array, []), true);
          eq(R.is(Boolean, new Boolean(false)), true);
          eq(R.is(Date, new Date()), true);
          eq(R.is(Function, function() {}), true);
          eq(R.is(Number, new Number(0)), true);
          eq(R.is(Object, {}), true);
          eq(R.is(RegExp, /(?:)/), true);
          eq(R.is(String, new String('')), true);
        });
        it('works with user-defined types', function() {
          function Foo() {}
          function Bar() {}
          Bar.prototype = new Foo();
          var foo = new Foo();
          var bar = new Bar();
          eq(R.is(Foo, foo), true);
          eq(R.is(Bar, bar), true);
          eq(R.is(Foo, bar), true);
          eq(R.is(Bar, foo), false);
        });
        it('is curried', function() {
          var isArray = R.is(Array);
          eq(isArray([]), true);
          eq(isArray({}), false);
        });
        it('considers almost everything an object', function() {
          function Foo() {}
          var foo = new Foo();
          var isObject = R.is(Object);
          eq(isObject(foo), true);
          eq(isObject((function() {
            return arguments;
          })()), true);
          eq(isObject([]), true);
          eq(isObject(new Boolean(false)), true);
          eq(isObject(new Date()), true);
          eq(isObject(function() {}), true);
          eq(isObject(new Number(0)), true);
          eq(isObject(/(?:)/), true);
          eq(isObject(new String('')), true);
          eq(isObject(null), false);
          eq(isObject(undefined), false);
        });
        it('does not coerce', function() {
          eq(R.is(Boolean, 1), false);
          eq(R.is(Number, '1'), false);
          eq(R.is(Number, false), false);
        });
        it('recognizes primitives as their object equivalents', function() {
          eq(R.is(Boolean, false), true);
          eq(R.is(Number, 0), true);
          eq(R.is(String, ''), true);
        });
        it('does not consider primitives to be instances of Object', function() {
          eq(R.is(Object, false), false);
          eq(R.is(Object, 0), false);
          eq(R.is(Object, ''), false);
        });
        it('is curried', function() {
          eq(typeof R.is(String), 'function');
          eq(R.is(String)('s'), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    167: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('isArrayLike', function() {
        it('is true for Arrays', function() {
          eq(R.isArrayLike([]), true);
          eq(R.isArrayLike([1, 2, 3, 4]), true);
          eq(R.isArrayLike([null]), true);
        });
        it('is true for arguments', function() {
          function test() {
            return R.isArrayLike(arguments);
          }
          eq(test(), true);
          eq(test(1, 2, 3), true);
          eq(test(null), true);
        });
        it('is false for Strings', function() {
          eq(R.isArrayLike(''), false);
          eq(R.isArrayLike('abcdefg'), false);
        });
        it('is true for arbitrary objects with numeric length, if extreme indices are defined', function() {
          var obj1 = {length: 0};
          var obj2 = {
            0: 'something',
            length: 0
          };
          var obj3 = {
            0: void 0,
            length: 0
          };
          var obj4 = {
            0: 'zero',
            1: 'one',
            length: 2
          };
          var obj5 = {
            0: 'zero',
            length: 2
          };
          var obj6 = {
            1: 'one',
            length: 2
          };
          eq(R.isArrayLike(obj1), true);
          eq(R.isArrayLike(obj2), true);
          eq(R.isArrayLike(obj3), true);
          eq(R.isArrayLike(obj4), true);
          eq(R.isArrayLike(obj5), false);
          eq(R.isArrayLike(obj6), false);
        });
        it('is false for everything else', function() {
          eq(R.isArrayLike(undefined), false);
          eq(R.isArrayLike(1), false);
          eq(R.isArrayLike({}), false);
          eq(R.isArrayLike(false), false);
          eq(R.isArrayLike(function() {}), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    168: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('isEmpty', function() {
        it('returns false for null', function() {
          eq(R.isEmpty(null), false);
        });
        it('returns false for undefined', function() {
          eq(R.isEmpty(undefined), false);
        });
        it('returns true for empty string', function() {
          eq(R.isEmpty(''), true);
          eq(R.isEmpty(' '), false);
        });
        it('returns true for empty array', function() {
          eq(R.isEmpty([]), true);
          eq(R.isEmpty([[]]), false);
        });
        it('returns true for empty object', function() {
          eq(R.isEmpty({}), true);
          eq(R.isEmpty({x: 0}), false);
        });
        it('returns true for empty arguments object', function() {
          eq(R.isEmpty((function() {
            return arguments;
          })()), true);
          eq(R.isEmpty((function() {
            return arguments;
          })(0)), false);
        });
        it('returns false for every other value', function() {
          eq(R.isEmpty(0), false);
          eq(R.isEmpty(NaN), false);
          eq(R.isEmpty(['']), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    169: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('isNil', function() {
        it('tests a value for `null` or `undefined`', function() {
          eq(R.isNil(void 0), true);
          eq(R.isNil(null), true);
          eq(R.isNil([]), false);
          eq(R.isNil({}), false);
          eq(R.isNil(0), false);
          eq(R.isNil(''), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    170: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('join', function() {
        it("concatenates a list's elements to a string, with an separator string between elements", function() {
          var list = [1, 2, 3, 4];
          eq(R.join('~', list), '1~2~3~4');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    171: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('juxt', function() {
        function hello() {
          return 'hello';
        }
        function bye() {
          return 'bye';
        }
        it('works with no functions and no values', function() {
          eq(R.juxt([])(), []);
        });
        it('works with no functions and some values', function() {
          eq(R.juxt([])(2, 3), []);
        });
        it('works with 1 function and no values', function() {
          eq(R.juxt([hello])(), ['hello']);
        });
        it('works with 1 function and 1 value', function() {
          eq(R.juxt([R.add(3)])(2), [5]);
        });
        it('works with 1 function and some values', function() {
          eq(R.juxt([R.multiply])(2, 3), [6]);
        });
        it('works with some functions and no values', function() {
          eq(R.juxt([hello, bye])(), ['hello', 'bye']);
        });
        it('works with some functions and 1 value', function() {
          eq(R.juxt([R.multiply(2), R.add(3)])(2), [4, 5]);
        });
        it('works with some functions and some values', function() {
          eq(R.juxt([R.add, R.multiply])(2, 3), [5, 6]);
        });
        it('retains the highest arity', function() {
          var f = R.juxt([R.nAry(1, R.T), R.nAry(3, R.T), R.nAry(2, R.T)]);
          eq(f.length, 3);
        });
        it('returns a curried function', function() {
          eq(R.juxt([R.multiply, R.add])(2)(3), [6, 5]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    172: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('keys', function() {
        var obj = {
          a: 100,
          b: [1, 2, 3],
          c: {
            x: 200,
            y: 300
          },
          d: 'D',
          e: null,
          f: undefined
        };
        function C() {
          this.a = 100;
          this.b = 200;
        }
        C.prototype.x = function() {
          return 'x';
        };
        C.prototype.y = 'y';
        var cobj = new C();
        it("returns an array of the given object's own keys", function() {
          eq(R.keys(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f']);
        });
        it('works with hasOwnProperty override', function() {
          eq(R.keys({hasOwnProperty: false}), ['hasOwnProperty']);
        });
        it('works for primitives', function() {
          var result = R.map(function(val) {
            return R.keys(val);
          }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
          eq(result, R.repeat([], 10));
        });
        it("does not include the given object's prototype properties", function() {
          eq(R.keys(cobj).sort(), ['a', 'b']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    173: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('keysIn', function() {
        var obj = {
          a: 100,
          b: [1, 2, 3],
          c: {
            x: 200,
            y: 300
          },
          d: 'D',
          e: null,
          f: undefined
        };
        function C() {
          this.a = 100;
          this.b = 200;
        }
        C.prototype.x = function() {
          return 'x';
        };
        C.prototype.y = 'y';
        var cobj = new C();
        it("returns an array of the given object's keys", function() {
          eq(R.keysIn(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f']);
        });
        it("includes the given object's prototype properties", function() {
          eq(R.keysIn(cobj).sort(), ['a', 'b', 'x', 'y']);
        });
        it('works for primitives', function() {
          var result = R.map(function(val) {
            return R.keys(val);
          }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
          eq(result, R.repeat([], 10));
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    174: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('last', function() {
        it('returns the first element of an ordered collection', function() {
          eq(R.last([1, 2, 3]), 3);
          eq(R.last([1, 2]), 2);
          eq(R.last([1]), 1);
          eq(R.last([]), undefined);
          eq(R.last('abc'), 'c');
          eq(R.last('ab'), 'b');
          eq(R.last('a'), 'a');
          eq(R.last(''), '');
        });
        it('throws if applied to null or undefined', function() {
          assert.throws(function() {
            R.last(null);
          }, TypeError);
          assert.throws(function() {
            R.last(undefined);
          }, TypeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    175: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('lastIndexOf', function() {
        it("returns a number indicating an object's last position in a list", function() {
          var list = [0, 10, 20, 30, 0, 10, 20, 30, 0, 10];
          eq(R.lastIndexOf(30, list), 7);
        });
        it('returns -1 if the object is not in the list', function() {
          var list = [0, 10, 20, 30];
          eq(R.lastIndexOf(40, list), -1);
        });
        var input = [1, 2, 3, 4, 5, 1];
        it('returns the last index of the first item', function() {
          eq(R.lastIndexOf(1, input), 5);
        });
        it('returns the index of the last item', function() {
          eq(R.lastIndexOf(5, input), 4);
        });
        var list = ['a', 1, 'a'];
        list[-2] = 'a';
        it('finds a', function() {
          eq(R.lastIndexOf('a', list), 2);
        });
        it('does not find c', function() {
          eq(R.lastIndexOf('c', list), -1);
        });
        it('does not consider "1" equal to 1', function() {
          eq(R.lastIndexOf('1', list), -1);
        });
        it('returns -1 for an empty array', function() {
          eq(R.lastIndexOf('x', []), -1);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.lastIndexOf(0, [-0]), -1);
          eq(R.lastIndexOf(-0, [0]), -1);
          eq(R.lastIndexOf(NaN, [NaN]), 0);
          eq(R.lastIndexOf(new Just([42]), [new Just([42])]), 0);
        });
        it('dispatches to `lastIndexOf` method', function() {
          function Empty() {}
          Empty.prototype.lastIndexOf = R.always(-1);
          function List(head, tail) {
            this.head = head;
            this.tail = tail;
          }
          List.prototype.lastIndexOf = function(x) {
            var idx = this.tail.lastIndexOf(x);
            return idx >= 0 ? 1 + idx : this.head === x ? 0 : -1;
          };
          var list = new List('b', new List('a', new List('n', new List('a', new List('n', new List('a', new Empty()))))));
          eq(R.lastIndexOf('a', 'banana'), 5);
          eq(R.lastIndexOf('x', 'banana'), -1);
          eq(R.lastIndexOf('a', list), 5);
          eq(R.lastIndexOf('x', list), -1);
        });
        it('is curried', function() {
          var curried = R.lastIndexOf('a');
          eq(curried(list), 2);
        });
        it('finds function, compared by identity', function() {
          var f = function() {};
          var g = function() {};
          var list = [g, f, g, f];
          eq(R.lastIndexOf(f, list), 3);
        });
        it('does not find function, compared by identity', function() {
          var f = function() {};
          var g = function() {};
          var h = function() {};
          var list = [g, f];
          eq(R.lastIndexOf(h, list), -1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    176: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('length', function() {
        it('returns the length of a list', function() {
          eq(R.length([]), 0);
          eq(R.length(['a', 'b', 'c', 'd']), 4);
        });
        it('returns the length of a string', function() {
          eq(R.length(''), 0);
          eq(R.length('xyz'), 3);
        });
        it('returns the length of a function', function() {
          eq(R.length(function() {}), 0);
          eq(R.length(function(x, y, z) {
            return z;
          }), 3);
        });
        it('returns the length of an arguments object', function() {
          eq(R.length((function() {
            return arguments;
          })()), 0);
          eq(R.length((function() {
            return arguments;
          })('x', 'y', 'z')), 3);
        });
        it('returns NaN for value of unexpected type', function() {
          eq(R.identical(NaN, R.length(0)), true);
          eq(R.identical(NaN, R.length({})), true);
          eq(R.identical(NaN, R.length(null)), true);
          eq(R.identical(NaN, R.length(undefined)), true);
        });
        it('returns NaN for length property of unexpected type', function() {
          eq(R.identical(NaN, R.length({length: ''})), true);
          eq(R.identical(NaN, R.length({length: '1.23'})), true);
          eq(R.identical(NaN, R.length({length: null})), true);
          eq(R.identical(NaN, R.length({length: undefined})), true);
          eq(R.identical(NaN, R.length({})), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    177: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var testList = [{a: 1}, {b: 2}, {c: 3}];
      describe('lensIndex', function() {
        describe('view', function() {
          it('focuses list element at the specified index', function() {
            eq(R.view(R.lensIndex(0), testList), {a: 1});
          });
          it('returns undefined if the specified index does not exist', function() {
            eq(R.view(R.lensIndex(10), testList), undefined);
          });
        });
        describe('set', function() {
          it('sets the list value at the specified index', function() {
            eq(R.set(R.lensIndex(0), 0, testList), [0, {b: 2}, {c: 3}]);
          });
        });
        describe('over', function() {
          it('applies function to the value at the specified list index', function() {
            eq(R.over(R.lensIndex(2), R.keys, testList), [{a: 1}, {b: 2}, ['c']]);
          });
        });
        describe('composability', function() {
          it('can be composed', function() {
            var nestedList = [0, [10, 11, 12], 1, 2];
            var composedLens = R.compose(R.lensIndex(1), R.lensIndex(0));
            eq(R.view(composedLens, nestedList), 10);
          });
        });
        describe('well behaved lens', function() {
          it('set s (get s) === s', function() {
            eq(R.set(R.lensIndex(0), R.view(R.lensIndex(0), testList), testList), testList);
          });
          it('get (set s v) === v', function() {
            eq(R.view(R.lensIndex(0), R.set(R.lensIndex(0), 0, testList)), 0);
          });
          it('get (set(set s v1) v2) === v2', function() {
            eq(R.view(R.lensIndex(0), R.set(R.lensIndex(0), 11, R.set(R.lensIndex(0), 10, testList))), 11);
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    178: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var testObj = {
        a: {b: 2},
        d: 3
      };
      describe('lensPath', function() {
        describe('view', function() {
          it('focuses the specified object property', function() {
            eq(R.view(R.lensPath(['d']), testObj), 3);
            eq(R.view(R.lensPath(['a', 'b']), testObj), 2);
            eq(R.view(R.lensPath([]), testObj), testObj);
          });
        });
        describe('set', function() {
          it('sets the value of the object property specified', function() {
            eq(R.set(R.lensPath(['d']), 0, testObj), {
              a: {b: 2},
              d: 0
            });
            eq(R.set(R.lensPath(['a', 'b']), 0, testObj), {
              a: {b: 0},
              d: 3
            });
            eq(R.set(R.lensPath([]), 0, testObj), 0);
          });
          it('adds the property to the object if it doesn\'t exist', function() {
            eq(R.set(R.lensPath(['X']), 0, testObj), {
              a: {b: 2},
              d: 3,
              X: 0
            });
            eq(R.set(R.lensPath(['a', 'X']), 0, testObj), {
              a: {
                b: 2,
                X: 0
              },
              d: 3
            });
          });
        });
        describe('over', function() {
          it('applies function to the value of the specified object property', function() {
            eq(R.over(R.lensPath(['d']), R.inc, testObj), {
              a: {b: 2},
              d: 4
            });
            eq(R.over(R.lensPath(['a', 'b']), R.inc, testObj), {
              a: {b: 3},
              d: 3
            });
            eq(R.over(R.lensPath([]), R.toPairs, testObj), [['a', {b: 2}], ['d', 3]]);
          });
          it('applies function to undefined and adds the property if it doesn\'t exist', function() {
            eq(R.over(R.lensPath(['X']), R.identity, testObj), {
              a: {b: 2},
              d: 3,
              X: undefined
            });
            eq(R.over(R.lensPath(['a', 'X']), R.identity, testObj), {
              a: {
                b: 2,
                X: undefined
              },
              d: 3
            });
          });
        });
        describe('composability', function() {
          it('can be composed', function() {
            var composedLens = R.compose(R.lensPath(['a']), R.lensPath(['b']));
            eq(R.view(composedLens, testObj), 2);
          });
        });
        describe('well behaved lens', function() {
          it('set s (get s) === s', function() {
            eq(R.set(R.lensPath(['d']), R.view(R.lensPath(['d']), testObj), testObj), testObj);
            eq(R.set(R.lensPath(['a', 'b']), R.view(R.lensPath(['a', 'b']), testObj), testObj), testObj);
          });
          it('get (set s v) === v', function() {
            eq(R.view(R.lensPath(['d']), R.set(R.lensPath(['d']), 0, testObj)), 0);
            eq(R.view(R.lensPath(['a', 'b']), R.set(R.lensPath(['a', 'b']), 0, testObj)), 0);
          });
          it('get (set(set s v1) v2) === v2', function() {
            var p = ['d'];
            var q = ['a', 'b'];
            eq(R.view(R.lensPath(p), R.set(R.lensPath(p), 11, R.set(R.lensPath(p), 10, testObj))), 11);
            eq(R.view(R.lensPath(q), R.set(R.lensPath(q), 11, R.set(R.lensPath(q), 10, testObj))), 11);
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    179: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var testObj = {
        a: 1,
        b: 2,
        c: 3
      };
      describe('lensProp', function() {
        describe('view', function() {
          it('focuses object the specified object property', function() {
            eq(R.view(R.lensProp('a'), testObj), 1);
          });
          it('returns undefined if the specified property does not exist', function() {
            eq(R.view(R.lensProp('X'), testObj), undefined);
          });
        });
        describe('set', function() {
          it('sets the value of the object property specified', function() {
            eq(R.set(R.lensProp('a'), 0, testObj), {
              a: 0,
              b: 2,
              c: 3
            });
          });
          it('adds the property to the object if it doesn\'t exist', function() {
            eq(R.set(R.lensProp('d'), 4, testObj), {
              a: 1,
              b: 2,
              c: 3,
              d: 4
            });
          });
        });
        describe('over', function() {
          it('applies function to the value of the specified object property', function() {
            eq(R.over(R.lensProp('a'), R.inc, testObj), {
              a: 2,
              b: 2,
              c: 3
            });
          });
          it('applies function to undefined and adds the property if it doesn\'t exist', function() {
            eq(R.over(R.lensProp('X'), R.identity, testObj), {
              a: 1,
              b: 2,
              c: 3,
              X: undefined
            });
          });
        });
        describe('composability', function() {
          it('can be composed', function() {
            var nestedObj = {
              a: {b: 1},
              c: 2
            };
            var composedLens = R.compose(R.lensProp('a'), R.lensProp('b'));
            eq(R.view(composedLens, nestedObj), 1);
          });
        });
        describe('well behaved lens', function() {
          it('set s (get s) === s', function() {
            eq(R.set(R.lensProp('a'), R.view(R.lensProp('a'), testObj), testObj), testObj);
          });
          it('get (set s v) === v', function() {
            eq(R.view(R.lensProp('a'), R.set(R.lensProp('a'), 0, testObj)), 0);
          });
          it('get (set(set s v1) v2) === v2', function() {
            eq(R.view(R.lensProp('a'), R.set(R.lensProp('a'), 11, R.set(R.lensProp('a'), 10, testObj))), 11);
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    180: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var they = it;
      var alice = {
        name: 'Alice Jones',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: {
          dog: 'joker',
          cat: 'batman'
        }
      };
      var nameLens = R.lens(R.prop('name'), R.assoc('name'));
      var addressLens = R.lensProp('address');
      var headLens = R.lensIndex(0);
      var dogLens = R.lensPath(['pets', 'dog']);
      describe('view, over, and set', function() {
        they('may be applied to a lens created by `lensPath`', function() {
          eq(R.view(dogLens, alice), 'joker');
        });
        they('may be applied to a lens created by `lensProp`', function() {
          eq(R.view(nameLens, alice), 'Alice Jones');
          eq(R.over(nameLens, R.toUpper, alice), {
            name: 'ALICE JONES',
            address: ['22 Walnut St', 'San Francisco', 'CA'],
            pets: {
              dog: 'joker',
              cat: 'batman'
            }
          });
          eq(R.set(nameLens, 'Alice Smith', alice), {
            name: 'Alice Smith',
            address: ['22 Walnut St', 'San Francisco', 'CA'],
            pets: {
              dog: 'joker',
              cat: 'batman'
            }
          });
        });
        they('may be applied to a lens created by `lensIndex`', function() {
          eq(R.view(headLens, alice.address), '22 Walnut St');
          eq(R.over(headLens, R.toUpper, alice.address), ['22 WALNUT ST', 'San Francisco', 'CA']);
          eq(R.set(headLens, '52 Crane Ave', alice.address), ['52 Crane Ave', 'San Francisco', 'CA']);
        });
        they('may be applied to composed lenses', function() {
          var streetLens = R.compose(addressLens, headLens);
          var dogLens = R.compose(R.lensPath(['pets']), R.lensPath(['dog']));
          eq(R.view(dogLens, alice), R.view(R.lensPath(['pets', 'dog']), alice));
          eq(R.view(streetLens, alice), '22 Walnut St');
          eq(R.over(streetLens, R.toUpper, alice), {
            name: 'Alice Jones',
            address: ['22 WALNUT ST', 'San Francisco', 'CA'],
            pets: {
              dog: 'joker',
              cat: 'batman'
            }
          });
          eq(R.set(streetLens, '52 Crane Ave', alice), {
            name: 'Alice Jones',
            address: ['52 Crane Ave', 'San Francisco', 'CA'],
            pets: {
              dog: 'joker',
              cat: 'batman'
            }
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    181: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var Maybe = require('./shared/Maybe');
      var add3 = R.curry(function add3(a, b, c) {
        return a + b + c;
      });
      var add4 = R.curry(function add4(a, b, c, d) {
        return a + b + c + d;
      });
      var add5 = R.curry(function add5(a, b, c, d, e) {
        return a + b + c + d + e;
      });
      var madd3 = R.lift(add3);
      var madd4 = R.lift(add4);
      var madd5 = R.lift(add5);
      describe('lift', function() {
        it('returns a function if called with just a function', function() {
          eq(typeof R.lift(R.add), 'function');
        });
        it('produces a cross-product of array values', function() {
          eq(madd3([1, 2, 3], [1, 2], [1, 2, 3]), [3, 4, 5, 4, 5, 6, 4, 5, 6, 5, 6, 7, 5, 6, 7, 6, 7, 8]);
          eq(madd3([1], [2], [3]), [6]);
          eq(madd3([1, 2], [3, 4], [5, 6]), [9, 10, 10, 11, 10, 11, 11, 12]);
        });
        it('can lift functions of any arity', function() {
          eq(madd3([1, 10], [2], [3]), [6, 15]);
          eq(madd4([1, 10], [2], [3], [40]), [46, 55]);
          eq(madd5([1, 10], [2], [3], [40], [500, 1000]), [546, 1046, 555, 1055]);
        });
        it('works with other functors such as "Maybe"', function() {
          var addM = R.lift(R.add);
          eq(addM(Maybe.of(3), Maybe.of(5)), Maybe.of(8));
        });
      });
    }, {
      "..": 1,
      "./shared/Maybe": 253,
      "./shared/eq": 254
    }],
    182: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var Maybe = require('./shared/Maybe');
      var addN = function() {
        return R.reduce(function(a, b) {
          return a + b;
        }, 0, arguments);
      };
      var add3 = R.curry(function add3(a, b, c) {
        return a + b + c;
      });
      describe('liftN', function() {
        var addN3 = R.liftN(3, addN);
        var addN4 = R.liftN(4, addN);
        var addN5 = R.liftN(5, addN);
        it('returns a function', function() {
          eq(typeof R.liftN(3, add3), 'function');
        });
        it('limits a variadic function to the specified arity', function() {
          eq(addN3([1, 10], [2], [3]), [6, 15]);
        });
        it('can lift functions of any arity', function() {
          eq(addN3([1, 10], [2], [3]), [6, 15]);
          eq(addN4([1, 10], [2], [3], [40]), [46, 55]);
          eq(addN5([1, 10], [2], [3], [40], [500, 1000]), [546, 1046, 555, 1055]);
        });
        it('is curried', function() {
          var f4 = R.liftN(4);
          eq(typeof f4, 'function');
          eq(f4(addN)([1], [2], [3], [4, 5]), [10, 11]);
        });
        it('works with other functors such as "Maybe"', function() {
          var addM = R.liftN(2, R.add);
          eq(addM(Maybe(3), Maybe(5)), Maybe(8));
        });
        it('interprets [a] as a functor', function() {
          eq(addN3([1, 2, 3], [10, 20], [100, 200, 300]), [111, 211, 311, 121, 221, 321, 112, 212, 312, 122, 222, 322, 113, 213, 313, 123, 223, 323]);
          eq(addN3([1], [2], [3]), [6]);
          eq(addN3([1, 2], [10, 20], [100, 200]), [111, 211, 121, 221, 112, 212, 122, 222]);
        });
        it('interprets ((->) r) as a functor', function() {
          var convergedOnInt = addN3(R.add(2), R.multiply(3), R.subtract(4));
          var convergedOnBool = R.liftN(2, R.and)(R.gt(R.__, 0), R.lt(R.__, 3));
          eq(typeof convergedOnInt, 'function');
          eq(typeof convergedOnBool, 'function');
          eq(convergedOnInt(10), (10 + 2) + (10 * 3) + (4 - 10));
          eq(convergedOnBool(0), (0 > 0) && (0 < 3));
          eq(convergedOnBool(1), (1 > 0) && (1 < 3));
          eq(convergedOnBool(2), (2 > 0) && (2 < 3));
          eq(convergedOnBool(3), (3 > 0) && (3 < 3));
        });
      });
    }, {
      "..": 1,
      "./shared/Maybe": 253,
      "./shared/eq": 254
    }],
    183: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('lt', function() {
        it('reports whether one item is less than another', function() {
          eq(R.lt(3, 5), true);
          eq(R.lt(6, 4), false);
          eq(R.lt(7.0, 7.0), false);
          eq(R.lt('abc', 'xyz'), true);
          eq(R.lt('abcd', 'abc'), false);
        });
        it('is curried', function() {
          var gt5 = R.lt(5);
          eq(gt5(10), true);
          eq(gt5(5), false);
          eq(gt5(3), false);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var lt5 = R.lt(R.__, 5);
          eq(lt5(10), false);
          eq(lt5(5), false);
          eq(lt5(3), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    184: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('lte', function() {
        it('reports whether one item is less than another', function() {
          eq(R.lte(3, 5), true);
          eq(R.lte(6, 4), false);
          eq(R.lte(7.0, 7.0), true);
          eq(R.lte('abc', 'xyz'), true);
          eq(R.lte('abcd', 'abc'), false);
        });
        it('is curried', function() {
          var gte20 = R.lte(20);
          eq(gte20(10), false);
          eq(gte20(20), true);
          eq(gte20(25), true);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var upTo20 = R.lte(R.__, 20);
          eq(upTo20(10), true);
          eq(upTo20(20), true);
          eq(upTo20(25), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    185: [function(require, module, exports) {
      var listXf = require('./helpers/listXf');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('map', function() {
        var times2 = function(x) {
          return x * 2;
        };
        var add1 = function(x) {
          return x + 1;
        };
        var dec = function(x) {
          return x - 1;
        };
        var intoArray = R.into([]);
        it('maps simple functions over arrays', function() {
          eq(R.map(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
        });
        it('maps simple functions into arrays', function() {
          eq(intoArray(R.map(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
        });
        it('maps over objects', function() {
          eq(R.map(dec, {}), {});
          eq(R.map(dec, {
            x: 4,
            y: 5,
            z: 6
          }), {
            x: 3,
            y: 4,
            z: 5
          });
        });
        it('interprets ((->) r) as a functor', function() {
          var f = function(a) {
            return a - 1;
          };
          var g = function(b) {
            return b * 2;
          };
          var h = R.map(f, g);
          eq(h(10), (10 * 2) - 1);
        });
        it('dispatches to objects that implement `map`', function() {
          var obj = {
            x: 100,
            map: function(f) {
              return f(this.x);
            }
          };
          eq(R.map(add1, obj), 101);
        });
        it('dispatches to transformer objects', function() {
          eq(R.map(add1, listXf), {
            f: add1,
            xf: listXf
          });
        });
        it('composes', function() {
          var mdouble = R.map(times2);
          var mdec = R.map(dec);
          eq(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
        });
        it('can compose transducer-style', function() {
          var mdouble = R.map(times2);
          var mdec = R.map(dec);
          var xcomp = mdec(mdouble(listXf));
          eq(xcomp.xf, {
            xf: listXf,
            f: times2
          });
          eq(xcomp.f, dec);
        });
        it('is curried', function() {
          var inc = R.map(add1);
          eq(inc([1, 2, 3]), [2, 3, 4]);
        });
        it('correctly reports the arity of curried versions', function() {
          var inc = R.map(add1);
          eq(inc.length, 1);
        });
      });
    }, {
      "..": 1,
      "./helpers/listXf": 148,
      "./shared/eq": 254
    }],
    186: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mapAccum', function() {
        var add = function(a, b) {
          return [a + b, a + b];
        };
        var mult = function(a, b) {
          return [a * b, a * b];
        };
        var concat = function(a, b) {
          return [a.concat(b), a.concat(b)];
        };
        it('map and accumulate simple functions over arrays with the supplied accumulator', function() {
          eq(R.mapAccum(add, 0, [1, 2, 3, 4]), [10, [1, 3, 6, 10]]);
          eq(R.mapAccum(mult, 1, [1, 2, 3, 4]), [24, [1, 2, 6, 24]]);
        });
        it('returns the list and accumulator for an empty array', function() {
          eq(R.mapAccum(add, 0, []), [0, []]);
          eq(R.mapAccum(mult, 1, []), [1, []]);
          eq(R.mapAccum(concat, [], []), [[], []]);
        });
        it('is curried', function() {
          var addOrConcat = R.mapAccum(add);
          var sum = addOrConcat(0);
          var cat = addOrConcat('');
          eq(sum([1, 2, 3, 4]), [10, [1, 3, 6, 10]]);
          eq(cat(['1', '2', '3', '4']), ['1234', ['1', '12', '123', '1234']]);
        });
        it('correctly reports the arity of curried versions', function() {
          var sum = R.mapAccum(add, 0);
          eq(sum.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    187: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mapAccumRight', function() {
        var add = function(a, b) {
          return [a + b, a + b];
        };
        var mult = function(a, b) {
          return [a * b, a * b];
        };
        it('map and accumulate simple functions over arrays with the supplied accumulator', function() {
          eq(R.mapAccumRight(add, 0, [1, 2, 3, 4]), [10, [10, 9, 7, 4]]);
          eq(R.mapAccumRight(mult, 1, [1, 2, 3, 4]), [24, [24, 24, 12, 4]]);
        });
        it('returns the list and accumulator for an empty array', function() {
          eq(R.mapAccumRight(add, 0, []), [0, []]);
          eq(R.mapAccumRight(mult, 1, []), [1, []]);
          eq(R.mapAccumRight(R.concat, [], []), [[], []]);
        });
        it('is curried', function() {
          var addOrConcat = R.mapAccumRight(add);
          var sum = addOrConcat(0);
          var cat = addOrConcat('');
          eq(sum([1, 2, 3, 4]), [10, [10, 9, 7, 4]]);
          eq(cat(['1', '2', '3', '4']), ['4321', ['4321', '432', '43', '4']]);
        });
        it('correctly reports the arity of curried versions', function() {
          var sum = R.mapAccumRight(add, 0);
          eq(sum.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    188: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mapObjIndexed', function() {
        var times2 = function(x) {
          return x * 2;
        };
        var addIndexed = function(x, key) {
          return x + key;
        };
        var squareVowels = function(x, key) {
          var vowels = ['a', 'e', 'i', 'o', 'u'];
          return R.contains(key, vowels) ? x * x : x;
        };
        it('works just like a normal mapObj', function() {
          eq(R.mapObjIndexed(times2, {
            a: 1,
            b: 2,
            c: 3,
            d: 4
          }), {
            a: 2,
            b: 4,
            c: 6,
            d: 8
          });
        });
        it('passes the index as a second parameter to the callback', function() {
          eq(R.mapObjIndexed(addIndexed, {
            a: 8,
            b: 6,
            c: 7,
            d: 5,
            e: 3,
            f: 0,
            g: 9
          }), {
            a: '8a',
            b: '6b',
            c: '7c',
            d: '5d',
            e: '3e',
            f: '0f',
            g: '9g'
          });
        });
        it('passes the entire list as a third parameter to the callback', function() {
          eq(R.mapObjIndexed(squareVowels, {
            a: 8,
            b: 6,
            c: 7,
            d: 5,
            e: 3,
            f: 0,
            g: 9
          }), {
            a: 64,
            b: 6,
            c: 7,
            d: 5,
            e: 9,
            f: 0,
            g: 9
          });
        });
        it('is curried', function() {
          var makeSquareVowels = R.mapObjIndexed(squareVowels);
          eq(makeSquareVowels({
            a: 8,
            b: 6,
            c: 7,
            d: 5,
            e: 3,
            f: 0,
            g: 9
          }), {
            a: 64,
            b: 6,
            c: 7,
            d: 5,
            e: 9,
            f: 0,
            g: 9
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    189: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('match', function() {
        var re = /[A-Z]\d\d\-[a-zA-Z]+/;
        var matching = 'B17-afn';
        var notMatching = 'B1-afn';
        it('determines whether a string matches a regex', function() {
          eq(R.match(re, matching).length, 1);
          eq(R.match(re, notMatching), []);
        });
        it('is curried', function() {
          var format = R.match(re);
          eq(format(matching).length, 1);
          eq(format(notMatching), []);
        });
        it('defaults to a different empty array each time', function() {
          var first = R.match(re, notMatching);
          var second = R.match(re, notMatching);
          assert.notStrictEqual(first, second);
        });
        it('throws on null input', function() {
          assert.throws(function shouldThrow() {
            R.match(re, null);
          }, TypeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    190: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mathMod', function() {
        it('requires integer arguments', function() {
          assert.notStrictEqual(R.mathMod('s', 3), R.mathMod('s', 3));
          assert.notStrictEqual(R.mathMod(3, 's'), R.mathMod(3, 's'));
          assert.notStrictEqual(R.mathMod(12.2, 3), R.mathMod(12.2, 3));
          assert.notStrictEqual(R.mathMod(3, 12.2), R.mathMod(3, 12.2));
        });
        it('behaves differently than JS modulo', function() {
          assert.notStrictEqual(R.mathMod(-17, 5), -17 % 5);
          assert.notStrictEqual(R.mathMod(17.2, 5), 17.2 % 5);
          assert.notStrictEqual(R.mathMod(17, -5), 17 % -5);
        });
        it('computes the true modulo function', function() {
          eq(R.mathMod(-17, 5), 3);
          eq(R.identical(NaN, R.mathMod(17, -5)), true);
          eq(R.identical(NaN, R.mathMod(17, 0)), true);
          eq(R.identical(NaN, R.mathMod(17.2, 5)), true);
          eq(R.identical(NaN, R.mathMod(17, 5.5)), true);
        });
        it('is curried', function() {
          var f = R.mathMod(29);
          eq(f(6), 5);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var mod5 = R.modulo(R.__, 5);
          eq(mod5(12), 2);
          eq(mod5(8), 3);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    191: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('max', function() {
        it('returns the larger of its two arguments', function() {
          eq(R.max(-7, 7), 7);
          eq(R.max(7, -7), 7);
        });
        it('works for any orderable type', function() {
          var d1 = new Date('2001-01-01');
          var d2 = new Date('2002-02-02');
          eq(R.max(d1, d2), d2);
          eq(R.max(d2, d1), d2);
          eq(R.max('a', 'b'), 'b');
          eq(R.max('b', 'a'), 'b');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    192: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('maxBy', function() {
        it('returns the larger value as determined by the function', function() {
          eq(R.maxBy(function(n) {
            return n * n;
          }, -3, 2), -3);
          eq(R.maxBy(R.prop('x'), {
            x: 3,
            y: 1
          }, {
            x: 5,
            y: 10
          }), {
            x: 5,
            y: 10
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    193: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mean', function() {
        it('returns mean of a nonempty list', function() {
          eq(R.mean([2]), 2);
          eq(R.mean([2, 7]), 4.5);
          eq(R.mean([2, 7, 9]), 6);
          eq(R.mean([2, 7, 9, 10]), 7);
        });
        it('returns NaN for an empty list', function() {
          eq(R.identical(NaN, R.mean([])), true);
        });
        it('handles array-like object', function() {
          eq(R.mean((function() {
            return arguments;
          })(1, 2, 3)), 2);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    194: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('median', function() {
        it('returns middle value of an odd-length list', function() {
          eq(R.median([2]), 2);
          eq(R.median([2, 9, 7]), 7);
        });
        it('returns mean of two middle values of a nonempty even-length list', function() {
          eq(R.median([7, 2]), 4.5);
          eq(R.median([7, 2, 10, 9]), 8);
        });
        it('returns NaN for an empty list', function() {
          eq(R.identical(NaN, R.median([])), true);
        });
        it('handles array-like object', function() {
          eq(R.median((function() {
            return arguments;
          })(1, 2, 3)), 2);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    195: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('memoize', function() {
        it('calculates the value for a given input only once', function() {
          var ctr = 0;
          var fib = R.memoize(function(n) {
            ctr += 1;
            return n < 2 ? n : fib(n - 2) + fib(n - 1);
          });
          var result = fib(10);
          eq(result, 55);
          eq(ctr, 11);
        });
        it('handles multiple parameters', function() {
          var f = R.memoize(function(a, b, c) {
            return a + ', ' + b + c;
          });
          eq(f('Hello', 'World', '!'), 'Hello, World!');
          eq(f('Goodbye', 'Cruel World', '!!!'), 'Goodbye, Cruel World!!!');
          eq(f('Hello', 'how are you', '?'), 'Hello, how are you?');
          eq(f('Hello', 'World', '!'), 'Hello, World!');
        });
        it('does not rely on reported arity', function() {
          var identity = R.memoize(function() {
            return arguments[0];
          });
          eq(identity('x'), 'x');
          eq(identity('y'), 'y');
        });
        it('memoizes "false" return values', function() {
          var count = 0;
          var inc = R.memoize(function(n) {
            count += 1;
            return n + 1;
          });
          eq(inc(-1), 0);
          eq(inc(-1), 0);
          eq(inc(-1), 0);
          eq(count, 1);
        });
        it('can be applied to nullary function', function() {
          var count = 0;
          var f = R.memoize(function() {
            count += 1;
            return 42;
          });
          eq(f(), 42);
          eq(f(), 42);
          eq(f(), 42);
          eq(count, 1);
        });
        it('can be applied to function with optional arguments', function() {
          var count = 0;
          var f = R.memoize(function concat(a, b) {
            count += 1;
            switch (arguments.length) {
              case 0:
                a = 'foo';
              case 1:
                b = 'bar';
            }
            return a + b;
          });
          eq(f(), 'foobar');
          eq(f(), 'foobar');
          eq(f(), 'foobar');
          eq(count, 1);
        });
        it('differentiates values with same string representation', function() {
          var f = R.memoize(R.toString);
          eq(f(42), '42');
          eq(f('42'), '"42"');
          eq(f([[42]]), '[[42]]');
          eq(f([['42']]), '[["42"]]');
        });
        it('respects object equivalence', function() {
          var count = 0;
          var f = R.memoize(function(x) {
            count += 1;
            return R.toString(x);
          });
          eq(f({
            x: 1,
            y: 2
          }), '{"x": 1, "y": 2}');
          eq(f({
            x: 1,
            y: 2
          }), '{"x": 1, "y": 2}');
          eq(f({
            y: 2,
            x: 1
          }), '{"x": 1, "y": 2}');
          eq(count, 1);
        });
        it('retains arity', function() {
          var f = R.memoize(function(a, b) {
            return a + b;
          });
          eq(f.length, 2);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    196: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('merge', function() {
        it('takes two objects, merges their own properties and returns a new object', function() {
          var a = {
            w: 1,
            x: 2
          };
          var b = {
            y: 3,
            z: 4
          };
          eq(R.merge(a, b), {
            w: 1,
            x: 2,
            y: 3,
            z: 4
          });
        });
        it('overrides properties in the first object with properties in the second object', function() {
          var a = {
            w: 1,
            x: 2
          };
          var b = {
            w: 100,
            y: 3,
            z: 4
          };
          eq(R.merge(a, b), {
            w: 100,
            x: 2,
            y: 3,
            z: 4
          });
        });
        it('is not destructive', function() {
          var a = {
            w: 1,
            x: 2
          };
          var res = R.merge(a, {x: 5});
          assert.notStrictEqual(a, res);
          eq(res, {
            w: 1,
            x: 5
          });
        });
        it('reports only own properties', function() {
          var a = {
            w: 1,
            x: 2
          };
          function Cla() {}
          Cla.prototype.x = 5;
          eq(R.merge(new Cla(), a), {
            w: 1,
            x: 2
          });
          eq(R.merge(a, new Cla()), {
            w: 1,
            x: 2
          });
        });
        it('is curried', function() {
          var curried = R.merge({
            w: 1,
            x: 2
          });
          var b = {
            y: 3,
            z: 4
          };
          eq(curried(b), {
            w: 1,
            x: 2,
            y: 3,
            z: 4
          });
        });
        it('is curried', function() {
          var curried = R.merge(R.__, {
            w: 1,
            x: 2
          });
          eq(curried({
            x: 3,
            y: 4
          }), {
            w: 1,
            x: 2,
            y: 4
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    197: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mergeAll', function() {
        it('merges a list of objects together into one object', function() {
          eq(R.mergeAll([{foo: 1}, {bar: 2}, {baz: 3}]), {
            foo: 1,
            bar: 2,
            baz: 3
          });
        });
        it('gives precedence to later objects in the list', function() {
          eq(R.mergeAll([{foo: 1}, {foo: 2}, {bar: 2}]), {
            foo: 2,
            bar: 2
          });
        });
        it('ignores inherited properties', function() {
          function Foo() {}
          Foo.prototype.bar = 42;
          var foo = new Foo();
          var res = R.mergeAll([foo, {fizz: 'buzz'}]);
          eq(res, {fizz: 'buzz'});
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    198: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mergeWith', function() {
        function last(x, y) {
          return y;
        }
        it('takes two objects, merges their own properties and returns a new object', function() {
          var a = {
            w: 1,
            x: 2
          };
          var b = {
            y: 3,
            z: 4
          };
          eq(R.mergeWith(last, a, b), {
            w: 1,
            x: 2,
            y: 3,
            z: 4
          });
        });
        it('applies the provided function to the value from the first object and the' + ' value from the second object to determine the value for keys that exist in' + ' both objects', function() {
          var a = {
            x: 'a',
            y: 'c'
          };
          var b = {
            x: 'b',
            z: 'd'
          };
          var c = R.mergeWith(function(a, b) {
            return a + b;
          }, a, b);
          eq(c, {
            x: 'ab',
            y: 'c',
            z: 'd'
          });
        });
        it('is not destructive', function() {
          var a = {
            w: 1,
            x: 2
          };
          var res = R.mergeWith(last, a, {x: 5});
          assert.notStrictEqual(a, res);
          eq(res, {
            w: 1,
            x: 5
          });
        });
        it('reports only own properties', function() {
          function Cla() {}
          Cla.prototype.x = 5;
          eq(R.mergeWith(last, new Cla(), {
            w: 1,
            x: 2
          }), {
            w: 1,
            x: 2
          });
          eq(R.mergeWith(last, {
            w: 1,
            x: 2
          }, new Cla()), {
            w: 1,
            x: 2
          });
          eq(R.mergeWith(last, new Cla(), {w: 1}), {w: 1});
        });
        it('is curried', function() {
          eq(R.mergeWith(last)({
            w: 1,
            x: 2
          })({
            y: 3,
            z: 4
          }), {
            w: 1,
            x: 2,
            y: 3,
            z: 4
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    199: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('mergeWithKey', function() {
        function last(k, x, y) {
          return y;
        }
        it('takes two objects, merges their own properties and returns a new object', function() {
          var a = {
            w: 1,
            x: 2
          };
          var b = {
            y: 3,
            z: 4
          };
          eq(R.mergeWithKey(last, a, b), {
            w: 1,
            x: 2,
            y: 3,
            z: 4
          });
        });
        it('applies the provided function to the key, the value from the first object' + ' and the value from the second object to determine the value for keys that' + ' exist in both objects', function() {
          var a = {
            a: 'b',
            x: 'd'
          };
          var b = {
            a: 'c',
            y: 'e'
          };
          var c = R.mergeWithKey(function(k, a, b) {
            return k + a + b;
          }, a, b);
          eq(c, {
            a: 'abc',
            x: 'd',
            y: 'e'
          });
        });
        it('is not destructive', function() {
          var a = {
            w: 1,
            x: 2
          };
          var res = R.mergeWithKey(last, a, {x: 5});
          assert.notStrictEqual(a, res);
          eq(res, {
            w: 1,
            x: 5
          });
        });
        it('reports only own properties', function() {
          var a = {
            w: 1,
            x: 2
          };
          function Cla() {}
          Cla.prototype.x = 5;
          eq(R.mergeWithKey(last, new Cla(), a), {
            w: 1,
            x: 2
          });
          eq(R.mergeWithKey(last, a, new Cla()), {
            w: 1,
            x: 2
          });
        });
        it('is curried', function() {
          eq(R.mergeWithKey(last)({
            w: 1,
            x: 2
          })({
            y: 3,
            z: 4
          }), {
            w: 1,
            x: 2,
            y: 3,
            z: 4
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    200: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('min', function() {
        it('returns the smaller of its two arguments', function() {
          eq(R.min(-7, 7), -7);
          eq(R.min(7, -7), -7);
        });
        it('works for any orderable type', function() {
          var d1 = new Date('2001-01-01');
          var d2 = new Date('2002-02-02');
          eq(R.min(d1, d2), d1);
          eq(R.min(d2, d1), d1);
          eq(R.min('a', 'b'), 'a');
          eq(R.min('b', 'a'), 'a');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    201: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('minBy', function() {
        it('returns the smaller value as determined by the function', function() {
          eq(R.minBy(function(n) {
            return n * n;
          }, -3, 2), 2);
          eq(R.minBy(R.prop('x'), {
            x: 3,
            y: 1
          }, {
            x: 5,
            y: 10
          }), {
            x: 3,
            y: 1
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    202: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('modulo', function() {
        it('divides the first param by the second and returns the remainder', function() {
          eq(R.modulo(100, 2), 0);
          eq(R.modulo(100, 3), 1);
          eq(R.modulo(100, 17), 15);
        });
        it('is curried', function() {
          var hundredMod = R.modulo(100);
          eq(typeof hundredMod, 'function');
          eq(hundredMod(2), 0);
          eq(hundredMod(3), 1);
          eq(hundredMod(17), 15);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var isOdd = R.modulo(R.__, 2);
          eq(typeof isOdd, 'function');
          eq(isOdd(3), 1);
          eq(isOdd(198), 0);
        });
        it('preserves javascript-style modulo evaluation for negative numbers', function() {
          eq(R.modulo(-5, 4), -1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    203: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('multiply', function() {
        it('adds together two numbers', function() {
          eq(R.multiply(6, 7), 42);
        });
        it('is curried', function() {
          var dbl = R.multiply(2);
          eq(dbl(15), 30);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    204: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('nAry', function() {
        function toArray(args) {
          return Array.prototype.slice.call(args, 0);
        }
        it('turns multiple-argument function into a nullary one', function() {
          var fn = R.nAry(0, function(x, y, z) {
            void z;
            return toArray(arguments);
          });
          eq(fn.length, 0);
          eq(fn(1, 2, 3), []);
        });
        it('turns multiple-argument function into a ternary one', function() {
          var fn = R.nAry(3, function(a, b, c, d) {
            void d;
            return toArray(arguments);
          });
          eq(fn.length, 3);
          eq(fn(1, 2, 3, 4), [1, 2, 3]);
          eq(fn(1), [1, undefined, undefined]);
        });
        it('creates functions of arity less than or equal to ten', function() {
          var fn = R.nAry(10, function() {
            return toArray(arguments);
          });
          eq(fn.length, 10);
          eq(fn.apply(null, R.range(0, 25)), R.range(0, 10));
          var undefs = fn();
          var ns = R.repeat(undefined, 10);
          eq(undefs.length, ns.length);
          var idx = undefs.length - 1;
          while (idx >= 0) {
            eq(undefs[idx], ns[idx]);
            idx -= 1;
          }
        });
        it('throws if n is greater than ten', function() {
          assert.throws(function() {
            R.nAry(11, function() {});
          }, function(err) {
            return (err instanceof Error && err.message === 'First argument to nAry must be a non-negative integer no greater than ten');
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    205: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('negate', function() {
        it('negates its argument', function() {
          eq(R.negate(-Infinity), Infinity);
          eq(R.negate(-1), 1);
          eq(R.negate(-0), 0);
          eq(R.negate(0), -0);
          eq(R.negate(1), -1);
          eq(R.negate(Infinity), -Infinity);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    206: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('none', function() {
        var even = function(n) {
          return n % 2 === 0;
        };
        var T = function() {
          return true;
        };
        it('returns true if no elements satisfy the predicate', function() {
          eq(R.none(even, [1, 3, 5, 7, 9, 11]), true);
        });
        it('returns false if any element satisfies the predicate', function() {
          eq(R.none(even, [1, 3, 5, 7, 8, 11]), false);
        });
        it('returns true for an empty list', function() {
          eq(R.none(T, []), true);
        });
        it('works with more complex objects', function() {
          var xs = [{x: 'abcd'}, {x: 'adef'}, {x: 'fghiajk'}];
          function len3(o) {
            return o.x.length === 3;
          }
          function hasA(o) {
            return o.x.indexOf('a') >= 0;
          }
          eq(R.none(len3, xs), true);
          eq(R.none(hasA, xs), false);
        });
        it('is curried', function() {
          eq(R.none(even)([1, 3, 5, 6, 7, 9]), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    207: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('not', function() {
        it('reverses argument', function() {
          eq(R.not(false), true);
          eq(R.not(1), false);
          eq(R.not(''), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    208: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('nth', function() {
        var list = ['foo', 'bar', 'baz', 'quux'];
        it('accepts positive offsets', function() {
          eq(R.nth(0, list), 'foo');
          eq(R.nth(1, list), 'bar');
          eq(R.nth(2, list), 'baz');
          eq(R.nth(3, list), 'quux');
          eq(R.nth(4, list), undefined);
          eq(R.nth(0, 'abc'), 'a');
          eq(R.nth(1, 'abc'), 'b');
          eq(R.nth(2, 'abc'), 'c');
          eq(R.nth(3, 'abc'), '');
        });
        it('accepts negative offsets', function() {
          eq(R.nth(-1, list), 'quux');
          eq(R.nth(-2, list), 'baz');
          eq(R.nth(-3, list), 'bar');
          eq(R.nth(-4, list), 'foo');
          eq(R.nth(-5, list), undefined);
          eq(R.nth(-1, 'abc'), 'c');
          eq(R.nth(-2, 'abc'), 'b');
          eq(R.nth(-3, 'abc'), 'a');
          eq(R.nth(-4, 'abc'), '');
        });
        it('throws if applied to null or undefined', function() {
          assert.throws(function() {
            R.nth(0, null);
          }, TypeError);
          assert.throws(function() {
            R.nth(0, undefined);
          }, TypeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    209: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('nthArg', function() {
        it('returns a function which returns its nth argument', function() {
          eq(R.nthArg(0)('foo', 'bar'), 'foo');
          eq(R.nthArg(1)('foo', 'bar'), 'bar');
        });
        it('accepts negative offsets', function() {
          eq(R.nthArg(-1)('foo', 'bar'), 'bar');
          eq(R.nthArg(-2)('foo', 'bar'), 'foo');
          eq(R.nthArg(-3)('foo', 'bar'), undefined);
        });
        it('returns a function with length n + 1 when n >= 0', function() {
          eq(R.nthArg(0).length, 1);
          eq(R.nthArg(1).length, 2);
          eq(R.nthArg(2).length, 3);
          eq(R.nthArg(3).length, 4);
        });
        it('returns a function with length 1 when n < 0', function() {
          eq(R.nthArg(-1).length, 1);
          eq(R.nthArg(-2).length, 1);
          eq(R.nthArg(-3).length, 1);
        });
        it('returns a curried function', function() {
          eq(R.nthArg(1)('foo', 'bar'), R.nthArg(1)('foo')('bar'));
          eq(R.nthArg(2)('foo', 'bar', 'baz'), R.nthArg(2)('foo')('bar')('baz'));
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    210: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('objOf', function() {
        it('creates an object containing a single key:value pair', function() {
          eq(R.objOf('foo', 42), {foo: 42});
          eq(R.objOf('foo')(42), {foo: 42});
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    211: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('of', function() {
        it('returns its argument as an Array', function() {
          eq(R.of(100), [100]);
          eq(R.of([100]), [[100]]);
          eq(R.of(null), [null]);
          eq(R.of(undefined), [undefined]);
          eq(R.of([]), [[]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    212: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('omit', function() {
        var obj = {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6
        };
        it('copies an object omitting the listed properties', function() {
          eq(R.omit(['a', 'c', 'f'], obj), {
            b: 2,
            d: 4,
            e: 5
          });
        });
        it('includes prototype properties', function() {
          var F = function(param) {
            this.x = param;
          };
          F.prototype.y = 40;
          F.prototype.z = 50;
          var obj = new F(30);
          obj.v = 10;
          obj.w = 20;
          eq(R.omit(['w', 'x', 'y'], obj), {
            v: 10,
            z: 50
          });
        });
        it('is curried', function() {
          var skipAB = R.omit(['a', 'b']);
          eq(skipAB(obj), {
            c: 3,
            d: 4,
            e: 5,
            f: 6
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    213: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('once', function() {
        it('returns a function that calls the supplied function only the first time called', function() {
          var ctr = 0;
          var fn = R.once(function() {
            ctr += 1;
          });
          fn();
          eq(ctr, 1);
          fn();
          eq(ctr, 1);
          fn();
          eq(ctr, 1);
        });
        it('passes along arguments supplied', function() {
          var fn = R.once(function(a, b) {
            return a + b;
          });
          var result = fn(5, 10);
          eq(result, 15);
        });
        it('retains and returns the first value calculated, even if different arguments are passed later', function() {
          var ctr = 0;
          var fn = R.once(function(a, b) {
            ctr += 1;
            return a + b;
          });
          var result = fn(5, 10);
          eq(result, 15);
          eq(ctr, 1);
          result = fn(20, 30);
          eq(result, 15);
          eq(ctr, 1);
        });
        it('retains arity', function() {
          var f = R.once(function(a, b) {
            return a + b;
          });
          eq(f.length, 2);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    214: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('or', function() {
        it('compares two values with js &&', function() {
          eq(R.or(true, true), true);
          eq(R.or(true, false), true);
          eq(R.or(false, true), true);
          eq(R.or(false, false), false);
        });
        it('is curried', function() {
          eq(R.or(false)(false), false);
          eq(R.or(false)(true), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    215: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pair', function() {
        it('creates a two-element array', function() {
          eq(R.pair('foo', 'bar'), ['foo', 'bar']);
          eq(R.pair('foo')('bar'), ['foo', 'bar']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    216: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('partial', function() {
        var disc = function(a, b, c) {
          return b * b - 4 * a * c;
        };
        it('caches the initially supplied arguments', function() {
          var f = R.partial(disc, [3]);
          eq(f(7, 4), 1);
          var g = R.partial(disc, [3, 7]);
          eq(g(4), 1);
        });
        it('correctly reports the arity of the new function', function() {
          var f = R.partial(disc, [3]);
          eq(f.length, 2);
          var g = R.partial(disc, [3, 7]);
          eq(g.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    217: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('partialRight', function() {
        var disc = function(a, b, c) {
          return b * b - 4 * a * c;
        };
        it('caches the initially supplied arguments', function() {
          var f = R.partialRight(disc, [4]);
          eq(f(3, 7), 1);
          var g = R.partialRight(disc, [7, 4]);
          eq(g(3), 1);
        });
        it('correctly reports the arity of the new function', function() {
          var f = R.partialRight(disc, [4]);
          eq(f.length, 2);
          var g = R.partialRight(disc, [7, 4]);
          eq(g.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    218: [function(require, module, exports) {
      var S = require('sanctuary');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('partition', function() {
        it('splits a list into two lists according to a predicate', function() {
          var pred = function(n) {
            return n % 2;
          };
          eq(R.partition(pred, []), [[], []]);
          eq(R.partition(pred, [0, 2, 4, 6]), [[], [0, 2, 4, 6]]);
          eq(R.partition(pred, [1, 3, 5, 7]), [[1, 3, 5, 7], []]);
          eq(R.partition(pred, [0, 1, 2, 3]), [[1, 3], [0, 2]]);
        });
        it('works with objects', function() {
          var pred = function(n) {
            return n % 2;
          };
          eq(R.partition(pred, {}), [{}, {}]);
          eq(R.partition(pred, {
            a: 0,
            b: 2,
            c: 4,
            d: 6
          }), [{}, {
            a: 0,
            b: 2,
            c: 4,
            d: 6
          }]);
          eq(R.partition(pred, {
            a: 1,
            b: 3,
            c: 5,
            d: 7
          }), [{
            a: 1,
            b: 3,
            c: 5,
            d: 7
          }, {}]);
          eq(R.partition(pred, {
            a: 0,
            b: 1,
            c: 2,
            d: 3
          }), [{
            b: 1,
            d: 3
          }, {
            a: 0,
            c: 2
          }]);
        });
        it('works with other filterables', function() {
          eq(R.partition(R.isEmpty, S.Just(3)), [S.Nothing(), S.Just(3)]);
          eq(R.partition(R.complement(R.isEmpty), S.Just(3)), [S.Just(3), S.Nothing()]);
        });
        it('is curried', function() {
          var polarize = R.partition(Boolean);
          eq(polarize([true, 0, 1, null]), [[true, 1], [0, null]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "sanctuary": 41
    }],
    219: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('path', function() {
        var deepObject = {
          a: {b: {c: 'c'}},
          falseVal: false,
          nullVal: null,
          undefinedVal: undefined,
          arrayVal: ['arr']
        };
        it('takes a path and an object and returns the value at the path or undefined', function() {
          var obj = {
            a: {
              b: {
                c: 100,
                d: 200
              },
              e: {
                f: [100, 101, 102],
                g: 'G'
              },
              h: 'H'
            },
            i: 'I',
            j: ['J']
          };
          eq(R.path(['a', 'b', 'c'], obj), 100);
          eq(R.path([], obj), obj);
          eq(R.path(['a', 'e', 'f', '1'], obj), 101);
          eq(R.path(['j', '0'], obj), 'J');
          eq(R.path(['j', '1'], obj), undefined);
        });
        it("gets a deep property's value from objects", function() {
          eq(R.path(['a', 'b', 'c'], deepObject), 'c');
          eq(R.path(['a'], deepObject), deepObject.a);
        });
        it('returns undefined for items not found', function() {
          eq(R.path(['a', 'b', 'foo'], deepObject), undefined);
          eq(R.path(['bar'], deepObject), undefined);
          eq(R.path(['a', 'b'], {a: null}), undefined);
        });
        it('works with falsy items', function() {
          eq(R.path(['toString'], false), Boolean.prototype.toString);
        });
        it('is curried', function() {
          eq(R.path(['arrayVal', '0'])(deepObject), 'arr');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    220: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pathEq', function() {
        var obj = {
          a: 1,
          b: {ba: '2'}
        };
        it('returns true if the path matches the value', function() {
          eq(R.pathEq(['a'], 1, obj), true);
          eq(R.pathEq(['b', 'ba'], '2', obj), true);
        });
        it('returns false for non matches', function() {
          eq(R.pathEq(['a'], '1', obj), false);
          eq(R.pathEq(['b', 'ba'], 2, obj), false);
        });
        it('returns false for non existing values', function() {
          eq(R.pathEq(['c'], 'foo', obj), false);
          eq(R.pathEq(['c', 'd'], 'foo', obj), false);
        });
        it('accepts empty path', function() {
          eq(R.pathEq([], 42, {
            a: 1,
            b: 2
          }), false);
          eq(R.pathEq([], obj, obj), true);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.pathEq(['value'], 0, {value: -0}), false);
          eq(R.pathEq(['value'], -0, {value: 0}), false);
          eq(R.pathEq(['value'], NaN, {value: NaN}), true);
          eq(R.pathEq(['value'], new Just([42]), {value: new Just([42])}), true);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    221: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pathOr', function() {
        var deepObject = {
          a: {b: {c: 'c'}},
          falseVal: false,
          nullVal: null,
          undefinedVal: undefined,
          arrayVal: ['arr']
        };
        it('takes a path and an object and returns the value at the path or the default value', function() {
          var obj = {
            a: {
              b: {
                c: 100,
                d: 200
              },
              e: {
                f: [100, 101, 102],
                g: 'G'
              },
              h: 'H'
            },
            i: 'I',
            j: ['J']
          };
          eq(R.pathOr('Unknown', ['a', 'b', 'c'], obj), 100);
          eq(R.pathOr('Unknown', [], obj), obj);
          eq(R.pathOr('Unknown', ['a', 'e', 'f', '1'], obj), 101);
          eq(R.pathOr('Unknown', ['j', '0'], obj), 'J');
          eq(R.pathOr('Unknown', ['j', '1'], obj), 'Unknown');
          eq(R.pathOr('Unknown', ['a', 'b', 'c'], null), 'Unknown');
        });
        it("gets a deep property's value from objects", function() {
          eq(R.pathOr('Unknown', ['a', 'b', 'c'], deepObject), 'c');
          eq(R.pathOr('Unknown', ['a'], deepObject), deepObject.a);
        });
        it('returns the default value for items not found', function() {
          eq(R.pathOr('Unknown', ['a', 'b', 'foo'], deepObject), 'Unknown');
          eq(R.pathOr('Unknown', ['bar'], deepObject), 'Unknown');
        });
        it('returns the default value for null/undefined', function() {
          eq(R.pathOr('Unknown', ['toString'], null), 'Unknown');
          eq(R.pathOr('Unknown', ['toString'], undefined), 'Unknown');
        });
        it('works with falsy items', function() {
          eq(R.pathOr('Unknown', ['toString'], false), Boolean.prototype.toString);
        });
        it('is curried', function() {
          eq(R.pathOr('Unknown', ['arrayVal', '0'])(deepObject), 'arr');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    222: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pathSatisfies', function() {
        var isPositive = function(n) {
          return n > 0;
        };
        it('returns true if the specified object path satisfies the given predicate', function() {
          eq(R.pathSatisfies(isPositive, ['x', 'y'], {x: {y: 1}}), true);
        });
        it('returns false if the specified path does not exist', function() {
          eq(R.pathSatisfies(isPositive, ['x', 'y'], {x: {z: 42}}), false);
        });
        it('returns false if the path is empty', function() {
          eq(R.pathSatisfies(isPositive, [], {x: {z: 42}}), false);
        });
        it('returns false otherwise', function() {
          eq(R.pathSatisfies(isPositive, ['x', 'y'], {x: {y: 0}}), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    223: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pick', function() {
        var obj = {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6,
          1: 7
        };
        it('copies the named properties of an object to the new object', function() {
          eq(R.pick(['a', 'c', 'f'], obj), {
            a: 1,
            c: 3,
            f: 6
          });
        });
        it('handles numbers as properties', function() {
          eq(R.pick([1], obj), {1: 7});
        });
        it('ignores properties not included', function() {
          eq(R.pick(['a', 'c', 'g'], obj), {
            a: 1,
            c: 3
          });
        });
        it('retrieves prototype properties', function() {
          var F = function(param) {
            this.x = param;
          };
          F.prototype.y = 40;
          F.prototype.z = 50;
          var obj = new F(30);
          obj.v = 10;
          obj.w = 20;
          eq(R.pick(['w', 'x', 'y'], obj), {
            w: 20,
            x: 30,
            y: 40
          });
        });
        it('is curried', function() {
          var copyAB = R.pick(['a', 'b']);
          eq(copyAB(obj), {
            a: 1,
            b: 2
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    224: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pickAll', function() {
        var obj = {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6
        };
        it('copies the named properties of an object to the new object', function() {
          eq(R.pickAll(['a', 'c', 'f'], obj), {
            a: 1,
            c: 3,
            f: 6
          });
        });
        it('includes properties not present on the input object', function() {
          eq(R.pickAll(['a', 'c', 'g'], obj), {
            a: 1,
            c: 3,
            g: undefined
          });
        });
        it('is curried', function() {
          var copyAB = R.pickAll(['a', 'b']);
          eq(copyAB(obj), {
            a: 1,
            b: 2
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    225: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pickBy', function() {
        var obj = {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6
        };
        it('creates a copy of the object', function() {
          assert.notStrictEqual(R.pickBy(R.always(true), obj), obj);
        });
        it('when returning truthy, keeps the key', function() {
          eq(R.pickBy(R.T, obj), obj);
          eq(R.pickBy(R.always({}), obj), obj);
          eq(R.pickBy(R.always(1), obj), obj);
        });
        it('when returning falsy, keeps the key', function() {
          eq(R.pickBy(R.always(false), obj), {});
          eq(R.pickBy(R.always(0), obj), {});
          eq(R.pickBy(R.always(null), obj), {});
        });
        it('is called with (val,key,obj)', function() {
          eq(R.pickBy(function(val, key, _obj) {
            eq(_obj, obj);
            return key === 'd' && val === 4;
          }, obj), {d: 4});
        });
        it('retrieves prototype properties', function() {
          var F = function(param) {
            this.x = param;
          };
          F.prototype.y = 40;
          F.prototype.z = 50;
          var obj = new F(30);
          obj.v = 10;
          obj.w = 20;
          eq(R.pickBy(function(val) {
            return val < 45;
          }, obj), {
            v: 10,
            w: 20,
            x: 30,
            y: 40
          });
        });
        it('is curried', function() {
          var copier = R.pickBy(R.T);
          eq(copier(obj), obj);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    226: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pipe', function() {
        it('is a variadic function', function() {
          eq(typeof R.pipe, 'function');
          eq(R.pipe.length, 0);
        });
        it('performs left-to-right function composition', function() {
          var f = R.pipe(parseInt, R.multiply, R.map);
          eq(f.length, 2);
          eq(f('10')([1, 2, 3]), [10, 20, 30]);
          eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
        });
        it('passes context to functions', function() {
          function x(val) {
            return this.x * val;
          }
          function y(val) {
            return this.y * val;
          }
          function z(val) {
            return this.z * val;
          }
          var context = {
            a: R.pipe(x, y, z),
            x: 4,
            y: 2,
            z: 1
          };
          eq(context.a(5), 40);
        });
        it('throws if given no arguments', function() {
          assert.throws(function() {
            R.pipe();
          }, function(err) {
            return err.constructor === Error && err.message === 'pipe requires at least one argument';
          });
        });
        it('can be applied to one argument', function() {
          var f = function(a, b, c) {
            return [a, b, c];
          };
          var g = R.pipe(f);
          eq(g.length, 3);
          eq(g(1, 2, 3), [1, 2, 3]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    227: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var Identity = function(x) {
        this.value = x;
      };
      Identity.prototype.chain = function(f) {
        return f(this.value);
      };
      describe('pipeK', function() {
        it('is a variadic function', function() {
          eq(typeof R.pipeK, 'function');
          eq(R.pipeK.length, 0);
        });
        it('performs left-to-right Kleisli composition', function() {
          var f = function(x) {
            return new Identity(x - 1);
          };
          var g = function(x) {
            return new Identity(x * x);
          };
          var h = function(x) {
            return new Identity(x + 1);
          };
          var fn = R.pipeK(f, g, h);
          var id = new Identity(8);
          eq(fn(id).value, 50);
          eq(fn(id).value, R.pipe(R.chain(f), R.chain(g), R.chain(h))(id).value);
        });
        it('returns the identity function given no arguments', function() {
          var identity = R.pipeK();
          eq(identity.length, 1);
          eq(identity(R.__).length, 1);
          eq(identity(42), 42);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    228: [function(require, module, exports) {
      var assert = require('assert');
      var Q = require('q');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pipeP', function() {
        it('is a variadic function', function() {
          eq(typeof R.pipeP, 'function');
          eq(R.pipeP.length, 0);
        });
        it('performs left-to-right composition of Promise-returning functions', function(done) {
          var f = function(a) {
            return Q.Promise(function(res) {
              res([a]);
            });
          };
          var g = function(a, b) {
            return Q.Promise(function(res) {
              res([a, b]);
            });
          };
          eq(R.pipeP(f).length, 1);
          eq(R.pipeP(g).length, 2);
          eq(R.pipeP(f, f).length, 1);
          eq(R.pipeP(f, g).length, 1);
          eq(R.pipeP(g, f).length, 2);
          eq(R.pipeP(g, g).length, 2);
          R.pipeP(f, g)(1).then(function(result) {
            eq(result, [[1], undefined]);
            R.pipeP(g, f)(1).then(function(result) {
              eq(result, [[1, undefined]]);
              R.pipeP(f, g)(1, 2).then(function(result) {
                eq(result, [[1], undefined]);
                R.pipeP(g, f)(1, 2).then(function(result) {
                  eq(result, [[1, 2]]);
                  done();
                })['catch'](done);
              })['catch'](done);
            })['catch'](done);
          })['catch'](done);
        });
        it('throws if given no arguments', function() {
          assert.throws(function() {
            R.pipeP();
          }, function(err) {
            return err.constructor === Error && err.message === 'pipeP requires at least one argument';
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2,
      "q": 37
    }],
    229: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('pluck', function() {
        var people = [{
          name: 'Fred',
          age: 23
        }, {
          name: 'Wilma',
          age: 21
        }, {
          name: 'Pebbles',
          age: 2
        }];
        it('returns a function that maps the appropriate property over an array', function() {
          var nm = R.pluck('name');
          eq(typeof nm, 'function');
          eq(nm(people), ['Fred', 'Wilma', 'Pebbles']);
        });
        it('behaves as a transducer when given a transducer in list position', function() {
          var numbers = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
          var transducer = R.compose(R.pluck('a'), R.map(R.add(1)), R.take(2));
          eq(R.transduce(transducer, R.flip(R.append), [], numbers), [2, 3]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    230: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('prepend', function() {
        it('adds the element to the beginning of the list', function() {
          eq(R.prepend('x', ['y', 'z']), ['x', 'y', 'z']);
          eq(R.prepend(['a', 'z'], ['x', 'y']), [['a', 'z'], 'x', 'y']);
        });
        it('works on empty list', function() {
          eq(R.prepend(1, []), [1]);
        });
        it('is curried', function() {
          eq(typeof R.prepend(4), 'function');
          eq(R.prepend(4)([3, 2, 1]), [4, 3, 2, 1]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    231: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('product', function() {
        it('multiplies together the array of numbers supplied', function() {
          eq(R.product([1, 2, 3, 4]), 24);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    232: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('project', function() {
        var kids = [{
          name: 'Abby',
          age: 7,
          hair: 'blond'
        }, {
          name: 'Fred',
          age: 12,
          hair: 'brown'
        }, {
          name: 'Rusty',
          age: 10,
          hair: 'brown'
        }, {
          name: 'Alois',
          age: 15,
          disposition: 'surly'
        }];
        it('selects the chosen properties from each element in a list', function() {
          eq(R.project(['name', 'age'], kids), [{
            name: 'Abby',
            age: 7
          }, {
            name: 'Fred',
            age: 12
          }, {
            name: 'Rusty',
            age: 10
          }, {
            name: 'Alois',
            age: 15
          }]);
        });
        it('has an undefined property on the output tuple for any input tuple that does not have the property', function() {
          eq(R.project(['name', 'hair'], kids), [{
            name: 'Abby',
            hair: 'blond'
          }, {
            name: 'Fred',
            hair: 'brown'
          }, {
            name: 'Rusty',
            hair: 'brown'
          }, {
            name: 'Alois',
            hair: undefined
          }]);
        });
        it('is curried', function() {
          var myFields = R.project(['name', 'age']);
          eq(myFields(kids), [{
            name: 'Abby',
            age: 7
          }, {
            name: 'Fred',
            age: 12
          }, {
            name: 'Rusty',
            age: 10
          }, {
            name: 'Alois',
            age: 15
          }]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    233: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('prop', function() {
        var fred = {
          name: 'Fred',
          age: 23
        };
        it('returns a function that fetches the appropriate property', function() {
          var nm = R.prop('name');
          eq(typeof nm, 'function');
          eq(nm(fred), 'Fred');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    234: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('propEq', function() {
        var obj1 = {
          name: 'Abby',
          age: 7,
          hair: 'blond'
        };
        var obj2 = {
          name: 'Fred',
          age: 12,
          hair: 'brown'
        };
        var obj3 = {
          name: 'Rusty',
          age: 10,
          hair: 'brown'
        };
        var obj4 = {
          name: 'Alois',
          age: 15,
          disposition: 'surly'
        };
        it('determines whether a particular property matches a given value for a specific object', function() {
          eq(R.propEq('name', 'Abby', obj1), true);
          eq(R.propEq('hair', 'brown', obj2), true);
          eq(R.propEq('hair', 'blond', obj2), false);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.propEq('value', 0, {value: -0}), false);
          eq(R.propEq('value', -0, {value: 0}), false);
          eq(R.propEq('value', NaN, {value: NaN}), true);
          eq(R.propEq('value', new Just([42]), {value: new Just([42])}), true);
        });
        it('is curried', function() {
          var kids = [obj1, obj2, obj3, obj4];
          var hairMatch = R.propEq('hair');
          eq(typeof hairMatch, 'function');
          var brunette = hairMatch('brown');
          eq(R.filter(brunette, kids), [obj2, obj3]);
          eq(R.filter(R.propEq('hair', 'brown'), kids), [obj2, obj3]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    235: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('propIs', function() {
        it('returns true if the specified object property is of the given type', function() {
          eq(R.propIs(Number, 'value', {value: 1}), true);
        });
        it('returns false otherwise', function() {
          eq(R.propIs(String, 'value', {value: 1}), false);
          eq(R.propIs(String, 'value', {}), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    236: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('propOr', function() {
        var fred = {
          name: 'Fred',
          age: 23
        };
        var anon = {age: 99};
        var nm = R.propOr('Unknown', 'name');
        it('returns a function that fetches the appropriate property', function() {
          eq(typeof nm, 'function');
          eq(nm(fred), 'Fred');
        });
        it('returns the default value when the property does not exist', function() {
          eq(nm(anon), 'Unknown');
        });
        it('returns the default value when the object is nil', function() {
          eq(nm(null), 'Unknown');
          eq(nm(void 0), 'Unknown');
        });
        it('does not return properties from the prototype chain', function() {
          var Person = function() {};
          Person.prototype.age = function() {};
          var bob = new Person();
          eq(R.propOr(100, 'age', bob), 100);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    237: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('propSatisfies', function() {
        var isPositive = function(n) {
          return n > 0;
        };
        it('returns true if the specified object property satisfies the given predicate', function() {
          eq(R.propSatisfies(isPositive, 'x', {
            x: 1,
            y: 0
          }), true);
        });
        it('returns false otherwise', function() {
          eq(R.propSatisfies(isPositive, 'y', {
            x: 1,
            y: 0
          }), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    238: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('props', function() {
        var obj = {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6
        };
        it('returns empty array if no properties requested', function() {
          eq(R.props([], obj), []);
        });
        it('returns values for requested properties', function() {
          eq(R.props(['a', 'e'], obj), [1, 5]);
        });
        it('preserves order', function() {
          eq(R.props(['f', 'c', 'e'], obj), [6, 3, 5]);
        });
        it('returns undefined for nonexistent properties', function() {
          var ps = R.props(['a', 'nonexistent'], obj);
          eq(ps.length, 2);
          eq(ps[0], 1);
          eq(ps[1], void 0);
        });
        it('is curried', function() {
          eq(R.props(['a', 'b'])(obj), [1, 2]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    239: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('range', function() {
        it('returns list of numbers', function() {
          eq(R.range(0, 5), [0, 1, 2, 3, 4]);
          eq(R.range(4, 7), [4, 5, 6]);
        });
        it('returns the empty list if the first parameter is not larger than the second', function() {
          eq(R.range(7, 3), []);
          eq(R.range(5, 5), []);
        });
        it('is curried', function() {
          var from10 = R.range(10);
          eq(from10(15), [10, 11, 12, 13, 14]);
        });
        it('returns an empty array if from > to', function() {
          var result = R.range(10, 5);
          eq(result, []);
          result.push(5);
          eq(R.range(10, 5), []);
        });
        it('terminates given bad input', function() {
          assert.throws(function() {
            R.range('a', 'z');
          }, function(err) {
            return err.constructor === TypeError && err.message === 'Both arguments to range must be numbers';
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    240: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('reduce', function() {
        var add = function(a, b) {
          return a + b;
        };
        var mult = function(a, b) {
          return a * b;
        };
        it('folds simple functions over arrays with the supplied accumulator', function() {
          eq(R.reduce(add, 0, [1, 2, 3, 4]), 10);
          eq(R.reduce(mult, 1, [1, 2, 3, 4]), 24);
        });
        it('dispatches to objects that implement `reduce`', function() {
          var obj = {
            x: [1, 2, 3],
            reduce: function() {
              return 'override';
            }
          };
          eq(R.reduce(add, 0, obj), 'override');
          eq(R.reduce(add, 10, obj), 'override');
        });
        it('returns the accumulator for an empty array', function() {
          eq(R.reduce(add, 0, []), 0);
          eq(R.reduce(mult, 1, []), 1);
          eq(R.reduce(R.concat, [], []), []);
        });
        it('is curried', function() {
          var addOrConcat = R.reduce(add);
          var sum = addOrConcat(0);
          var cat = addOrConcat('');
          eq(sum([1, 2, 3, 4]), 10);
          eq(cat(['1', '2', '3', '4']), '1234');
        });
        it('correctly reports the arity of curried versions', function() {
          var sum = R.reduce(add, 0);
          eq(sum.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    241: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var byType = R.prop('type');
      var sumValues = function(acc, obj) {
        return acc + obj.val;
      };
      var sumInput = [{
        type: 'A',
        val: 10
      }, {
        type: 'B',
        val: 20
      }, {
        type: 'A',
        val: 30
      }, {
        type: 'A',
        val: 40
      }, {
        type: 'C',
        val: 50
      }, {
        type: 'B',
        val: 60
      }];
      describe('reduceBy', function() {
        it('splits the list into groups according to the grouping function', function() {
          var grade = function(score) {
            return (score < 65) ? 'F' : (score < 70) ? 'D' : (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
          };
          var students = [{
            name: 'Abby',
            score: 84
          }, {
            name: 'Brad',
            score: 73
          }, {
            name: 'Chris',
            score: 89
          }, {
            name: 'Dianne',
            score: 99
          }, {
            name: 'Eddy',
            score: 58
          }, {
            name: 'Fred',
            score: 67
          }, {
            name: 'Gillian',
            score: 91
          }, {
            name: 'Hannah',
            score: 78
          }, {
            name: 'Irene',
            score: 85
          }, {
            name: 'Jack',
            score: 69
          }];
          var byGrade = function(student) {
            return grade(student.score || 0);
          };
          var collectNames = function(acc, student) {
            return acc.concat(student.name);
          };
          eq(R.reduceBy(collectNames, [], byGrade, students), {
            A: ['Dianne', 'Gillian'],
            B: ['Abby', 'Chris', 'Irene'],
            C: ['Brad', 'Hannah'],
            D: ['Fred', 'Jack'],
            F: ['Eddy']
          });
        });
        it('returns an empty object if given an empty array', function() {
          eq(R.reduceBy(sumValues, 0, byType, []), {});
        });
        it('is curried', function() {
          var reduceToSumsBy = R.reduceBy(sumValues, 0);
          var sumByType = reduceToSumsBy(byType);
          eq(sumByType(sumInput), {
            A: 80,
            B: 80,
            C: 50
          });
        });
        it('correctly reports the arity of curried versions', function() {
          var inc = R.reduceBy(sumValues, 0)(byType);
          eq(inc.length, 1);
        });
        it('can act as a transducer', function() {
          var reduceToSumsBy = R.reduceBy(sumValues, 0);
          var sumByType = reduceToSumsBy(byType);
          eq(R.into({}, R.compose(sumByType, R.map(R.adjust(R.multiply(10), 1))), sumInput), {
            A: 800,
            B: 800,
            C: 500
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    242: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('reduceRight', function() {
        var avg = function(a, b) {
          return (a + b) / 2;
        };
        it('folds lists in the right order', function() {
          eq(R.reduceRight(function(a, b) {
            return a + b;
          }, '', ['a', 'b', 'c', 'd']), 'dcba');
        });
        it('folds simple functions over arrays with the supplied accumulator', function() {
          eq(R.reduceRight(avg, 54, [12, 4, 10, 6]), 12);
        });
        it('returns the accumulator for an empty array', function() {
          eq(R.reduceRight(avg, 0, []), 0);
        });
        it('is curried', function() {
          var something = R.reduceRight(avg, 54);
          var rcat = R.reduceRight(R.concat, '');
          eq(something([12, 4, 10, 6]), 12);
          eq(rcat(['1', '2', '3', '4']), '4321');
        });
        it('correctly reports the arity of curried versions', function() {
          var something = R.reduceRight(avg, 0);
          eq(something.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    243: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var isOdd = function(_, x) {
        return x % 2 === 1;
      };
      describe('reduceWhile', function() {
        it('reduces until its predicate fails', function() {
          eq(R.reduceWhile(isOdd, R.add, 0, [1, 3, 1, 5, 20, 7, 7, 7]), 10);
        });
        it('returns its accumulator when given an empty array', function() {
          eq(R.reduceWhile(isOdd, R.add, 101, []), 101);
        });
        it('is curried', function() {
          var reduceWhileOdd = R.reduceWhile(isOdd);
          eq(reduceWhileOdd(R.add, 101, []), 101);
          eq(reduceWhileOdd(R.add, 0, [1, 2, 3, 4]), 1);
        });
        it('correctly reports the arity of curried versions', function() {
          var reduceWhileOdd = R.reduceWhile(isOdd);
          eq(reduceWhileOdd.length, 3);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    244: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('reduced', function() {
        it('wraps a value', function() {
          var v = {};
          eq(R.reduced(v)['@@transducer/value'], v);
        });
        it('flags value as reduced', function() {
          eq(R.reduced({})['@@transducer/reduced'], true);
        });
        it('short-circuits reduce', function() {
          eq(R.reduce(function(acc, v) {
            var result = acc + v;
            if (result >= 10) {
              result = R.reduced(result);
            }
            return result;
          }, 0, [1, 2, 3, 4, 5]), 10);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    245: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('reject', function() {
        var even = function(x) {
          return x % 2 === 0;
        };
        it('reduces an array to those not matching a filter', function() {
          eq(R.reject(even, [1, 2, 3, 4, 5]), [1, 3, 5]);
        });
        it('returns an empty array if no element matches', function() {
          eq(R.reject(function(x) {
            return x < 100;
          }, [1, 9, 99]), []);
        });
        it('returns an empty array if asked to filter an empty array', function() {
          eq(R.reject(function(x) {
            return x > 100;
          }, []), []);
        });
        it('returns an empty array if no element matches', function() {
          eq(R.reject(function(x) {
            return x < 100;
          }, [1, 9, 99]), []);
        });
        it('returns an empty array if asked to filter an empty array', function() {
          eq(R.reject(function(x) {
            return x > 100;
          }, []), []);
        });
        it('filters objects', function() {
          eq(R.reject(R.equals(0), {}), {});
          eq(R.reject(R.equals(0), {
            x: 0,
            y: 0,
            z: 0
          }), {});
          eq(R.reject(R.equals(0), {
            x: 1,
            y: 0,
            z: 0
          }), {x: 1});
          eq(R.reject(R.equals(0), {
            x: 1,
            y: 2,
            z: 0
          }), {
            x: 1,
            y: 2
          });
          eq(R.reject(R.equals(0), {
            x: 1,
            y: 2,
            z: 3
          }), {
            x: 1,
            y: 2,
            z: 3
          });
        });
        it('dispatches to `filter` method', function() {
          function Nothing() {}
          Nothing.value = new Nothing();
          Nothing.prototype.filter = function() {
            return this;
          };
          function Just(x) {
            this.value = x;
          }
          Just.prototype.filter = function(pred) {
            return pred(this.value) ? this : Nothing.value;
          };
          var m = new Just(42);
          eq(R.filter(R.T, m), m);
          eq(R.filter(R.F, m), Nothing.value);
          eq(R.reject(R.T, m), Nothing.value);
          eq(R.reject(R.F, m), m);
        });
        it('is curried', function() {
          var odd = R.reject(even);
          eq(odd([1, 2, 3, 4, 5, 6, 7]), [1, 3, 5, 7]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    246: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('remove', function() {
        it('splices out a sub-list of the given list', function() {
          var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
          eq(R.remove(2, 5, list), ['a', 'b', 'h', 'i', 'j']);
        });
        it('returns the appropriate sublist when start == 0', function() {
          var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
          eq(R.remove(0, 5, list), ['f', 'g', 'h', 'i', 'j']);
          eq(R.remove(0, 1, list), ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
          eq(R.remove(0, list.length, list), []);
        });
        it('removes the end of the list if the count is too large', function() {
          var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
          eq(R.remove(2, 20, list), ['a', 'b']);
        });
        it('retains the entire list if the start is too large', function() {
          var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
          eq(R.remove(13, 3, list), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
        });
        it('is curried', function() {
          var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
          eq(R.remove(13)(3)(list), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
          eq(R.remove(13, 3)(list), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    247: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('repeat', function() {
        it('returns a lazy list of identical values', function() {
          eq(R.repeat(0, 5), [0, 0, 0, 0, 0]);
        });
        it('can accept any value, including `null`', function() {
          eq(R.repeat(null, 3), [null, null, null]);
        });
        it('is curried', function() {
          var makeFoos = R.repeat('foo');
          eq(makeFoos(0), []);
          eq(makeFoos(3), ['foo', 'foo', 'foo']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    248: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('replace', function() {
        it('replaces substrings of the input string', function() {
          eq(R.replace('1', 'one', '1 two three'), 'one two three');
        });
        it('replaces regex matches of the input string', function() {
          eq(R.replace(/\d+/g, 'num', '1 2 three'), 'num num three');
        });
        it('is curried up to 3 arguments', function() {
          eq(R.replace('').constructor, Function);
          eq(R.replace('', '').constructor, Function);
          var replaceSemicolon = R.replace(';');
          var removeSemicolon = replaceSemicolon('');
          eq(removeSemicolon('return 42;'), 'return 42');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    249: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('reverse', function() {
        it('reverses arrays', function() {
          eq(R.reverse([]), []);
          eq(R.reverse([1]), [1]);
          eq(R.reverse([1, 2]), [2, 1]);
          eq(R.reverse([1, 2, 3]), [3, 2, 1]);
        });
        it('reverses strings', function() {
          eq(R.reverse(''), '');
          eq(R.reverse('a'), 'a');
          eq(R.reverse('ab'), 'ba');
          eq(R.reverse('abc'), 'cba');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    250: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('scan', function() {
        var add = function(a, b) {
          return a + b;
        };
        var mult = function(a, b) {
          return a * b;
        };
        it('scans simple functions over arrays with the supplied accumulator', function() {
          eq(R.scan(add, 0, [1, 2, 3, 4]), [0, 1, 3, 6, 10]);
          eq(R.scan(mult, 1, [1, 2, 3, 4]), [1, 1, 2, 6, 24]);
        });
        it('returns the accumulator for an empty array', function() {
          eq(R.scan(add, 0, []), [0]);
          eq(R.scan(mult, 1, []), [1]);
        });
        it('is curried', function() {
          var addOrConcat = R.scan(add);
          var sum = addOrConcat(0);
          var cat = addOrConcat('');
          eq(sum([1, 2, 3, 4]), [0, 1, 3, 6, 10]);
          eq(cat(['1', '2', '3', '4']), ['', '1', '12', '123', '1234']);
        });
        it('correctly reports the arity of curried versions', function() {
          var sum = R.scan(add, 0);
          eq(sum.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    251: [function(require, module, exports) {
      var S = require('sanctuary');
      var R = require('..');
      var Id = require('./shared/Id');
      var eq = require('./shared/eq');
      describe('sequence', function() {
        it('operates on a list of lists', function() {
          eq(R.sequence(R.of, []), [[]]);
          eq(R.sequence(R.of, [[], [1, 2, 3, 4]]), []);
          eq(R.sequence(R.of, [[1], [2, 3, 4]]), [[1, 2], [1, 3], [1, 4]]);
          eq(R.sequence(R.of, [[1, 2], [3, 4]]), [[1, 3], [1, 4], [2, 3], [2, 4]]);
          eq(R.sequence(R.of, [[1, 2, 3], [4]]), [[1, 4], [2, 4], [3, 4]]);
          eq(R.sequence(R.of, [[1, 2, 3, 4], []]), []);
        });
        it('operates on a list of applicatives', function() {
          eq(R.sequence(S.Maybe.of, [S.Just(3), S.Just(4), S.Just(5)]), S.Just([3, 4, 5]));
          eq(R.sequence(S.Maybe.of, [S.Just(3), S.Nothing(), S.Just(5)]), S.Nothing());
        });
        it('traverses left to right', function() {
          eq(R.sequence(S.Either.of, [S.Right(1), S.Right(2)]), S.Right([1, 2]));
          eq(R.sequence(S.Either.of, [S.Right(1), S.Left('XXX')]), S.Left('XXX'));
          eq(R.sequence(S.Either.of, [S.Left('XXX'), S.Right(1)]), S.Left('XXX'));
          eq(R.sequence(S.Either.of, [S.Left('XXX'), S.Left('YYY')]), S.Left('XXX'));
        });
        it('dispatches to `sequence` method', function() {
          eq(R.sequence(Id, [Id(1), Id(2), Id(3)]), Id([1, 2, 3]));
          eq(R.sequence(R.of, Id([1, 2, 3])), [Id(1), Id(2), Id(3)]);
        });
      });
    }, {
      "..": 1,
      "./shared/Id": 252,
      "./shared/eq": 254,
      "sanctuary": 41
    }],
    252: [function(require, module, exports) {
      var R = require('../..');
      function Id(x) {
        if (!(this instanceof Id)) {
          return new Id(x);
        }
        this.value = x;
      }
      Id.prototype.ap = function(id) {
        return Id(this.value(id.value));
      };
      Id.prototype.map = function(f) {
        return Id(f(this.value));
      };
      Id.prototype.sequence = function(of) {
        void of;
        return this.value.map(Id);
      };
      Id.prototype.toString = function() {
        return 'Id(' + R.toString(this.value) + ')';
      };
      module.exports = Id;
    }, {"../..": 1}],
    253: [function(require, module, exports) {
      var util = require('./internal/util');
      function Maybe(x) {
        return x == null ? _nothing : Maybe.Just(x);
      }
      function _Just(x) {
        this.value = x;
      }
      util.extend(_Just, Maybe);
      function _Nothing() {}
      util.extend(_Nothing, Maybe);
      var _nothing = new _Nothing();
      Maybe.Nothing = function() {
        return _nothing;
      };
      Maybe.Just = function(x) {
        return new _Just(x);
      };
      Maybe.of = Maybe.Just;
      Maybe.prototype.of = Maybe.Just;
      _Just.prototype.toString = function() {
        return 'Just(' + this.value + ')';
      };
      _Nothing.prototype.toString = function() {
        return 'Nothing()';
      };
      _Just.prototype.map = function(f) {
        return this.of(f(this.value));
      };
      _Nothing.prototype.map = util.returnThis;
      _Just.prototype.ap = function(m) {
        return m.map(this.value);
      };
      _Nothing.prototype.ap = util.identity;
      _Just.prototype.chain = util.baseMap;
      _Nothing.prototype.chain = util.returnThis;
      _Just.prototype.datatype = _Just;
      _Nothing.prototype.datatype = _Nothing;
      _Just.prototype.equals = function(that) {
        return that instanceof _Just && this.value === that.value;
      };
      _Nothing.prototype.equals = function(that) {
        return that === _nothing;
      };
      module.exports = Maybe;
    }, {"./internal/util.js": 255}],
    254: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('../..');
      module.exports = function(actual, expected) {
        assert.strictEqual(arguments.length, 2);
        assert.strictEqual(R.toString(actual), R.toString(expected));
      };
    }, {
      "../..": 1,
      "assert": 2
    }],
    255: [function(require, module, exports) {
      module.exports = {
        baseMap: function(f) {
          return f(this.value);
        },
        extend: function(Child, Parent) {
          function Ctor() {
            this.constructor = Child;
          }
          Ctor.prototype = Parent.prototype;
          Child.prototype = new Ctor();
          Child.super_ = Parent.prototype;
        },
        identity: function(x) {
          return x;
        },
        notImplemented: function(str) {
          return function() {
            throw new Error(str + ' is not implemented');
          };
        },
        notCallable: function(fn) {
          return function() {
            throw new Error(fn + ' cannot be called directly');
          };
        },
        returnThis: function() {
          return this;
        }
      };
    }, {}],
    256: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('slice', function() {
        it('retrieves the proper sublist of a list', function() {
          var list = [8, 6, 7, 5, 3, 0, 9];
          eq(R.slice(2, 5, list), [7, 5, 3]);
        });
        it('handles array-like object', function() {
          var args = (function() {
            return arguments;
          }(1, 2, 3, 4, 5));
          eq(R.slice(1, 4, args), [2, 3, 4]);
        });
        it('can operate on strings', function() {
          eq(R.slice(0, 0, 'abc'), '');
          eq(R.slice(0, 1, 'abc'), 'a');
          eq(R.slice(0, 2, 'abc'), 'ab');
          eq(R.slice(0, 3, 'abc'), 'abc');
          eq(R.slice(0, 4, 'abc'), 'abc');
          eq(R.slice(1, 0, 'abc'), '');
          eq(R.slice(1, 1, 'abc'), '');
          eq(R.slice(1, 2, 'abc'), 'b');
          eq(R.slice(1, 3, 'abc'), 'bc');
          eq(R.slice(1, 4, 'abc'), 'bc');
          eq(R.slice(0, -4, 'abc'), '');
          eq(R.slice(0, -3, 'abc'), '');
          eq(R.slice(0, -2, 'abc'), 'a');
          eq(R.slice(0, -1, 'abc'), 'ab');
          eq(R.slice(0, -0, 'abc'), '');
          eq(R.slice(-2, -4, 'abc'), '');
          eq(R.slice(-2, -3, 'abc'), '');
          eq(R.slice(-2, -2, 'abc'), '');
          eq(R.slice(-2, -1, 'abc'), 'b');
          eq(R.slice(-2, -0, 'abc'), '');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    257: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('sort', function() {
        it('sorts the elements of a list', function() {
          eq(R.sort(function(a, b) {
            return a - b;
          }, [3, 1, 8, 1, 2, 5]), [1, 1, 2, 3, 5, 8]);
        });
        it('does not affect the list passed supplied', function() {
          var list = [3, 1, 8, 1, 2, 5];
          eq(R.sort(function(a, b) {
            return a - b;
          }, list), [1, 1, 2, 3, 5, 8]);
          eq(list, [3, 1, 8, 1, 2, 5]);
        });
        it('is curried', function() {
          var sortByLength = R.sort(function(a, b) {
            return a.length - b.length;
          });
          eq(sortByLength(['one', 'two', 'three', 'four', 'five', 'six']), ['one', 'two', 'six', 'four', 'five', 'three']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    258: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      var albums = [{
        title: 'Art of the Fugue',
        artist: 'Glenn Gould',
        genre: 'Baroque'
      }, {
        title: 'A Farewell to Kings',
        artist: 'Rush',
        genre: 'Rock'
      }, {
        title: 'Timeout',
        artist: 'Dave Brubeck Quartet',
        genre: 'Jazz'
      }, {
        title: 'Fly By Night',
        artist: 'Rush',
        genre: 'Rock'
      }, {
        title: 'Goldberg Variations',
        artist: 'Daniel Barenboim',
        genre: 'Baroque'
      }, {
        title: 'New World Symphony',
        artist: 'Leonard Bernstein',
        genre: 'Romantic'
      }, {
        title: 'Romance with the Unseen',
        artist: 'Don Byron',
        genre: 'Jazz'
      }, {
        title: 'Somewhere In Time',
        artist: 'Iron Maiden',
        genre: 'Metal'
      }, {
        title: 'In Times of Desparation',
        artist: 'Danny Holt',
        genre: 'Modern'
      }, {
        title: 'Evita',
        artist: 'Various',
        genre: 'Broadway'
      }, {
        title: 'Five Leaves Left',
        artist: 'Nick Drake',
        genre: 'Folk'
      }, {
        title: 'The Magic Flute',
        artist: 'John Eliot Gardiner',
        genre: 'Classical'
      }];
      describe('sortBy', function() {
        it('sorts by a simple property of the objects', function() {
          var sortedAlbums = R.sortBy(R.prop('title'), albums);
          eq(sortedAlbums.length, albums.length);
          eq(sortedAlbums[0].title, 'A Farewell to Kings');
          eq(sortedAlbums[11].title, 'Timeout');
        });
        it('is curried', function() {
          var sorter = R.sortBy(R.prop('title'));
          var sortedAlbums = sorter(albums);
          eq(sortedAlbums.length, albums.length);
          eq(sortedAlbums[0].title, 'A Farewell to Kings');
          eq(sortedAlbums[11].title, 'Timeout');
        });
        it('preserves object identity', function() {
          var a = {value: 'a'};
          var b = {value: 'b'};
          var result = R.sortBy(R.prop('value'), [b, a]);
          eq(result[0], a);
          eq(result[1], b);
        });
        it('sorts array-like object', function() {
          var args = (function() {
            return arguments;
          }('c', 'a', 'b'));
          var result = R.sortBy(R.identity, args);
          eq(result[0], 'a');
          eq(result[1], 'b');
          eq(result[2], 'c');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    259: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('split', function() {
        it('splits a string into an array', function() {
          eq(R.split('.', 'a.b.c.xyz.d'), ['a', 'b', 'c', 'xyz', 'd']);
        });
        it('the split string can be arbitrary', function() {
          eq(R.split('at', 'The Cat in the Hat sat on the mat'), ['The C', ' in the H', ' s', ' on the m', '']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    260: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('splitAt', function() {
        it('splits an array at a given index', function() {
          eq(R.splitAt(1, [1, 2, 3]), [[1], [2, 3]]);
        });
        it('splits a string at a given index', function() {
          eq(R.splitAt(5, 'hello world'), ['hello', ' world']);
        });
        it('is curried', function() {
          var splitAtThree = R.splitAt(3);
          eq(splitAtThree('foobar'), ['foo', 'bar']);
        });
        it('can handle index greater than array length', function() {
          eq(R.splitAt(4, [1, 2]), [[1, 2], []]);
        });
        it('can support negative index', function() {
          eq(R.splitAt(-1, 'foobar'), ['fooba', 'r']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    261: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('splitEvery', function() {
        it('splits a collection into slices of the specified length', function() {
          eq(R.splitEvery(1, [1, 2, 3, 4]), [[1], [2], [3], [4]]);
          eq(R.splitEvery(2, [1, 2, 3, 4]), [[1, 2], [3, 4]]);
          eq(R.splitEvery(3, [1, 2, 3, 4]), [[1, 2, 3], [4]]);
          eq(R.splitEvery(4, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
          eq(R.splitEvery(5, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
          eq(R.splitEvery(3, []), []);
          eq(R.splitEvery(1, 'abcd'), ['a', 'b', 'c', 'd']);
          eq(R.splitEvery(2, 'abcd'), ['ab', 'cd']);
          eq(R.splitEvery(3, 'abcd'), ['abc', 'd']);
          eq(R.splitEvery(4, 'abcd'), ['abcd']);
          eq(R.splitEvery(5, 'abcd'), ['abcd']);
          eq(R.splitEvery(3, ''), []);
        });
        it('throws if first argument is not positive', function() {
          var test = function(err) {
            return err.constructor === Error && err.message === 'First argument to splitEvery must be a positive integer';
          };
          assert.throws(function() {
            R.splitEvery(0, []);
          }, test);
          assert.throws(function() {
            R.splitEvery(0, '');
          }, test);
          assert.throws(function() {
            R.splitEvery(-1, []);
          }, test);
          assert.throws(function() {
            R.splitEvery(-1, '');
          }, test);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    262: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('splitWhen', function() {
        it('splits an array at the first instance to satisfy the predicate', function() {
          eq(R.splitWhen(R.equals(2), [1, 2, 3]), [[1], [2, 3]]);
        });
        it('retains all original elements', function() {
          eq(R.splitWhen(R.T, [1, 1, 1]), [[], [1, 1, 1]]);
        });
        it('is curried', function() {
          var splitWhenFoo = R.splitWhen(R.equals('foo'));
          eq(splitWhenFoo(['foo', 'bar', 'baz']), [[], ['foo', 'bar', 'baz']]);
        });
        it('only splits once', function() {
          eq(R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]), [[1], [2, 3, 1, 2, 3]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    263: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('subtract', function() {
        it('subtracts two numbers', function() {
          eq(R.subtract(22, 7), 15);
        });
        it('coerces its arguments to numbers', function() {
          eq(R.subtract('1', '2'), -1);
          eq(R.subtract(1, '2'), -1);
          eq(R.subtract(true, false), 1);
          eq(R.subtract(null, null), 0);
          eq(R.subtract(undefined, undefined), NaN);
          eq(R.subtract(new Date(1), new Date(2)), -1);
        });
        it('is curried', function() {
          var ninesCompl = R.subtract(9);
          eq(ninesCompl(6), 3);
        });
        it('behaves right curried when passed `R.__` for its first argument', function() {
          var minus5 = R.subtract(R.__, 5);
          eq(minus5(17), 12);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    264: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('sum', function() {
        it('adds together the array of numbers supplied', function() {
          eq(R.sum([1, 2, 3, 4]), 10);
        });
        it('does not save the state of the accumulator', function() {
          eq(R.sum([1, 2, 3, 4]), 10);
          eq(R.sum([1]), 1);
          eq(R.sum([5, 5, 5, 5, 5]), 25);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    265: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('symmetricDifference', function() {
        var M = [1, 2, 3, 4];
        var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
        var N = [3, 4, 5, 6];
        var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
        var Z = [3, 4, 5, 6, 10];
        var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
        it('finds the set of all elements in the first or second list but not both', function() {
          eq(R.symmetricDifference(M, N), [1, 2, 5, 6]);
        });
        it('does not allow duplicates in the output even if the input lists had duplicates', function() {
          eq(R.symmetricDifference(M2, N2), [1, 2, 5, 6]);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.symmetricDifference([0], [-0]).length, 2);
          eq(R.symmetricDifference([-0], [0]).length, 2);
          eq(R.symmetricDifference([NaN], [NaN]).length, 0);
          eq(R.symmetricDifference([new Just([42])], [new Just([42])]).length, 0);
        });
        it('works for arrays of different lengths', function() {
          eq(R.symmetricDifference(Z, Z2), [10, 1, 2, 7, 8]);
          eq(R.symmetricDifference(Z2, Z), [1, 2, 7, 8, 10]);
        });
        it('will not create a "sparse" array', function() {
          eq(R.symmetricDifference(M2, [3]).length, 3);
        });
        it('returns an empty array if there are no different elements', function() {
          eq(R.symmetricDifference(M2, M), []);
          eq(R.symmetricDifference(M, M2), []);
        });
        it('is curried', function() {
          eq(typeof R.symmetricDifference([1, 2, 3]), 'function');
          eq(R.symmetricDifference([1, 2, 3])([1, 3]), [2]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    266: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('symmetricDifferenceWith', function() {
        var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
        var Ro2 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 1}, {a: 2}, {a: 3}, {a: 4}];
        var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
        var So2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}, {a: 3}, {a: 4}, {a: 5}, {a: 6}];
        var eqA = function(r, s) {
          return r.a === s.a;
        };
        var identical = function(a, b) {
          return a === b;
        };
        it('combines two lists into the set of all elements unique to either list based on the passed-in equality predicate', function() {
          eq(R.symmetricDifferenceWith(eqA, Ro, So), [{a: 1}, {a: 2}, {a: 5}, {a: 6}]);
        });
        it('does not allow duplicates in the output even if the input lists had duplicates', function() {
          eq(R.symmetricDifferenceWith(eqA, Ro2, So2), [{a: 1}, {a: 2}, {a: 5}, {a: 6}]);
        });
        it('does not return a "sparse" array', function() {
          eq(R.symmetricDifferenceWith(identical, [1, 3, 2, 1, 3, 1, 2, 3], [3]).length, 2);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    267: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('tail', function() {
        it('returns the tail of an ordered collection', function() {
          eq(R.tail([1, 2, 3]), [2, 3]);
          eq(R.tail([2, 3]), [3]);
          eq(R.tail([3]), []);
          eq(R.tail([]), []);
          eq(R.tail('abc'), 'bc');
          eq(R.tail('bc'), 'c');
          eq(R.tail('c'), '');
          eq(R.tail(''), '');
        });
        it('throws if applied to null or undefined', function() {
          assert.throws(function() {
            R.tail(null);
          }, TypeError);
          assert.throws(function() {
            R.tail(undefined);
          }, TypeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    268: [function(require, module, exports) {
      var assert = require('assert');
      var sinon = require('sinon');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('take', function() {
        it('takes only the first `n` elements from a list', function() {
          eq(R.take(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c']);
        });
        it('returns only as many as the array can provide', function() {
          eq(R.take(3, [1, 2]), [1, 2]);
          eq(R.take(3, []), []);
        });
        it('returns an equivalent list if `n` is < 0', function() {
          eq(R.take(-1, [1, 2, 3]), [1, 2, 3]);
          eq(R.take(-Infinity, [1, 2, 3]), [1, 2, 3]);
        });
        it('never returns the input array', function() {
          var xs = [1, 2, 3];
          assert.notStrictEqual(R.take(3, xs), xs);
          assert.notStrictEqual(R.take(Infinity, xs), xs);
          assert.notStrictEqual(R.take(-1, xs), xs);
        });
        it('can operate on strings', function() {
          eq(R.take(3, 'Ramda'), 'Ram');
          eq(R.take(2, 'Ramda'), 'Ra');
          eq(R.take(1, 'Ramda'), 'R');
          eq(R.take(0, 'Ramda'), '');
        });
        it('handles zero correctly (#1224)', function() {
          eq(R.into([], R.take(0), [1, 2, 3]), []);
        });
        it('steps correct number of times', function() {
          var spy = sinon.spy();
          R.into([], R.compose(R.map(spy), R.take(2)), [1, 2, 3]);
          sinon.assert.calledTwice(spy);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2,
      "sinon": 42
    }],
    269: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('takeLast', function() {
        it('takes only the last `n` elements from a list', function() {
          eq(R.takeLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['e', 'f', 'g']);
        });
        it('returns only as many as the array can provide', function() {
          eq(R.takeLast(3, [1, 2]), [1, 2]);
          eq(R.takeLast(3, []), []);
        });
        it('returns an equivalent list if `n` is < 0', function() {
          eq(R.takeLast(-1, [1, 2, 3]), [1, 2, 3]);
          eq(R.takeLast(-Infinity, [1, 2, 3]), [1, 2, 3]);
        });
        it('never returns the input array', function() {
          var xs = [1, 2, 3];
          assert.notStrictEqual(R.takeLast(3, xs), xs);
          assert.notStrictEqual(R.takeLast(Infinity, xs), xs);
          assert.notStrictEqual(R.takeLast(-1, xs), xs);
        });
        it('can operate on strings', function() {
          eq(R.takeLast(3, 'Ramda'), 'mda');
        });
        it('handles zero correctly (#1224)', function() {
          eq(R.takeLast(0, [1, 2, 3]), []);
        });
        it('is curried', function() {
          var takeLast3 = R.takeLast(3);
          eq(takeLast3(['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['e', 'f', 'g']);
          eq(takeLast3(['w', 'x', 'y', 'z']), ['x', 'y', 'z']);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    270: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('takeLastWhile', function() {
        it('continues taking elements while the function reports `true`', function() {
          eq(R.takeLastWhile(function(x) {
            return x !== 5;
          }, [1, 3, 5, 7, 9]), [7, 9]);
        });
        it('starts at the right arg and acknowledges undefined', function() {
          eq(R.takeLastWhile(function() {
            assert(false);
          }, []), []);
          eq(R.takeLastWhile(function(x) {
            return x !== void 0;
          }, [1, 3, void 0, 5, 7]), [5, 7]);
        });
        it('is curried', function() {
          var takeLastUntil7 = R.takeLastWhile(function(x) {
            return x !== 7;
          });
          eq(takeLastUntil7([1, 3, 5, 7, 9]), [9]);
          eq(takeLastUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    271: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('takeWhile', function() {
        it('continues taking elements while the function reports `true`', function() {
          eq(R.takeWhile(function(x) {
            return x !== 5;
          }, [1, 3, 5, 7, 9]), [1, 3]);
        });
        it('starts at the right arg and acknowledges undefined', function() {
          eq(R.takeWhile(function() {
            assert(false);
          }, []), []);
          eq(R.takeWhile(function(x) {
            return x !== void 0;
          }, [1, 3, void 0, 5, 7]), [1, 3]);
        });
        it('is curried', function() {
          var takeUntil7 = R.takeWhile(function(x) {
            return x !== 7;
          });
          eq(takeUntil7([1, 3, 5, 7, 9]), [1, 3, 5]);
          eq(takeUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    272: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('tap', function() {
        it('returns a function that always returns its argument', function() {
          var f = R.tap(R.identity);
          eq(typeof f, 'function');
          eq(f(100), 100);
        });
        it("may take a function as the first argument that executes with tap's argument", function() {
          var sideEffect = 0;
          eq(sideEffect, 0);
          var rv = R.tap(function(x) {
            sideEffect = 'string ' + x;
          }, 200);
          eq(rv, 200);
          eq(sideEffect, 'string 200');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    273: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('test', function() {
        it('returns true if string matches pattern', function() {
          eq(R.test(/^x/, 'xyz'), true);
        });
        it('returns false if string does not match pattern', function() {
          eq(R.test(/^y/, 'xyz'), false);
        });
        it('is referentially transparent', function() {
          var pattern = /x/g;
          eq(pattern.lastIndex, 0);
          eq(R.test(pattern, 'xyz'), true);
          eq(pattern.lastIndex, 0);
          eq(R.test(pattern, 'xyz'), true);
        });
        it('throws if first argument is not a regexp', function() {
          assert.throws(function() {
            R.test('foo', 'bar');
          }, function(err) {
            return err.constructor === TypeError && err.message === '‘test’ requires a value of type RegExp ' + 'as its first argument; received "foo"';
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    274: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      describe('times', function() {
        it('takes a map func', function() {
          eq(R.times(R.identity, 5), [0, 1, 2, 3, 4]);
          eq(R.times(function(x) {
            return x * 2;
          }, 5), [0, 2, 4, 6, 8]);
        });
        it('is curried', function() {
          var mapid = R.times(R.identity);
          eq(mapid(5), [0, 1, 2, 3, 4]);
        });
        it('throws if second argument is not a valid array length', function() {
          assert.throws(function() {
            R.times(3)('cheers!');
          }, RangeError);
          assert.throws(function() {
            R.times(R.identity, -1);
          }, RangeError);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254,
      "assert": 2
    }],
    275: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('toLower', function() {
        it('returns the lower-case equivalent of the input string', function() {
          eq(R.toLower('XYZ'), 'xyz');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    276: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('toPairs', function() {
        it('converts an object into an array of two-element [key, value] arrays', function() {
          eq(R.toPairs({
            a: 1,
            b: 2,
            c: 3
          }), [['a', 1], ['b', 2], ['c', 3]]);
        });
        it("only iterates the object's own properties", function() {
          var F = function() {
            this.x = 1;
            this.y = 2;
          };
          F.prototype.protoProp = 'you can\'t see me';
          var f = new F();
          eq(R.toPairs(f), [['x', 1], ['y', 2]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    277: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('toPairsIn', function() {
        it('converts an object into an array of two-element [key, value] arrays', function() {
          eq(R.toPairsIn({
            a: 1,
            b: 2,
            c: 3
          }), [['a', 1], ['b', 2], ['c', 3]]);
        });
        it("iterates properties on the object's prototype chain", function() {
          function sortPairs(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
          }
          var F = function() {
            this.x = 1;
            this.y = 2;
          };
          F.prototype.protoProp = 'you can see me';
          var f = new F();
          eq(R.toPairsIn(f).sort(sortPairs), [['protoProp', 'you can see me'], ['x', 1], ['y', 2]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    278: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      describe('toString', function() {
        it('returns the string representation of null', function() {
          assert.strictEqual(R.toString(null), 'null');
        });
        it('returns the string representation of undefined', function() {
          assert.strictEqual(R.toString(undefined), 'undefined');
        });
        it('returns the string representation of a Boolean primitive', function() {
          assert.strictEqual(R.toString(true), 'true');
          assert.strictEqual(R.toString(false), 'false');
        });
        it('returns the string representation of a number primitive', function() {
          assert.strictEqual(R.toString(0), '0');
          assert.strictEqual(R.toString(-0), '-0');
          assert.strictEqual(R.toString(1.23), '1.23');
          assert.strictEqual(R.toString(-1.23), '-1.23');
          assert.strictEqual(R.toString(1e+23), '1e+23');
          assert.strictEqual(R.toString(-1e+23), '-1e+23');
          assert.strictEqual(R.toString(1e-23), '1e-23');
          assert.strictEqual(R.toString(-1e-23), '-1e-23');
          assert.strictEqual(R.toString(Infinity), 'Infinity');
          assert.strictEqual(R.toString(-Infinity), '-Infinity');
          assert.strictEqual(R.toString(NaN), 'NaN');
        });
        it('returns the string representation of a string primitive', function() {
          assert.strictEqual(R.toString('abc'), '"abc"');
          assert.strictEqual(R.toString('x "y" z'), '"x \\"y\\" z"');
          assert.strictEqual(R.toString("' '"), '"\' \'"');
          assert.strictEqual(R.toString('" "'), '"\\" \\""');
          assert.strictEqual(R.toString('\b \b'), '"\\b \\b"');
          assert.strictEqual(R.toString('\f \f'), '"\\f \\f"');
          assert.strictEqual(R.toString('\n \n'), '"\\n \\n"');
          assert.strictEqual(R.toString('\r \r'), '"\\r \\r"');
          assert.strictEqual(R.toString('\t \t'), '"\\t \\t"');
          assert.strictEqual(R.toString('\v \v'), '"\\v \\v"');
          assert.strictEqual(R.toString('\0 \0'), '"\\0 \\0"');
          assert.strictEqual(R.toString('\\ \\'), '"\\\\ \\\\"');
        });
        it('returns the string representation of a Boolean object', function() {
          assert.strictEqual(R.toString(new Boolean(true)), 'new Boolean(true)');
          assert.strictEqual(R.toString(new Boolean(false)), 'new Boolean(false)');
        });
        it('returns the string representation of a Number object', function() {
          assert.strictEqual(R.toString(new Number(0)), 'new Number(0)');
          assert.strictEqual(R.toString(new Number(-0)), 'new Number(-0)');
        });
        it('returns the string representation of a String object', function() {
          assert.strictEqual(R.toString(new String('abc')), 'new String("abc")');
          assert.strictEqual(R.toString(new String('x "y" z')), 'new String("x \\"y\\" z")');
          assert.strictEqual(R.toString(new String("' '")), 'new String("\' \'")');
          assert.strictEqual(R.toString(new String('" "')), 'new String("\\" \\"")');
          assert.strictEqual(R.toString(new String('\b \b')), 'new String("\\b \\b")');
          assert.strictEqual(R.toString(new String('\f \f')), 'new String("\\f \\f")');
          assert.strictEqual(R.toString(new String('\n \n')), 'new String("\\n \\n")');
          assert.strictEqual(R.toString(new String('\r \r')), 'new String("\\r \\r")');
          assert.strictEqual(R.toString(new String('\t \t')), 'new String("\\t \\t")');
          assert.strictEqual(R.toString(new String('\v \v')), 'new String("\\v \\v")');
          assert.strictEqual(R.toString(new String('\0 \0')), 'new String("\\0 \\0")');
          assert.strictEqual(R.toString(new String('\\ \\')), 'new String("\\\\ \\\\")');
        });
        it('returns the string representation of a Date object', function() {
          assert.strictEqual(R.toString(new Date('2001-02-03T04:05:06.000Z')), 'new Date("2001-02-03T04:05:06.000Z")');
          assert.strictEqual(R.toString(new Date('XXX')), 'new Date(NaN)');
        });
        it('returns the string representation of a RegExp object', function() {
          assert.strictEqual(R.toString(/(?:)/), '/(?:)/');
          assert.strictEqual(R.toString(/\//g), '/\\//g');
        });
        it('returns the string representation of a function', function() {
          assert.strictEqual(R.toString(function add(a, b) {
            return a + b;
          }), 'function add(a, b) { return a + b; }');
        });
        it('returns the string representation of an array', function() {
          assert.strictEqual(R.toString([]), '[]');
          assert.strictEqual(R.toString([1, 2, 3]), '[1, 2, 3]');
          assert.strictEqual(R.toString([1, [2, [3]]]), '[1, [2, [3]]]');
          assert.strictEqual(R.toString(['x', 'y']), '["x", "y"]');
        });
        it('returns the string representation of an array with non-numeric property names', function() {
          var xs = [1, 2, 3];
          xs.foo = 0;
          xs.bar = 0;
          xs.baz = 0;
          assert.strictEqual(R.toString(/x/.exec('xyz')), '["x", "index": 0, "input": "xyz"]');
          assert.strictEqual(R.toString(xs), '[1, 2, 3, "bar": 0, "baz": 0, "foo": 0]');
        });
        it('returns the string representation of an arguments object', function() {
          assert.strictEqual(R.toString((function() {
            return arguments;
          })()), '(function() { return arguments; }())');
          assert.strictEqual(R.toString((function() {
            return arguments;
          })(1, 2, 3)), '(function() { return arguments; }(1, 2, 3))');
          assert.strictEqual(R.toString((function() {
            return arguments;
          })(['x', 'y'])), '(function() { return arguments; }(["x", "y"]))');
        });
        it('returns the string representation of a plain object', function() {
          assert.strictEqual(R.toString({}), '{}');
          assert.strictEqual(R.toString({
            foo: 1,
            bar: 2,
            baz: 3
          }), '{"bar": 2, "baz": 3, "foo": 1}');
          assert.strictEqual(R.toString({'"quoted"': true}), '{"\\"quoted\\"": true}');
          assert.strictEqual(R.toString({a: {b: {c: {}}}}), '{"a": {"b": {"c": {}}}}');
        });
        it('treats instance without custom `toString` method as plain object', function() {
          function Point(x, y) {
            this.x = x;
            this.y = y;
          }
          assert.strictEqual(R.toString(new Point(1, 2)), '{"x": 1, "y": 2}');
        });
        it('dispatches to custom `toString` method', function() {
          function Point(x, y) {
            this.x = x;
            this.y = y;
          }
          Point.prototype.toString = function() {
            return 'new Point(' + this.x + ', ' + this.y + ')';
          };
          assert.strictEqual(R.toString(new Point(1, 2)), 'new Point(1, 2)');
          function Just(x) {
            if (!(this instanceof Just)) {
              return new Just(x);
            }
            this.value = x;
          }
          Just.prototype.toString = function() {
            return 'Just(' + R.toString(this.value) + ')';
          };
          assert.strictEqual(R.toString(Just(42)), 'Just(42)');
          assert.strictEqual(R.toString(Just([1, 2, 3])), 'Just([1, 2, 3])');
          assert.strictEqual(R.toString(Just(Just(Just('')))), 'Just(Just(Just("")))');
          assert.strictEqual(R.toString({toString: R.always('x')}), 'x');
        });
        it('handles object with no `toString` method', function() {
          if (typeof Object.create === 'function') {
            var a = Object.create(null);
            var b = Object.create(null);
            b.x = 1;
            b.y = 2;
            assert.strictEqual(R.toString(a), '{}');
            assert.strictEqual(R.toString(b), '{"x": 1, "y": 2}');
          }
        });
        it('handles circular references', function() {
          var a = [];
          a[0] = a;
          assert.strictEqual(R.toString(a), '[<Circular>]');
          var o = {};
          o.o = o;
          assert.strictEqual(R.toString(o), '{"o": <Circular>}');
          var b = ['bee'];
          var c = ['see'];
          b[1] = c;
          c[1] = b;
          assert.strictEqual(R.toString(b), '["bee", ["see", <Circular>]]');
          assert.strictEqual(R.toString(c), '["see", ["bee", <Circular>]]');
          var p = {};
          var q = {};
          p.q = q;
          q.p = p;
          assert.strictEqual(R.toString(p), '{"q": {"p": <Circular>}}');
          assert.strictEqual(R.toString(q), '{"p": {"q": <Circular>}}');
          var x = [];
          var y = {};
          x[0] = y;
          y.x = x;
          assert.strictEqual(R.toString(x), '[{"x": <Circular>}]');
          assert.strictEqual(R.toString(y), '{"x": [<Circular>]}');
        });
      });
    }, {
      "..": 1,
      "assert": 2
    }],
    279: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('toUpper', function() {
        it('returns the upper-case equivalent of the input string', function() {
          eq(R.toUpper('abc'), 'ABC');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    280: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('transduce', function() {
        var add = R.add;
        var mult = function(a, b) {
          return a * b;
        };
        var isOdd = function(b) {
          return b % 2 === 1;
        };
        var addxf = {
          '@@transducer/step': function(acc, x) {
            return acc + x;
          },
          '@@transducer/init': function() {
            return 0;
          },
          '@@transducer/result': function(x) {
            return x;
          }
        };
        var listxf = {
          '@@transducer/step': function(acc, x) {
            return acc.concat([x]);
          },
          '@@transducer/init': function() {
            return [];
          },
          '@@transducer/result': function(x) {
            return x;
          }
        };
        var multxf = {
          '@@transducer/step': function(acc, x) {
            return acc * x;
          },
          '@@transducer/init': function() {
            return 1;
          },
          '@@transducer/result': function(x) {
            return x;
          }
        };
        var toxf = function(fn) {
          return function(xf) {
            return {
              f: fn,
              '@@transducer/step': xf['@@transducer/step'],
              '@@transducer/result': xf['@@transducer/result'],
              xf: xf
            };
          };
        };
        it('transduces into arrays', function() {
          eq(R.transduce(R.map(add(1)), R.flip(R.append), [], [1, 2, 3, 4]), [2, 3, 4, 5]);
          eq(R.transduce(R.filter(isOdd), R.flip(R.append), [], [1, 2, 3, 4]), [1, 3]);
          eq(R.transduce(R.compose(R.map(add(1)), R.take(2)), R.flip(R.append), [], [1, 2, 3, 4]), [2, 3]);
        });
        it('transduces into strings', function() {
          var _add = function(x, y) {
            return x + y;
          };
          eq(R.transduce(R.map(R.inc), _add, '', [1, 2, 3, 4]), '2345');
          eq(R.transduce(R.filter(isOdd), _add, '', [1, 2, 3, 4]), '13');
          eq(R.transduce(R.compose(R.map(add(1)), R.take(2)), _add, '', [1, 2, 3, 4]), '23');
        });
        it('transduces into objects', function() {
          eq(R.transduce(R.map(R.identity), R.merge, {}, [{a: 1}, {
            b: 2,
            c: 3
          }]), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('folds transformer objects over a collection with the supplied accumulator', function() {
          eq(R.transduce(toxf(add), addxf, 0, [1, 2, 3, 4]), 10);
          eq(R.transduce(toxf(mult), multxf, 1, [1, 2, 3, 4]), 24);
          eq(R.transduce(toxf(R.concat), listxf, [0], [1, 2, 3, 4]), [0, 1, 2, 3, 4]);
          eq(R.transduce(toxf(add), add, 0, [1, 2, 3, 4]), 10);
          eq(R.transduce(toxf(mult), mult, 1, [1, 2, 3, 4]), 24);
        });
        it('dispatches to objects that implement `reduce`', function() {
          var obj = {
            x: [1, 2, 3],
            reduce: function() {
              return 'override';
            }
          };
          eq(R.transduce(R.map(add(1)), add, 0, obj), 'override');
          eq(R.transduce(R.map(add(1)), add, 10, obj), 'override');
        });
        it('returns the accumulator for an empty collection', function() {
          eq(R.transduce(toxf(add), addxf, 0, []), 0);
          eq(R.transduce(toxf(mult), multxf, 1, []), 1);
          eq(R.transduce(toxf(R.concat), listxf, [], []), []);
        });
        it('is curried', function() {
          var addOrCat1 = R.transduce(toxf(add));
          var addOrCat2 = addOrCat1(addxf);
          var sum = addOrCat2(0);
          var cat = addOrCat2('');
          eq(sum([1, 2, 3, 4]), 10);
          eq(cat(['1', '2', '3', '4']), '1234');
        });
        it('correctly reports the arity of curried versions', function() {
          var sum = R.transduce(toxf(add), addxf, 0);
          eq(sum.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    281: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('transpose', function() {
        it('returns an array of two arrays', function() {
          var input = [['a', 1], ['b', 2], ['c', 3]];
          eq(R.transpose(input), [['a', 'b', 'c'], [1, 2, 3]]);
        });
        it('skips elements when rows are shorter', function() {
          var actual = R.transpose([[10, 11], [20], [], [30, 31, 32]]);
          var expected = [[10, 20, 30], [11, 31], [32]];
          eq(actual, expected);
        });
        it('copes with empty arrays', function() {
          eq(R.transpose([]), []);
        });
        it('copes with true, false, null & undefined elements of arrays', function() {
          var actual = R.transpose([[true, false, undefined, null], [null, undefined, false, true]]);
          var expected = [[true, null], [false, undefined], [undefined, false], [null, true]];
          eq(actual, expected);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    282: [function(require, module, exports) {
      var S = require('sanctuary');
      var R = require('..');
      var Id = require('./shared/Id');
      var eq = require('./shared/eq');
      describe('traverse', function() {
        it('operates on a list of lists', function() {
          eq(R.traverse(R.of, R.map(R.add(10)), []), [[]]);
          eq(R.traverse(R.of, R.map(R.add(10)), [[], [1, 2, 3, 4]]), []);
          eq(R.traverse(R.of, R.map(R.add(10)), [[1], [2, 3, 4]]), [[11, 12], [11, 13], [11, 14]]);
          eq(R.traverse(R.of, R.map(R.add(10)), [[1, 2], [3, 4]]), [[11, 13], [11, 14], [12, 13], [12, 14]]);
          eq(R.traverse(R.of, R.map(R.add(10)), [[1, 2, 3], [4]]), [[11, 14], [12, 14], [13, 14]]);
          eq(R.traverse(R.of, R.map(R.add(10)), [[1, 2, 3, 4], []]), []);
        });
        it('operates on a list of applicatives', function() {
          eq(R.traverse(S.Maybe.of, R.map(R.add(10)), [S.Just(3), S.Just(4), S.Just(5)]), S.Just([13, 14, 15]));
          eq(R.traverse(S.Maybe.of, R.map(R.add(10)), [S.Just(3), S.Nothing(), S.Just(5)]), S.Nothing());
        });
        it('traverses left to right', function() {
          eq(R.traverse(S.Either.of, R.identity, [S.Right(1), S.Right(2)]), S.Right([1, 2]));
          eq(R.traverse(S.Either.of, R.identity, [S.Right(1), S.Left('XXX')]), S.Left('XXX'));
          eq(R.traverse(S.Either.of, R.identity, [S.Left('XXX'), S.Right(1)]), S.Left('XXX'));
          eq(R.traverse(S.Either.of, R.identity, [S.Left('XXX'), S.Left('YYY')]), S.Left('XXX'));
        });
        it('dispatches to `sequence` method', function() {
          eq(R.traverse(Id, R.map(R.negate), [Id(1), Id(2), Id(3)]), Id([-1, -2, -3]));
          eq(R.traverse(R.of, R.map(R.negate), Id([1, 2, 3])), [Id(-1), Id(-2), Id(-3)]);
        });
      });
    }, {
      "..": 1,
      "./shared/Id": 252,
      "./shared/eq": 254,
      "sanctuary": 41
    }],
    283: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('trim', function() {
        var test = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFFHello, World!\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
        it('trims a string', function() {
          eq(R.trim('   xyz  '), 'xyz');
        });
        it('trims all ES5 whitespace', function() {
          eq(R.trim(test), 'Hello, World!');
          eq(R.trim(test).length, 13);
        });
        it('does not trim the zero-width space', function() {
          eq(R.trim('\u200b'), '\u200b');
          eq(R.trim('\u200b').length, 1);
        });
        if (typeof String.prototype.trim !== 'function') {
          it('falls back to a shim if String.prototype.trim is not present', function() {
            eq(R.trim('   xyz  '), 'xyz');
            eq(R.trim(test), 'Hello, World!');
            eq(R.trim(test).length, 13);
            eq(R.trim('\u200b'), '\u200b');
            eq(R.trim('\u200b').length, 1);
          });
        }
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    284: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('tryCatch', function() {
        function headX(ls) {
          return ls[0].x;
        }
        function catcher() {
          return 10101;
        }
        it('takes two functions and return a function', function() {
          var mayThrow = R.tryCatch(headX, catcher);
          eq(typeof mayThrow, 'function');
        });
        it('returns a function with the same arity as the `tryer` function', function() {
          function a1(a) {
            return a;
          }
          function a2(a, b) {
            return b;
          }
          function a3(a, b, c) {
            return c;
          }
          function a4(a, b, c, d) {
            return d;
          }
          eq(R.tryCatch(a1, catcher).length, a1.length);
          eq(R.tryCatch(a2, catcher).length, a2.length);
          eq(R.tryCatch(a3, catcher).length, a3.length);
          eq(R.tryCatch(a4, catcher).length, a4.length);
        });
        it('returns the value of the first function if it does not throw', function() {
          var mayThrow = R.tryCatch(headX, catcher);
          eq(mayThrow([{x: 10}, {x: 20}, {x: 30}]), 10);
        });
        it('returns the value of the second function if the first function throws', function() {
          function throw10() {
            throw new Error(10);
          }
          function eCatcher(e) {
            return Number(e.message);
          }
          var mayThrow = R.tryCatch(headX, catcher);
          eq(mayThrow([]), 10101);
          var willThrow = R.tryCatch(throw10, eCatcher);
          eq(willThrow([]), 10);
          eq(willThrow([{}, {}, {}]), 10);
        });
        it('the second function gets passed the error object and the same arguments as the first function', function() {
          function thrower(a, b, c) {
            void c;
            throw new Error('throwerError');
          }
          function catch3(e, a, b, c) {
            return [e.message, a, b, c].join(' ');
          }
          var mayThrow = R.tryCatch(thrower, catch3);
          eq(mayThrow('A', 'B', 'C'), 'throwerError A B C');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    285: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('type', function() {
        it('"Array" if given an array literal', function() {
          eq(R.type([1, 2, 3]), 'Array');
        });
        it('"Object" if given an object literal', function() {
          eq(R.type({batman: 'na na na na na na na'}), 'Object');
        });
        it('"RegExp" if given a RegExp literal', function() {
          eq(R.type(/[A-z]/), 'RegExp');
        });
        it('"Number" if given a numeric value', function() {
          eq(R.type(4), 'Number');
        });
        it('"Number" if given the NaN value', function() {
          eq(R.type(NaN), 'Number');
        });
        it('"String" if given a String literal', function() {
          eq(R.type('Gooooodd Mornning Ramda!!'), 'String');
        });
        it('"String" if given a String object', function() {
          eq(R.type(new String('I am a String object')), 'String');
        });
        it('"Null" if given the null value', function() {
          eq(R.type(null), 'Null');
        });
        it('"Undefined" if given the undefined value', function() {
          eq(R.type(undefined), 'Undefined');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    286: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('unapply', function() {
        it('returns a function which is always passed one argument', function() {
          var fn = R.unapply(function() {
            return arguments.length;
          });
          eq(fn(), 1);
          eq(fn('x'), 1);
          eq(fn('x', 'y'), 1);
          eq(fn('x', 'y', 'z'), 1);
        });
        it('forwards arguments to decorated function as an array', function() {
          var fn = R.unapply(function(xs) {
            return '[' + xs + ']';
          });
          eq(fn(), '[]');
          eq(fn(2), '[2]');
          eq(fn(2, 4), '[2,4]');
          eq(fn(2, 4, 6), '[2,4,6]');
        });
        it('returns a function with length 0', function() {
          var fn = R.unapply(R.identity);
          eq(fn.length, 0);
        });
        it('is the inverse of R.apply', function() {
          var a,
              b,
              c,
              d,
              e,
              f,
              g,
              n;
          var rand = function() {
            return Math.floor(200 * Math.random()) - 100;
          };
          f = Math.max;
          g = R.unapply(R.apply(f));
          n = 1;
          while (n <= 100) {
            a = rand();
            b = rand();
            c = rand();
            d = rand();
            e = rand();
            eq(f(a, b, c, d, e), g(a, b, c, d, e));
            n += 1;
          }
          f = function(xs) {
            return '[' + xs + ']';
          };
          g = R.apply(R.unapply(f));
          n = 1;
          while (n <= 100) {
            a = rand();
            b = rand();
            c = rand();
            d = rand();
            e = rand();
            eq(f([a, b, c, d, e]), g([a, b, c, d, e]));
            n += 1;
          }
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    287: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('unary', function() {
        it('turns multiple-argument function into unary one', function() {
          R.unary(function(x, y, z) {
            eq(arguments.length, 1);
            eq(typeof y, 'undefined');
            eq(typeof z, 'undefined');
          })(10, 20, 30);
        });
        it('initial argument is passed through normally', function() {
          R.unary(function(x, y, z) {
            eq(x, 10);
            void z;
          })(10, 20, 30);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    288: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('uncurryN', function() {
        function a2(a) {
          return function(b) {
            return a + b;
          };
        }
        function a3(a) {
          return function(b) {
            return function(c) {
              return a + b + c;
            };
          };
        }
        function a3b(a) {
          return function(b) {
            return function(c) {
              return a + b + c + (arguments[1] || 0) + (arguments[2] || 0);
            };
          };
        }
        function a4(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return a + b + c + d;
              };
            };
          };
        }
        it('accepts an arity', function() {
          var uncurried = R.uncurryN(3, a3);
          eq(uncurried(1, 2, 3), 6);
        });
        it('returns a function of the specified arity', function() {
          eq(R.uncurryN(2, a2).length, 2);
          eq(R.uncurryN(3, a3).length, 3);
          eq(R.uncurryN(4, a4).length, 4);
        });
        it('forwards extra arguments', function() {
          var g = R.uncurryN(3, a3b);
          eq(g(1, 2, 3), 6);
          eq(g(1, 2, 3, 4), 10);
          eq(g(1, 2, 3, 4, 5), 15);
        });
        it('works with ordinary uncurried functions', function() {
          eq(R.uncurryN(2, function(a, b) {
            return a + b;
          })(10, 20), 30);
          eq(R.uncurryN(3, function(a, b, c) {
            return a + b + c;
          })(10, 20, 30), 60);
        });
        it('works with ramda-curried functions', function() {
          eq(R.uncurryN(2, R.add)(10, 20), 30);
        });
        it('returns a function that supports R.__ placeholder', function() {
          var g = R.uncurryN(3, a3);
          var _ = R.__;
          eq(g(1)(2)(3), 6);
          eq(g(1)(2, 3), 6);
          eq(g(1, 2)(3), 6);
          eq(g(1, 2, 3), 6);
          eq(g(_, 2, 3)(1), 6);
          eq(g(1, _, 3)(2), 6);
          eq(g(1, 2, _)(3), 6);
          eq(g(1, _, _)(2)(3), 6);
          eq(g(_, 2, _)(1)(3), 6);
          eq(g(_, _, 3)(1)(2), 6);
          eq(g(1, _, _)(2, 3), 6);
          eq(g(_, 2, _)(1, 3), 6);
          eq(g(_, _, 3)(1, 2), 6);
          eq(g(1, _, _)(_, 3)(2), 6);
          eq(g(_, 2, _)(_, 3)(1), 6);
          eq(g(_, _, 3)(_, 2)(1), 6);
          eq(g(_, _, _)(_, _)(_)(1, 2, 3), 6);
          eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), 6);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    289: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('unfold', function() {
        it('unfolds simple functions with a starting point to create a list', function() {
          eq(R.unfold(function(n) {
            if (n > 0) {
              return [n, n - 1];
            }
          }, 10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        });
        it('is cool!', function() {
          var fib = function(n) {
            var count = 0;
            return function(pair) {
              count += 1;
              if (count <= n) {
                return [pair[0], [pair[1], pair[0] + pair[1]]];
              }
            };
          };
          eq(R.unfold(fib(10), [0, 1]), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    290: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('union', function() {
        var M = [1, 2, 3, 4];
        var N = [3, 4, 5, 6];
        it('combines two lists into the set of all their elements', function() {
          eq(R.union(M, N), [1, 2, 3, 4, 5, 6]);
        });
        it('is curried', function() {
          eq(typeof R.union(M), 'function');
          eq(R.union(M)(N), [1, 2, 3, 4, 5, 6]);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.union([0], [-0]).length, 2);
          eq(R.union([-0], [0]).length, 2);
          eq(R.union([NaN], [NaN]).length, 1);
          eq(R.union([new Just([42])], [new Just([42])]).length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    291: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('unionWith', function() {
        var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
        var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
        var eqA = function(r, s) {
          return r.a === s.a;
        };
        it('combines two lists into the set of all their elements based on the passed-in equality predicate', function() {
          eq(R.unionWith(eqA, Ro, So), [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}, {a: 6}]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    292: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('uniq', function() {
        it('returns a set from any array (i.e. purges duplicate elements)', function() {
          var list = [1, 2, 3, 1, 2, 3, 1, 2, 3];
          eq(R.uniq(list), [1, 2, 3]);
        });
        it('keeps elements from the left', function() {
          eq(R.uniq([1, 2, 3, 4, 1]), [1, 2, 3, 4]);
        });
        it('returns an empty array for an empty array', function() {
          eq(R.uniq([]), []);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.uniq([-0, -0]).length, 1);
          eq(R.uniq([0, -0]).length, 2);
          eq(R.uniq([NaN, NaN]).length, 1);
          eq(R.uniq([[1], [1]]).length, 1);
          eq(R.uniq([new Just([42]), new Just([42])]).length, 1);
        });
        it('handles null and undefined elements', function() {
          eq(R.uniq([void 0, null, void 0, null]), [void 0, null]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    293: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('uniqBy', function() {
        it('returns a set from any array based on predicate', function() {
          eq(R.uniqBy(Math.abs, [-2, -1, 0, 1, 2]), [-2, -1, 0]);
        });
        it('keeps elements from the left', function() {
          eq(R.uniqBy(Math.abs, [-1, 2, 4, 3, 1, 3]), [-1, 2, 4, 3]);
        });
        it('returns an empty array for an empty array', function() {
          eq(R.uniqBy(R.identity, []), []);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.uniqBy(R.identity, [-0, 0]).length, 2);
          eq(R.uniqBy(R.identity, [NaN, NaN]).length, 1);
          eq(R.uniqBy(R.identity, [new Just([1, 2, 3]), new Just([1, 2, 3])]).length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    294: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('uniqWith', function() {
        var objs = [{
          x: R.T,
          i: 0
        }, {
          x: R.F,
          i: 1
        }, {
          x: R.T,
          i: 2
        }, {
          x: R.T,
          i: 3
        }, {
          x: R.F,
          i: 4
        }, {
          x: R.F,
          i: 5
        }, {
          x: R.T,
          i: 6
        }, {
          x: R.F,
          i: 7
        }];
        var objs2 = [{
          x: R.T,
          i: 0
        }, {
          x: R.F,
          i: 1
        }, {
          x: R.T,
          i: 2
        }, {
          x: R.T,
          i: 3
        }, {
          x: R.F,
          i: 0
        }, {
          x: R.T,
          i: 1
        }, {
          x: R.F,
          i: 2
        }, {
          x: R.F,
          i: 3
        }];
        function eqI(x, accX) {
          return x.i === accX.i;
        }
        it('returns a set from any array (i.e. purges duplicate elements) based on predicate', function() {
          eq(R.uniqWith(eqI, objs), objs);
          eq(R.uniqWith(eqI, objs2), [{
            x: R.T,
            i: 0
          }, {
            x: R.F,
            i: 1
          }, {
            x: R.T,
            i: 2
          }, {
            x: R.T,
            i: 3
          }]);
        });
        it('keeps elements from the left', function() {
          eq(R.uniqWith(eqI, [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 1}]), [{i: 1}, {i: 2}, {i: 3}, {i: 4}]);
        });
        it('returns an empty array for an empty array', function() {
          eq(R.uniqWith(eqI, []), []);
        });
        it('is curried', function() {
          eq(typeof R.uniqWith(eqI), 'function');
          eq(R.uniqWith(eqI)(objs), objs);
          eq(R.uniqWith(eqI)(objs2), [{
            x: R.T,
            i: 0
          }, {
            x: R.F,
            i: 1
          }, {
            x: R.T,
            i: 2
          }, {
            x: R.T,
            i: 3
          }]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    295: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('unless', function() {
        it('calls the whenFalse function if the validator returns a falsy value', function() {
          eq(R.unless(R.isArrayLike, R.of)(10), [10]);
        });
        it('returns the argument unmodified if the validator returns a truthy value', function() {
          eq(R.unless(R.isArrayLike, R.of)([10]), [10]);
        });
        it('returns a curried function', function() {
          eq(R.unless(R.isArrayLike)(R.of)(10), [10]);
          eq(R.unless(R.isArrayLike)(R.of)([10]), [10]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    296: [function(require, module, exports) {
      var assert = require('assert');
      var R = require('..');
      var eq = require('./shared/eq');
      var Maybe = require('./shared/Maybe');
      describe('unnest', function() {
        it('only flattens one layer deep of a nested list', function() {
          var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
          eq(R.unnest(nest), [1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10]);
          nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
          eq(R.unnest(nest), [[[3]], 2, 1, 0, [-1, -2], -3]);
          eq(R.unnest([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
        });
        it('is not destructive', function() {
          var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
          assert.notStrictEqual(R.unnest(nest), nest);
        });
        it('handles array-like objects', function() {
          var o = {
            length: 3,
            0: [1, 2, [3]],
            1: [],
            2: ['a', 'b', 'c', ['d', 'e']]
          };
          eq(R.unnest(o), [1, 2, [3], 'a', 'b', 'c', ['d', 'e']]);
        });
        it('flattens an array of empty arrays', function() {
          eq(R.unnest([[], [], []]), []);
          eq(R.unnest([]), []);
        });
        it('is equivalent to R.chain(R.identity)', function() {
          var Nothing = Maybe.Nothing;
          var Just = Maybe.Just;
          eq(R.unnest(Nothing()), Nothing());
          eq(R.unnest(Just(Nothing())), Nothing());
          eq(R.unnest(Just(Just(Nothing()))), Just(Nothing()));
          eq(R.unnest(Just(Just(42))), Just(42));
          eq(R.unnest(Just(Just(Just(42)))), Just(Just(42)));
        });
      });
    }, {
      "..": 1,
      "./shared/Maybe": 253,
      "./shared/eq": 254,
      "assert": 2
    }],
    297: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('until', function() {
        it('applies fn until pred is satisfied', function() {
          eq(R.until(R.gt(R.__, 100), R.multiply(2), 1), 128);
        });
        it('works with lists', function() {
          eq(R.until(R.none(R.isArrayLike), R.unnest)([1, [2], [[3]]]), [1, 2, 3]);
        });
        it('ignores fn if predicate is always true', function() {
          eq(R.until(R.T, R.T, false), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    298: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('update', function() {
        it('updates the value at the given index of the supplied array', function() {
          eq(R.update(2, 4, [0, 1, 2, 3]), [0, 1, 4, 3]);
        });
        it('offsets negative indexes from the end of the array', function() {
          eq(R.update(-3, 4, [0, 1, 2, 3]), [0, 4, 2, 3]);
        });
        it('returns the original array if the supplied index is out of bounds', function() {
          var list = [0, 1, 2, 3];
          eq(R.update(4, 4, list), list);
          eq(R.update(-5, 4, list), list);
        });
        it('does not mutate the original array', function() {
          var list = [0, 1, 2, 3];
          eq(R.update(2, 4, list), [0, 1, 4, 3]);
          eq(list, [0, 1, 2, 3]);
        });
        it('curries the arguments', function() {
          eq(R.update(2)(4)([0, 1, 2, 3]), [0, 1, 4, 3]);
        });
        it('accepts an array-like object', function() {
          function args() {
            return arguments;
          }
          eq(R.update(2, 4, args(0, 1, 2, 3)), [0, 1, 4, 3]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    299: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('useWith', function() {
        function max() {
          return Math.max.apply(Math, arguments);
        }
        function add1(x) {
          return x + 1;
        }
        function mult2(x) {
          return x * 2;
        }
        function div3(x) {
          return x / 3;
        }
        var f = R.useWith(max, [add1, mult2, div3]);
        it('takes a list of function and returns a function', function() {
          eq(typeof R.useWith(max, []), 'function');
          eq(typeof R.useWith(max, [add1]), 'function');
          eq(typeof R.useWith(max, [add1, mult2, div3]), 'function');
        });
        it('passes the arguments received to their respective functions', function() {
          eq(f(7, 8, 9), 16);
        });
        it('passes additional arguments to the main function', function() {
          eq(f(7, 8, 9, 10), 16);
          eq(f(7, 8, 9, 20), 20);
        });
        it('has the correct arity', function() {
          eq(f.length, 3);
        });
        it('passes context to its functions', function() {
          var a = function(x) {
            return this.f1(x);
          };
          var b = function(x) {
            return this.f2(x);
          };
          var c = function(x, y) {
            return this.f3(x, y);
          };
          var d = R.useWith(c, [a, b]);
          var context = {
            f1: R.add(1),
            f2: R.add(2),
            f3: R.add
          };
          eq(a.call(context, 1), 2);
          eq(b.call(context, 1), 3);
          eq(d.apply(context, [1, 1]), 5);
          eq(d.apply(context, [2, 3]), 8);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    300: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('values', function() {
        var obj = {
          a: 100,
          b: [1, 2, 3],
          c: {
            x: 200,
            y: 300
          },
          d: 'D',
          e: null,
          f: undefined
        };
        function C() {
          this.a = 100;
          this.b = 200;
        }
        C.prototype.x = function() {
          return 'x';
        };
        C.prototype.y = 'y';
        var cobj = new C();
        it("returns an array of the given object's values", function() {
          var vs = R.values(obj).sort();
          var ts = [[1, 2, 3], 100, 'D', {
            x: 200,
            y: 300
          }, null, undefined];
          eq(vs.length, ts.length);
          eq(vs[0], ts[0]);
          eq(vs[1], ts[1]);
          eq(vs[2], ts[2]);
          eq(vs[3], ts[3]);
          eq(vs[4], ts[4]);
          eq(vs[5], ts[5]);
          eq(R.values({hasOwnProperty: false}), [false]);
        });
        it("does not include the given object's prototype properties", function() {
          eq(R.values(cobj), [100, 200]);
        });
        it('returns an empty object for primitives', function() {
          var result = R.map(function(val) {
            return R.keys(val);
          }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
          eq(result, R.repeat([], 10));
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    301: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('valuesIn', function() {
        var obj = {
          a: 100,
          b: [1, 2, 3],
          c: {
            x: 200,
            y: 300
          },
          d: 'D',
          e: null,
          f: undefined
        };
        function C() {
          this.a = 100;
          this.b = 200;
        }
        C.prototype.x = function() {
          return 'x';
        };
        C.prototype.y = 'y';
        var cobj = new C();
        it("returns an array of the given object's values", function() {
          var vs = R.valuesIn(obj);
          eq(vs.length, 6);
          eq(R.indexOf(100, vs) >= 0, true);
          eq(R.indexOf('D', vs) >= 0, true);
          eq(R.indexOf(null, vs) >= 0, true);
          eq(R.indexOf(undefined, vs) >= 0, true);
          eq(R.indexOf(obj.b, vs) >= 0, true);
          eq(R.indexOf(obj.c, vs) >= 0, true);
        });
        it("includes the given object's prototype properties", function() {
          var vs = R.valuesIn(cobj);
          eq(vs.length, 4);
          eq(R.indexOf(100, vs) >= 0, true);
          eq(R.indexOf(200, vs) >= 0, true);
          eq(R.indexOf(cobj.x, vs) >= 0, true);
          eq(R.indexOf('y', vs) >= 0, true);
        });
        it('works for primitives', function() {
          var result = R.map(function(val) {
            return R.valuesIn(val);
          }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
          eq(result, R.repeat([], 10));
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    302: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('when', function() {
        it('calls the whenTrue function if the validator returns a truthy value', function() {
          eq(R.when(R.is(Number), R.add(1))(10), 11);
        });
        it('returns the argument unmodified if the validator returns a falsy value', function() {
          eq(R.when(R.is(Number), R.add(1))('hello'), 'hello');
        });
        it('returns a curried function', function() {
          var ifIsNumber = R.when(R.is(Number));
          eq(ifIsNumber(R.add(1))(15), 16);
          eq(ifIsNumber(R.add(1))('hello'), 'hello');
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    303: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('where', function() {
        it('returns true if the test object satisfies the spec', function() {
          var spec = {
            x: R.equals(1),
            y: R.equals(2)
          };
          var test1 = {
            x: 0,
            y: 200
          };
          var test2 = {
            x: 0,
            y: 10
          };
          var test3 = {
            x: 1,
            y: 101
          };
          var test4 = {
            x: 1,
            y: 2
          };
          eq(R.where(spec, test1), false);
          eq(R.where(spec, test2), false);
          eq(R.where(spec, test3), false);
          eq(R.where(spec, test4), true);
        });
        it('does not need the spec and the test object to have the same interface (the test object will have a superset of the specs properties)', function() {
          var spec = {x: R.equals(100)};
          var test1 = {
            x: 20,
            y: 100,
            z: 100
          };
          var test2 = {
            w: 1,
            x: 100,
            y: 100,
            z: 100
          };
          eq(R.where(spec, test1), false);
          eq(R.where(spec, test2), true);
        });
        it('matches specs that have undefined properties', function() {
          var spec = {x: R.equals(undefined)};
          var test1 = {};
          var test2 = {x: null};
          var test3 = {x: undefined};
          var test4 = {x: 1};
          eq(R.where(spec, test1), true);
          eq(R.where(spec, test2), false);
          eq(R.where(spec, test3), true);
          eq(R.where(spec, test4), false);
        });
        it('is curried', function() {
          var predicate = R.where({
            x: R.equals(1),
            y: R.equals(2)
          });
          eq(predicate({
            x: 1,
            y: 2,
            z: 3
          }), true);
          eq(predicate({
            x: 3,
            y: 2,
            z: 1
          }), false);
        });
        it('is true for an empty spec', function() {
          eq(R.where({}, {a: 1}), true);
        });
        it('matches inherited properties', function() {
          var spec = {
            toString: R.equals(Object.prototype.toString),
            valueOf: R.equals(Object.prototype.valueOf)
          };
          eq(R.where(spec, {}), true);
        });
        it('does not match inherited spec', function() {
          function Spec() {
            this.y = R.equals(6);
          }
          Spec.prototype.x = R.equals(5);
          var spec = new Spec();
          eq(R.where(spec, {y: 6}), true);
          eq(R.where(spec, {x: 5}), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    304: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('whereEq', function() {
        it('returns true if the test object satisfies the spec', function() {
          var spec = {
            x: 1,
            y: 2
          };
          var test1 = {
            x: 0,
            y: 200
          };
          var test2 = {
            x: 0,
            y: 10
          };
          var test3 = {
            x: 1,
            y: 101
          };
          var test4 = {
            x: 1,
            y: 2
          };
          eq(R.whereEq(spec, test1), false);
          eq(R.whereEq(spec, test2), false);
          eq(R.whereEq(spec, test3), false);
          eq(R.whereEq(spec, test4), true);
        });
        it('does not need the spec and the test object to have the same interface (the test object will have a superset of the specs properties)', function() {
          var spec = {x: 100};
          var test1 = {
            x: 20,
            y: 100,
            z: 100
          };
          var test2 = {
            w: 1,
            x: 100,
            y: 100,
            z: 100
          };
          eq(R.whereEq(spec, test1), false);
          eq(R.whereEq(spec, test2), true);
        });
        it('matches specs that have undefined properties', function() {
          var spec = {x: undefined};
          var test1 = {};
          var test2 = {x: null};
          var test3 = {x: undefined};
          var test4 = {x: 1};
          eq(R.whereEq(spec, test1), true);
          eq(R.whereEq(spec, test2), false);
          eq(R.whereEq(spec, test3), true);
          eq(R.whereEq(spec, test4), false);
        });
        it('is curried', function() {
          var predicate = R.whereEq({
            x: 1,
            y: 2
          });
          eq(predicate({
            x: 1,
            y: 2,
            z: 3
          }), true);
          eq(predicate({
            x: 3,
            y: 2,
            z: 1
          }), false);
        });
        it('is true for an empty spec', function() {
          eq(R.whereEq({}, {a: 1}), true);
        });
        it('reports true when the object equals the spec', function() {
          eq(R.whereEq(R, R), true);
        });
        function Parent() {
          this.y = 6;
        }
        Parent.prototype.a = undefined;
        Parent.prototype.x = 5;
        var parent = new Parent();
        it('matches inherited props', function() {
          eq(R.whereEq({y: 6}, parent), true);
          eq(R.whereEq({x: 5}, parent), true);
          eq(R.whereEq({
            x: 5,
            y: 6
          }, parent), true);
          eq(R.whereEq({
            x: 4,
            y: 6
          }, parent), false);
        });
        it('does not match inherited spec', function() {
          eq(R.whereEq(parent, {y: 6}), true);
          eq(R.whereEq(parent, {x: 5}), false);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    305: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('without', function() {
        it('returns an array not containing values in the first argument', function() {
          eq(R.without([1, 2], [1, 2, 1, 4, 5]), [4, 5]);
        });
        it('is curried', function() {
          var withoutOnes = R.without([1]);
          eq(withoutOnes([1, 2, 3, 5, 1]), [2, 3, 5]);
        });
        it('can act as a transducer', function() {
          eq(R.into([], R.without([1]), [1]), []);
        });
        it('has R.equals semantics', function() {
          function Just(x) {
            this.value = x;
          }
          Just.prototype.equals = function(x) {
            return x instanceof Just && R.equals(x.value, this.value);
          };
          eq(R.without([0], [-0]).length, 1);
          eq(R.without([-0], [0]).length, 1);
          eq(R.without([NaN], [NaN]).length, 0);
          eq(R.without([[1]], [[1]]).length, 0);
          eq(R.without([new Just([42])], [new Just([42])]).length, 0);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    306: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('xprod', function() {
        var a = [1, 2];
        var b = ['a', 'b', 'c'];
        it('returns an empty list if either input list is empty', function() {
          eq(R.xprod([], [1, 2, 3]), []);
          eq(R.xprod([1, 2, 3], []), []);
        });
        it('creates the collection of all cross-product pairs of its parameters', function() {
          eq(R.xprod(a, b), [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]);
        });
        it('is curried', function() {
          var something = R.xprod(b);
          eq(something(a), [['a', 1], ['a', 2], ['b', 1], ['b', 2], ['c', 1], ['c', 2]]);
        });
        it('correctly reports the arity of curried versions', function() {
          var something = R.xprod(a);
          eq(something.length, 1);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    307: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('zip', function() {
        it('returns an array of "tuples"', function() {
          var a = [1, 2, 3];
          var b = [100, 200, 300];
          eq(R.zip(a, b), [[1, 100], [2, 200], [3, 300]]);
        });
        it('returns a list as long as the shorter of the lists input', function() {
          var a = [1, 2, 3];
          var b = [100, 200, 300, 400];
          var c = [10, 20];
          eq(R.zip(a, b), [[1, 100], [2, 200], [3, 300]]);
          eq(R.zip(a, c), [[1, 10], [2, 20]]);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    308: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('zipObj', function() {
        it('combines an array of keys with an array of values into a single object', function() {
          eq(R.zipObj(['a', 'b', 'c'], [1, 2, 3]), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('ignores extra values', function() {
          eq(R.zipObj(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7]), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('ignores extra keys', function() {
          eq(R.zipObj(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3]), {
            a: 1,
            b: 2,
            c: 3
          });
        });
        it('last one in wins when there are duplicate keys', function() {
          eq(R.zipObj(['a', 'b', 'c', 'a'], [1, 2, 3, 'LAST']), {
            a: 'LAST',
            b: 2,
            c: 3
          });
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }],
    309: [function(require, module, exports) {
      var R = require('..');
      var eq = require('./shared/eq');
      describe('zipWith', function() {
        var a = [1, 2, 3];
        var b = [100, 200, 300];
        var c = [10, 20, 30, 40, 50, 60];
        var add = function(a, b) {
          return a + b;
        };
        var x = function(a, b) {
          return a * b;
        };
        var s = function(a, b) {
          return a + ' cow ' + b;
        };
        it('returns an array created by applying its passed-in function pair-wise on its passed in arrays', function() {
          eq(R.zipWith(add, a, b), [101, 202, 303]);
          eq(R.zipWith(x, a, b), [100, 400, 900]);
          eq(R.zipWith(s, a, b), ['1 cow 100', '2 cow 200', '3 cow 300']);
        });
        it('returns an array whose length is equal to the shorter of its input arrays', function() {
          eq(R.zipWith(add, a, c).length, a.length);
        });
      });
    }, {
      "..": 1,
      "./shared/eq": 254
    }]
  }, {}, [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309]);
})(require('process'));
