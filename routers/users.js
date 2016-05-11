var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/user');


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



module.exports = router;