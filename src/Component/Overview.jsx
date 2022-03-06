import React from 'react';
import movieimage from '../assets/images/movie-image.jpg';

const Overview = () => {
  return (
    <div className='movie-background'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-3 col-sm-12 col-xs-12'>
            <img src={movieimage} className="image-fluid movie-image"></img>
          </div>
          <div className='col-md-9 col-sm-12 col-xs-12'>
            <div className='movie-content'>
              <h2 className='name'>Euphoria <span className=''>(2011)</span></h2>
              <div className='facts d-flex'>
                <p>TV-14</p>
                <p>Drama</p>
                <p>40m</p>
              </div>
              <div className='fav-icons'>
                <i class="fas fa-list"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-bookmark"></i>
                <i class="fas fa-star"></i>
              </div>
              <h3 className='tagline mb-2'>Nothing is ever black and white</h3>
              <h5 className=''>Overview</h5>
              <p>While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory</p>
              <div className='profile'>
                <p>Arosh korsh</p>
                <p>Creator</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Overview