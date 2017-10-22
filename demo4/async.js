const axios = require('axios');

module.exports = function() {
  return axios
    .get('https://api.github.com')
    .then((response) => {
      return response.data;
    })  
}