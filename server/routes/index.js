var express = require('express');
var router = express.Router();
const axios = require('axios');
const github = require('../api/github')


// let repos = []
// githubRequest().then(response => { repos = response.data.items});

router.get('/', async function(req, res, next) {
  try {
    const repositories = await github.getRepositories()
    res.send({ repositories: repositories.data.items })
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
