// comm with server and mongo
angular.module('ContactService', []).factory('Contacts', ['$http', function($http) {

	return {
		//call to get all contacts
		get : function() {
			return $http.get('/api/contacts'); // angular HTTP request (ajax)
		},

		// these will work when more API routes are defined on the Node side of things
		// call to POST and create a new contact
		create : function(contactData) {
			return $http.post('/api/contacts', contactData);
		},


		//call to DELETE a contact
		delete : function(id) {
			return $http.delete('/api/contacts/', +id);
		}

	}

}])