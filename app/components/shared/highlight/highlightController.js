(function(){
	"use strict";

	module.exports = /*@ngInject*/ function(highlightService) {
		var highlight = this;
			
		// Here is a playground =D
		highlight.$onInit = function() {
			highlight.updated = highlightService.do(highlight.text, highlight.word, highlight.before, highlight.later);
		}
	}
})();