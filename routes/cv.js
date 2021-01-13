var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function (req, res, next) {
  const fs = require('fs');
  const dataPath = "./data/cv.json";
  const data = fs.readFileSync(dataPath);
  const parsedData = JSON.parse(data);

  res.render('cv', {
    section_title: 'Curriculum Vitae',
    experience: Object.values(parsedData.experience).sort().reverse(),
    studies: Object.values(parsedData.studies).sort().reverse(),
    certifications: Object.values(parsedData.certifications),
    courses: Object.values(parsedData.courses),
    languages: Object.values(parsedData.languages)
  });
});

module.exports = router;
