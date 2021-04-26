import React from 'react';
import './Input.css';

// TODO use for dropdown
const Input = ({type, placeholder, name, value, onChange}) => {

    return (
        <>
            <span className={'input-box'}>

                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className={'contact-input'}
                    value={value}
                    onChange={onChange}
                />

              </span>
        </>
    )
}
export default Input