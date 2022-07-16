import React from 'react'
import { useNavigate } from "react-router-dom";
import moment from 'moment';

function Whats_popular({ heading, data, category }) {

    const navigate = useNavigate()

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    const movieDetailsHandler = (id) => {
        navigate(`/moviedescription/${id}`)
    }

    return (
        <div className='container'>
            <div className="heading mt-3 pb-3">
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
                        <div className="image mt-3" style={{ cursor: "pointer" }} onClick={() => {
                            movieDetailsHandler(movie.id)
                        }}>
                            <img src={imgUrl + movie.poster_path} alt="" className="image-fluid" />
                            <h2 className='movie-name'>{movie.title != null ? movie.title : movie.original_name}</h2>
                            <p className='movie-date'>{moment(movie.release_date != null ? movie.release_date : movie.first_air_date).format('MMM DD, YYYY')}</p>
                            {/* <div className="option"></div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Whats_popular;
