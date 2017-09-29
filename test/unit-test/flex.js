var _path = require('path');
var Sassaby = require('sassaby');

describe('Check all mixins for Flex utils', function() {
	var _file = _path.resolve(__dirname, '../../scss/mixins/_flex-mixins.scss');
	var sassaby = new Sassaby(_file, {
		variables: {
			'flex-container-direction-default': null,
			'flex-container-wrap-default': null,
			'flex-container-align-content-default': null,
			'flex-container-align-items-default': null,
			'flex-container-justify-content-default': null,
			'flex-items-flex-default': '1 1 auto',
			'flex-items-align-self-default': null,
			'flex-items-order-default': null
		}
	});

	describe('@mixins flex()', function() {
		it('@mixins flex()', function() {
			sassaby.includedMixin('flex').called().hasNumDeclarations(1);
			sassaby.includedMixin('flex').called().equals('display: flex');
		});
	});

	describe('@mixins flex-container()', function() {

		it('@mixins flex-container()', function(){
			sassaby.includedMixin('flex-container').called().equals('display: flex');
		});

		it('@mixins flex-container(columns, wrap)', function(){
			sassaby.includedMixin('flex-container').calledWithArgs('columns', 'wrap').equals('display:flex;flex-direction:columns;flex-wrap:wrap');
		})
	});

	describe('@mixins flex-item()', function() {

		it('@mixins flex-item()', function(){
			sassaby.includedMixin('flex-item').called().equals('flex: 1 1 auto');
		});

		it('@mixins flex-item(1 1 auto, flex-start, -1)', function(){
			sassaby.includedMixin('flex-item').calledWithArgs('1 1 auto', 'flex-start', '-1').equals('flex: 1 1 auto;align-self:flex-start;order:-1');
		})
	});
});