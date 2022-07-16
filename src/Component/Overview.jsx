import React from 'react';
import moment from 'moment';

const Overview = ({ details }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='movie-background' style={{ background: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%), url('${imgUrl}${details.backdrop_path}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-3 col-sm-12 col-xs-12'>
            <img src={imgUrl + details.poster_path} className="image-fluid movie-image" alt=''></img>
          </div>
          <div className='col-md-9 col-sm-12 col-xs-12'>
            <div className='movie-content'>
              <h2 className='name'>{details.original_title} <span className=''>({moment(details.release_date).format('YYYY')})</span></h2>
              <div className='facts d-flex'>
                <p>TV-14</p>
                <p>
                  {/* {details?.genres[0].name} */}
                  Drama
                </p>
                <p>{Math.floor((details.runtime) / 60)}h</p>
              </div>
              <div className='fav-icons'>
                <i class="fas fa-list"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-bookmark"></i>
                <i class="fas fa-star"></i>
              </div>
              <h3 className='tagline mb-2'>{details.tagline}</h3>
              <h5 className=''>Overview</h5>
              <p>{details.overview}</p>
              <div className='profile'>
                <p>Arosh korsh</p>
                <p>Creator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Overview