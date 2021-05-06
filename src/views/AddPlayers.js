import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function AddPlayers({ setPlayers, user }) {
  return (
    <div>
      <PlayerForm
      formTitle='Add a Player'
      setPlayers={setPlayers}
      user={user}
      />
    </div>
  );
}

AddPlayers.propTypes = {
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
