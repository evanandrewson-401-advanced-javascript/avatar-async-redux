import React from 'react';
import CharacterContainer from './containers/CharacterContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CharacterContainer} />
      </Switch>
    </Router>
  );
};

export default App;
