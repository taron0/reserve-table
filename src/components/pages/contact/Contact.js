import React from "react";
import imgContact from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import './contact.css'
import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";
import useContact from "../../hooks/useContact";
import {registredError, registredMessage} from "../../../constant/errorMessage/errorMessage";

const Contact = () => {
    const {formik} = useContact()

    console.log(formik, 'formik');

    return (
        <>
            <div className={'wrapper-contact'} style={{backgroundImage: `url(${imgContact})`}}>
                <Header/>
                <div className={'contact-text'}>
                    <h1>CONTACT</h1>
                    <p>Get in Touch With Us.</p>
                </div>

            </div>
            <div className={'for-restaurants'}>
                <h3>FOR RESTAURANTS</h3>
                <p>We’re are open to partner with the best restaurants across the country.</p>
                <p>Join our growing list of partners.</p>
            </div>
            <div className={'container-content'}>
                <div className={'section-title'}>
                    <h3>Get in Touch</h3>
                    <h4 className={'decor-title'}>WRITE US</h4>
                </div>
                <form className={'form'} onSubmit={formik.handleSubmit}>
                    <Input
                        type='text'
                        placeholder={'Name'}
                        name={'name'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <div>
                        {formik.touched.phone && <span className="text-danger">{formik.errors.name}</span>}
                    </div>
                    <Input
                        type={'text'}
                        placeholder={'Email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div>
                        {formik.touched.phone && <span className="text-danger">{formik.errors.email}</span>}
                    </div>
                    <Input
                        type={'text'}
                        placeholder={'Phone/+(123) - 456-78-90'}
                        name={'phone'}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    <div>
                        {formik.touched.phone && <span className="text-danger">{formik.errors.phone}</span>}
                    </div>
                    <span className={'textarea-form'}>
                        <textarea
                            name={'comment'}
                            placeholder={'Comments'}
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                        >
                        </textarea>

                    </span>
                    <div className={'text-danger'}>
                        {formik.touched.comment && <span>{formik.errors.comment}</span>}
                    </div>

                    <Button context={'Send'}/>
                    <div>
                        {Object.keys(formik.touched).length ?
                            <span>{Object.keys(formik.errors).length ?
                                <span className={'registred-error'}>{registredError}</span> :
                                <span className={'registred-message'}>{registredMessage}</span>}</span> : <></>}
                    </div>
                </form>
            </div>
        </>
    )
}
export default Contact