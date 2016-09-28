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

require("./app/routing/api-routes.js")(app);
// require("./app/routing/html-routes.js")(app);

//ERROR:
//module.js:327
//     throw err;
//     ^

// Error: Cannot find module './app/routing/api-routes.js'
//     at Function.Module._resolveFilename (module.js:325:15)
//     at Function.Module._load (module.js:276:25)
//     at Module.require (module.js:353:17)
//     at require (internal/module.js:12:17)
//     at Object.<anonymous> (/Users/drakesmithjr/Desktop/bootcamp/Homework/friend-finder/app/server.js:17:1)
//     at Module._compile (module.js:409:26)
//     at Object.Module._extensions..js (module.js:416:10)
//     at Module.load (module.js:343:32)
//     at Function.Module._load (module.js:300:12)
//     at Function.Module.runMain (module.js:441:10)

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
