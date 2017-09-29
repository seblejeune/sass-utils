var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for border-radius utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_border-radius.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'border-radius-default': '5px'
		}
	});

	describe('@mixins border-radius()', function() {
		it('@mixins border-radius()', function() {
			sassaby.includedMixin('border-radius').called().hasNumDeclarations(1);
			sassaby.includedMixin('border-radius').called().equals('border-radius: 5px');
		});

		it('@mixins border-radius(10px)', function(){
			sassaby.includedMixin('border-radius').calledWithArgs('10px').equals('border-radius: 10px');
		});
	});

	describe('@mixins border-top-radius()', function() {
		it('@mixins border-top-radius()', function() {
			sassaby.includedMixin('border-top-radius').called().hasNumDeclarations(2);
			sassaby.includedMixin('border-top-radius').called().equals('border-top-left-radius: 5px; border-top-right-radius: 5px');
		});

		it('@mixins border-top-radius(10px)', function(){
			sassaby.includedMixin('border-top-radius').calledWithArgs('10px').equals('border-top-left-radius: 10px; border-top-right-radius: 10px');
		});
	});

	describe('@mixins border-bottom-radius()', function() {
		it('@mixins border-bottom-radius()', function() {
			sassaby.includedMixin('border-bottom-radius').called().hasNumDeclarations(2);
			sassaby.includedMixin('border-bottom-radius').called().equals('border-bottom-left-radius: 5px; border-bottom-right-radius: 5px');
		});

		it('@mixins border-bottom-radius(10px)', function(){
			sassaby.includedMixin('border-bottom-radius').calledWithArgs('10px').equals('border-bottom-left-radius: 10px; border-bottom-right-radius: 10px');
		});
	});

	describe('@mixins border-left-radius()', function() {
		it('@mixins border-left-radius()', function() {
			sassaby.includedMixin('border-left-radius').called().hasNumDeclarations(2);
			sassaby.includedMixin('border-left-radius').called().equals('border-top-left-radius: 5px; border-bottom-left-radius: 5px');
		});

		it('@mixins border-left-radius(10px)', function(){
			sassaby.includedMixin('border-bottom-radius').calledWithArgs('10px').equals('border-bottom-left-radius: 10px; border-bottom-right-radius: 10px');
		});
	});

	describe('@mixins border-right-radius()', function() {
		it('@mixins border-right-radius()', function() {
			sassaby.includedMixin('border-right-radius').called().hasNumDeclarations(2);
			sassaby.includedMixin('border-right-radius').called().equals('border-top-right-radius: 5px; border-bottom-right-radius: 5px');
		});

		it('@mixins border-right-radius(10px)', function(){
			sassaby.includedMixin('border-right-radius').calledWithArgs('10px').equals('border-top-right-radius: 10px; border-bottom-right-radius: 10px');
		});
	});
});