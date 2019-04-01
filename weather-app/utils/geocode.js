const request = require('request');

const geoCode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2ZlbmRyaWNrIiwiYSI6ImNqdDV1ajE2YzA4MWI0M21tdnB2MzVpZHUifQ.WHwlpNOqbRSqhmGfkwgiUQ&limit=1';
  request({ url, json: true }, (error, res) => {
    if (error) {
      callback('Unable to connect to location services');
    } else if (res.body.features.length === 0) {
      callback('Unable to find location. Try another search.');
    } else {
      callback(error, {
        latitude: res.body.features[0].center[0],
        longitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name
      });
    };
  });
};

const forecast = (lat, lon, callback) => {
  const url = 'https://api.darksky.net/forecast/17d2639d3d7edac460b5d2a1c741e916/' + lat + ',' + lon;
  request({ url, json: true}, (error, res) => {
    if (error) {
      callback('Cannot connect to forecast services');
    } else if (res) {
      console.log(
        `It's currently ${Math.round(res.body.currently.temperature)}°. There is a ${res.body.currently.precipProbability}% change of rain.
        \nToday it will be ${res.body.daily.data[0].summary.toLowerCase()}`
      );
    };
  });
};

module.exports = { geoCode, forecast };
