###
List dependencies of npm projects.
@class MyDependencies
@author Jan Sanchez
###


###
# Module dependencies.
###

chalk       = require('chalk')
fs          = require('fs')


###
# Library.
###

MyDependencies = (opts) ->
	options = {
		namesOfMyDependencies: ['devDependencies', 'dependencies', 'peerDependencies', 'bundleDependencies', 'optionalDependencies']
	}
	@settings = opts or options
	@ArrayDependencies = []
	@counter = 0
	@output = ""
	@namesOfMyDependencies = @settings.namesOfMyDependencies

	@readFile('./package.json')
	@getMyDependencies()
	@readMyDependencies()
	@writeMyDependencies()

	return @

MyDependencies::readFile = (filepath) ->
	@packageJson = JSON.parse(fs.readFileSync(filepath, 'utf8'))
	return

MyDependencies::getMyDependencies = () ->
	for dependencyName in @namesOfMyDependencies
		@pushMyDependencies(@packageJson[dependencyName])
	return

MyDependencies::pushMyDependencies = (dependencyObject) ->
	if dependencyObject is undefined
		return false
	if Object.keys(dependencyObject).length is 0
		return false
	@ArrayDependencies.push(dependencyObject)
	return

MyDependencies::readMyDependencies = () ->
	for dependency, i in @ArrayDependencies
		@output += "\n" + " " + @namesOfMyDependencies[i] + ": " + "\n\n"
		@readKeys(dependency)
	return

MyDependencies::readKeys = (dependency) ->
	for key of dependency
		if (dependency.hasOwnProperty(key))
			@counter++
			@output += "  " + chalk.cyan(" " + key) + "\n"
	return

MyDependencies::writeMyDependencies = () ->
	@output += "\n" + " - - - - - - - - - - - - - - - - - - - -" + "\n"
	@output += chalk.green.bold(' We have found ' + @counter + ' dependencies!') + "\n"
	console.log(@output)
	return


###
# Expose library.
###

module.exports = MyDependencies

