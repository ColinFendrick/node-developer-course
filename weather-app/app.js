const request = require('request');

const url = 'https://api.darksky.net/forecast/17d2639d3d7edac460b5d2a1c741e916/37.8267,-122.4233';

request({ url }, (error, res) => {
  const data = JSON.parse(res.body);
  console.log(data.currently)
});
