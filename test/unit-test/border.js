var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for border utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_border.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'border-default': '0px'
		}
	});

	describe('@mixins border()', function() {
		it('@mixins border()', function() {
			sassaby.includedMixin('border').called().hasNumDeclarations(1);
			sassaby.includedMixin('border').called().equals('border: 0');
		});

		it('@mixins border(10px)', function(){
			sassaby.includedMixin('border').calledWithArgs('10px').equals('border: 10px');
		});

		it('@mixins border(1px solid red)', function(){
			sassaby.includedMixin('border').calledWithArgs('1px solid red').equals('border: 1px solid red');
		});
	});
});