angular.module('MainCtrl', []).controller('MainController', function($scope, Contacts) {

	$scope.loading = false;
	$scope.contacts = {};

	Contacts.get()
		.then(function successCallback(response) {
			$scope.contacts = response;
			toastr["success"]('Contacts loaded from DB.');
		}, function errorCallback(response) {
			console.log(response);
			toastr["error"]('Contacts couldnt be loaded from DB. Check console for error info');
		});

})

.directive('header', function(){
	return {
		templateUrl: 'views/partials/header.html',
		replace: 'true'
	};
})