var express = require('express');
var uuid = require('uuid')
var app = express();
var ID = uuid.v1();

app.get('/', function (req, res) {
  res.send('<pre style="font-size:30px;">Hello World! served from: '+ID.substr(0, 8));
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
