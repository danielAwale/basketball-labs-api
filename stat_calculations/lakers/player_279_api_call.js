const axios = require("axios");

// Parameters for options.
const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics';
const player_id = '276';
const season = '2020';

// API options.
const options = {
  method: 'GET',
  url: url,
  params: {id: player_id, season: season},
  headers: {
    'X-RapidAPI-Key': 'b7b39e470cmsh390d5daaf157e44p1ad3dajsnf835fac49665',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

// API GET request.
const pointsForPlayer = function (url, player_id) {
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
};

module.exports = {pointsForPlayer};