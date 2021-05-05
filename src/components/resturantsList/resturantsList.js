import React from 'react';
import { Link } from "react-router-dom";
import './resturantsList.css';

const ResturantsList = ({ el }) => {
    return (
        <>
            <div className='box-restaurants'>
                <div className='box-img'>
                    <img src={el.urlImg} className='img-restaurants' alt="image"/>
                </div>
                <div className='description-img '>
                    <p>
                        <Link to={`/restaurants/search/${el.id}`}>  {el.name} </Link>
                    </p>
                </div>
                <div className='description-name'>
                    <p>{el.Cuisine}</p>
                    <p>Downtown</p>
                </div>
            </div>
        </>
    )
}

export default ResturantsList