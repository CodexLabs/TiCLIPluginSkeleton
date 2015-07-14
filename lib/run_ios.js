/*jslint node: true */
'use strict';
var fs = require('fs'),
	exec = require('./exec'),
	path = require('path'),
	tiapp = require('tiapp'),
	appDir = path.dirname(require.main.filename);

/**
 * Runs the build command
 * @param {Object} logger - The logger instance
 * @param {Object} config - The CLI config object
 * @param {CLI} cli - The CLI instance
 * @param {Function} finished - Callback when the command finishes
 */

module.exports = function(logger, config, cli, projectDir, finished) {
	var passthroughCommands = ['build'].concat(cli.argv['$_'].slice(3)),
        iosBuildPath = path.join(projectDir, 'build/iphone');   

	console.log('your have no power here... wait you do.');
 	

};
