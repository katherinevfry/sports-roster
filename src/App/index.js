import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import '../styles/index.scss';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userInfoObj = {
  //         fullName: authed.displayName,
  //         profileImage: authed.photoURL,
  //         uid: authed.uid,
  //         userName: authed.email.split('@')[0]
  //       };
  //       setUser(userInfoObj);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, []);

  // Pass the user if using authenticated routes

  return (
    <>
    <Router>
      <NavBar />
      <Routes />
    </Router>
    </>
  );
}

export default App;
