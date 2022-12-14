DROP TABLE IF EXISTS players CASCADE;

CREATE TABLE players (
  id SERIAL PRIMARY KEY NOT NULL,
  picture VARCHAR(255) NOT NULL,
  player_api_id INTEGER NOT NULL,
  team_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  points FLOAT NOT NULL DEFAULT 0,
  assists FLOAT NOT NULL DEFAULT 0,
  rebounds FLOAT NOT NULL DEFAULT 0,
  steals FLOAT NOT NULL DEFAULT 0,
  blocks FLOAT NOT NULL DEFAULT 0,
  turnovers FLOAT NOT NULL DEFAULT 0,
  field_goal_percentage FLOAT NOT NULL DEFAULT 0,
  free_throw_percentage FLOAT NOT NULL DEFAULT 0,
  three_points_made FLOAT NOT NULL DEFAULT 0
);