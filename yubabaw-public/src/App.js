import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Header from './components/Header'
import Dessin from './components/Dessin';
import Logo from './components/Logo';
import WebDesign from './components/WebDesign';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dessin' component={Dessin} />
        <Route path='/logo' component={Logo} />
        <Route path='/design' component={WebDesign} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
