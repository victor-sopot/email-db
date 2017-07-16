angular.module('MainCtrl', []).controller('MainController', function($scope, Contacts) {

	$scope.loading = false;
	$scope.contacts = {};

	Contacts.get()
		.success(function(data) {
			$scope.contacts = data;
			toastr["success"]('Contacts loaded from DB.');
		})
		.error(function(error) {
			console.log(error);
			toastr["error"]('Contacts couldnt be loaded from DB.');
		});

})

.directive('header', function(){
	return {
		templateUrl: 'views/partials/header.html',
		replace: 'true'
	};
})