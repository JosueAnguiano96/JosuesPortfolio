import React from 'react';
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
