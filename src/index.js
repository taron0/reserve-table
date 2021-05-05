import { BrowserRouter as Router,} from "react-router-dom";
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import './index.css';


ReactDOM.render(
    <Suspense fallbac>
        <Router>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Router>
    </Suspense>,
    document.getElementById('root')
);

