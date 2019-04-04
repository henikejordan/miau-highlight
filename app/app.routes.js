(function(){
    'use strict';

    require('angular-route');
	require('angular-sanitize');

    module.exports = /*@ngInject*/ function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/',{
                template:[
                    '<div class="container">',
                    '<spam>Hello World</spam>',
                    '<p>Acesse "/example"</p>',
                    '</div>'
                ].join(' ')
            })
            .when('/example',{
                template: '<example></example>'
            })
			.when('/highlight',{
                template: '<miau-highlight text="Henike Voss" word="nik" before="2" later="1"></miau-highlight>'
            })
    }
})();