import React from 'react'
import img from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import { useTranslation } from "react-i18next";
import './About.css'
import aboutImg from '../../../assets/El-Sky-Bar.jpg'

const About = () => {
    const { t } = useTranslation();

    return (
        <>
        <div className='wrapper-about' style={{backgroundImage: `url(${img})`}}>
            <Header />
        <div className={'about-title'}>
            <h1 className={'h3'}>{t("about")}</h1>
            <p className={'h4'}>{t("trust_us_the_organization_of_your_leisure")} .</p>
        </div>

        </div>
            <div className='about-context'>
                <div className='about-text'>
                    <h2>{t("about")}</h2>
                    <p>{t("about_us_text")}</p>
                </div>
                <div className='about-img'>
                    <img src={`${aboutImg}`} />

                </div>
            </div>
            </>
    )
}
export default About