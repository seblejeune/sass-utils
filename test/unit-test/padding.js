var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for padding utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_padding.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'padding-default': '0px',
			'padding-all-default': null
		}
	});

	describe('@mixins padding()', function() {
		it('@mixins padding()', function() {
			sassaby.includedMixin('padding').called().hasNumDeclarations(1);
			sassaby.includedMixin('padding').called().equals('padding: 0px');
		});
		
		it('@mixins padding(10px)', function(){
			sassaby.includedMixin('padding').calledWithArgs('10px').equals('padding: 10px');
		});
	});

	describe('@mixins padding-all()', function() {
		it('@mixins padding-all()', function() {
			sassaby.includedMixin('padding-all').called().hasNumDeclarations(0);
		});

		it('@mixins padding-all(0,0,0,0)', function(){
			sassaby.includedMixin('padding-all').calledWithArgs('0','0','0','0').equals('padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0;');
		});
	});
});