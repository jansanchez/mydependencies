#!/usr/bin/env node

###
mydependencies
@class mydependencies
@author Jan Sanchez
###


###
# Module dependencies.
###

program      = require('commander')
Dependencies = require('../dist/package/lib/mydependencies')


###
# program configuration.
###

program
	.version(require('../package.json').version)
	.usage('[options]')
	.option('--dep', 'show only Dependencies.')
	.option('--dev', 'show only dev Dependencies.')

program.on('--help', () ->
	console.log('  Examples:')
	console.log('')
	console.log('    # show only dev Dependencies')
	console.log('    $ mydependencies --dev')
	console.log('')
	console.log('    # show only Dependencies')
	console.log('    $ mydependencies --dep')
	console.log('')
)

program.parse(process.argv)


###
# Program options.
###

options = {}

options.dev = program.dev || false
options.dep = program.dep || false


###
# Functions.
###

start = (options) ->
	if options
		dependencies = new Dependencies(options)
	else
		dependencies = new Dependencies()
	process.exit()

defaults = () ->
	start()

dev = () ->
	options = {
		namesOfMyDependencies: ['devDependencies']
	}
	start(options)
	return

dep = () ->
	options = {
		namesOfMyDependencies: ['dependencies']
	}
	start(options)
	return


###
# Run Functions.
###

if options.dev
	dev()

if options.dep
	dep()

defaults()

