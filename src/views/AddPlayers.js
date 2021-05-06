import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function AddPlayers({ setPlayers }) {
  return (
    <div>
      <PlayerForm
      formTitle='Add a Player'
      setPlayers={setPlayers}
      />
    </div>
  );
}

AddPlayers.propTypes = {
  setPlayers: PropTypes.func
};
