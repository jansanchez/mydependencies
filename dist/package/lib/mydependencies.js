
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
  if (this.readFile("package.json")) {
    this.getMyDependencies();
    this.readMyDependencies();
    this.writeMyDependencies();
  }
  return this;
};

MyDependencies.prototype.readFile = function(filepath) {
  var contentFile, err, error, error1;
  error = {
    status: false
  };
  try {
    contentFile = fs.readFileSync(process.cwd() + "/" + filepath, "utf8");
  } catch (error1) {
    err = error1;
    error.status = true;
    error.path = err.path;
  }
  if (error.status) {
    console.log(chalk.red("No such file or directory: '" + error.path + "'"));
    return false;
  } else {
    this.packageJson = JSON.parse(contentFile);
    return true;
  }
};

MyDependencies.prototype.getMyDependencies = function() {
  var dependencyName, j, len, ref;
  ref = this.namesOfMyDependencies;
  for (j = 0, len = ref.length; j < len; j++) {
    dependencyName = ref[j];
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
  var dependency, i, j, len, ref;
  ref = this.ArrayDependencies;
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    dependency = ref[i];
    this.output += "\n" + " " + this.namesOfMyDependencies[i] + ": " + "\n\n";
    this.readKeys(dependency);
  }
};

MyDependencies.prototype.readKeys = function(dependency) {
  var key;
  for (key in dependency) {
    if (dependency.hasOwnProperty(key)) {
      this.counter++;
      this.output += "  " + chalk.cyan(" " + key) + " : " + chalk.yellow(dependency[key]) + "\n";
    }
  }
};

MyDependencies.prototype.writeMyDependencies = function() {
  this.output += "\n" + " - - - - - - - - - - - - - - - - - - - -" + "\n";
  this.output += chalk.green.bold(" We have found " + this.counter + " dependencies!") + "\n";
  console.log(this.output);
};


/*
 * Expose library.
 */

module.exports = MyDependencies;
