import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';
// import { getPlayers } from '../helpers/data/TeamData';

export default function Team({ user, players, setPlayers }) {
  // const [players, setPlayers] = useState([]);
  // const getMyPlayers = () => {
  //   getPlayers(user.uid).then((playerResp) => setPlayers(playerResp));
  // };
  // useEffect(() => {
  //   getPlayers(user.uid).then((playerResp) => setPlayers(playerResp));
  // }, []);
  // getMyPlayers();

  return (
    <div>
      <h1>Roster</h1>
      <div id="cardContainer">
        {players.map((player) => (
          <PlayerCard
          key={player.firebaseKey}
          user={user}
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
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
