import { useSSRSafeId } from "@react-aria/ssr";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

function TopRatedMovies() {

    const [topRatedMoviesList, setTopRatedMoviesList] = useState([])

    useEffect(() => {
        let topRatedMovie = 'https://api.themoviedb.org/3/trending/all/day?api_key=1e945d2f421edc0fbe6217e79fefca15'

        axios.get(topRatedMovie).then((res) => {
            if (res.status) {
                setTopRatedMoviesList(res.data.results)
            }
        })
    }, [])


    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-12'>
                    <div className='popular-faces'>
                        {
                            topRatedMoviesList.map((item) => {
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

export default TopRatedMovies;