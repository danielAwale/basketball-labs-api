const time_to_seconds = function (time) {
  const newTime = time.split(":")
  const minutesInSeconds = newTime[0] * 60;
  const seconds = newTime[1];

  const totalSeconds = parseInt(minutesInSeconds) + parseInt(seconds);
  return totalSeconds;
};

module.exports = {time_to_seconds};