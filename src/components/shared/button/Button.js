import React from 'react';
import './index.css'

const Button = ({ context, onClick }) => {
    return (
        <div className='btn-cont'>
            <button className='apre-white apre-href-restaurants' onClick={onClick}>{context}</button>
        </div>
    )
}
export default Button