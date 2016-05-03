var Discussion = require('../models/discussion');
//var geolocation = require('node-geolocation');

function create(req, res ) {
    console.log(req.body);
    // req.body --> $post php
    // save a new instance of this model
    var discussionText = req.body.questionName;

   /* function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    } */

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