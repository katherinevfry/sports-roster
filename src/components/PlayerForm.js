import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from '../helpers/data/TeamData';

export default function PlayerForm({ formTitle, setPlayers, ...args }) {
  const [player, setPlayer] = useState({
    name: args?.name || '',
    position: args?.position || '',
    imageUrl: args?.imageUrl || '',
    firebaseKey: args?.firebaseKey || null
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player).then((playersArray) => setPlayers(playersArray));
    } else {
      addPlayer(player).then((playersArray) => setPlayers(playersArray));
    }
  };

  return (
    <>
    <div className='player-form'>
      <form
      id='addPlayerForm'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <label>Name: </label>
        <input
        name='name'
        type='text'
        value={player.name.value}
        onChange={handleInputChange}
        ></input>
        <br/>

        <label>Position: </label>
        <input
        name='position'
        type='text'
        value={player.position.value}
        onChange={handleInputChange}
        ></input>
        <br/>
        <label>Image URL: </label>
        <input
        name='imageUrl'
        type='text'
        value={player.imageUrl.value}
        onChange={handleInputChange}
        ></input>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
}

PlayerForm.propTypes = {
  formTitle: PropTypes.string,
  setPlayers: PropTypes.func
};
