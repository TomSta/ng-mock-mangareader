var express = require('express');
var app = express();

app.use(express.static('src'));

var server = app.listen((process.env.PORT || 3000 + Math.floor(Math.random() * 100)), 
      function() {
          var port = server.address().port;
          console.log('Started express server at localhost:%s', port);
    });
