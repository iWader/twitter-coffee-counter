/* Twitter API */

var config = require('config');
var util = require('util');
var twitterApi = require('twitter');

var twitter = new twitterApi({
	consumer_key: config.twitter.consumerKey,
	consumer_secret: config.twitter.consumerSecret,
	access_token_key: config.twitter.accessTokenKey,
	access_token_secret: config.twitter.accessTokenSecret
});

console.log('Config: ' + config.twitter.hashtag);

// Loop our configured handles, loading their timelines
for(var key in config.twitter.handles) {
	var handle = config.twitter.handles[key];

	options = {
		screen_name: handle,
		trim_user: true,
		include_rts: false
	}

	twitter.get('/statuses/user_timeline.json', options, function(data) {

		for(var dkey in data) {
			var tweet = data[dkey];

			for(var tkey in tweet.entities.hashtags) {
				var hashtag = tweet.entities.hashtags[tkey];

				if (hashtag.text.toLowerCase() == config.twitter.hashtag.toLowerCase()) {

					// Here we insert into the DB... when we get there
					console.log('We got a match for tag: ' + hashtag.text);
					
				}

			}

		}

	});

}