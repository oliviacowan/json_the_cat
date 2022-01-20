const request = require('request');
const breed = process.argv[2];

if (breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, info) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(info['body']);

    if (data === undefined) {
      console.log('Breed not found, please enter valid breed')
      return;
    }
    console.log(data[0]['description']);
  });
  return;
}
console.log(`Please enter a breed`);

