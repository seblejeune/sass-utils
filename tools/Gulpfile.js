// Gulpfile.js
'use strict';

// plugins used : 
// gulp, gulp-help, gulp-load-plugins, gulp-load-subtasks

var gulp = require('gulp-help')(require('gulp')),
		config = require('./gulp/config.js'),
		$ = require('gulp-load-plugins')({
			pattern: '*',
			rename: {
				'lodash.assign': 'assign'
			}
		});

$.loadSubtasks('./gulp/tasks/**/*.js', $, config);