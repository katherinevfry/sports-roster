import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/TeamData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          userName: authed.email.split('@')[0]
        };
        getPlayers(authed.uid).then((playersArray) => setPlayers(playersArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
        setPlayers([]);
      }
    });
  }, []);

  return (
    <>
    <Router>
      <NavBar user={user}/>
      <Routes
      players={players}
      setPlayers={setPlayers}
      user={user}
      />
    </Router>
    </>
  );
}

export default App;
