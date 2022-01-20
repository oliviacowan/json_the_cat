const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, description) => {
  if (err) {
    console.log('Error details: ', err);
  } else {
    console.log(description);
  }
});