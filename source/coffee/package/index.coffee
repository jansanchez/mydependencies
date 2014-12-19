###
index
@class index
@author Jan Sanchez
###

###
# Module dependencies.
###

Dependency = require('./lib/dependency')

###
# Expose library.
###

module.exports = (options) ->
	dependency = new Dependency(options)
	dependency
