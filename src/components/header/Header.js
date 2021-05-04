import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import img from '../../assets/logo_r.png'
import languages from "../../constant/language";
import 'bootstrap/dist/js/bootstrap.js'
import GlobalIcon from "../../constant/globalIcon";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'
import './Header.css'
import translationService from "../../service/translationService";
import Translate from "../../helpers/translate";


const Header = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    const [language, setLanguage] = useState('en');
    const [ready, setReady] = useState(false);


    useEffect(() => {
        setReady(false);
        translationService.getJsonData(language)
            .then(val => {
                console.log(val);
                setReady(true);
            })
    }, [language]);

    console.log('-----------', translationService.getTranslationByKey('home'))

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
                                    {/*HOME*/}
                                    {/*{t('home')}*/}
                                    <Translate>home</Translate>
                                    {/*{console.log(getTranslationByKey('home'), 'translation key ban man')}*/}
                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink exact to={'/restaurants'}>
                                    {/*RESTAURANTS*/}
                                    <Translate>resturants</Translate>
                                    {/*{t('resturants')}*/}
                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink exact to={'/about'}>
                                    {/*ABOUT*/}
                                    {t('about')}

                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink exact to={'/contact'}>
                                    {/*CONTACT*/}
                                    {t('contact')}
                                </NavLink>
                            </li>
                            <li className='menu-item'>
                                <div className='d-flex justify-content-end '>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle btn-items"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <GlobalIcon/>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton">
                                            {languages.map(({code, name, country_code}) => {
                                                localStorage.setItem(`${code}`, code)
                                                return (
                                                    <li key={country_code} className='btn-item'>
                                                        <button
                                                            className="dropdown-item"
                                                            // onClick={() => i18next.changeLanguage(code)}
                                                          onClick={() => setLanguage(code)}
                                                            // disabled={code === currentLanguageCode}
                                                        >
                                                            <span
                                                                className={`flag-icon flag-icon-${country_code} mx-2`}
                                                                // style={{
                                                                //     opacity: currentLanguageCode === code ? 0.5 : 1,
                                                                // }}
                                                            ></span>
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