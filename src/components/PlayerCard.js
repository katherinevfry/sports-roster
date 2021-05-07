import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../helpers/data/TeamData';
import PlayerForm from './PlayerForm';

export default function PlayerCard({ setPlayers, user, ...player }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(player.firebaseKey, user.uid)
          .then((playerArray) => setPlayers(playerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing to see here');
    }
  };

  return (
    <div>
      <Card id='card'>
        <img id='cardImg' src={player.imageUrl}></img>
        <CardTitle>Name: {player.name}</CardTitle>
        <CardText>Position: {player.position}</CardText>
        <div id="buttonDiv">
          <Button className="button" id="deleteButton" onClick={() => handleClick('delete')}>Delete Player</Button>
          <Button className="button" id="editButton" onClick={() => handleClick('edit')}>
            {editing ? 'Close Form' : 'Edit Player'}
          </Button>
        </div>
        {
            editing && <PlayerForm
            formTitle='Edit Player'
            setPlayers={setPlayers}
            {...player}
            />
          }
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
