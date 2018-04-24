exports.read = (req, res, next) => {
	let file = require("../libs/file");
	let nb_block = ("00000" + req.params.id).slice(-5);
	let img_path = `public/img/blocks/${nb_block}`;
	let img_urls = [];

	try {
		img_urls = file.getFileNamesInDir(img_path, "\.(jpg|jpeg|JPG|JPEG)$").map(function(file) {
			return `/img/blocks/${nb_block}/${file}`;
		});
	} catch(err) {
		return next();
	}

	res.render(`read`, {
		img_urls: img_urls,
		id: req.params.id,
		og_image: img_urls[0]
	});
};