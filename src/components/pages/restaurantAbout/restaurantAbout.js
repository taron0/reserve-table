import React, {useEffect, useState} from 'react';
import './restaurantAbout.css'
import {useParams} from 'react-router-dom';
import Firebase from '../../../service/firebase/firebase'
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/Button";
import {DATE, PART_SIZE, TIME} from "../../../constant/dataDropdown";
import imgDiner from '../../../assets/cutlery.png'
import RestaurantsAboutText from "../../restaurantsAbouthText/restaurantsAbouthText";


const RestaurantAbout = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        Firebase.getRestaurants()
            .then((val => {
                setData(val);
                setLoading(false);
            }))
    }, [])

    const restaurant = data.length && data[id];


    console.log(restaurant, 'chgitem inch')

    return (
        <>

            <div className={'wrapper-resturants-about'} style={{backgroundImage: `url(${restaurant.urlImg})`}}>
                <div className={'contact-text'}>
                    <h1>{restaurant.name}</h1>
                    <p>Order online is easy</p>
                </div>
            </div>
            <div className='reserve-tavle'>
                <div className='dropdown-container'>
                <div className='dropdown-select'>
                    <Dropdown
                        title='Party Size'
                        values={PART_SIZE}
                    />
                </div>
                   <div className='dropdown-select'>
                       <Dropdown
                           title='Date'
                           values={DATE}
                       />
                   </div>
                   <div className='dropdown-select'>
                       <Dropdown
                           title='Time'
                           values={TIME}
                       />
                   </div>

                    <div className='modal-button'>
                        <Button context='Bok Now' className ='button-modal' />
                    </div>
                </div>

            </div>
            <div className={'diner-icon'}>
                <p className={'icon'}>
                   < img src={imgDiner}/>
                </p>
                <p className='cuisine-text'>Cuisine</p>
                <p>{restaurant.Cuisine}</p>

            </div>
            <div>
                <RestaurantsAboutText  restaurants={ restaurant }/>
            </div>

        </>
    )
}

export default RestaurantAbout



