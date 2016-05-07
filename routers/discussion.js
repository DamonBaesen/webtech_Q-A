var express = require('express');
var router = express.Router();


// the root url, if requested we will render the index page
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Live Q&A'
  });
});

module.exports = router;
