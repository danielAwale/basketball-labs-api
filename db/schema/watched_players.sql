DROP TABLE IF EXISTS watched_players CASCADE;

CREATE TABLE watched_players (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
