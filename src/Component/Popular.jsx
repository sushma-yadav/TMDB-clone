import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';

function Popular() {

    const [popularList, setPopularList] = useState([])

    useEffect(() => {
        let popularmovieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e945d2f421edc0fbe6217e79fefca15&language=en-US&page=1'

        axios.get(popularmovieUrl).then((res) => {
            setPopularList(res.data.results)
            console.log(res.data.results, "res.data.results")
        })


    }, [])


    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-12'>
                    <div className='popular-faces'>
                        {
                            popularList.map((item) => {
                                return (
                                    <div className='card'>
                                        <img src={imgUrl + item.poster_path} className="movie-card" alt='' />
                                        <h2 className='movie-name pt-3'>{item.original_title}</h2>
                                        <p className='movie-date pb-3'>{moment(item.release_date).format("MMM DD, YYYY")}</p>
                                    </div>
                                )
                            })
                        }
                        {/* <div className='card'>
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular;