import {BrowserRouter as Router,} from "react-router-dom";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import './index.css';

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
