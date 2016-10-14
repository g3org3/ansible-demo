var express = require('express');
var app = express();
var exec = require('child_process').exec;
app.get('/', function (req, res) {
  exec('curl ipinfo.io', (err, info) => {
    res.send('<pre style="font-size:30px;">Hello World! served from: '+JSON.parse(info).ip);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
