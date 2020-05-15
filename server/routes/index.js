var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */

// options =  {
//   url: "https://api.github.com/repositories",
//   headers: {
//       "User-Agent": "joaovic030",  // Your Github ID or application name
//       "Authorization": "8bb65004ce7686b620b9e6754564a5f7ed5a2bf2"
//   }
// }
// request.get(options)
//   .on('response', function (response) {
//       console.log(response.statusCode);
//       console.log(JSON.stringify(response));
//       repositories = JSON.stringify(response)
//   });

async function githubRequest() {
  try {
    return await axios.get(`https://api.github.com/repositories`, {
      headers: {
        authorization: `token 77d2cc0aa8a039ecadcc2ee8afc22a7898d6f686`
      }
    });
  } catch (error) {
    console.error(error)
  }
}
let repos = []
githubRequest().then(response => { repos = response.data});

router.get('/', function(req, res, next) {
  res.send({ repositories: repos })
});

module.exports = router;
