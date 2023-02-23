const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

async function main(page) {
  const url = `${URL}/?page=${page}`
  const response = await axios.get(url)
  return response.data
}
module.exports = {
  main,
}
