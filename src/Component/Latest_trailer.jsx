import React from 'react'
import poster from '../assets/images/play-image.jpg';

function Latest_trailer({ heading, data, category }) {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className='container'>
            <div className='bg-image'>
                <div className="heading pt-5 pb-3 text-light">
                    <h2>{heading}</h2>
                    <div className="category">
                        {
                            category.map((movie_category) => (
                                <h3>{movie_category}</h3>
                            ))
                        }
                    </div>
                </div>
                <div className='trailers'>
                    {
                        data.map((movie) => (
                            <div className='trailer'>
                                <div className='poster'>
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
