var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MessageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  created_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Message", MessageSchema);
