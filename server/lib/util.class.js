module.exports = class UTIL {
	constructor() {
	}

	/**
	 * hash by Sha256 twice.
	 * @param {string} [target] - this string is to be hashed
	 * @return {string} double-hased string
	 */
	doubleHash(target) {
		let sha256 = require("sha256")
		return sha256.x2(target)
	}
}
