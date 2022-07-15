import React from 'react';
import movieimage from '../assets/images/movie-image.jpg';
import Overview from './Overview';
import SeriesCast from './SeriesCast';

const MovieDescription = () => {
  return (
    <div>
      <Overview />
      <div className='container'>
        <div className='row'>
          <div className=''>
            <SeriesCast />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieDescription;