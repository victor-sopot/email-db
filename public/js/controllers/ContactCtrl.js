angular.module('ContactCtrl', []).controller('ContactController', function($scope, Contacts) {

	$scope.tagline = 'Nothing beats a pocket rocket';

	$scope.contacts = {};

	Contacts.get()
	.success(function(data) {
		$scope.contacts = data;
	})
	.error(function(error) {
		console.log(error);
	});

	$scope.submitPortfolio = function() {

		//save the contact pass in contact data from form
		Contacts.create($scope.contactData)
			.success(function(data) {
				Contacts.get()
					.success(function(getData) {
						$scope.contacts = getData;
					});
			})
			.error(function(data) {
				console.log(data);
			});
	};

	$scope.deletePortfolio = function(id) {
		$scope.loading = true;

		Contacts.destroy(id)
			.success(function(data) {
				Contacts.get()
					.success(function(getData) {
						$scope.portfolios = getData;
						$scope.loading = false;
					});
			});
	};

});