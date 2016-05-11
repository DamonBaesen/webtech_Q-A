var mongoose = require('mongoose');

// add one message to the database
// first, we define a mongoose schema
var messageSchema = mongoose.Schema({
    moderator: String,
    question: String,
    date: Date,
    place: String
});
// then we compile this schema into a model
var Discussion = mongoose.model('Discussion', messageSchema);

module.exports = Discussion;



