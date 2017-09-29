var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for margin utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_margin.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'margin-default': '0px',
			'margin-all-default': null
		}
	});

	describe('@mixins margin()', function() {
		it('@mixins margin()', function() {
			sassaby.includedMixin('margin').called().hasNumDeclarations(1);
			sassaby.includedMixin('margin').called().equals('margin: 0px');
		});
		
		it('@mixins margin(10px)', function(){
			sassaby.includedMixin('margin').calledWithArgs('10px').equals('margin: 10px');
		});
	});

	describe('@mixins margin-all()', function() {
		it('@mixins margin-all()', function() {
			sassaby.includedMixin('margin-all').called().hasNumDeclarations(0);
		});

		it('@mixins margin-all(0,0,0,0)', function(){
			sassaby.includedMixin('margin-all').calledWithArgs('0','0','0','0').equals('margin-top: 0; margin-right: 0; margin-bottom: 0; margin-left: 0;');
		});
	});
});