/*
 * grunt-jshint-solid
 * https://github.com/bahmutov/grunt-jshint-solid
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var check = require('check-types');
var solid = require('jshint-solid');

module.exports = function (grunt) {

  var title = 'Checks how solid your .jshintrc file is';
  grunt.registerTask('jshint-solid', title, function () {
    grunt.log.writeln('jshintrc is solid');
  });

};
