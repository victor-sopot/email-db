angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		//home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		//contacts page making use of the ContactCtrl
		.when('/contacts', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});

	$locationProvider.html5Mode(true);

}]);