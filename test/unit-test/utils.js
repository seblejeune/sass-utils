var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_utils.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'disabled-opacity-default': '0.5',
			'disabled-cursor-default': 'not-allowed',
			'disabled-class-name-default': 'disabled'
		}
	});

	describe('@mixins disabled()', function() {
		it('@mixins disabled()', function() {
			sassaby.includedMixin('disabled').called().hasNumDeclarations(2);
			sassaby.includedMixin('disabled').called().equals('opacity: 0.5; cursor: not-allowed;');
		});
		
		it('@mixins disabled(0, pointer)', function(){
			sassaby.includedMixin('disabled').calledWithArgs('0', 'pointer').equals('opacity: 0; cursor: pointer;');
		});
	});

	describe('@mixins disabled-class()', function() {
		it('@mixins disabled-class()', function() {
			sassaby.standaloneMixin('disabled-class').called().hasNumDeclarations(2);
			sassaby.standaloneMixin('disabled-class').called().createsSelector('.disabled');
		});
		
		it('@mixins disabled-class(0, pointer)', function(){
			sassaby.standaloneMixin('disabled-class').calledWithArgs('0', 'pointer').equals('.disabled{opacity: 0; cursor: pointer;}');
		});
	});
});