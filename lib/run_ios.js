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
    // I found the following line useful for when I need the iOS build path...   
	// iosBuildPath = path.join(projectDir, 'build/iphone');

	/**
 	// More useful code
		tiapp.find(projectDir, function(err, obj) {});
 	**/
};
