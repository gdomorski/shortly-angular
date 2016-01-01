var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8000;

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/shortly');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(port);
console.log('Listening to port' + port)

// export our app for testing and flexibility, required by index.js
module.exports = app;
