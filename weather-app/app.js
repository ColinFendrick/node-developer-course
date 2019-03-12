const request = require('request');

const url = 'https://api.darksky.net/forecast/17d2639d3d7edac460b5d2a1c741e916/27.950575,-82.457176';

request({ url, json: true }, (error, { body: { currently, daily }}) => {
  console.log(`It's currently ${Math.round(currently.temperature)}°. There is a ${currently.precipProbability}% change of rain.
    \nToday it will be ${daily.data[0].summary.toLowerCase()}`)
});
