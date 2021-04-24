import React from 'react'
import {errorMessage} from "../../constant/errorMessage/errorMessage";
import {useFormik} from "formik";
import * as Yup from 'yup';

const useContact = () => {
    const contactValidate = Yup.object().shape({
        name: Yup.string()
            .min(2, errorMessage)
            .max(50, errorMessage)
            .required(errorMessage),
        comment: Yup.string()
            .min(2, errorMessage)
            .required(errorMessage),
        phone: Yup.number().min(4, errorMessage)
            .required(errorMessage),
        email: Yup.string().email(errorMessage)
            .required(errorMessage),

    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: ""
        },
        validationSchema: contactValidate,
        onSubmit: async values => {
            console.log(values)
        },
    });

    return {
        formik
    }
}

export default useContact