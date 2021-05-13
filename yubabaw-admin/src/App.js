import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/menu' component={Menu} />
      </Switch>
    </>
  );
}

export default App;
