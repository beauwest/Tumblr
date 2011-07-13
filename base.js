window.addEvent('domready', function() {
	fetchTwitterUpdate();
	addTwitterSectionClick();
});

function fetchTwitterUpdate() {
	new Request.JSON({
		url: 'https://twitter.com/statuses/user_timeline/beaudesigns.json?count=1',
		onSuccess: function(tweets) {
			twitterUpdate(tweets[0].text);
		}
	}).get();
}

function twitterUpdate(tweet) {
	$('recent_tweet').set('text', tweet);
}

function addTwitterSectionClick() {
	$('twitter').addEvent('click', function(event) {
		var href = this.getElement('a').get('href');
		if(href) {
			window.location = href;
		}
	});
}