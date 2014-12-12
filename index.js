#!/usr/bin/env node

/* dependencies */
var chalk = require('chalk');

var package = require('./package.json')
	, nameDependencies = ['devDependencies', 'dependencies', 'peerDependencies', 'bundleDependencies', 'optionalDependencies']
	, dependencies = []
	, counter = 0;

for (var i=0; i<nameDependencies.length; i++) {
	var dependencyObject = package[nameDependencies[i]];
	if (dependencyObject !== undefined && Object.keys(dependencyObject).length !== 0){
		dependencies.push(dependencyObject);
	}
}

for (var j=0; j<dependencies.length; j++) {
	var dependency = dependencies[j];
	console.log("\n" + " " + nameDependencies[j] + ':' + "\n");
	
	for (var key in dependency) {
		if (dependency.hasOwnProperty(key)) {
			counter++;
			console.log('  ' + chalk.cyan(' ' + key));
		}
	}
}

console.log("\n" + " . . . . . . . . . . . . . . . " + "\n");
console.log(chalk.green.bold(' We have found ' + counter +' dependencies!') + "\n");
