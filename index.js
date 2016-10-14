var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var ip = server.address().address == '::'? 'localhost': server.address().address;
  res.send('<pre style="font-size:30px;">Hello World! served from: '+ip);
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
