var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// create app
var app = express();

// conect to database
mongoose.connect('mongodb://localhost:27017/redidb');

// create routes
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// get app method
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

// listen app
app.listen('5000', function() {
	console.log('Listening on port 5000...');
});