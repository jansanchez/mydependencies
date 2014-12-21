###
Test: dependencies
###


###
# Test dependencies.
###

fs           = require('fs')
Dependencies = require('../../dist/package/lib/dependencies')

###
# Test variables.
###

dependencies = null
data = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

###
# Specs.
###

describe('dependencies', () ->
	options = {}
	
	beforeEach( () ->
		dependencies = new Dependencies()
		return
	)

	describe('Output', () ->

		it('dependencies.output not should be empty.', () ->
			dependencies.output.should.not.be.empty
		)

		return
	)


	return

)
