exports.read = (req, res, next) => {
	if(req.params.id == null) {
		return res.redirect("/");
	}

	let file = require("../libs/file");
	let nb_block = ("00000" + req.params.id).slice(-5);
	let img_urls = [];
	let language = "en";
	let language_list = {
		"en-US": "en",
		"ja-JP": "ja"
	};
	console.log("req.params.lang", req.params.lang);
	if(req.params.lang !== void 0 && Object.values(language_list).includes(req.params.lang)) {
		language = req.params.lang;
	} else {
		let accept_languages = req.headers['accept-language'].match(/^(\w+?-\w+),?/)
		if(accept_languages !== null && Object.keys(language_list).includes(accept_languages[0])) {
			language = language_list[accept_languages];
		}
		return res.redirect(`/block/${req.params.id}/${language}`);
	}
	let img_path = `public/img/blocks/${nb_block}/${language}`;

	try {
		img_urls = file.getFileNamesInDir(img_path, "\.(jpg|jpeg|JPG|JPEG)$").map(function(file) {
			return `/img/blocks/${nb_block}/${language}/${file}`;
		});
	} catch(err) {
		return next();
	}

	res.render(`read`, {
		img_urls: img_urls,
		id: req.params.id,
		og_image: "https://" + req.get("host") + img_urls[0],
		language: language
	});
};