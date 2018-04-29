exports.index = (req, res, next) => {
	let language = "en";
	let language_list = {
		"en-US": "en",
		"ja-JP": "ja"
	};
	if(req.params.lang !== void 0 && Object.values(language_list).includes(req.params.lang)) {
		language = req.params.lang;
	} else {
		let accept_languages = req.headers['accept-language'].match(/^(\w+?-\w+),?/)
		if(accept_languages !== null && Object.keys(language_list).includes(accept_languages[0])) {
			language = language_list[accept_languages[0]];
		}
		return res.redirect(`/${language}`);
	}

	res.render(`${language}/index`, {language: language});
};