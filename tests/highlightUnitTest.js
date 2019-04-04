(function(){
	'use strict';

	describe('Component: miauHighlight', () => {
		let $compile;
		let scope;
		
		beforeEach(() => {
			angular.mock.module('miau');
		});

		beforeEach(inject(($rootScope, _$compile_) => {
			scope = $rootScope.$new();
			$compile = _$compile_;
		}));

		it('should to be equal text (one-way databind)', () => {
			scope['text'] = 'Voss';
			let element = angular.element('<miau-highlight text="Henike Voss" word="nike" before="3" later="4"></miau-highlight>');
			element = $compile(element)(scope);
			scope.$digest();
			expect(element.text()).toEqual("Henike Voss");
		});
	});
})();