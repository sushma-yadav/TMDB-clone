import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Overview from './Overview';
import SeriesCast from './SeriesCast';

const MovieDescription = () => {
  const { id } = useParams()

  const [movieOverview, setMovieOverview] = useState([])


  useEffect(() => {
    let movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=1e945d2f421edc0fbe6217e79fefca15`

    axios.get(movieDetailURL).then((res) => {
      setMovieOverview(res.data)
    })


  }, [])

  return (
    <div>
      <Overview details={movieOverview} />
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