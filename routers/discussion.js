var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/index');
var discussions = "";


// the root url, if requested we will render the index page
router.get('/:id', function(req, res) {
  var discussionID = req.params.id;
console.log(req.params.id);
  controller.getAllDiscussions(function (response) {
    discussions = response;
  });

  res.render('discussion', {
    title: 'Live Q&A',
    discussions: discussions,
    discussionID: discussionID
  });
});

module.exports = router;
