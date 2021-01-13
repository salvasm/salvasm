var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function (req, res, next) {
  res.render('easteregg', {
    section_title: 'easteregg'
  });
});

module.exports = router;
