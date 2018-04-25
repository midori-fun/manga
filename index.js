process.title = "manga";
let _async = require("./libs/async");
let read = require("./controllers/read");
let bodyParser = require("body-parser");
let express = require("express");
let request = require("request");
let port = 55003;

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
app.get("/block/:id/:lang", _async.function(read.read));

let errorHandler = (err, req, res, next) => {
		console.log(err);
		res.status(500).send(err.stack);
};
app.use(errorHandler);

app.listen(port, () => {
	console.log(`(http) listen on :${port}`);
});
