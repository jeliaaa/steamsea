import React from 'react'
import { Container } from 'react-bootstrap'
import commSchool from '../../assets/comm-1.png'
import "./About.css"

const About = () => {
    return (
        <Container style={{backgroundColor: '#fff', padding: 25}}>
            <div>
                <p className='chven'>ჩვენს შესახებ : <br /> ნებულა არის გუნდი, რომელიც მუშაობს პროექტზე, რომლის ხარჯზეც გამოვიმუშავებთ ეკომეგობრული ელექტრო ენერგიის წყაროს, შევისწავლით ლოკალური ნაპირისა თუ წყლის მასების კლიმატურ და ზოგად მდგომარეობას და მივაწოდებთ ადგილობრივ მოსახლეობას. ჩვენ მიზანია რომ არამარტო ვიზრუნოთ გარემოზე არამედ შევატყობინოთ ხალხს თუ როგორ მიმდინარეობს ეს პროცესი. </p>
                
                <p className='partners'> პარტნიორები: <br /> ამ გამოწვევას მარტო არ შევჭიდებივართ, ჩვენი მხარდამჭერები გახლავთ: თბილისის კომუნიკაციების სკოლა, GITA, ბათუმის ტექნობარკი და ა.შ</p>

                <div className="img">
                    <img  src={commSchool} alt="" />                    
                </div>
            </div>
        </Container>    
    )
}

export default About