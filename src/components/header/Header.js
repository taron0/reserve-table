import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'
import  img from '../../assets/logo_r.png'


const Header = () => {

    return (
        <div className={'header'}>
            <div className={'nav-social'}>
                <ul>
                    <li className={'aper-visitors'}>
                        <span>BOOKED TODAY :</span>
                        <span>4</span>
                    </li>
                    <li><a href={'https://www.facebook.com/'} target={'_blank'}>F</a></li>
                    <li><a href={'https://www.instagram.com/'} target={'_blank'}>I</a></li>
                </ul>
            </div>

            <div className={'logo-holder'}>
                <a><img src={`${img}`} className={'respimg logo-viz'}/></a>
            </div>

            <div className={'nav-holder'}>
                <nav>
                    <ul className={'menu'}>
                        <li className={'menu-item'}>
                            <NavLink exact to={'/'}>
                                HOME
                            </NavLink>
                        </li>
                        <li className={'menu-item'}>
                            <NavLink exact to={'/restaurants'}>RESTURANTS</NavLink>
                        </li>
                        <li className={'menu-item'}>
                            <NavLink exact to={'/about'}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li className={'menu-item'}>
                            <NavLink exact to={'/contact'}>
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header