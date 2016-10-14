angular.module('ContactCtrl', []).controller('ContactController', function($scope, Contact) {

	$scope.tagline = 'Nothing beats a pocket rocket';

	Contact.get()
	.success(function(data) {
		$scope.contacts = data;
	});

});