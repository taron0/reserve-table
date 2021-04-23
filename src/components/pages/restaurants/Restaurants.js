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
                <div>
                    <div>
                        <span>
                            <Input type="checkbox" name='Armenian'/>
                        </span>
                        <span>Armenian</span>
                    </div>
                  <div>
                      <span>
                             <Input type="checkbox" name='Chinese'/>
                      </span>
                     <span>Chinese </span>
                  </div>
                    <div>
                        <span>
                            <Input type="checkbox" name=' European'/>
                        </span>
                          <span>European</span>
                    </div>
                    <div>
                        <span>
                              <Input type="checkbox" name=' Caucasian'/>
                        </span>
                       <span>Caucasian</span>
                    </div>
                    <div>
                        <span>
                              <Input type="checkbox" name=' Georgian'/>
                        </span>
                      <span> Georgian</span>
                    </div>
                    <div>
                        <span>
                            <Input type="checkbox" name='Italian'/>
                        </span>
                        <span>Italian</span>
                    </div>
                    <div>
                        <span>
                             <Input type="checkbox" name=' Russian'/>
                        </span>
                        <span> Russian</span>
                    </div>
                    <div>
                        <span>
                             <Input type="checkbox" name=' Mexican'/>
                        </span>
                        <span>Mexican</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurants