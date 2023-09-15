import React from 'react'
import { Container } from 'react-bootstrap'
import './buioki.scss'
import { Link, useParams } from 'react-router-dom'

const BuiokiSingle = () => {
    const { id } = useParams();
    var num = Number(id);
    num *= 25;
    return (
        <Container style={{ backgroundColor: '#fff', width: '100%', padding: 30, marginTop: 50 }}>
            <button className='back'><Link to={'/'}><i className='fa-solid fa-chevron-left'/> უკან</Link></button>
            <ul>
                <li className='temp'><i className='fa-solid fa-temperature-three-quarters' /> - 12 C</li>
                <li className='humidity'><i className='fa-solid fa-droplet' /> -  72%</li>
                <li className='water'><i className='fa-solid fa-water' /> - 76%</li>
                <li className='ecology'><i className='fa-solid fa-recycle' /> - სუფთა</li>
                <li className='pressure'><i className='fa-solid fa-cloud' /> - 101KP</li>
            </ul>
            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', gap: 10, marginTop: 20}}>
                sunny
                <div className='bar'><div className='completedBar' style={{ width: `${num}%` }}></div></div>
                storm
            </div>
        </Container>
    )
}

export default BuiokiSingle