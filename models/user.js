var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  wachtwoord: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
