var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for Flex utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_flex-mixins.scss');
	var sassaby = new Sassaby(_file);

	describe('@minins flex()', function() {
		it('Mixins exists', function() {
			sassaby.includedMixin('flex').called().hasNumDeclarations(1);
		});

		it('Mixins generate display: flex', function(){
			sassaby.includedMixin('flex').called().equals('display: flex');
		});
	});

	describe('@minins flex-container()', function() {

		it('Call without arguments', function(){
			sassaby.includedMixin('flex-container').called().equals('display: flex');
		});

		it('Check call with 2 params', function(){
			sassaby.includedMixin('flex-container').calledWithArgs('columns', 'wrap').equals('display:flex;flex-direction:columns;flex-wrap:wrap');
		})
	});

	describe('@minins flex-item()', function() {

		it('Call without arguments', function(){
			sassaby.includedMixin('flex-item').called().equals('flex: 1 1 auto');
		});

		it('Check call with 3 params', function(){
			sassaby.includedMixin('flex-item').calledWithArgs('1 1 auto', 'flex-start', '-1').equals('flex: 1 1 auto;align-self:flex-start;order:-1');
		})
	});
});