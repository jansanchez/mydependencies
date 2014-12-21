###
Test: dependencies
###


###
# Test dependencies.
###

fs           = require('fs')
dependencies = require('../dist/package/index')

###
# Specs.
###

describe('Index', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Instanciable', () ->

		it('dependencies.output should not be empty.', () ->
			dependencies.should.not.be.empty
		)

		return
	)


	return

)

