
/*
index
@class index
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Dependency;

Dependency = require('./lib/dependency');


/*
 * Expose library.
 */

module.exports = function(options) {
  var dependency;
  dependency = new Dependency(options);
  return dependency;
};
