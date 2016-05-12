var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controllerCreate = require('../controllers/discussion');
var controllerQuestion = require('../controllers/questions');
var controller = require('../controllers/index');
var discussions = "";
var questions = "";
var discussionID = "";

// the root url, if requested we will render the index page
router.get('/create', function (req, res) {
  res.render('create', {
    title: 'Live Q&A'
  });
});

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Live Q&A'
  });
});

router.get('/:id', function(req, res) {
    discussionID = req.params.id;
    controller.getAllDiscussions(function (response) {
        discussions = response;
    });


  controllerQuestion.getAllQuestions(function (response) {
    questions = response;

    res.render('discussion', {
      title: 'Live Q&A',
      discussionID: discussionID,
      discussions: discussions,
        questions: questions
    });
  }, discussionID);


});

router.post("/create", function (req, res) {
  controllerCreate.create(req, res);
});

router.post('/:id' , function(req, res){
  controllerQuestion.create(req, res, discussionID);
});



module.exports = router;
