import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import TvShows from './Component/TvShows';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Switch, Route } from 'react-router-dom';
import MovieDescription from './Component/MovieDescription';
import PopularPeople from './Component/PopularPeople';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tvshows" component={TvShows} />
        <Route path="/moviedescription" component={MovieDescription} />
        <Route path="/popularpeople" component={PopularPeople} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
