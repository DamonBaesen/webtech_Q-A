var mongoose = require('mongoose');
var questionSchema = mongoose.Schema({
    user: String,
    question: String,
    date: Date
});
// then we compile this schema into a model
var Question = mongoose.model('Question', questionSchema);

module.exports = Question; 