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

}

module.exports.create = createQuestion;


