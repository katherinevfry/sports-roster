import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function PlayerCard({ setPlayers, ...player }) {
  return (
    <div>
      <Card id='card'>
        <img id='cardImg' src={player.imageUrl}></img>
        <CardTitle>Name: {player.name}</CardTitle>
        <CardText>Position: {player.position}</CardText>
        <Button color='danger'>Delete Player</Button>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  setPlayers: PropTypes.func
};
