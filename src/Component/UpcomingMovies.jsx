import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';

function UpComingMovies() {

    const [upComingMoviesList, setUpComingMoviesList] = useState([])

    useEffect(() => {
        let upComingMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1e945d2f421edc0fbe6217e79fefca15&language=en-US&page=1'

        axios.get(upComingMovies).then((res) => {
            setUpComingMoviesList(res.data.results)
        })

    }, [])



    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-12'>
                    <div className='popular-faces'>
                        {
                            upComingMoviesList.map((item) => {
                                return (
                                    <MovieCard data={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpComingMovies;