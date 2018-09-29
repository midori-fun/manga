function setSnsShare(shareUrl, description) {
	setTwitterLink(".twitter a", shareUrl, description);
	setFacebookLink(".facebook a", shareUrl, description);
}

function setTwitterLink(shareSelector, shareUrl, description) {
	$(shareSelector).attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(description + "\n" + shareUrl + "\n" + t_id + " #GreenChain #Blockchain"));
	setShareEvent(shareSelector, 'Twitter', shareUrl);
}

function setFacebookLink(shareSelector, shareUrl, description) {
	$(shareSelector).attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl + "&t=" + encodeURIComponent(description));
	setShareEvent(shareSelector, 'Facebook', shareUrl);
}

function setShareEvent(selector, snsName, shareUrl) {
	$(selector).on('click', function(e){
			let current = this;
			ga('send', 'social', snsName, 'share', shareUrl, {
				'nonInteraction': 1
			});
			window.open(current.href, '_blank', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes');
			e.preventDefault();
	});
}

setSnsShare(location.href, $("meta[name=description]").attr("content"));
