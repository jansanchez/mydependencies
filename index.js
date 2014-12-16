
#!/usr/bin/env node


/*
 * Dependencies.
 */
 
var chalk = require('chalk');


/*
 * requires.
 */

var package = require('./package.json');


/*
 * Library.
 */

Dependencies = function(opts) {
	this.settings = opts || {};
	this.ArrayDependencies = [];
	this.counter = 0;
	this.output = "";	
	this.nameDependencies = ['devDependencies', 'dependencies', 'peerDependencies', 'bundleDependencies', 'optionalDependencies'];

	this.pushDependencies();
	this.readDependencies();
	this.writeDependencies();
	return this;
};


Dependencies.prototype.pushDependencies = function() {
	for (var i=0; i<this.nameDependencies.length; i++) {
		var dependencyObject = package[this.nameDependencies[i]];
		if (dependencyObject !== undefined && Object.keys(dependencyObject).length !== 0){
			this.ArrayDependencies.push(dependencyObject);
		}
	}
};


Dependencies.prototype.readDependencies = function() {
	for (var j=0; j<this.ArrayDependencies.length; j++) {
		var dependency = this.ArrayDependencies[j];

		this.output += "\n" + " " + this.nameDependencies[j] + ": " + "\n";
		
		for (var key in dependency) {
			if (dependency.hasOwnProperty(key)) {
				this.counter++;
				this.output += "  " + chalk.cyan(" " + key) + "\n";
			}
		}
	}
};


Dependencies.prototype.writeDependencies = function() {
	this.output += "\n" + " - - - - - - - - - - - - - - - - - - - -" + "\n";
	this.output += chalk.green.bold(' We have found ' + this.counter +' dependencies!') + "\n";
	console.log(this.output);
};


/*
 * Expose library.
 */

module.exports = Dependencies;

var dep = new Dependencies();