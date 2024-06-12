import React from 'react'
import { Container } from 'react-bootstrap'
import "./About.css"

const About = () => {
    return (
        <Container style={{ backgroundColor: '#fff', padding: 25 }}>
            <div>
                <p className='chven'>ჩვენს შესახებ : <br />
                    ჩვენი პროექტი მოიცავს თანამედროვე, მაღალტექნოლოგიური მიდგომების დამკვიდრებას აქვაკულტურაში და ამასთანავე საქართველოში ამ კონკრეტული მიმდინარეობის განვითარებას. ჩვენ ვაძლევთ ადამიანებს საშუალებას იმისა, რომ იქონიონ საკუთარი ფერმა და/ან ნაკლები ადამიანური და ფინანსური რესურსით მოუარონ მათ.
                </p>
            </div>
        </Container>
    )
}

export default About