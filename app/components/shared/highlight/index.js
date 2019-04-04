(function(){
	"use strict";

	module.exports = angular.module("miau.highlight.module",['ngSanitize'])
		.component("miauHighlight", require('./highlightComponent'))
		.service("highlightService", require('./highlightService'));
})();