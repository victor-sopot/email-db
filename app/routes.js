var Contact = require('./models/contact');

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
	app.post('/api/contacts', function(request, response) {

		var contact = new Contact({
			firstname: request.body.firstname,
			lastname: request.body.lastname,
			email: request.body.email,
			tel: request.body.tel,
			notes: request.body.notes,
			author: request.body.user
		});

		contact.save(function(err, contact) {
			if (err) return console.error(err);
		});

		response.json('success');
	});

	//route to handle delete goes here (app.delete)

};