import React from 'react';
import './Input.css';

const Input = ({type, placeholder, name}) => {

    return (
        <>
            <span className={'input-box'}>

                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className={'contact-input'}
                />

              </span>
        </>
    )
}
export default Input