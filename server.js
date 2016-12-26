var express = require('express');
var bodyParser = require('body-parser');
var port = 8000;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

//Middleware to print out every route request to the console.
app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});



require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

app.listen(port, function(){
  console.log(`Portfolio 2.0 on 8000`);
});
