// server.js 

//modules 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config

// files

var db = require('./config/db');
 

// port
var port = process.env.PORT || 3000;

//connect to mongoDB
mongoose.connect(db.url);

// get all data of the body (POST) params
//parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// ROUTES
require('./app/routes')(app); // configure our ROUTES
	//frontend routes
	//route to handle all Angular requests
app.get('*', function(request, response) {
	response.sendFile('/public/index.html', {"root" : __dirname}); // load our public/index.html file
});

//and finally, start the app
//at localhost:3000
app.listen(port);

//alert the user
console.log('Magic happens on port ' + port);

//expose the app
exports = module.exports = app;