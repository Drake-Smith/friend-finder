//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var friendArray = require('./app/data/friends.js');

//express setup
var app = express();
var PORT = process.env.PORT || 8808;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//require("./app/routing/api-routes.js")(app);
// require("./app/routing/html-routes.js")(app);


//route for home page, what user first sees
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/public/home.html'));
});

// app.get('/survey', function(req, res){
// 	res.sendFile(path.join(__dirname + '/public/survey.html'));
// })


// app.get('/api/friends', function(req, res) {
// 	console.log(JSON.stringify(friendArray));
// 	res.json(friendArray);
// });

// app.use(function (req, res) {
// 	res.sendFile(path.join(__dirname + '/../public/home.html'));
// });

app.listen(PORT, function() {
	console.log("App listening on Port " + PORT);
});
