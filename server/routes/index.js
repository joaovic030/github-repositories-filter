var express = require('express');
var router = express.Router();
const axios = require('axios');

async function githubRequest(lang) {
  try {
    return await axios.get(`https://api.github.com/search/repositories?q=is:public`, {
      headers: {
      }
    });
  } catch (error) {
    console.error(error)
  }
}
let repos = []
githubRequest().then(response => { repos = response.data.items});

router.get('/', function(req, res, next) {
  res.send({ repositories: repos })
});

module.exports = router;
