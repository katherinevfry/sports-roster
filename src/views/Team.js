import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';

export default function Team({ players, setPlayers }) {
  return (
    <div>
      <h1>Roster</h1>
      <div id="cardContainer">
        {players.map((player) => (
          <PlayerCard
          key={player.firebaseKey}
          setPlayers={setPlayers}
          {...player}
          />
        ))}
      </div>
    </div>
  );
}

Team.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func
};
