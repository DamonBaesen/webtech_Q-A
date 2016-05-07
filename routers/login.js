var express = require('express');
var router = express.Router();
//var controller = require('../controllers/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
// the root url, if requested we will render the index page
router.get('/', function(req, res) {
  res.render('login', {
    title: 'Live Q&A'
  });
});

passport.use(new LocalStrategy(
    function(username, wachtwoord, done) {
      User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
          return done(null, false, {message: 'Unknown User'});
        }

        User.comparePassword(wachtwoord, user.wachtwoord, function(err, isMatch){
          if(err) throw err;
          if(isMatch){
            return done(null, user);
          } else {
            return done(null, false, {message: 'Invalid password'});
          }
        });
      });
    }));

router.post('/login',
    passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login'}),
    function(req, res) {
      res.redirect('/');
    });


module.exports = router;