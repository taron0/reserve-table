import React, {useEffect, useState} from 'react';
import './restaurantAbout.css'
import Header from "../../header/Header";
import {useParams} from 'react-router-dom'
import Firebase from '../../../service/firebase/firebase'


const RestaurantAbout = () => {
    const {name} = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Firebase.getDataBase(data, setData, setLoading);
    }, [])
    debugger;
    const restaurant = data[0].filter(el => el.name === name)
    console.log(restaurant, 'arestaurant::')
    console.log(data, 'data mata data')
    return (
        <>
            <div className={'wrapper-resturants-about'} style={{backgroundImage: `url(${restaurant[0].urlImg})`}}>
                <Header/>
                <div className={'contact-text'}>
                    <h1>{restaurant[0].name}</h1>
                    <p>Order online is easy</p>
                </div>
            </div>
        </>
    )
}

export default RestaurantAbout



