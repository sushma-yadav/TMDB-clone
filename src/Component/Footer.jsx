import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import footerLogo from '../assets/images/footer-logo.png'
function Footer() {
    return (
        <div className="footer-bg">
            <div className="container">
                <div className='footer'>
                    <div className='footerimage'>
                        <img src={footerLogo} className='image-fluid mt-5' />
                        <button className='btn btn-light mt-2'>Hi sushma</button>
                    </div>
                    <div className='d-flex text-light'>
                        <ol className='footerlist'>

                        </ol>
                        <ol className='footerlist'>
                            <h3>THE BASICS</h3>
                            <li>About TMDB</li>
                            <li>Contact Us</li>
                            <li>Support Forums</li>
                            <li>API</li>
                            <li>System Status</li>
                        </ol>
                        <ol className='footerlist'>
                            <h3>GET INVOLVED</h3>
                            <li>Contribution Bible</li>
                            <li>3rd Party Applications</li>
                            <li>Add New Movie</li>
                            <li>Add New TV Show</li>
                        </ol>
                        <ol className='footerlist'>
                            <h3>COMMUNITY</h3>
                            <li>Guidelines</li>
                            <li>Discussion</li>
                            <li>Leaderboard</li>
                            <li>Twitter</li>
                        </ol>
                        <ol className='footerlist'>
                            <h3>LEGAL</h3>
                            <li>Terms of Use</li>
                            <li>API Terms of Use</li>
                            <li>Privacy Policy</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
