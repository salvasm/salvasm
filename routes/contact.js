var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function (req, res, next) {
  res.render('contact', {
    section_title: 'Contacto'
  });
});

module.exports = router;
