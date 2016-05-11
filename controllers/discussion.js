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
        res.redirect("/");
    });

}

module.exports.create = create;


function createQuestion(req, res) {
    var questionText = req.body.questionName;
    var newQuestion = new Question({
        user: "Damon",
        question: questionText,
        date: Date.now()
    });

    newQuestion.save(function (err, message) {
        if (err) {
            return console.error(err);
        }
        res.redirect("/");
    });

}

module.exports.create = createQuestion;



module.exports.getOneDiscussion =  function getAllDiscussions (id,callback) {
    MongoClient.connect('mongodb://localhost:27017/liveQA', function (err, db) {
        if (err) {
            throw err;
        }
        db.collection('discussions').find({},{question:1, _id:1}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            return callback(result[id]);
        });
    });
};



