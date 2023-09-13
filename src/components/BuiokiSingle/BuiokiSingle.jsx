import React from 'react'
import { Container } from 'react-bootstrap'
import './buioki.scss'
import { useParams } from 'react-router-dom'

const BuiokiSingle = () => {
    const { id } = useParams();
    var num = Number(id);
    num *= 25;
    return (
        <Container style={{ backgroundColor: '#fff', width: '100%', padding: 30 }}>
            <ul>
                <li><i className='fa-solid fa-temperature-three-quarters' /> - 12 C</li>
                <li><i className='fa-solid fa-water' /> - 76%</li>
                <li><i className='fa-solid fa-recycle' /> - Pretty clear</li>
                <li><i className='fa-solid fa-cloud' /> - 101KP</li>
            </ul>
            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
                sunny
                <div className='bar'><div className='completedBar' style={{ width: `${num}%` }}></div></div>
                storm
            </div>
        </Container>
    )
}

export default BuiokiSingle