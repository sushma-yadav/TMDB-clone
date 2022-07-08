import React from 'react'
import ana from '../assets/images/ana.jpg';
import chloe from '../assets/images/chloe.jpg';
import isabel from '../assets/images/isabel.jpg';
import tom from '../assets/images/tom.jpg';
import keanu from '../assets/images/keanu.jpg';
import { NavLink } from 'react-router-dom';
import CardImage from './CardImage';

const PopularPeople = () => {
    return (
        <div className='container'>
            <h3 className='page-heading my-4'>Popular People</h3>
            <div className='row'>
                <div className='popular-faces'>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={ana} className='img-fluid'></img>
                            <p>Ana de Armas</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={isabel} className='img-fluid'></img>
                            <p>Isabel May</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={tom} className='img-fluid'></img>
                            <p>Tom Holland</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={chloe} className='img-fluid'></img>
                            <p>Chloë Grace Moretz</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={keanu} className='img-fluid'></img>
                            <p>Keanu Reeves</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={isabel} className='img-fluid'></img>
                            <p>Isabel May</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={ana} className='img-fluid'></img>
                            <p>Ana de Armas</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={isabel} className='img-fluid'></img>
                            <p>Isabel May</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={keanu} className='img-fluid'></img>
                            <p>Keanu Reeves</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={ana} className='img-fluid'></img>
                            <p>Ana de Armas</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={isabel} className='img-fluid'></img>
                            <p>Isabel May</p>
                        </div>
                    </NavLink>
                    <NavLink to='/moviedescription'>
                        <div className='card popular'>
                            <img src={keanu} className='img-fluid'></img>
                            <p>Keanu Reeves</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default PopularPeople