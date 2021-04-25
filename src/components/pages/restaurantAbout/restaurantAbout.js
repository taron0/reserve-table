import React from 'react';
import './restaurantAbout.css'
import Header from "../../header/Header";
import imgContact from "../../../assets/cover-image.jpg";


const RestaurantAbout = ({ el }) => {
    return (
        <>
            <div className={'wrapper-resturants-about'} style={{backgroundImage: `url(${el.urlImg})`}}>
                <Header/>
                <div className={'contact-text'}>
                    <h1>{el.name}</h1>
                    <p>Order online is easy</p>
                </div>
            </div>
        </>
    )
}

export default RestaurantAbout