import React from 'react'
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