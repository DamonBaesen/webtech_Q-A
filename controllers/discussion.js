var Discussion = require('../models/discussion');
var lat = "";
var lng = "";


function create(req, res) {
    var discussionText = req.body.questionName;
    var newQuestion = new Discussion({
        moderator: "Damon",
        question: discussionText,
        date: Date.now(),
        lat: lat,
        lng: lng,
        available: "1"
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

