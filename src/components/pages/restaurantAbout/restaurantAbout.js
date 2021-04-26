import React, {useEffect, useState} from 'react';
import './restaurantAbout.css'
import {useParams} from 'react-router-dom';
import Firebase from '../../../service/firebase/firebase'
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/Button";
import {DATE, PART_SIZE, TIME} from "../../../constant/dataDropdown";
import imgDiner from '../../../assets/cutlery.png'
import RestaurantsAboutText from "../../restaurantsAbouthText/restaurantsAbouthText";
import Modal from "../../modalWindow/modalWindow";
import SVG from '../../../assets/cancel.png'
import Input from "../../shared/input/Input";


const RestaurantAbout = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [isopenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);


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
                        <Button context='Bok Now' className='button-modal' onClick={() => openModal()}/>
                    </div>
                    <Modal isOpen={isopenModal}
                           onClose={() => closeModal()}
                    >
                        <div className='modal-text'>
                            <p className='text-content'>Find a reservation at MEZZO CLASSIC HOUSE CLUB</p>
                            <span onClick={closeModal} className='close-modal-window'><img src={SVG}/></span>
                        </div>

                        <div className='dropdow-modal'>
                            <span>
                                  <Dropdown

                                      values={PART_SIZE}
                                  />
                            </span>

                            <span>
                                  <Dropdown values={DATE}/>
                            </span>

                            <span>
                                 <Dropdown values={TIME}/>

                            </span>

                        </div>
                        <div className='fileds-box'>
                            <span>
                                <Input type='name'
                                       placeholder='Name'
                                       />
                            </span>
                            <span>
                                <Input
                                    type='text'
                                    placeholder='Lastname'
                                />
                            </span>

                        </div>
                        <div className='contact-fileds-input'>
                            <span>
                                <Input
                                    type='text'
                                    placeholder='Email'
                                />
                            </span>

                            <span >
                                <Input
                                    type='text'
                                    placeholder='Telephone'
                                />
                            </span>

                            <span className='textarea-for-booking'>
                                <textarea
                                    placeholder='Preferences on booking'
                                >

                                </textarea>
                            </span>

                        </div>
                        <div className='reserve-table-btn'>
                            <span>
                                <Button context='Book Now'

                                />
                            </span>
                            <span >
                                <Button context='Special Events' />
                            </span>

                        </div>

                    </Modal>
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
                <RestaurantsAboutText restaurants={restaurant}/>
            </div>

        </>
    )
}

export default RestaurantAbout



