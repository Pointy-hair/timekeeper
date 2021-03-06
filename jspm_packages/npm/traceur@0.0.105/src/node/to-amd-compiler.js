/* */ 
(function(process) {
  'use strict';
  var traceurAPI = require('./api');
  if (process.argv.length < 4) {
    console.log('Not enough arguments!\n' + '  Usage node src/node/to-amd-compiler.js <inputDirectory> <outputDirectory>');
    process.exit(1);
  }
  var inputDir = process.argv[2];
  var outputDir = process.argv[3];
  traceurAPI.compileAllJsFilesInDir(inputDir, outputDir, traceurAPI.amdOptions());
})(require('process'));
