import React from 'react';
import './index.css'
const Button = ({context}) => {
    return (
        <div className={'btn-cont'}>
            <button className={'apre-white apre-href-restaurants'}>{context}</button>
        </div>
    )
}
export  default Button