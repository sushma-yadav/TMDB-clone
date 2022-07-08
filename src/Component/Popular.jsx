import React, { useEffect, useState } from 'react'
import popularmovie from '../assets/images/popular-movie.jpg';
import { NavLink } from 'react-bootstrap';
import axios from 'axios';

function Popular({ data }) {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        let popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e945d2f421edc0fbe6217e79fefca15&language=en-US&page=1'

        axios.get(popularUrl)
            .then(response => {
                setPopular(response.data.results)
                console.log(response.data.results)
            })
        return () => {
            // cleanup
        }
    }, [])


    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-3'>
                    <h3 className='page-heading'>Popular Movies</h3>
                </div>
                <div className='col-md-9'>
                    <div className='popular-faces'>

                        {/* {
                            data.map((item) => (
                                <div className='card'>
                                    <img src={imgUrl + item.poster_path} />
                                    <h2 className='movie-name'>{item.title != null ? item.title : item.original_name}</h2>
                                    <p className='movie-date pb-3'>{item.release_date != null ? item.release_date : item.first_air_date}</p>
                                </div>
                            ))
                        } */}

                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                        <div className='card'>
                            <img src={popularmovie} className="movie-card" />
                            <h2 className='movie-name pt-3'>Sushma Yadav</h2>
                            <p className='movie-date pb-3'>Sushma Yadav</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular;