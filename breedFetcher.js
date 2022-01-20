const request = require('request');
const breed = process.argv[2];

if (breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, info) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(info)[0];

    if (data === undefined) {
      console.log('Breed not found, please enter valid breed');
      return;
    }
    console.log(data['description']);
  });
  return;
}
console.log(`Please enter a breed`);

