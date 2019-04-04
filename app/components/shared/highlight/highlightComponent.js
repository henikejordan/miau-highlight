(function(){
	"use strict";

	/**
	* component: miauModal
	*/
	module.exports = {
		template: /*@ngInject*/ function($templateCache) {
			return $templateCache.get("highlight/highlight.html");
		},
		controller: require('./highlightController'),
		controllerAs: "highlight",
		bindings: {
			text: '@',
			word: '@',
			before: '<',
			later: '<',
			updated: '&'
		}
	}

})();