angular.module('ContactCtrl', []).controller('ContactController', function($scope, Contacts, $location) {
	
	let controller = this;

	toastr.options = {
		"closeButton": false,
		"debug": false,
		"newestOnTop": false,
		"progressBar": true,
		"positionClass": "toast-top-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}

	$scope.newContact = {};

	Contacts.get()
	.then(function successCallback(response) {
		$scope.contacts = response;
	}, function errorCallback(response) {
		console.log(response)
		toastr["error"]('Contacts couldnt be loaded from DB.');
	});

	$scope.newContact = {};

	$scope.storeContact = function(isValid) {
		if(isValid) {
			Contacts.create($scope.newContact)
				.then(function successCallback(response) {
					Contacts.get()
						.then(function successCallback(newData) {
							toastr["success"](newData);
							$scope.contacts = newData;
		                    $location.path('/home');
						}, function errorCallback(response) {
							console.log(response)
							toastr["error"]('New contacts couldnt be loaded from DB.');
						});
				}, function errorCallback(response) {
					console.log(response)
					toastr["error"]('There was an error storing the new contact.');
				});
		};
	};
})


.directive('contactsTable', function(){
	return {
		templateUrl: 'views/partials/contacts-table.html',
		replace: 'true'
	};
})