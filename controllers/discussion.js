var MongoClient = require('mongodb').MongoClient;

module.exports.getOneDiscussion =  function getAllDiscussions (id,callback) {
    MongoClient.connect('mongodb://localhost:27017/liveQA', function (err, db) {
        if (err) {
            throw err;
        }
        db.collection('discussions').find({},{question:1, _id:1}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            return callback(result[id]);
        });
    });
};


