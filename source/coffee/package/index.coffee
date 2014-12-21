###
index
@class index
@author Jan Sanchez
###

###
# Module dependencies.
###

Dependencies = require('./lib/dependencies')


###
# Instantiating.
###

dependencies = new Dependencies({})


###
# Expose library.
###

module.exports = dependencies

