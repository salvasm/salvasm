var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { 
    section_title: '¬°Bienvenido!',
    title: process.env.SITE_NAME
  });
});

module.exports = router;
