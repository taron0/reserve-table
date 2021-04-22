import React, {useState} from "react";
import imgContact from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import './contact.css'
import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";
import { validationForm } from "../../../constant/validationForm/validationForm";

const Contact = () => {
    const [userData, setUserData] = useState({
            name: '',
            email: '',
            phone: '',
            comments: '',
            errorMessag: 'The field is required.',
            isError: {
                name: false,
                email: false,
                phone: false,
                comments: false,
            },
        }
    )

    const handelForm = (key, e) => {
        if(validationForm[key].test(e.target.value) ) {
            setUserData({
                ...userData,
                [key]:e.target.value,
                isError:{
                    ...userData.isError,
                    [key]:true,
                }
            })
        }else {
            setUserData({
                ...userData,
                isError:{
                    ...userData.isError,
                    [key]:false,
                }
            })
        }

    }

    return (
        <>
            <div className={'wrapper-contact'} style={{backgroundImage: `url(${imgContact})`}}>
                <Header/>
                <div className={'contact-text'}>
                    <h1>CONTACT</h1>
                    <p>Get in Touch With Us.</p>
                </div>
            </div>
            <div className={'container-content'}>
                <div className={'section-title'}>
                    <h3>Get in Touch</h3>
                    <h4 className={'decor-title'}>WRITE US</h4>
                </div>
                <div className={'form'}>
                    <Input
                        type={'text'}
                        placeholder={'Name'}
                        name={'user-name'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Email'}
                        name={'user-email'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Phone'}
                        name={'user-phone'}
                    />
                    <span className={'textarea-form'}>
                        <textarea
                            name={'user-comments'}
                            // rows={'10'}
                            // cols={'30'}
                            placeholder={'Comments'}
                        >

                        </textarea>

                    </span>

                    <Button context={'Send'}/>
                </div>
            </div>
        </>
    )
}
export default Contact