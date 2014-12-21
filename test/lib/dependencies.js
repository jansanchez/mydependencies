
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
 * Specs.
 */

describe('dependencies', function() {
  var options;
  options = {};
  beforeEach(function() {
    dependencies = new Dependencies();
  });
  describe('Output', function() {
    it('dependencies.output not should be empty.', function() {
      return dependencies.output.should.not.be.empty;
    });
  });
});
