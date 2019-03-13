const request = require('request');

const url = 'https://api.darksky.net/forecast/17d2639d3d7edac460b5d2a1c741e916/27.950575,-82.457176';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2ZlbmRyaWNrIiwiYSI6ImNqdDV1ajE2YzA4MWI0M21tdnB2MzVpZHUifQ.WHwlpNOqbRSqhmGfkwgiUQ&limit=1';

const handleResponse = (error, res, callback) => {
  if (error) { console.log(error); }
  else if (res.body.error) { console.log(res.body.error); }
  else { callback(res); }
};

const geocode = (address, callback) => {
  request({ url: geoUrl, json: true }, (error, res) => {
    const locationResponseHandler = () => {
      if (res.body.features.length === 0) { console.log('Cannot find any matching locations.') }
      else {
        const longitude = res.body.features[0].center[0];
        const latitude = res.body.features[0].center[1];
        console.log(longitude, latitude);
      }
    };

    handleResponse(error, res, locationResponseHandler);
  });
}

request({ url, json: true }, (error, res) => {
  const success = () => console.log(
    `It's currently ${Math.round(res.body.currently.temperature)}°. There is a ${res.body.currently.precipProbability}% change of rain.
    \nToday it will be ${res.body.daily.data[0].summary.toLowerCase()}`
  );

  handleResponse(error, res, success);
});

request({ url: geoUrl, json: true }, (error, res) => {
  const locationResponseHandler = () => {
    if (res.body.features.length === 0) { console.log('Cannot find any matching locations.') }
    else {
      const longitude = res.body.features[0].center[0];
      const latitude = res.body.features[0].center[1];
      console.log(longitude, latitude);}
  };

  handleResponse(error, res, locationResponseHandler);
});
