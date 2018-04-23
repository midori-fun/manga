let _async = require("./libs/async");
let read = require("./controllers/read");
let bodyParser = require("body-parser");
let express = require("express");
let request = require("request");
let port = {
	http: 80,
	ssl: 443
};

app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render('index');
});

app.get("/block/:id", _async.function(read.read));

let errorHandler = (err, req, res, next) => {
		console.log(err);
		res.status(500).send(err.stack);
};
app.use(errorHandler);

/**
 * Notice: You SHOULD RUN "sudo rm -rf ~/letsencrypt/etc/" when you modify here
 */
// require('greenlock-express').create({ 
//	 server: 'https://acme-v01.api.letsencrypt.org/directory',
//	 email: 'jiyu@midori.fun',
//	 agreeTos: true,
//	 approveDomains: [ 'midori.fun' ],
//	 app: app
// }).listen(port.http, port.ssl);

app.listen(port.http, () => {
	console.log(`(http) listen on :${port.http}`);
});
