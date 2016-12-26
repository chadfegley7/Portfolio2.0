var Message = require('../models/message');

module.exports = {
  index: function(req, res){
    Message.find({}, function(err, messages){
      if(err){
        res.json(err);
      }
      else{
        res.json(messages);
      }
    });
  },

  create: function(req, res){
    Message.create(req.body, function(err){
      if(err){
        return res.json(err);
      }
      else{
        return res.json(true);
      }
    })
  }
}
