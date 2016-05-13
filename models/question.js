var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Answer = new Schema({
    answer: String,
    user: String
});

var QuestionSchema = new Schema({
    user: String,
    question: String,
    date: Date,
    discussionID: String,
    answers: [Answer]
});

module.exports = mongoose.model('Question', QuestionSchema);