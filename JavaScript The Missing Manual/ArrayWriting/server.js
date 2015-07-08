var express = require("express"),
	app = express(),
	port = process.env.PORT || '8080',
	path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);

console.log("App running on port", port);