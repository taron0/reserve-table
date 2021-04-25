import React from 'react'
import './resturantsList.css'
import {Link, useHistory , useLocation } from "react-router-dom";


const ResturantsList = ({el}) => {
    let location = useLocation();
    console.log(location)

    return (
        <>

            <div className={'box-resurants'}>

                    <div className={'box-img'}>
                        <img src={el.urlImg} className={'img-resturants'}/>
                    </div>
                    <div className={'description-img '}>
                        <p>
                            <Link to={`/resturants/${el.name}`}>  {el.name} </Link>

                        </p>
                    </div>
                <div className={'description-name'}>
                    <p>{el.Cuisine}</p>
                    <p>Downtown</p>
                </div>



            </div>

        </>
    )


}

export default ResturantsList