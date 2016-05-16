var MongoClient = require("mongodb").MongoClient;

function deleteDiscussion(req, res)
{
    MongoClient.connect('mongodb://localhost/liveQA', function (err, db) {
        var discussionID = req.params.id;
        if (err) {
            console.log("error connecting");
            throw err;
        }
        db.collection('discussion', {}, function (err, contacts) {
            if (err) {
                console.log("error getting collection");
                throw err;
            }
            contacts.remove({_id: discussionID}, {safe: true}, function (err, result) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(result);
            });
        });
        db.close();
    });
};

module.exports.create = deleteDiscussion;
