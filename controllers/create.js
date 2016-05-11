var Question = require('../models/question');

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