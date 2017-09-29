var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for border utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_font.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'fontawesome-color-default': 'inherit',
			'fontawesome-font-size-default': 'inherit',
			'font-color-default': null,
			'font-font-weight-default': null,
			'font-font-style-default': null,
			'font-font-size-default': null,
			'font-line-height-default': null,
			'font-text-transform-default': null,
			'font-text-align-default': null,
			'font-text-decoration-default': null,
		}
	});

	describe('@mixins fontawesome()', function() {
		it('@mixins fontawesome(f2ba)', function(){
			sassaby.includedMixin('fontawesome').calledWithArgs('f2ba').equals('display:inline-block;text-rendering:auto;color:inherit;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;content:f2ba;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale');
		});

		it('@mixins fontawesome(f2ba, #336699, 16px)', function(){
			sassaby.includedMixin('fontawesome').calledWithArgs('f2ba', '#336699', '16px').equals('display:inline-block;text-rendering:auto;color:#336699;font:normal normal normal 14px/1 FontAwesome;font-size:16px;content:f2ba;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale');
		});
	});

	describe('@mixins font()', function() {
		it('@mixins font()', function(){
			sassaby.includedMixin('font').called().hasNumDeclarations(0);
		});

		it('@mixins font($color: #336699)', function(){
			sassaby.includedMixin('font').calledWithArgs('$color: #336699').equals('color: #336699');
		});
	});
});