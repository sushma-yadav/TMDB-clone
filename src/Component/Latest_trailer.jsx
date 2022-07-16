import React from 'react';
import { useNavigate } from 'react-router-dom';

function Latest_trailer({ heading, data, category }) {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    const navigate = useNavigate()

    const movieDetailsHandler = (id) => {
        navigate(`/moviedescription/${id}`)
    }

    return (
        <div className='container'>
            <div className='bg-image'>
                <div className="heading pt-5 pb-3 text-light">
                    <div className='row'>
                        <div className='col-md-4 col-sm-12 col-xs-12'>
                            <h2>{heading}</h2>
                        </div>
                        <div className='col-md-8 col-sm-12 col-xs-12'>
                            <div className="category">
                                {
                                    category.map((movie_category) => (
                                        <h3>{movie_category}</h3>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trailers'>
                    {
                        data.map((movie) => (
                            <div className='trailer'>
                                <div className='poster' style={{ cursor: "pointer" }} onClick={() => { movieDetailsHandler(movie.id) }}>
                                    <img src={imgUrl + movie.poster_path} alt="" className="image-fluid mt-3" />
                                    <i class="fas fa-play"></i>
                                    <div className="option"></div>
                                    <h2 className='text-light mt-3'>{movie.title != null ? movie.title : movie.original_name}</h2>
                                    <h3 className='text-light mb-5'>{movie.media_type}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Latest_trailer
