var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  wachtwoord: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;

/*module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.wachtwoord, salt, function(err, hash) {
      newUser.wachtwoord = hash;
      newUser.save(callback);
    });
  });
}*/

module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}


/*module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
  });
}*/

module.exports.comparePassword = function(wachtwoord, callback){
  var query = {wachtwoord: wachtwoord};
  User.findOne(query, callback);
}


/*
var BestaandeUser = mongoose.model('BestaandeUser', userSchema);

module.exports = BestaandeUser;
*/