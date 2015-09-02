var express = require('express');
var cors = require('cors');
var app = express();

var corsOptions = {
  origin: 'http://run.plunkr.com'
};

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    	consumerKey: '8qU3Vr6qYk7LHZ7z6dAKL4q1I',
    	consumerSecret: '6CrR6RlXOpwNcpDqPExFEC9ep0h4XfYHiZyem0NAEox7nWisQN',
    	callback: ''
});
var requestToken;
var requestTokenSecret;
twitter.getRequestToken(function(error, _requestToken, _requestTokenSecret, results){
	   	if (error) {
	       	console.log(error);
	    	} else {
	    		requestToken = _requestToken;
	    		requestTokenSecret = _requestTokenSecret;
	    	}
	});

app.use(express.static(__dirname + '/static'));

app.get('/twittertoken', cors(corsOptions), function (req, res) {
	res.json({requestToken: requestToken, requestTokenSecret: requestTokenSecret});
});

app.listen(3000);



