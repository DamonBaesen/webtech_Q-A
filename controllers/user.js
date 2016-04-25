var _ = require('lodash');
var User = require('./../models/user');
var config = require('./../config/config.json');

// get all users
function getAll(req, res, next) {
  var limit = req.query.limit || config.listLimit;
  limit = parseInt(limit, 10);

  User
    .find({})
    .sort({ '_id' : -1 })
    .limit(limit)
    .populate('family')
    .exec(function onUsersFound(err, users) {
      // we return the json version with cleaned up model of the user
      var transform = _.map(users, function (user) {
        return user.toJSON();
      });
      transform = _.reverse(transform);
      res.send(transform);
    });
}
module.exports.read = getAll;

// get one user by id (req.params.id)
function getOne(req, res, next) {
  User.findOne({_id: req.params.id}, function onUserFound(err, user) {
    if(!user) {
      res.status(404).send("User not found");
    }

    // we return the json version with cleaned up model of the user
    res.send(user.toJSON());
  });
}
module.exports.readOne = getOne;

// create a new user (req.body)
function add(req, res, next) {
  var newUser = new User(req.body);

  newUser.save(function onUserSaved(err, user) {
    // we return the json version with cleaned up model of the user
    res.send(user.toJSON());
  });
}
module.exports.create = add;

// update a user (req.body)
function update(req, res, next) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, function onUserUpdated(err, user) {
    if(!user) {
      res.status(404).send("User not found");
    }

    // we return the json version with cleaned up model of the user
    res.send(user.toJSON());
  });
}
module.exports.update = update;

// remove one user by id (req.params.id)
function remove(req, res, next) {
  User.findOneAndRemove({_id: req.params.id}, function onUserFound(err, user) {
    res.status(204).send();
  });
}
module.exports.remove = remove;

