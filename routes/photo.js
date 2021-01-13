var express = require('express');
var https = require("https");
var router = express.Router();

/* GET */
router.get('/', function (req, res, next) {
  var variables = {
    "id" : process.env.IG_ID,
    "first": process.env.IG_SHOW_QTY,
    "after": process.env.IG_AFTER
  }
  const instagramUrlJson = 'https://www.instagram.com/graphql/query/?query_hash=' + process.env.IG_QUERY_HASH + '&variables=' + JSON.stringify(variables);

  https.get(instagramUrlJson, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    }).on('end', () => {
      var profilePhotos = JSON.parse(data).data.user.edge_owner_to_timeline_media;
      //var profilePhotos = JSON.parse(data).graphql.user.edge_owner_to_timeline_media;
      console.log(profilePhotos)
      res.render('photo', {
        section_title: 'Fotografía',
        data: profilePhotos
      });
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

module.exports = router;
