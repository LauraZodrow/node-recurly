'use strict';

var routes = {
  'v3': require('./v3')
};


exports.routes = function (version) {
  if (routes['v' + version]) {
    return routes['v' + version];
  } else {
    throw new Error('The API version v' + version + ' is not available!');
  }
};
