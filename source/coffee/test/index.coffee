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

describe('dependencies', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Instanciable', () ->

		it('dependencies.output not should be empty.', () ->
			dependencies.should.not.be.empty
		)

		return
	)


	return

)

