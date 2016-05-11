var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller = require('../controllers/index');
var controllerCreate = require('../controllers/discussion');
var discussions = "";


// the root url, if requested we will render the index page
router.get('/create', function (req, res) {
  res.render('create', {
    title: 'Live Q&A'
  });
});

router.get('/:id', function(req, res) {
  var discussionID = req.params.id;
  controller.getAllDiscussions(function (response) {
    discussions = response;
  });

  res.render('discussion', {
    title: 'Live Q&A',
    discussions: discussions,
    discussionID: discussionID
  });
});

router.post("/create", function (req, res) {
  controllerCreate.create(req, res);
});

router.post('/:id' , function(req, res){
  controller.create(req, res);
});



module.exports = router;
