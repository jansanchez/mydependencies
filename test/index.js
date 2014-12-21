
/*
Test: dependencies
 */

/*
 * Test dependencies.
 */
var dependencies, fs;

fs = require('fs');

dependencies = require('../dist/package/index');


/*
 * Specs.
 */

describe('dependencies', function() {
  var options;
  options = {};
  beforeEach(function() {});
  describe('Instanciable', function() {
    it('dependencies.output not should be empty.', function() {
      return dependencies.should.not.be.empty;
    });
  });
});
