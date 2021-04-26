import React from 'react';
import './dropdown.css'

const Dropdown = ({title , values, onChange }) => {
    return (
        <div className='dropdown-v'>
            <p className='dropdown-title'>{title}</p>
            <select onChange={onChange} className='dropdown-option'>
                {values.map(el => <option >{el}</option>)}
            </select>
        </div>
    )
}

export default Dropdown