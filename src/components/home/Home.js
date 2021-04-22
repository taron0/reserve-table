import React from 'react'
import Header from "../header/Header";
import './Home.css'
import backg from '../../assets/cover-image.jpg'
import Button from "../shared/button/Button";
import {Link} from "react-router-dom";

const Home = () => {
    return (


        <div className={'wrapper'} style={{backgroundImage: `url(${backg})`}}>
            <Header/>
            <div className={'hero-title-holder'}>
                <div className={'overlay'}>
                    <div className={'hero-title'}>
                        <div className={'hero-decor b-dec'}>
                            <div className={'half-circle'}></div>
                        </div>
                        <div className={'text-content'}>
                            <h3>Discover and book tables</h3>
                            <span className={'border-span'}></span> <h4>IN YEREVAN RESTAURANTS</h4> <span
                            className={'border-span'}></span>
                        </div>

                        <div  className={'btn-book'}>
                          <Link to={'/resturants'} ><Button context={'Book Now'}/> </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Home