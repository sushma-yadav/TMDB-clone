import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import TvShows from './Component/TvShows';
import People from './Component/People';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tvshows" component={TvShows} />
        <Route path="/people" component={People} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
