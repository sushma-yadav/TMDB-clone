import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <div className="container">
            <div className="banner p-5">
                <h1 className='text-light pt-4'>Welcome.</h1>
                <h2 className='text-light mb-5'>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <form method='get' className="form-group d-flex justify-content-between position-relative mb-3">
                        <input className='form-control' dir='auto' type="text" autoComplete='off' placeholder='Search for a movie, tv show, person......' spellCheck='false' autoCorrect='off'></input>
                        <button className='bg-light search-btn'>Search</button>
                    </form>
            </div>
        </div>
    )
}

export default Banner;
