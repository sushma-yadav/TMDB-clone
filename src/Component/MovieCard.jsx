import React, { useEffect, useState } from 'react'
import moment from 'moment';

function MovieCard({ data }) {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className='card'>
            <img src={imgUrl + data.poster_path} className="movie-card" alt='' />
            <h2 className='movie-name pt-3'>{data.original_title}</h2>
            <p className='movie-date pb-3'>{moment(data.release_date).format("MMM DD, YYYY")}</p>
        </div>
    )
}

export default MovieCard;