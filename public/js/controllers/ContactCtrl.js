angular.module('ContactCtrl', []).controller('ContactController', function($scope, Contacts) {
	
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

	$scope.contacts = {};
	$scope.newContact = {};
	Contacts.get()
	.success(function(data) {
		$scope.contacts = data;
	})
	.error(function(error) {
		console.log(error);
		toastr["error"]('Contacts couldnt be loaded from DB.');
	});

	$scope.storeContact = function(isValid) {
		if(isValid) {
			Contacts.create($scope.newContact)
				.success(function(data) {
					Contacts.get()
						.success(function(getData) {
							toastr["success"](data);
							$scope.contacts = getData;
						});
				})
				.error(function(data) {
					toastr["error"](data);
				});
		}
	};
})


.directive('contactsTable', function(){
	return {
		templateUrl: 'views/partials/contacts-table.html',
		replace: 'true'
	};
})