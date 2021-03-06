var express = require('express')
var uuid = require('uuid')
var exec = require('child_process').exec
var app = express();
var ID = uuid.v1();

var redis = require("redis"),
    client = redis.createClient();

exec('hostname', (err, out) => {
  
  app.get('/', function (req, res) {
    client.get("server:"+ID, function(err, count) {
      count = count || '0'
      count = Number(count) + 1
      client.set("server:"+ID, ""+count+"")
      res.send('<pre style="font-size:30px;">Hello World!\nserved from: '+out +'\nserved: '+count+' times');
    });
    
  });

  var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

})
