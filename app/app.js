(function(){
    'use strict';

    var angular = require('angular');

    angular.module('miau',[
        'ngRoute',
        require('./components/example').name,
		require('./components/shared/highlight').name,
        require('./template/templates').name
    ])
        .config(require('./app.routes'));
})();