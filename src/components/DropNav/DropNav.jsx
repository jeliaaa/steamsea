import React from 'react';
import './DropNav.scss';
import { Link } from 'react-router-dom';

const DropNav = ({ id, location, distance }) => {
    return (
        <div className="dropnav">
            <Link to={`buiokebi/${id}`}>
                <div className='upper'>
                    <i className='wave fa-solid fa-water' />
                    <div className='distance'>
                        <h4>ნაპირიდან:</h4>
                        <h3>{distance}მ</h3>
                    </div>
                </div>
                <div className="bottom">
                    <h3><i className='fa-solid fa-location' />{location}</h3>
                </div>
            </Link>
        </div>
    );
};

export default DropNav;