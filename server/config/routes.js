var Message = require('../controllers/messages');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });

  app.post('/secret', function(req, res, next){
    Message.create(req, res, next)
    console.log("Posting Secrets")
  });
  app.get('/secret', function(req, res){
   console.log("Getting Secrets");
   Message.index(req, res);
 })
};
