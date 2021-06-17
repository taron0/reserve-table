import { ERROR_MESSAGE } from "../constant/errorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";

const useContact = () => {
  const contactValidate = Yup.object().shape({
    name: Yup.string()
      .min(2, ERROR_MESSAGE.minLength)
      .max(50, ERROR_MESSAGE.maxLength)
      .required(ERROR_MESSAGE.required),
    comment: Yup.string()
      .min(2, ERROR_MESSAGE.minLength)
      .required(ERROR_MESSAGE.required),
    phone: Yup.number()
      .min(4, ERROR_MESSAGE.errorPhone)
      .required(ERROR_MESSAGE.required),
    email: Yup.string()
      .email(ERROR_MESSAGE.errorEmail)
      .required(ERROR_MESSAGE.required),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },
    validationSchema: contactValidate,
    onSubmit: async (values) => {},
  });

  return {
    formik,
  };
};

export default useContact;
