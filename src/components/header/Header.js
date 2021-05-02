import React from 'react'
import {NavLink} from "react-router-dom";
import img from '../../assets/logo_r.png'
import i18next from 'i18next';
import { useTranslation  } from 'react-i18next'
import languages from "../../constant/language";
import 'bootstrap/dist/js/bootstrap.js'
import GlobalIcon from "../../constant/globalIcon";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'
import './Header.css'




const Header = () => {

    const { t } = useTranslation();

    return (

        <div className='header'>
            <div className='logo-holder'>
                <a><img src={`${img}`} className='respimg logo-viz'/></a>
            </div>
            <div className='navigation-and-social'>
                <div className='nav-holder'>
                    <nav>
                        <ul className='menu'>
                            <li className='menu-item'>
                                <NavLink exact to={'/'}>

                                    {t('home')}
                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink exact to={'/restaurants'}>

                                    {t('resturants')}
                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink exact to={'/about'}>

                                    {t('about')}

                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink exact to={'/contact'}>
                                    {t('contact')}
                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <div className='d-flex justify-content-end ' >
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle btn-items"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                          <GlobalIcon />
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton">
                                            {languages.map(({code, name, country_code}) => {
                                                return (
                                                    <li key={country_code} className='btn-item'>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => i18next.changeLanguage(code)}
                                                            // disabled={code === currentLanguageCode}
                                                        >
                                                            <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                                            {name}
                                                        </button>
                                                    </li>
                                                    )
                                            })}

                                        </ul>

                                    </div>
                                </div>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header