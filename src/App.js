import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Switch, Route } from 'react-router-dom';
import MovieDescription from './Component/MovieDescription';
import PopularPeople from './Component/PopularPeople';
import Popular from './Component/Popular';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/moviedescription" component={MovieDescription} />
        <Route path="/popularpeople" component={PopularPeople} />
        <Route path="/popular" component={Popular} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
