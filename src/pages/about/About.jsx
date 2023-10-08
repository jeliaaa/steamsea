import React from 'react'
import { Container } from 'react-bootstrap'
import commSchool from '../../assets/comm-1.png'
import "./About.css"

const About = () => {
    return (
        <Container style={{backgroundColor: '#fff', padding: 25}}>
            <div>
                <p className='chven'>ჩვენს შესახებ : <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum excepturi consequatur quaerat. Repudiandae maxime, a tempore omnis officiis possimus exercitationem tenetur aliquid atque?
                 </p>
                
                <p className='partners'> პარტნიორები: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error quasi, nesciunt nostrum consectetur perferendis at exercitationem corporis sapiente ipsa?</p>
            </div>
        </Container>    
    )
}

export default About