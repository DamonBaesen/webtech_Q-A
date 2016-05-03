var Discussion = require('../models/discussion');

function create(req, res) {

    // save a new instance of this model
    var newQuestion = new Discussion({
        moderator: "Damon",
        question: req.body.question,
        date: Date.now(),
        place: "Mechelen"
    });

    newQuestion.save(function (err, message) {
        if (err) {return console.error(err); }
        res.send(message);
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