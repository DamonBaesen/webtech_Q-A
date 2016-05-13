var mongoose = require('mongoose');
var commentSchema = mongoose.Schema({
    user: String,
    question: String,
    date: Date,
    discussionID: String,
    questionID: String
});
// then we compile this schema into a model
var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;