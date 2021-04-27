import React from 'react';
import Input from "../shared/input/Input";
import { useHistory } from "react-router-dom";
import './admin.css'
import Button from "../shared/button/Button";

const Admin = () => {

    return (
        <div className={'login'}>
            <div className={'loginContainer'}>
            <label>Username</label>
            <Input
                placeholder='writ email'
                type='text'
             />

            <label>Password</label>
            <Input
                placeholder='write password ...'
                type='password'
            />
            <Button context='Sign In'/>
        </div>

        </div>
    )
}

export default Admin