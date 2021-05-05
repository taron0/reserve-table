import React from "react";
import imgContact from "../../../assets/cover-image.jpg";
import Header from "../../header/Header";
import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";
import useContact from "../../hooks/useContact";
import { ERROR_MESSAGE } from "../../../constant/errorMessage";
import useTranslation from "../../hooks/useTranslation";
import './contact.css';

const Contact = () => {
    const { formik } = useContact();
    const { t } = useTranslation();

    return (
        <>
            <div className='wrapper-contact' style={{backgroundImage: `url(${imgContact})`}}>
                <Header/>
                <div className='contact-text'>
                    <h1>{t("contact")}</h1>
                    <p>{t("get_in_touch_with_us")}</p>
                </div>
            </div>
            <div className='for-restaurants'>
                <h3>{t('for_restaurants')}</h3>
                <p>{t('text')}</p>
                <p>{t('join')}</p>
            </div>
            <div className='container-content'>
                <div className='section-title'>
                    <h3>{t('get_in_touch')}</h3>
                    <h4 className='decor-title'>{t('write_us')}</h4>
                </div>
                <form className='form' onSubmit={formik.handleSubmit}>
                    <Input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <div>
                        {formik.touched.phone && <span className="text-danger">{formik.errors.name}</span>}
                    </div>
                    <Input
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div>
                        {formik.touched.phone && <span className="text-danger">{formik.errors.email}</span>}
                    </div>
                    <Input
                        type='number'
                        placeholder='Phone/+(123) - 456-78-90'
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    <div>
                        {formik.touched.phone && <span className="text-danger">{formik.errors.phone}</span>}
                    </div>
                    <span className='textarea-form'>
                        <textarea
                            name='comment'
                            placeholder='Comments'
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                        >
                        </textarea>
                    </span>
                    <div className='text-danger'>
                        {formik.touched.comment && <span>{formik.errors.comment}</span>}
                    </div>
                    <Button context='Send'/>
                    <div>
                        {Object.keys(formik.touched).length ?
                            <span>{Object.keys(formik.errors).length ?
                                <span className='registered-error'>{ERROR_MESSAGE.registeredError}</span> :
                                <span
                                    className='registered-message'>{ERROR_MESSAGE.registeredMessage}</span>}</span> : <></>}
                    </div>
                </form>
            </div>
        </>
    );
}
export default Contact