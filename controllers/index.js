var MongoClient = require('mongodb').MongoClient;
var Discussion = require('../models/discussion');

module.exports.getAllDiscussions =  function getAllDiscussions (req, res) {
    MongoClient.connect('mongodb://localhost:27017/liveQA', function (err, db) {
        if (err) {
            throw err;
        }
        db.collection('discussions').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            return result;
        });
    });
}
