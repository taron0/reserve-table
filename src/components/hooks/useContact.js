import React from 'react'
import validateForm from "../../helpers/validateForm";
import {useFormik} from "formik";
import * as Yup from 'yup';

const useContact = () => {
    const contactValidate = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Shat karch e!')
            .max(50, 'Shat erkar!')
            .required('Required'),
        comment: Yup.string()
            .min(2, 'Shat karch e!')
            .required('Required'),
        phone:Yup.number().min(4,"chi kara senc karch elni")
             .required('Required'),
        email: Yup.string().email('sxaal email')
            .required('Required'),

    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment:""
        },
        validationSchema:contactValidate,
        onSubmit: async values => {
        console.log(values)
        },
    });
    return{
        formik
    }
}

export default useContact