window.addEvent('domready', function() {
	bindTwitterClick();
});

function tweetBack(tweet) {
	window.addEvent('domready', function() {
		twitterUpdate(tweet);
	});
}

function bindTwitterClick() {
	$('twitter').addEvent('click', function(event) {
		var href = this.getElement('a').get('href');
		if(href) {
			window.location = href;
		}
	});
}

function twitterUpdate(tweet) {
	$('recent_tweet').set('text', tweet);
}