/*jslint node: true */
'use strict';

var exec = require('../lib/exec'),
    fs = require('fs'),
    path = require('path'),
    appDir = path.dirname(require.main.filename);
/** command description. */
exports.cliVersion = '>=3.2.1';
exports.title = 'Replace me with a real title';
exports.desc = 'Replace me with a real description';
/**
 * Returns the configuration for the  command.
 * @param {Object} logger - The logger instance
 * @param {Object} config - The CLI config object
 * @param {CLI} cli - The CLI instance
 * @returns {Object} Status command configuration
 */
exports.config = function() {
    return {
        //skipBanner: true,
    };
};

/**
 * Runs the build command
 * @param {Object} logger - The logger instance
 * @param {Object} config - The CLI config object
 * @param {CLI} cli - The CLI instance
 * @param {Function} finished - Callback when the command finishes
 */

/**
* If you don't want to run build, you should comment exports.run out
* This is also doing the nice-ity of branching on platform when passing to ti build.
**/
exports.run = function(logger, config, cli, finished) {
    var platform = (cli.argv.platform || cli.argv.p),
        projectDir = path.resolve(process.env.SOURCE_ROOT ? path.join(process.env.SOURCE_ROOT, '..', '..') : '.');

    /* if they are not using ios or android, this command should gracefully bow out*/
    if (['android', 'ios', 'iphone'].indexOf(platform) === -1) {
        throw 'This command does not support your platform at this time';
    }

    if (fs.existsSync(path.join(projectDir, 'tiapp.xml'))) {
        // this is useful for when you need to ensure you are in a project

        }
        if (fs.existsSync(path.join(projectDir, 'app'))) {
            // do alloy crap here...
        }

        // require and run the correct platform...
        require('../lib/run_' + (platform === 'iphone' ? 'ios' : platform))(logger, config, cli, projectDir, finished);
    } else {
        throw "Invalid Titanium project location";
    }
};

// The rest of these are commented out so that we don't cause havock
/********
// These are event hooks
//Straight up from titanium_cli/lib/cli.js lines 1064 to EOF
/* Events */

/**
 * Fired before the CLI begins the main process flow.
 * @event CLI#cli:go
 * @type {object}
 * @property {Object} cli - The CLI instance.
 */

/**
 * Fired after the command file has been require()'d.
 * @event CLI#cli:command-loaded
 * @type {object}
 * @property {Object} cli - The CLI instance.
 * @property {Object} command - The command descriptor.
 */

/**
 * Fired before any validation takes place.
 * @event CLI#cli:pre-validate
 * @type {object}
 * @property {Object} cli - The CLI instance.
 * @property {Object} command - The command descriptor.
 */

/**
 * Fired after all validation is done.
 * @event CLI#cli:post-validate
 * @type {object}
 * @property {Object} cli - The CLI instance.
 * @property {Object} command - The command descriptor.
 * @property {Boolean} success - True if the command's validation passed.
 */

/**
 * Fired before the command is executed.
 * @event CLI#cli:pre-execute
 * @type {object}
 * @property {Object} cli - The CLI instance.
 * @property {Object} command - The command descriptor.
 */

/**
 * Fired after the command has been executed.
 * @event CLI#cli:post-execute
 * @type {object}
 * @property {Object} cli - The CLI instance.
 * @property {Object} command - The command descriptor.
 * @property {*} result - The result of the run command, if any.
 */

/**
exports.run = function(logger, config, cli, finished) {
cli.on('cli:command-not-found', yourFunctionHere);
cli.on('cli:command-loaded', yourFunctionHere);
cli.on('cli:pre-validate', yourFunctionHere);
cli.on('cli:post-validate', yourFunctionHere);
cli.on('cli:pre-execute', yourFunctionHere);
cli.on('cli:post-execute, yourFunctionHere);
cli.on('help:header', yourFunctionHere);
cli.on('build.pre.construct', yourFunctionHere);
cli.on('build.pre.compile', yourFunctionHere);
cli.on('build.finalize', yourFunctionHere);




};

//These are cross platform Function Hooks
exports.run = function(logger, config, cli, finished) {
cli.on('build.config', yourFunctionHere);
cli.on('clean.config', yourFunctionHere);
};

cli.on('build.pre.compile', {
     priority: 8000, // 1000 is default. higher is more important.
     post: function (build, finished) {
         // do awesome stuff here
        // finished();
     }
 });

cli.on('build.post.compile', {
     priority: 8000, // 1000 is default. higher is more important.
     post: function (build, finished) {
         // do awesome stuff here
        // finished();
     }
 });



//These are iOS Function Hooks
exports.run = function(logger, config, cli, finished) {
cli.on('build.ios.config', yourFunctionHere);
cli.on('build.ios.writeBuildManifest', yourFunctionHere);
cli.on('build.ios.xcodebuild', yourFunctionHere);
cli.on('build.ios.copyResource', yourFunctionHere);
cli.on('build.ios.compileJsFile', yourFunctionHere);
cli.on('build.ios.titaniumprep', yourFunctionHere);

};

//These are Android Function Hooks
exports.run = function(logger, config, cli, finished) {
cli.on('build.android.config', yourFunctionHere);
cli.on('build.android.copyResource', yourFunctionHere);
cli.on('build.android.compileJsFile', yourFunctionHere);
cli.on('build.android.titaniumprep', yourFunctionHere);
cli.on('build.android.aidl', yourFunctionHere);
cli.on('build.android.writeAndroidManifest', yourFunctionHere);
cli.on('build.android.aapt', yourFunctionHere);
cli.on('build.android.javac', yourFunctionHere);
cli.on('build.android.proguard', yourFunctionHere);
cli.on('build.android.dexer', yourFunctionHere);
cli.on('build.android.jarsigner', yourFunctionHere);
cli.on('build.android.zipalign', yourFunctionHere);
cli.on('build.android.startEmulator', yourFunctionHere);


};

// Mobile Web Function Hooks. Yes. There is atleast one
exports.run = function(logger, config, cli, finished) {
cli.on('build.mobileweb.config', yourFunctionHere);

};

//BlackBerry Function Hooks
// There are no BlackBerry Specific hooks


// Tizen was removed from Titanium 3.2.2
// No one cares about Tizen.

//Windows Function Hooks don't exist yet. ( as of 3.2.2)

*********/



