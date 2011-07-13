window.addEvent('domready', function() {
	$('twitter').addEvent('click', function(event) {
		var href = this.getElement('a').get('href');
		if(href) {
			window.location = href;
		}
	});
});

function tweetBack(JSON) {
	if(typeOf(JSON) == 'array') {
		window.addEvent('domready', function() {
			twitterUpdate(JSON[0].text);
		});
	}
}

function twitterUpdate(tweet) {
	$('recent_tweet').set('text', tweet);
}