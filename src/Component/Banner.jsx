import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-image">
                <img src="./assests/images/banner-image.png" className="image-fluid" />
            </div>
            <div className="title">
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <div className="search">
                <form action="/search" method="get">
                    <label>
                        <input dir="auto" type="text" autoComplete="off" placeholder="Search for a movie, tv show, person......" tabIndex="1" spellCheck="false" autoCorrect="off" />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
    )
}

export default Banner;
