(function(){
	"use strict";

	module.exports = angular.module("miau.example.module",[
			require('../shared/highlight').name
		])
		.component("example", require('./exampleComponent'));

})();