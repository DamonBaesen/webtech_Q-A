var MongoClient = require('mongodb').MongoClient;
var Question = require('../models/question');

function createQuestion(req, res, discussionID) {
    var questionText = req.body.questionName;
    var newQuestion = new Question({
        user: "Damon",
        question: questionText,
        date: Date.now(),
        discussionID: discussionID
    });

    newQuestion.save(function (err, message) {
        if (err) {
            return console.error(err);
        }
        res.redirect("/discussion/" + discussionID);
    });

};
module.exports.create = createQuestion;


module.exports.getAllQuestions = function getAllQuestions (callback, discussionID) {
    MongoClient.connect('mongodb://localhost:27017/liveQA', function (err, db) {
        if (err) {
            throw err;
        }
        else {
            db.collection('questions').find({discussionID: discussionID}).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    return callback(result);

                }
            });
        }
    });
};

