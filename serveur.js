var express = require('express');
var app = express();
var fs = require('fs');

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function(req, res) {
	var files = fs.readdirSync('./images');

    res.render('index.ejs', {files: files});
});

app.listen(8080);
