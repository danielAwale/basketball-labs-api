DROP TABLE IF EXISTS player CASCADE;

CREATE TABLE player (
  id SERIAL PRIMARY KEY NOT NULL,
  picture VARCHAR(255) NOT NULL,
  player_api_id INTEGER NOT NULL,
  team_api_id INTEGER NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  points INT NOT NULL DEFAULT 0,
  assists INT NOT NULL DEFAULT 0,
  rebounds INT NOT NULL DEFAULT 0,
  steals INT NOT NULL DEFAULT 0,
  blocks INT NOT NULL DEFAULT 0,
  turnovers INT NOT NULL DEFAULT 0,
  field_goal_percentage INT NOT NULL DEFAULT 0,
  free_throw_percentage INT NOT NULL DEFAULT 0,
  three_points_made INT NOT NULL DEFAULT 0
);