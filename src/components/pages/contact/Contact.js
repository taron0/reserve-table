import React, {useState} from "react";
import imgContact from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import './contact.css'
import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";
import { validationForm } from "../../../constant/validationForm/validationForm";
import { errorMessage } from "../../../constant/errorMessage/errorMessage";
import validateForm from "../../../helpers/validateForm";

const Contact = () => {
    const [userData, setUserData] = useState({
        fields:{
            name:'',
            email:'',
            phone:'',
            comment:'',
        },
        errors: {
            name: '',
            email: '',
            phone: '',
            comment: '',
        },


        }
    )




    const handleUserInput = e => {
        setUserData({
            ...userData,
            errors: {
                ...userData.errors,
                [e.target.name]: validateForm(e.target.name, e.target.value)
            },
            fields: {
                ...userData.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = e => {
        const { fields } = userData;
        e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
            const error = validateForm(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            setUserData({
                ...userData,
                errors: validationErrors,
            });
            return;
        }
        if (fields.name && fields.email && fields.phone && fields.comment) {
            const data = {
                name: fields.name,
                email: fields.email,
                phone: fields.phone,
                comment: fields.comment,
            };
            window.alert("subit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };
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
                        name={'name'}
                        value={userData.fields.name}
                        onChange={(e) => handleUserInput(e)}
                    />
                    <div>
                        <span className="text-danger">{userData.errors.name}</span>
                    </div>
                    <Input
                        type={'text'}
                        placeholder={'Email'}
                        name={'email'}
                        value={userData.fields.email}
                        onChange={(e) => handleUserInput(e)}
                    />
                    <div>
                        <span className="text-danger">{userData.errors.email}</span>
                    </div>
                    <Input
                        type={'text'}
                        placeholder={'Phone/+(123) - 456-78-90'}
                        name={'phone'}
                        value={userData.fields.phone}
                        onChange={(e) => handleUserInput(e)}
                    />
                    <div>
                        <span className="text-danger">{userData.errors.phone}</span>
                    </div>
                    <span className={'textarea-form'}>
                        <textarea
                            name={'comment'}
                            value={userData.fields.comment}
                            // rows={'10'}
                            // cols={'30'}
                            placeholder={'Comments'}
                            onChange={(e) => handleUserInput(e)}

                        >

                        </textarea>

                    </span>
                    <div>
                        <span className="text-danger">{userData.errors.comment}</span>
                    </div>

                    <Button context={'Send'} onClick={(e) => handleSubmit(e)}/>
                </div>
            </div>
        </>
    )
}
export default Contact