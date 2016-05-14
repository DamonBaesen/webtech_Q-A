var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/user');
var passport = require('passport');



router.get('/login', function (req, res) {
    res.render('login', {
        title: 'Live Q&A'
    });
});

router.get('/registreer', function (req, res) {
    res.render('signup', {
        title: 'Live Q&A'
    });
});

router.post("/registreer", function (req, res) {
    controller.registreer(req, res);


});


router.post('/login',
    passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
    function(req, res) {
        res.redirect('/');
    });

router.get('/logout', function(req, res){
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
});

module.exports = router;