(function(){
	"use strict";

	/**
	* component: example
	*/
	module.exports = {
		template: /*@ngInject*/ function($templateCache){
			return $templateCache.get("example/example.html");
		},
		controller: require('./exampleController'),
		controllerAs: "example",
		bindings: {
			
		}
	}

})();	