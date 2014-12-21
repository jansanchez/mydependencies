###
index
@class index
@author Jan Sanchez
###

###
# Module mydependencies.
###

MyDependencies = require('./lib/mydependencies')


###
# Instantiating.
###

myDependencies = new MyDependencies()


###
# Expose library.
###

module.exports = myDependencies

