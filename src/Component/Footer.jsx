import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
        <div className="footer-bg">
            <div className="container">
                <div className="row footer">
                    <div className="col-lg-4 col-md-4 footer-logo">
                        <img src="assests/images/footer-logo.png" alt="" className="image-fluid" />
                        <button className="btn btn-light">JOIN THE COMMUNITY</button>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h3>THE BASICS</h3>
                        <ul>
                            <li>
                                <a href="">About TMDB</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                            <li>
                                <a href="">Support Forums</a>
                            </li>
                            <li>
                                <a href="">API</a>
                            </li>
                            <li>
                                <a href="">System Status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h3>GET INVOLVED</h3>
                        <ul>
                            <li>
                                <a href="">Contribution Bible</a>
                            </li>
                            <li>
                                <a href="">3rd Party Applications</a>
                            </li>
                            <li>
                                <a href="">Add New Movie</a>
                            </li>
                            <li>
                                <a href="">Add New TV Show</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h3>COMMUNITY</h3>
                        <ul>
                            <li>
                                <a href="">Guidelines</a>
                            </li>
                            <li>
                                <a href="">Discussion</a>
                            </li>
                            <li>
                                <a href="">Leaderboard</a>
                            </li>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h3>LEGAL</h3>
                        <ul>
                            <li>
                                <a href="">Terms of Use</a>
                            </li>
                            <li>
                                <a href="">API Terms of Use</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
