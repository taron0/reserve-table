import React, {useEffect, useState} from 'react';
import './restaurantAbout.css'
import Header from "../../header/Header";
import { useParams } from 'react-router-dom';
import Firebase from '../../../service/firebase/firebase'


const RestaurantAbout = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
    console.log(data)


    useEffect( () => {
     Firebase.getDataBase(data, setData, setLoading)
         .then(val => {

         })
    }, [])


    // const restaurant = data[0]?.filter(el => el.id === id)
    const restaurant = {}
console.log('restaurants data :::::', restaurant)
    return (
        <>

                <div className={'wrapper-resturants-about'} style={{backgroundImage: `url(${restaurant.urlImg})`}}>
                    <div className={'contact-text'}>
                        <h1>{restaurant.name}</h1>
                        <p>Order online is easy</p>
                    </div>
                </div>


        </>
    )
}

export default RestaurantAbout



