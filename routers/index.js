var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/index');


// the root url, if requested we will render the index page
router.get('/', function(req, res) {
    var discussions = controller.getAllDiscussions(req, res);
  res.render('index', {
    title: 'Live Q&A',
      discussions: discussions
  });

});

module.exports = router;
