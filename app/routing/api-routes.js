//link our route to data array of friends from friends.js file
var friendArray = require('../data/friends.js');

var differenceArr = []; //this array will store the score difference between the current user and each stored user scores
var totalDifference = 0; //declaring totalDifference variable to use later

var isSmallest;

module.exports = function (app) {
	app.get('/api/friends', function(req, res) {
		//console.log(JSON.stringify(friendArray));
		res.json(friendArray);
	});


	app.post('/api/friends', function(req, res) {

		//for loop runs through the length of your stored friendArray, minus the new one you just submitted 
		for (var i = 0; i < friendArray.length; i++){  
			for (var j = 0; j < 10; j++){ //this runs through each of the 10 question scores
				// calculate the difference in score of question[j] and then add it to totalDifference
				totalDifference += Math.abs(req.body.scores[j] - friendArray[i].scores[j]); 
			}
			console.log("totalDifference for " + req.body.name + " and " 
						+ friendArray[i].name + " = " + totalDifference);  //console.log to make sure it's working
			differenceArr.push(totalDifference); //once you run through the 10 questions for 1 user's comparison, push it to diffArr
			totalDifference = 0; //reset totalDifference to zero so that you can use it in the next iteration of the loop
		}

		for (var i = 0; i < differenceArr.length; i++){
			console.log("Diff Array[" + i + "] = " + differenceArr[i]);
		}

		//figure out which user is your match
		var isSmallest = differenceArr[0]; //start off with 1st object
		var count = 0;
		for (var i = 1; i < differenceArr.length; i++){
			if (differenceArr[i] < isSmallest){
				isSmallest = differenceArr[i];
				count = i;
			} 
		}

		console.log("Smallest num" + isSmallest);
		console.log("Your match is" + friendArray[count].name);

		differenceArr = [];
		friendArray.push(req.body);

		//console.log(req.body.name);
		res.json(friendArray[count]);
		//res.json(true);


	});
};
