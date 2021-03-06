import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deletePlayer = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/players/${firebaseKey}.json`)
    .then(() => getPlayers(uid).then((playersArray) => resolve(playersArray)))
    .catch((error) => reject(error));
});

const addPlayer = (player, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/players.json`, player)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers(uid).then((playersArray) => resolve(playersArray));
        });
    })
    .catch((error) => reject(error));
});

const updatePlayer = (player, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getPlayers,
  deletePlayer,
  addPlayer,
  updatePlayer
};
