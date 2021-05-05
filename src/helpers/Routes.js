import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayers from '../views/AddPlayers';
import Home from '../views/Home';
import Team from '../views/Team';

export default function Routes({ players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
        <Route
        exact
        path='/add-players'
        component={AddPlayers}
        />
        <Route
        exact
        path='/roster'
        component={() => <Team players={players} setPlayers={setPlayers}/>}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func
};
