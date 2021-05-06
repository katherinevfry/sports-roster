import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayers from '../views/AddPlayers';
import Home from '../views/Home';
import Team from '../views/Team';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
        <PrivateRoute
        exact
        path='/add-players'
        user={user}
        component={() => <AddPlayers setPlayers={setPlayers} user={user} />}
        />
        <PrivateRoute
        exact
        path='/roster'
        user={user}
        component={() => <Team players={players} setPlayers={setPlayers} user={user}/>}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
