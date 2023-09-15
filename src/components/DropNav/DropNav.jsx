import React, { useEffect, useState } from 'react';
import './DropNav.scss';
import { Link } from 'react-router-dom';

const DropNav = ({ id, location, distance }) => {
    const [ecology, setEcology] = useState('სუფთა');
    const toggleEcology = (e) =>{
        e.preventDefault();
        if(ecology === 'სუფთა'){
            e.target.classList.remove('clear');
            setEcology('ბინძური');
        } else {
            e.target.classList.add('clear');
            setEcology('სუფთა');
        }
    }
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
                    <button className='ecology_toggle clear' onClick={toggleEcology}>{ecology}</button>
                    <h3><i className='fa-solid fa-location' />{location}</h3>
                </div>
            </Link>
        </div>
    );
};

export default DropNav;