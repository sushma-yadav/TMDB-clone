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
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>

                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>

                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>
                    <NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink><NavLink to="/moviedescription">
                        <CardImage />
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default PopularPeople