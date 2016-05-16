var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controllerCreate = require('../controllers/discussion');
var controllerQuestion = require('../controllers/questions');
var controllerComment = require('../controllers/comment');
var controllerDelete = require('../controllers/delete');
var controller = require('../controllers/index');
var discussions = "";
var questions = "";
var comments = "";
var discussionID = "";
var questID = "";

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
  }, discussionID);

    controllerComment.getAllComments(function (response) {
        comments = response;

        res.render('discussion', {
            title: 'Live Q&A',
            discussionID: discussionID,
            discussions: discussions,
            questions: questions,
            comments: comments
        });
    },discussionID, questID);
});

router.post("/create", function (req, res) {
  controllerCreate.create(req, res);
});

router.post('/:id' , function(req, res){
  controllerQuestion.create(req, res, discussionID);
});

router.post('/:id/add' , function(req, res){
    questID = req.body.commentID;
  controllerComment.create(req, res, discussionID);
});

router.post('/delete' , function(req, res){
    controllerDelete.create();
});



module.exports = router;
