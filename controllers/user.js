var User = require('../models/user');

function registreer(req, res) {

  // save a new instance of this model
  var newUser = new User({
    username: req.body.inputUsername,
    email: req.body.inputEmail,
    wachtwoord: req.body.inputWachtwoord
  });

  newUser.save(function (err, message) {
    if (err) {return console.error(err); }
    res.redirect("/users/login");
  });
}
module.exports.registreer = registreer;