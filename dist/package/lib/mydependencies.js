
/*
List dependencies of npm projects.
@class MyDependencies
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var MyDependencies, chalk, fs;

chalk = require('chalk');

fs = require('fs');


/*
 * Library.
 */

MyDependencies = function(opts) {
  var options;
  options = {
    namesOfMyDependencies: ['devDependencies', 'dependencies', 'peerDependencies', 'bundleDependencies', 'optionalDependencies']
  };
  this.settings = opts || options;
  this.ArrayDependencies = [];
  this.counter = 0;
  this.output = "";
  this.namesOfMyDependencies = this.settings.namesOfMyDependencies;
  this.readFile('package.json');
  this.getMyDependencies();
  this.readMyDependencies();
  this.writeMyDependencies();
  return this;
};

MyDependencies.prototype.readFile = function(filepath) {
  this.packageJson = JSON.parse(fs.readFileSync(process.cwd() + '/' + filepath, 'utf8'));
};

MyDependencies.prototype.getMyDependencies = function() {
  var dependencyName, _i, _len, _ref;
  _ref = this.namesOfMyDependencies;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    dependencyName = _ref[_i];
    this.pushMyDependencies(this.packageJson[dependencyName]);
  }
};

MyDependencies.prototype.pushMyDependencies = function(dependencyObject) {
  if (dependencyObject === void 0) {
    return false;
  }
  if (Object.keys(dependencyObject).length === 0) {
    return false;
  }
  this.ArrayDependencies.push(dependencyObject);
};

MyDependencies.prototype.readMyDependencies = function() {
  var dependency, i, _i, _len, _ref;
  _ref = this.ArrayDependencies;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    dependency = _ref[i];
    this.output += "\n" + " " + this.namesOfMyDependencies[i] + ": " + "\n\n";
    this.readKeys(dependency);
  }
};

MyDependencies.prototype.readKeys = function(dependency) {
  var key;
  for (key in dependency) {
    if (dependency.hasOwnProperty(key)) {
      this.counter++;
      this.output += "  " + chalk.cyan(" " + key) + "\n";
    }
  }
};

MyDependencies.prototype.writeMyDependencies = function() {
  this.output += "\n" + " - - - - - - - - - - - - - - - - - - - -" + "\n";
  this.output += chalk.green.bold(' We have found ' + this.counter + ' dependencies!') + "\n";
  console.log(this.output);
};


/*
 * Expose library.
 */

module.exports = MyDependencies;
