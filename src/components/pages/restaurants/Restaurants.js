import React, { useState, useEffect } from 'react';
import imgContact from "../../../assets/cover-image.jpg";
import RESTAURANTS from "../../../helpers/resturants/restaurants"
import firebase from '../../../configs/mainConfig';
import Header from "../../header/Header";
import './restaurants.css'
import Checkbox from "../../shared/checkbox/Checkbox";
import Firebase from '../../../service/firebase/firebase'
import ResturantsList from "../../../helpers/resturantsList/resturantsList";


const Restaurants = () => {
const [data, setData] = useState([])
    useEffect(() => {
        Firebase.getDataBase(data, setData)

    }, [data])
    console.log(data)
    return (
        <>
            <div className={'wrapper-resturants'} style={{backgroundImage: `url(${imgContact})`}}>
                <Header/>
                <div className={'contact-text'}>
                    <h1>RESTAURANTS</h1>
                    <p>Booking online is Easy.</p>
                </div>

            </div>
            <div className={'filtred-container'}>
                <div>
                    Cuisine:
                </div>
                <div className={'countries'}>
                    <div>
                        <span>Armenian</span>
                        <span>
                            <Checkbox name='Armenian'/>
                        </span>

                    </div>
                    <div>
                        <span>Chinese </span>
                        <span>
                             <Checkbox name='Chinese'/>
                      </span>

                    </div>
                    <div>
                        <span>European</span>
                        <span>
                            <Checkbox name=' European'/>
                        </span>

                    </div>
                    <div>
                        <span>Caucasian</span>
                        <span>
                              <Checkbox name=' Caucasian'/>
                        </span>

                    </div>
                    <div>
                        <span> Georgian</span>
                        <span>
                              <Checkbox name=' Georgian'/>
                        </span>

                    </div>
                    <div>
                        <span>Italian</span>
                        <span>
                            <Checkbox name='Italian'/>
                        </span>

                    </div>
                    <div>
                        <span> Russian</span>
                        <span>
                             <Checkbox name=' Russian'/>
                        </span>

                    </div>
                    <div>
                        <span>Mexican</span>
                        <span>
                             <Checkbox name=' Mexican'/>
                        </span>

                    </div>
                </div>
            </div>

            <div className={'container-restaurants'}>

                 {RESTAURANTS.map(el => {
                     return (
                         <div key={el.name}>
                             <ResturantsList el={el}/>
                         </div>
                         )


                 })}



            </div>
        </>
    )
}

export default Restaurants