angular.module('HeaderDirective', []).directive('header', function() {
	return {
		templateUrl: 'views/partials/header.html',
		replace: 'true'
	};
});