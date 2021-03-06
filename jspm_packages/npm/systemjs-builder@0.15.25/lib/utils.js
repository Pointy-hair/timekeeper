/* */ 
(function(process) {
  var path = require('path');
  var url = require('url');
  exports.traceurGet = function(module) {
    var traceur = require('traceur');
    var traceurVersion = traceur.loader.NodeTraceurLoader.prototype.version;
    return $traceurRuntime.ModuleStore.get('traceur@' + traceurVersion + '/src/' + module);
  };
  exports.extend = extend;
  function extend(a, b) {
    for (var p in b)
      a[p] = b[p];
    return a;
  }
  exports.dextend = dextend;
  function dextend(a, b) {
    for (var p in b) {
      if (!b.hasOwnProperty(p))
        continue;
      var val = b[p];
      if (typeof val === 'object')
        dextend(a[p] = typeof a[p] === 'object' ? a[p] : {}, val);
      else
        a[p] = val;
    }
    return a;
  }
  exports.getFormatHint = getFormatHint;
  function getFormatHint(compileOpts) {
    var formatHint = '';
    var format = compileOpts.format;
    if (format == 'umd')
      format = 'amd';
    if (format == 'amd' || format == 'cjs' || format == 'global')
      formatHint = formatHint + '"format ' + format + '";\n';
    if (compileOpts.format == 'global') {
      for (var g in compileOpts.globalDeps)
        formatHint = formatHint + '"globals.' + compileOpts.globalDeps[g] + ' ' + g + '";\n';
      if (compileOpts.globalName)
        formatHint = formatHint + '"exports ' + compileOpts.globalName + '";\n';
    }
    return formatHint;
  }
  var isWin = process.platform.match(/^win/);
  exports.fromFileURL = fromFileURL;
  function fromFileURL(url) {
    return url.substr(7 + !!isWin).replace(/\//g, path.sep);
  }
  exports.toFileURL = toFileURL;
  function toFileURL(path) {
    return 'file://' + (isWin ? '/' : '') + path.replace(/\\/g, '/');
  }
  exports.getAlias = getAlias;
  function getAlias(loader, canonicalName) {
    var pluginIndex = loader.pluginFirst ? canonicalName.indexOf('!') : canonicalName.lastIndexOf('!');
    if (pluginIndex != -1)
      return getAlias(loader, canonicalName.substr(0, pluginIndex)) + '!' + getAlias(loader, canonicalName.substr(pluginIndex + 1));
    canonicalName = canonicalName.replace('/#:./', '/');
    if (canonicalName.match(/\#[\:\{\?]/))
      throw new Error('Unable to alias the conditional dependency "' + canonicalName + '".');
    var packageName = getPackage(loader.packages, loader.decanonicalize(canonicalName));
    var packageMain = packageName && loader.packages[packageName].main;
    if (packageMain && canonicalName.substr(canonicalName.length - packageMain.length - 1) == '/' + packageMain)
      canonicalName = canonicalName.substr(0, canonicalName.length - packageMain.length - 1);
    var bestAliasLength = 0;
    var bestAliasSubpath;
    var bestAlias;
    Object.keys(loader.map).forEach(function(alias) {
      if (alias.split('/').length <= bestAliasLength)
        return;
      var mapped = getCanonicalName(loader, loader.decanonicalize(loader.map[alias]));
      if (loader.defaultJSExtensions && canonicalName == mapped + '.js') {
        bestAlias = alias;
        bestAliasSubpath = '';
        bestAliasLength = alias.split('/').length;
      } else if (canonicalName.substr(0, mapped.length) == mapped && (canonicalName.length == mapped.length || canonicalName[mapped.length] == '/')) {
        bestAlias = alias;
        bestAliasSubpath = canonicalName.substr(mapped.length);
        bestAliasLength = alias.split('/').length;
      }
    });
    if (bestAlias)
      return bestAlias + bestAliasSubpath;
    return canonicalName;
  }
  exports.verifyTree = verifyTree;
  function verifyTree(tree) {
    if (typeof tree != 'object' || tree instanceof Array)
      throw new TypeError('Expected a trace tree object');
    Object.keys(tree).forEach(function(key) {
      var load = tree[key];
      if (typeof load === 'boolean')
        return;
      if (load && typeof load != 'object' || !load.name || !(load.conditional || load.deps))
        throw new TypeError('Expected a trace tree object, but "' + key + '" is not a load record.');
    });
  }
  exports.getCanonicalName = getCanonicalName;
  function getCanonicalName(loader, normalized, isPlugin) {
    var booleanIndex = normalized.lastIndexOf('#?');
    if (booleanIndex != -1) {
      var booleanModule = normalized.substr(booleanIndex + 2);
      var negate = booleanModule[0] == '~';
      if (negate)
        booleanModule = booleanModule.substr(1);
      return getCanonicalName(loader, normalized.substr(0, booleanIndex)) + '#?' + (negate ? '~' : '') + canonicalizeCondition(loader, booleanModule);
    }
    var pluginIndex = loader.pluginFirst ? normalized.indexOf('!') : normalized.lastIndexOf('!');
    if (pluginIndex != -1)
      return getCanonicalName(loader, normalized.substr(0, pluginIndex), !loader.pluginFirst) + '!' + getCanonicalName(loader, normalized.substr(pluginIndex + 1), loader.pluginFirst);
    var pkgEnvIndex = normalized.indexOf('/#:');
    if (pkgEnvIndex != -1)
      return getCanonicalName(loader, normalized.substr(0, pkgEnvIndex), isPlugin) + '/#:' + normalized.substr(pkgEnvIndex + 3);
    var canonical = getCanonicalNamePlain(loader, normalized, isPlugin);
    var conditionalMatch = canonical.match(interpolationRegEx);
    if (conditionalMatch)
      return getCanonicalNamePlain(loader, normalized, isPlugin).replace(interpolationRegEx, '#{' + canonicalizeCondition(loader, conditionalMatch[0].substr(2, conditionalMatch[0].length - 3)) + '}');
    return canonical;
  }
  var interpolationRegEx = /#\{[^\}]+\}/;
  function canonicalizeCondition(loader, conditionModule) {
    var conditionExport;
    var exportIndex = conditionModule.lastIndexOf('|');
    if (exportIndex != -1) {
      conditionExport = conditionModule.substr(exportIndex + 1);
      conditionModule = conditionModule.substr(0, exportIndex) || '@system-env';
    }
    return getCanonicalName(loader, conditionModule) + (conditionExport ? '|' + conditionExport : '');
  }
  function getCanonicalNamePlain(loader, normalized, isPlugin) {
    var pathMatch;
    for (var p in loader.paths) {
      if (loader.paths[p].indexOf('*') != -1)
        continue;
      var curPath = normalizePath(loader, loader.paths[p], isPlugin);
      if (normalized === curPath)
        return p;
      else if (curPath[curPath.length - 1] == '/' && normalized.substr(0, curPath.length - 1) == curPath.substr(0, curPath.length - 1) && (normalized.length < curPath.length || normalized[curPath.length - 1] == curPath[curPath.length - 1])) {
        return normalized.length < curPath.length ? p.substr(0, p.length - 1) : p + normalized.substr(curPath.length);
      }
    }
    var pathMatchLength = 0;
    var curMatchLength;
    if (!pathMatch)
      for (var p in loader.paths) {
        if (loader.paths[p].indexOf('*') == -1)
          continue;
        var curPath = normalizePath(loader, loader.paths[p], true);
        var wIndex = curPath.indexOf('*');
        if (normalized.substr(0, wIndex) === curPath.substr(0, wIndex) && normalized.substr(normalized.length - curPath.length + wIndex + 1) === curPath.substr(wIndex + 1)) {
          curMatchLength = curPath.split('/').length;
          if (curMatchLength >= pathMatchLength) {
            pathMatch = p.replace('*', normalized.substr(wIndex, normalized.length - curPath.length + 1));
            pathMatchLength = curMatchLength;
          }
        }
      }
    if (!pathMatch) {
      if (normalized.substr(0, loader.baseURL.length) == loader.baseURL)
        pathMatch = normalized.substr(loader.baseURL.length);
      else if (normalized.match(absURLRegEx))
        throw new Error('Unable to calculate canonical name to bundle ' + normalized + '. Ensure that this module sits within the baseURL or a wildcard path config.');
      else
        pathMatch = normalized;
    }
    return pathMatch;
  }
  exports.getPackageConfigPath = getPackageConfigPath;
  var packageConfigPaths = {};
  function createPkgConfigPathObj(path) {
    var lastWildcard = path.lastIndexOf('*');
    var length = Math.max(lastWildcard + 1, path.lastIndexOf('/'));
    return {
      length: length,
      regEx: new RegExp('^(' + path.substr(0, length).replace(/\*/g, '[^\\/]+') + ')(\\/|$)'),
      wildcard: lastWildcard != -1
    };
  }
  exports.getPackageConfigPath = getPackageConfigPath;
  function getPackageConfigPath(packageConfigPaths, normalized) {
    var pkgName,
        exactMatch = false,
        configPath;
    for (var i = 0; i < packageConfigPaths.length; i++) {
      var packageConfigPath = packageConfigPaths[i];
      var p = packageConfigPaths[packageConfigPath] || (packageConfigPaths[packageConfigPath] = createPkgConfigPathObj(packageConfigPath));
      if (normalized.length < p.length)
        continue;
      var match = normalized.match(p.regEx);
      if (match && (!pkgName || (!(exactMatch && p.wildcard) && pkgName.length < match[1].length))) {
        pkgName = match[1];
        exactMatch = !p.wildcard;
        configPath = pkgName + packageConfigPath.substr(p.length);
      }
    }
    if (!pkgName)
      return;
    return configPath;
  }
  exports.isPackageConfig = isPackageConfig;
  var curHash;
  var configPathCache = null;
  var canonicalConfigPaths = null;
  function isPackageConfig(loader, canonical) {
    if (loader.configHash != curHash) {
      configPathCache = null;
      curHash = loader.configHash;
    }
    if (!configPathCache) {
      canonicalConfigPaths = loader.packageConfigPaths.map(function(configPath) {
        return getCanonicalName(loader, configPath);
      });
      configPathCache = {};
    }
    if (canonical in configPathCache)
      return configPathCache[canonical];
    var cfgPathMatch = getPackageConfigPath(canonicalConfigPaths, canonical);
    configPathCache[canonical] = cfgPathMatch && cfgPathMatch.split('/').length == canonical.split('/').length;
    return configPathCache[canonical];
  }
  exports.getPackage = getPackage;
  function getPackage(packages, name) {
    var curPkg,
        curPkgLen = 0,
        pkgLen;
    for (var p in packages) {
      if (name.substr(0, p.length) === p && (name.length === p.length || name[p.length] === '/')) {
        pkgLen = p.split('/').length;
        if (pkgLen > curPkgLen) {
          curPkg = p;
          curPkgLen = pkgLen;
        }
      }
    }
    return curPkg;
  }
  var absURLRegEx = /^[^\/]+:\/\//;
  function normalizePath(loader, path, skipExtension) {
    var curMap = loader.map;
    var curPaths = loader.paths;
    var curPackages = loader.packages;
    loader.map = {};
    loader.paths = {};
    loader.packages = {};
    var normalized = loader.normalizeSync(path);
    if (skipExtension && path.substr(path.length - 3, 3) != '.js' && normalized.substr(normalized.length - 3, 3) == '.js')
      normalized = normalized.substr(0, normalized.length - 3);
    loader.map = curMap;
    loader.paths = curPaths;
    loader.packages = curPackages;
    return normalized;
  }
  var sysConditions = ['browser', 'node', 'dev', 'production', 'default'];
  exports.parseCondition = parseCondition;
  function parseCondition(condition) {
    var conditionExport,
        conditionModule,
        negation;
    var negation = condition[0] == '~';
    var conditionExportIndex = condition.lastIndexOf('|');
    if (conditionExportIndex != -1) {
      conditionExport = condition.substr(conditionExportIndex + 1);
      conditionModule = condition.substr(negation, conditionExportIndex - negation);
      if (conditionExport[0] == '~') {
        negation = true;
        conditionExport = conditionExport.substr(1);
      }
    } else {
      conditionExport = 'default';
      conditionModule = condition.substr(negation);
      if (sysConditions.indexOf(conditionModule) != -1) {
        conditionExport = conditionModule;
        conditionModule = '@system-env';
      }
    }
    return {
      module: conditionModule,
      prop: conditionExport,
      negate: negation
    };
  }
  exports.serializeCondition = serializeCondition;
  function serializeCondition(conditionObj) {
    return conditionObj.module + '|' + (conditionObj.negate ? '~' : '') + conditionObj.prop;
  }
})(require('process'));
