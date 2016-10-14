var Contact = require('./models/contact');
var path = require('path');

module.exports = function(app) {

	//server routes
	//handle things like API calls
	//authentication routes

	//sample api route from tutorial
	app.get('/api/contacts', function(request, response) {

		//use mongoose to get all contacts
		Contact.find(function(err, contacts) {

			//if there is any errors retrieving, display that error
			if (err)
				response.send(err);

			response.json(contacts); //return all contacts in JSON format
		});

	});


	//route to handle creating goes here (app.post)
	//route to handle delete goes here (app.delete)

};