import React from 'react'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


function Whats_popular({ heading, data, category }) {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';


    return (
        <div className="column">
            <div className="mar-l">
            <div className="column-header my-4">
                <h2>{heading}</h2>
                <div className="category">
                    {
                        category.map((movie_category) => (
                            <h3>{movie_category}</h3>
                        ))
                    }
                </div>
            </div>
            <div className="card-image">
                {
                    data.map((movie) => (
                        <div className="image">
                            <a href="#">
                                <img src={imgUrl + movie.poster_path} alt="" className="image-fluid" />
                            </a>
                            <h2><a href="#">{movie.title != null ? movie.title : movie.original_name}</a></h2>
                            <p>{movie.release_date !=null ? movie.release_date : movie.first_air_date}</p>
                            <div className="option"></div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )

}

export default Whats_popular;
