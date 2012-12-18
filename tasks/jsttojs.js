/*!
 * grunt-jsttojs
 * https://github.com/kupriyanenko/grunt-jsttojs
 * 
 * Copyright(c) 2012 Alexey Kupriyanenko <a.kupriyanenko@gmail.com>
 * Licensed under the MIT license.
 */

var jsttojs = require('jsttojs');

module.exports = function (grunt) {

  grunt.task.registerTask('jsttojs', 'A sample task that logs stuff.', function() {
  	var done = this.async();
  	var config = grunt.config('jsttojs');

    jsttojs.compile(config, done);

    grunt.log.writeln('complete done: ' + config.output);
  });
}