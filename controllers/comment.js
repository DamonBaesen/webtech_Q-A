var MongoClient = require('mongodb').MongoClient;
var Comment = require('../models/question');

function createComment(req, res, discussionID, questionID) {
    var questionText = req.body.commentName;

    var newQuestion = new Comment({
        user: "Damon",
        question: questionText,
        discussionID: discussionID,
    });

    newQuestion.save(function (err, message) {
        if (err) {
            return console.error(err);
        }
        res.redirect("/discussion/" + discussionID);
    });

};
module.exports.create = createComment;

module.exports.getAllComments = function getAllComments (callback, discussionID, questionID) {
    MongoClient.connect('mongodb://localhost:27017/liveQA', function (err, db) {
        if (err) {
            throw err;
        }
        else {
            db.collection('comments').find({discussionID: discussionID, questionID: questionID}).toArray(function (err, result) {
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



