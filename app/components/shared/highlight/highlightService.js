(function(){
	"use strict";

	/**
	* service: highlightService
	*/
	module.exports = /*@ngInject*/ function() {
		this.do = _do; 
		
		function _do(text, word, before, later) {
			for(var i = 0; i < text.length; i++) {
				if(text.substring(i, i + 1) == word.substring(0, 1)) {
					for(var j = i, k = 0; k < word.length; j++, k++) {
						if(text.substring(j, j + 1) != word.substring(k, k + 1)) {
							break;
						} else if(k == word.length - 1) {
							var negrito = '<strong><u>' + text.substring(i - before, i)
											+ word + text.substring(j + 1, j + 1 + later) 
											+ '</u></strong>';
							text = text.substring(0, i - before) + negrito + 
									text.substring(j + 1 + later, text.length);
							i += negrito.length;
						}
					}
				}
			}
			
			return text;
		}
	}
})();