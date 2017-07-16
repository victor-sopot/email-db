angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		//home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/search', {
			templateUrl: 'views/search.html',
			controller: 'SearchController'
		})

		.when('/browse', {
			templateUrl: 'views/browse.html'
		})

		.when('/add', {
			templateUrl: 'views/add.html',
			controller: 'ContactController'
		})



		//contacts page making use of the ContactCtrl
		.when('/contacts', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});

	$locationProvider.html5Mode(true);

}]);