let express = require('express');
let router = express.Router();

let res_rpc = {
	jsonrpc: "2.0",
	result: null
}

let db = require("../lib/db.class")
const DB = new db()

// let pay = require("../controllers/pay.class")
// const PAY = new pay()

router.get('/', function (req, res, next) {
	res.send('Be yourself; everything else is taken.')
})

router.post('/', async function (req, res, next) {
	let p = req.body.params
	// p.read_{ep_id}_{page_num}
	// p.like_{ep_id}_{page_num}


	// ここに書く



	res_rpc.result = Object.assign({ error: null }, { replaceme: 1 }) // replaceme を結果に置き換える
	res.json(JSON.stringify(res_rpc))
	return true;
})

module.exports = router
