/* */ 
(function(process) {
  (function(global) {
    var defined = {};
    var indexOf = Array.prototype.indexOf || function(item) {
      for (var i = 0,
          l = this.length; i < l; i++)
        if (this[i] === item)
          return i;
      return -1;
    };
    var getOwnPropertyDescriptor = true;
    try {
      Object.getOwnPropertyDescriptor({a: 0}, 'a');
    } catch (e) {
      getOwnPropertyDescriptor = false;
    }
    var defineProperty;
    (function() {
      try {
        if (!!Object.defineProperty({}, 'a', {}))
          defineProperty = Object.defineProperty;
      } catch (e) {
        defineProperty = function(obj, prop, opt) {
          try {
            obj[prop] = opt.value || opt.get.call(obj);
          } catch (e) {}
        };
      }
    })();
    function register(name, deps, declare) {
      if (arguments.length === 4)
        return registerDynamic.apply(this, arguments);
      doRegister(name, {
        declarative: true,
        deps: deps,
        declare: declare
      });
    }
    function registerDynamic(name, deps, executingRequire, execute) {
      doRegister(name, {
        declarative: false,
        deps: deps,
        executingRequire: executingRequire,
        execute: execute
      });
    }
    function doRegister(name, entry) {
      entry.name = name;
      if (!(name in defined))
        defined[name] = entry;
      entry.normalizedDeps = entry.deps;
    }
    function buildGroups(entry, groups) {
      groups[entry.groupIndex] = groups[entry.groupIndex] || [];
      if (indexOf.call(groups[entry.groupIndex], entry) != -1)
        return;
      groups[entry.groupIndex].push(entry);
      for (var i = 0,
          l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        var depEntry = defined[depName];
        if (!depEntry || depEntry.evaluated)
          continue;
        var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);
        if (depEntry.groupIndex === undefined || depEntry.groupIndex < depGroupIndex) {
          if (depEntry.groupIndex !== undefined) {
            groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);
            if (groups[depEntry.groupIndex].length == 0)
              throw new TypeError("Mixed dependency cycle detected");
          }
          depEntry.groupIndex = depGroupIndex;
        }
        buildGroups(depEntry, groups);
      }
    }
    function link(name) {
      var startEntry = defined[name];
      startEntry.groupIndex = 0;
      var groups = [];
      buildGroups(startEntry, groups);
      var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
      for (var i = groups.length - 1; i >= 0; i--) {
        var group = groups[i];
        for (var j = 0; j < group.length; j++) {
          var entry = group[j];
          if (curGroupDeclarative)
            linkDeclarativeModule(entry);
          else
            linkDynamicModule(entry);
        }
        curGroupDeclarative = !curGroupDeclarative;
      }
    }
    var moduleRecords = {};
    function getOrCreateModuleRecord(name) {
      return moduleRecords[name] || (moduleRecords[name] = {
        name: name,
        dependencies: [],
        exports: {},
        importers: []
      });
    }
    function linkDeclarativeModule(entry) {
      if (entry.module)
        return;
      var module = entry.module = getOrCreateModuleRecord(entry.name);
      var exports = entry.module.exports;
      var declaration = entry.declare.call(global, function(name, value) {
        module.locked = true;
        if (typeof name == 'object') {
          for (var p in name)
            exports[p] = name[p];
        } else {
          exports[name] = value;
        }
        for (var i = 0,
            l = module.importers.length; i < l; i++) {
          var importerModule = module.importers[i];
          if (!importerModule.locked) {
            for (var j = 0; j < importerModule.dependencies.length; ++j) {
              if (importerModule.dependencies[j] === module) {
                importerModule.setters[j](exports);
              }
            }
          }
        }
        module.locked = false;
        return value;
      }, {id: entry.name});
      module.setters = declaration.setters;
      module.execute = declaration.execute;
      for (var i = 0,
          l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        var depEntry = defined[depName];
        var depModule = moduleRecords[depName];
        var depExports;
        if (depModule) {
          depExports = depModule.exports;
        } else if (depEntry && !depEntry.declarative) {
          depExports = depEntry.esModule;
        } else if (!depEntry) {
          depExports = load(depName);
        } else {
          linkDeclarativeModule(depEntry);
          depModule = depEntry.module;
          depExports = depModule.exports;
        }
        if (depModule && depModule.importers) {
          depModule.importers.push(module);
          module.dependencies.push(depModule);
        } else
          module.dependencies.push(null);
        if (module.setters[i])
          module.setters[i](depExports);
      }
    }
    function getModule(name) {
      var exports;
      var entry = defined[name];
      if (!entry) {
        exports = load(name);
        if (!exports)
          throw new Error("Unable to load dependency " + name + ".");
      } else {
        if (entry.declarative)
          ensureEvaluated(name, []);
        else if (!entry.evaluated)
          linkDynamicModule(entry);
        exports = entry.module.exports;
      }
      if ((!entry || entry.declarative) && exports && exports.__useDefault)
        return exports['default'];
      return exports;
    }
    function linkDynamicModule(entry) {
      if (entry.module)
        return;
      var exports = {};
      var module = entry.module = {
        exports: exports,
        id: entry.name
      };
      if (!entry.executingRequire) {
        for (var i = 0,
            l = entry.normalizedDeps.length; i < l; i++) {
          var depName = entry.normalizedDeps[i];
          var depEntry = defined[depName];
          if (depEntry)
            linkDynamicModule(depEntry);
        }
      }
      entry.evaluated = true;
      var output = entry.execute.call(global, function(name) {
        for (var i = 0,
            l = entry.deps.length; i < l; i++) {
          if (entry.deps[i] != name)
            continue;
          return getModule(entry.normalizedDeps[i]);
        }
        throw new TypeError('Module ' + name + ' not declared as a dependency.');
      }, exports, module);
      if (output)
        module.exports = output;
      exports = module.exports;
      if (exports && exports.__esModule)
        entry.esModule = exports;
      else
        entry.esModule = getESModule(exports);
    }
    function getESModule(exports) {
      var esModule = {};
      if ((typeof exports == 'object' || typeof exports == 'function') && exports !== global) {
        if (getOwnPropertyDescriptor) {
          for (var p in exports) {
            if (p === 'default')
              continue;
            defineOrCopyProperty(esModule, exports, p);
          }
        } else {
          var hasOwnProperty = exports && exports.hasOwnProperty;
          for (var p in exports) {
            if (p === 'default' || (hasOwnProperty && !exports.hasOwnProperty(p)))
              continue;
            esModule[p] = exports[p];
          }
        }
      }
      esModule['default'] = exports;
      defineProperty(esModule, '__useDefault', {value: true});
      return esModule;
    }
    function defineOrCopyProperty(targetObj, sourceObj, propName) {
      try {
        var d;
        if (d = Object.getOwnPropertyDescriptor(sourceObj, propName))
          defineProperty(targetObj, propName, d);
      } catch (ex) {
        targetObj[propName] = sourceObj[propName];
        return false;
      }
    }
    function ensureEvaluated(moduleName, seen) {
      var entry = defined[moduleName];
      if (!entry || entry.evaluated || !entry.declarative)
        return;
      seen.push(moduleName);
      for (var i = 0,
          l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        if (indexOf.call(seen, depName) == -1) {
          if (!defined[depName])
            load(depName);
          else
            ensureEvaluated(depName, seen);
        }
      }
      if (entry.evaluated)
        return;
      entry.evaluated = true;
      entry.module.execute.call(global);
    }
    var nodeRequire = typeof System != 'undefined' && System._nodeRequire || typeof require != 'undefined' && require.resolve && typeof process != 'undefined' && require;
    var modules = {'@empty': {}};
    function load(name) {
      if (modules[name])
        return modules[name];
      if (name.substr(0, 6) == '@node/')
        return nodeRequire(name.substr(6));
      var entry = defined[name];
      if (!entry)
        throw "Module " + name + " not present.";
      link(name);
      ensureEvaluated(name, []);
      defined[name] = undefined;
      if (entry.declarative)
        defineProperty(entry.module.exports, '__esModule', {value: true});
      return modules[name] = entry.declarative ? entry.module.exports : entry.esModule;
    }
    ;
    return function(mains, depNames, exportDefault, declare) {
      return function(formatDetect) {
        formatDetect(function(deps) {
          var System = {
            _nodeRequire: nodeRequire,
            register: register,
            registerDynamic: registerDynamic,
            get: load,
            set: function(name, module) {
              modules[name] = module;
            },
            newModule: function(module) {
              return module;
            }
          };
          for (var i = 0; i < depNames.length; i++)
            (function(depName, dep) {
              if (dep && dep.__esModule)
                modules[depName] = dep;
              else
                modules[depName] = getESModule(dep);
            })(depNames[i], arguments[i]);
          declare(System);
          var firstLoad = load(mains[0]);
          if (mains.length > 1)
            for (var i = 1; i < mains.length; i++)
              load(mains[i]);
          if (exportDefault)
            return firstLoad['default'];
          else
            return firstLoad;
        });
      };
    };
  })(typeof self != 'undefined' ? self : global);
})(require('process'));
