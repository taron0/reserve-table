import React from 'react'
import img from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import './About.css'
import aboutImg from '../../../assets/El-Sky-Bar.jpg'

const About = () => {
    return (
        <>
        <div className='wrapper-about' style={{backgroundImage: `url(${img})`}}>
            <Header />
        <div className={'about-title'}>
            <h1 className={'h3'}>ABOUT</h1>
            <p className={'h4'}>Trust us the organization of your leisure.</p>
        </div>

        </div>
            <div className='about-context'>
                <div className='about-text'>
                    <h2>ABOUT US</h2>
                    <p>Reserve.am is a unique and free online service for reservation of tables in the best cafés/restaurants of Yerevan. Visiting reserve.am you can quickly and absolutely free reserve the best table, at time and place convenient for you.</p>
                </div>
                <div className='about-img'>
                    <img src={`${aboutImg}`} />

                </div>
            </div>
            </>
    )
}
export default About