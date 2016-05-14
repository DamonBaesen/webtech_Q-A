var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


router.get('/login', function (req, res) {
    res.render('login', {
        title: 'Live Q&A'
    });
});

router.get('/register', function (req, res) {
    res.render('register', {
        title: 'Live Q&A'
    });
});

router.post("/register", function (req, res) {
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


/*=========login probeersel============*/
/*
app.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }));

app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true })
);

app.get('/api/users/me',
    passport.authenticate('basic', { session: false }),
    function(req, res) {
        res.json({ id: req.user.id, username: req.user.username });
    });

app.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/users/' + user.username);
        });
    })(req, res, next);
});


/*===========einde probeersel=============*/

module.exports = router;