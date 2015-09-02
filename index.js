var express = require('express');
var cors = require('cors');
var app = express();

var corsOptions = {
  origin: 'http://run.plnkr.co'
};

var Twitter = require('twitter');
 
var client = new Twitter({
 	consumer_key: '8qU3Vr6qYk7LHZ7z6dAKL4q1I',
 	consumer_secret: '6CrR6RlXOpwNcpDqPExFEC9ep0h4XfYHiZyem0NAEox7nWisQN',
 	access_token_key: '3422127673-cnt1o8h93VXtjPfkRw7tAAnjFuCJcskX99I6QPy',
 	access_token_secret: 'yQUxfwweesBdDUtQnUJLieY5POLhvVcRmsfjZ3dAxYLH0'
});
 

app.use(express.static(__dirname + '/static'));

app.get('/twitter', cors(corsOptions), function (req, res) {
	var params = {screen_name: req.query['username']};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (!error) {
			for(var i = 0; i < tweets.length; i++){
				tweets[i].text = tweets[i].text.replace(/@/g,"@#");
			}
			res.json({tweets: tweets});
		}
	});
});

app.listen(3000);



