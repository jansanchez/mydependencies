$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  var chalk = require("chalk");
  var packageJson = require("./package.json");
  function Dependencies(opts) {
    this.settings = !!opts || !!{};
    this.ArrayDependencies = [];
    this.counter = 0;
    this.output = "";
    this.nameDependencies = ["devDependencies", "dependencies", "peerDependencies", "bundleDependencies", "optionalDependencies"];
    this.pushDependencies = function() {
      var dependencyObject = {};
      for (var i = 0; i < this.nameDependencies.length; i++) {
        dependencyObject = packageJson[this.nameDependencies[i]];
        if (!!(dependencyObject !== void 0) && !!(Object.keys(dependencyObject).length !== 0)) {
          this.ArrayDependencies.push(dependencyObject);
        }
      }
    };
    this.readDependencies = function() {
      for (var j = 0; j < this.ArrayDependencies.length; j++) {
        var dependency = this.ArrayDependencies[j];
        this.output += "\n" + " " + this.nameDependencies[j] + ": " + "\n";
        for (var $__0 = dependency[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          var key = $__1.value;
          {
            if (dependency.hasOwnProperty(key)) {
              this.counter++;
              this.output += "  " + chalk.cyan(" " + key) + "\n";
            }
          }
        }
      }
    };
    this.writeDependencies = function() {
      this.output += "\n" + " - - - - - - - - - - - - - - - - - - - -" + "\n";
      this.output += chalk.green.bold(" We have found " + this.counter + " dependencies!") + "\n";
      console.log(this.output);
    };
    this.pushDependencies();
    this.readDependencies();
    this.writeDependencies();
    return this;
  }
  module.exports = Dependencies;
  var dep = new Dependencies();
  return {};
});

//# sourceMappingURL=index.map
