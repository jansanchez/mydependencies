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
# Instantiating.
###

dependencies = new Dependencies()


###
# Specs.
###

describe('Dependencies', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Output', () ->

		it('dependencies.output should not be empty.', () ->
			dependencies.output.should.not.be.empty
		)

		it('dependencies.counter should not be zero.', () ->
			dependencies.counter.should.not.be.equal(0)
		)

		it('dependencies.ArrayDependencies should not be equal to zero.', () ->
			dependencies.ArrayDependencies.length.should.not.be.equal(0)
		)
		
		it('dependencies.packageJson type should be equal to "object".', () ->
			type = typeof dependencies.packageJson
			type.should.be.equal("object")
		)
		

		return
	)


	return

)
