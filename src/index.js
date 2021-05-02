import {BrowserRouter as Router,} from "react-router-dom";
import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'
import './index.css';


i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'fr', 'ru', 'hy'],
        fallbackLng: 'en',
        debug: false,

        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assetss/locales/{{lng}}/translation.json',
        },
    })

const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading..</h3>
    </div>
)


ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <Router>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Router>
    </Suspense>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
