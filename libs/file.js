exports.getFileNamesInDir = (dir_path, reg_exp_filter = ".*") => {
	let fs = require('fs');

	return fs.readdirSync(dir_path).filter(function(file) {
	 	return file.match(new RegExp(reg_exp_filter));
	});
}