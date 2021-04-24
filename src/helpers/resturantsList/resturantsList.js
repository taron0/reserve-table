import React, { useState, useEffect } from 'react'
import Firebase from '../../service/firebase/firebase'
import RESTAURANTS from "../resturants/restaurants";
import './resturantsList.css'


const ResturantsList = ({el}) => {




    return (
        <>

                <div className={'box-resurants'}>

                   <div className={'box-img'}>
                       <img src={el.urlImg} className={'img-resturants'}/>
                   </div>
                    <div className={'description-img '}>
                        <p>{el.name}</p>
                        <p>{el.Cuisine}</p>
                    </div>

                </div>

        </>
    )


}

export default ResturantsList