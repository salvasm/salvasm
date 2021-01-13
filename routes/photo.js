var express = require('express');
var https = require("https");
var router = express.Router();

/* GET */
router.get('/', function (req, res, next) {
  // "https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"31930756","first":12,"after":""}"
  // https://www.instagram.com/salva_sm/?__a=1
  const instagramUrlJson = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"31930756","first":12,"after":"QVFBVl9fOU9EckJJLXcwZmM1eDQ5UXVSWGJjSFFVbi0zNTFaWmUybV9hWnAyeEV6bTl0c0lZelJkMFVVTGRUTG45Nk9SVEhPaXhuWHpFOXdNSUxfTXdmYg=="}';
  var variables = {
    "id" : "31930756",
    "first": "12",
    "after": ""
  }

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
