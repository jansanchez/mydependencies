
/*
index
@class index
@author Jan Sanchez
 */

/*
 * Module mydependencies.
 */
var MyDependencies, myDependencies;

MyDependencies = require('./lib/mydependencies');


/*
 * Instantiating.
 */

myDependencies = new MyDependencies();


/*
 * Expose library.
 */

module.exports = myDependencies;
