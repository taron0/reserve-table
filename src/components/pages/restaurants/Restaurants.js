import React from 'react';
import imgContact from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import './restaurants.css'
import Input from "../../shared/input/Input";


const Restaurants = () => {
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
                            <Input type="checkbox" name='Armenian' className={'checkbox'}/>
                        </span>

                    </div>
                  <div>
                      <span>Chinese </span>
                      <span>
                             <Input type="checkbox" name='Chinese' className={'checkbox'}/>
                      </span>

                  </div>
                    <div>
                        <span>European</span>
                        <span>
                            <Input type="checkbox" name=' European' className={'checkbox'}/>
                        </span>

                    </div>
                    <div>
                        <span>Caucasian</span>
                        <span>
                              <Input type="checkbox" name=' Caucasian' className={'checkbox'}/>
                        </span>

                    </div>
                    <div>
                        <span> Georgian</span>
                        <span>
                              <Input type="checkbox" name=' Georgian' className={'checkbox'}/>
                        </span>

                    </div>
                    <div>
                        <span>Italian</span>
                        <span>
                            <Input type="checkbox" name='Italian' className={'checkbox'}/>
                        </span>

                    </div>
                    <div>
                        <span> Russian</span>
                        <span>
                             <Input type="checkbox" name=' Russian' className={'checkbox'}/>
                        </span>

                    </div>
                    <div>
                        <span>Mexican</span>
                        <span>
                             <Input type="checkbox" name=' Mexican' className={'checkbox'}/>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurants