import './modalWindow.css';

import React, { useState } from 'react';
import './Modal.css'


const Modal = (props) => {
    const  close = (e) => {
        e.preventDefault()

        if (props.onClose) {
            props.onClose()
        }
    }

    if (props.isOpen === false){
        return null
    }

    return (
        <div className={'modal'}>
            <div className={'bg'} onClick={e => close(e)}/>
            <div className={'content'}>
                {props.children}
            </div>
        </div>
    );

}

export default Modal;