//link our route to data array of friends from friends.js file
var friendArray = require('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function(req, res) {
		console.log(JSON.stringify(friendArray));
		res.json(friendArray);
	});
};