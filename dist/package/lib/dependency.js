
/*
List dependencies of npm projects.
@class Dependency
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Dependencies, chalk, packageJson;

chalk = require('chalk');

packageJson = require('./package.json');


/*
 * Library.
 */

Dependencies = function(opts) {
  this.settings = opts || {};
  this.ArrayDependencies = [];
  this.counter = 0;
  this.output = "";
  this.namesOfDependencies = ['devDependencies', 'dependencies', 'peerDependencies', 'bundleDependencies', 'optionalDependencies'];
  this.getDependencies();
  this.readDependencies();
  this.writeDependencies();
  return this;
};

Dependencies.prototype.getDependencies = function() {
  var dependencyName, _i, _len, _ref;
  _ref = this.namesOfDependencies;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    dependencyName = _ref[_i];
    this.pushDependencies(packageJson[dependencyName]);
  }
};

Dependencies.prototype.pushDependencies = function(dependencyObject) {
  if (dependencyObject === void 0) {
    return false;
  }
  if (Object.keys(dependencyObject).length === 0) {
    return false;
  }
  this.ArrayDependencies.push(dependencyObject);
};

Dependencies.prototype.readDependencies = function() {
  var dependency, i, _i, _len, _ref;
  _ref = this.ArrayDependencies;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    dependency = _ref[i];
    this.output += "\n" + " " + this.namesOfDependencies[i] + ": " + "\n\n";
    this.readKeys(dependency);
  }
};

Dependencies.prototype.readKeys = function(dependency) {
  var key;
  for (key in dependency) {
    if (dependency.hasOwnProperty(key)) {
      this.counter++;
      this.output += "  " + chalk.cyan(" " + key) + "\n";
    }
  }
};

Dependencies.prototype.writeDependencies = function() {
  this.output += "\n" + " - - - - - - - - - - - - - - - - - - - -" + "\n";
  this.output += chalk.green.bold(' We have found ' + this.counter + ' dependencies!') + "\n";
  console.log(this.output);
};


/*
 * Expose library.
 */

module.exports = Dependencies;
