import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

function Popular() {

    const [popularList, setPopularList] = useState([])

    useEffect(() => {
        let popularmovieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e945d2f421edc0fbe6217e79fefca15&language=en-US&page=1'

        axios.get(popularmovieUrl).then((res) => {
            setPopularList(res.data.results)
        })

    }, [])



    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-12'>
                    <div className='popular-faces'>
                        {
                            popularList.map((item) => {
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

export default Popular;