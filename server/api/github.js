const axios = require('axios');

async function getRepositories() {
  try {
    return await axios.get(`https://api.github.com/search/repositories?q=is:public`, {
      headers: {
      }
    });
  } catch (error) {
    console.error(error)
  }
}
// githubRequest().then(response => { repos = response.data.items});

async function getLanguages(req, res) {
  let arrayLang = []
  let newArray = []
  try {
    response = await getRepositories()
    arrayLang = response.data.items.map(repo => repo.language)
    const langs = new Set(arrayLang)
    for (let item of langs) {
      item && newArray.push({"name": item})
    }
    
    return newArray
    
  } catch (error) {
    console.log(error)
  }
}

async function findRepositoriesByLanguage(lang) {
  try {
    return await axios.get(`https://api.github.com/search/repositories?q=is:public+language:${lang}`, {
      headers: {
      }
    });
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getRepositories, getLanguages, findRepositoriesByLanguage}