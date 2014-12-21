
/*
Test: dependencies
 */

/*
 * Test dependencies.
 */
var Dependencies, data, dependencies, fs;

fs = require('fs');

Dependencies = require('../../dist/package/lib/dependencies');


/*
 * Test variables.
 */

dependencies = null;

data = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


/*
 * Instantiating.
 */

dependencies = new Dependencies();


/*
 * Specs.
 */

describe('Dependencies', function() {
  var options;
  options = {};
  beforeEach(function() {});
  describe('Output', function() {
    it('dependencies.output should not be empty.', function() {
      return dependencies.output.should.not.be.empty;
    });
    it('dependencies.counter should not be zero.', function() {
      return dependencies.counter.should.not.be.equal(0);
    });
    it('dependencies.ArrayDependencies should not be equal to zero.', function() {
      return dependencies.ArrayDependencies.length.should.not.be.equal(0);
    });
    it('dependencies.packageJson type should be equal to "object".', function() {
      var type;
      type = typeof dependencies.packageJson;
      return type.should.be.equal("object");
    });
  });
});
