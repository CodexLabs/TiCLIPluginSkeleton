There's a couple of things you should know about the Titanium CLI hook system.

First, There are two types of hooks:
Event Hooks and Function Hooks.

From titanium_cli/lib/hook.js [lines 147-152]

This comment explains the relationship between a function hook and an event hook

* Fires an hook event. This function creates a 'function hook', then immediately
* calls it, thus making it an 'event hook'.
* @param {String|Array<String>} hookNames - The hook name or an array of many hook names
* @param {Object} [data] - The event payload
* @param {Function} callback - A callback when the event has finished firing
* @returns {Object} this


Next, for an exhaustive list of all current Event and Function Hooks as of Ti 3.2.2 see plugin/commandName.js past line number 61

