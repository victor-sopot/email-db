// app/models/contact.js

// grab the mongoose module
var mongoose = require('mongoose');


//define the model
//module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Contact', {
	firstname : { type : String, default: '' },
	lastname : { type : String, default: '' },
	email : { type : String, default: '' },
	tel : { type : String, default: '' },
	notes : { type : String, default: '' },
	author : { type : String, default: '' },
	createdAt : { type: Date, default: Date.now }
});