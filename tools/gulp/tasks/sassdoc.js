// tools/gulp/tasks/sassdoc.js
'use strict'

module.exports = function(gulp, $, config) {
	gulp.task(config.tasks.sassdoc, 'Generate Sassdoc', function() {
		return gulp.src(config.sassdoc.src)
			.pipe($.sassdoc(config.sassdoc.options))
	})
}