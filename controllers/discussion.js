var MongoClient = require('mongodb').MongoClient;
var Discussion = require('../models/discussion');

function create(req, res) {
    var discussionText = req.body.questionName;
    var newQuestion = new Discussion({
        moderator: "Damon",
        question: discussionText,
        date: Date.now(),
        place: "Mechelen"
    });

    newQuestion.save(function (err, message) {
        if (err) {
            return console.error(err);
        }
        else{
            res.redirect("/");
        }
    });

}

module.exports.create = create;

module.exports.getOneQuestion =  function getAllQuestions (id, callback, discussionID) {
    MongoClient.connect('mongodb://localhost:27017/liveQA', function (err, db) {
        if (err) {
            throw err;
        }
        db.collection('questions').find({discussionID: discussionID}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            return callback(result[id]);
        });
    });
};




