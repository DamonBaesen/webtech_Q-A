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



