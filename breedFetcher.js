const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  if (!breedName) {
    return callback('no breed');
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, info) => {
    const data = JSON.parse(info)[0];
    if (error) {
      return callback(error, null);
    }
    if (data === undefined) {
      return callback(error, null);
    }
    if (data) {
      const desc = data.description;
      return callback(error, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
