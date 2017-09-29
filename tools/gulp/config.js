// tools/gulp/config.js
'use strict';

module.exports = {
	tasks: {
		sassdoc: 'sassdoc'
	},
	sassdoc: {
		src: '../scss/**/*.scss',
		options: {
				verbose: true,
				display: {
					watermark: true,
					access: 'public'
				},
				groups: {
					undefined: "Global utils"
				},
				dest: "../docs"
			}
	}
}