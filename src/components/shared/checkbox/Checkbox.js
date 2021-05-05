import React from 'react'
import './Checkbox.css'

const Checkbox = ({ value, name, onChange }) => {
    return (
        <>
            <span className='input-checkbox'>
                <span>{name}</span>
                <input
                    type='checkbox'
                    name={name}
                    className='checkbox-input'
                    value={value}
                    onChange={onChange}
                />
              </span>
        </>
    )
}
export default Checkbox