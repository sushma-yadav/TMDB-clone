import React from 'react';
import movieimage from '../assets/images/movie-image.jpg';
import Filter from './Filter';
import Overview from './Overview';
import SeriesCast from './SeriesCast';

const MovieDescription = () => {
  return (
    <div>
      <Overview />
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-sm-12 col-xs-12'>
            <SeriesCast />
          </div>
          <div className='col-md-3'>
            <Filter/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieDescription;