var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');


// the root url, if requested we will render the index page
router.get('/', function(req, res) {
  res.render('signup', {
    title: 'Live Q&A'
  });
});

router.post("/", function (req, res) {
  controller.registreer(req, res);
});




module.exports = router;
