var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/create');


router.get('/', function (req, res) {
    res.render('create', {
        title: 'Live Q&A'
    });
});

router.post("/", function (req, res) {
    controller.create(req, res);
});

module.exports = router;