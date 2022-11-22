const { player_279 } = require("./player_279_data");
const { time_to_seconds } = require("../helpers/time_to_seconds")

// Parameters.
const num_of_games = player_279.length;

const pointCalculation = function (num_of_games) {
  let counter = 0;
  let point_total = 0;

  for (let i = 0; i < num_of_games; i++) {
    // Calculate time played.
    const timePlayed = time_to_seconds(player_279[i].min);

    if (timePlayed > 0) {
      point_total += player_279[i].points
      counter++;
    }
  }

  const results = {
    points: point_total,
    point_average: (point_total / counter).toFixed(2), // Rounds to 2 decimal places.
    counter: counter
  };
  return results
};

const results = pointCalculation(num_of_games)

console.log(results);

