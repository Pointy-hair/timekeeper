/* */ 
(function(Buffer) {
  var asp = require('rsvp').denodeify;
  var request = require('request');
  if (typeof Promise === 'undefined') {
    Promise = require('rsvp').Promise;
  }
  function encodeCredentials(auth) {
    var raw = auth.username + ':' + auth.password;
    return new Buffer(raw).toString('base64');
  }
  exports.encodeCredentials = encodeCredentials;
  function decodeCredentials(str) {
    var auth = new Buffer(str, 'base64').toString().split(':');
    return {
      username: auth[0],
      password: auth[1]
    };
  }
  exports.decodeCredentials = decodeCredentials;
  function injectRequestOptions(requestOptions, auth) {
    if (!auth)
      return requestOptions;
    if (auth.username)
      requestOptions.auth = {
        user: auth.username,
        pass: auth.password
      };
    else if (auth.token) {
      requestOptions.headers = requestOptions.headers || {};
      requestOptions.headers.authorization = 'Bearer ' + auth.token;
    }
    return requestOptions;
  }
  exports.injectRequestOptions = injectRequestOptions;
  function configureCredentials(registry, _auth, ui) {
    _auth = _auth || {};
    return Promise.resolve().then(function() {
      var currentAuth = '';
      if (_auth.token)
        currentAuth = 'Currently using an auth token. ';
      else if (_auth.username)
        currentAuth = 'Currently using a username and password. ';
      return ui.confirm(currentAuth + 'Configure token-based authentication?', !!_auth.token);
    }).then(function(token) {
      if (token) {
        return ui.input('Enter your npm token', _auth.token).then(function(token) {
          _auth.token = token;
        });
      } else {
        return ui.input('Enter your npm username (optional)', _auth.username).then(function(username) {
          if (username)
            _auth.username = username;
          else
            delete _auth.username;
          return ui.input('Enter your npm password (optional)', null, true);
        }).then(function(password) {
          if (password)
            _auth.password = password;
          else
            delete _auth.password;
        });
      }
    }).then(function() {
      if (!_auth.password)
        return false;
      return ui.confirm('Would you like to test these credentials?', true);
    }).then(function(test) {
      if (!test)
        return true;
      return Promise.resolve().then(function() {
        return asp(request)(injectRequestOptions({uri: registry}, _auth));
      }).then(function(res) {
        if (res.statusCode == 401)
          ui.log('warn', 'Provided npm credentials are not authorized.');
        else if (res.statusCode != 200)
          ui.log('warn', 'Invalid response code, %' + res.statusCode + '%');
        else {
          ui.log('ok', 'npm authentication is working successfully.');
          return true;
        }
      }, function(err) {
        ui.log('err', err.stack || err);
      });
    }).then(function(authorized) {
      if (!authorized)
        return ui.confirm('Would you like to try new credentials?', true).then(function(redo) {
          if (redo)
            return configureCredentials(registry, null, ui);
          else
            return _auth;
        });
      else
        return _auth;
    });
  }
  exports.configureCredentials = configureCredentials;
})(require('buffer').Buffer);
