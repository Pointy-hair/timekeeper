/* */ 
(function(Buffer) {
  var fs = require('fs'),
      decode = require('./decode');
  module.exports = function(filename, options) {
    if (fs.statSync(filename).isFile()) {
      return fs.readFileSync(filename, options);
    } else {
      var fd = fs.openSync(filename, options && options.flag || "r"),
          decoder = decode(options);
      while (true) {
        try {
          var buffer = new Buffer(bufferSize),
              bytesRead = fs.readSync(fd, buffer, 0, bufferSize);
        } catch (e) {
          if (e.code === "EOF")
            break;
          fs.closeSync(fd);
          throw e;
        }
        if (bytesRead === 0)
          break;
        decoder.push(buffer.slice(0, bytesRead));
      }
      fs.closeSync(fd);
      return decoder.value();
    }
  };
  var bufferSize = 1 << 16;
})(require('buffer').Buffer);
