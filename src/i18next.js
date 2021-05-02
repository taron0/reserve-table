import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs:['en', 'fr', 'ru'],
        fallbackLng: "en",
        detection:{
            order: [ 'path', 'cookie', 'htmlTag', 'localStorage',  'subdomain'],
            caches:['cookie'],
        },
        backend:{
            loadPath: '/assetss/locales/{{lng}}/translation.json'
        },

        react:{
            useSuspense:false
        },

        interpolation: {
            escapeValue: false
        }
    });
