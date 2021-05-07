import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from '../helpers/data/TeamData';

export default function PlayerForm({
  formTitle,
  setPlayers,
  user,
  ...playerObj
}) {
  const [player, setPlayer] = useState({
    name: playerObj?.name || '',
    position: playerObj?.position || '',
    imageUrl: playerObj?.imageUrl || '',
    firebaseKey: playerObj?.firebaseKey || null,
    uid: playerObj?.uid || user.uid
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
      updatePlayer(player, playerObj.uid).then((playersArray) => setPlayers(playersArray));
    } else {
      addPlayer(player, user.uid).then((playersArray) => setPlayers(playersArray));
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
        <Button id="submitButton" type='submit'>Submit</Button>
      </form>
    </div>
    </>
  );
}

PlayerForm.propTypes = {
  formTitle: PropTypes.string,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
