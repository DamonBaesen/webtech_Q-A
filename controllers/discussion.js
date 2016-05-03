var Discussion = require('../models/discussion');

function create(req, res , next) {
    console.log(req.body);
    // req.body --> $post php
    // save a new instance of this model
    var discussionText = req.body.questionName;

    var newQuestion = new Discussion({
        moderator: "Damon",
        question: discussionText,
        date: Date.now(),
        place: "Mechelen"
    });

    newQuestion.save(function (err, message) {
        if (err) {return console.error(err); }
        res.redirect("/");
    });
}
module.exports.create = create;

function getAll(req, res) {
    Question.find(function (err, messages) {
        if (err) {return console.error(err); }
        
        res.send(messages);
    });
}
module.exports.getAll = getAll;