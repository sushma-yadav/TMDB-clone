import React from 'react'
import keanu from '../assets/images/keanu.jpg';

const CardImage = () => {
    return (
        <div className=''>
            <div className='card popular'>
                <img src={keanu} className='img-fluid'></img>
                <p>Keanu Reeves</p>
            </div>
        </div>
    )
}

export default CardImage