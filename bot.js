console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');

var quotes = require('./futurama_quotes');

var T = new Twit(config);

console.log('Made it to the beggining of setInterval');
setInterval(tweetIt, 1000*60);

//tweetIt();


/*
var r = Math.floor(Math.random() * quotes.length);
console.log(quotes[r]);
*/

/*

var params = {
	q: 'Futurama',
	count: 2
};


T.get('search/tweets', params, gotData);

function gotData(err, data, response) {

	var tweets = data.statuses;
	for(var i = 0; i < tweets.length; i++){
		console.log(tweets[i].text + '\n');
	}
}
*/





//---------------------------------------------------

function tweetIt(){


	var r = Math.floor(Math.random() * quotes.length);
	// console.log('Made random number');

	// console.log('Attmepting to grab quote');
	var tweet = {
		status:  quotes[r]
	}
	// console.log('Grabbed quote');


	// console.log('Attmepting to post quote');
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err)
			console.log("Something went wrong");
		else{
			console.log("It worked!");
		}
	}
}

//---------------------------------------------------
