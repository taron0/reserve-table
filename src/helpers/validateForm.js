import {validationForm} from "../constant/validationForm/validationForm";
import {errorMessage} from "../constant/errorMessage/errorMessage";


const validateForm = (name, value) => {

    switch (name) {
        case "name":
            if (!value || value.trim() === "") {
                return errorMessage;
            } else if (!value.match(validationForm.name)){
                return errorMessage;
            }else {
                return ""
            }
        case "email":
            if (!value) {
                return errorMessage;
            } else if (
                !value.match(validationForm.email)
            ) {
                return errorMessage;
            } else {
                return "";
            }
        case "phone":
            if (!value || value.trim() === "") {
                return errorMessage;
            } else if (!value.match(validationForm.phone)) {
                return errorMessage;
            } else {
                return "";
            }
        case "comment":
            if (!value) {
                return errorMessage;
            } else if (!value.match(validationForm.comments) ) {
                return errorMessage;
            } else {
                return "";
            }

        default: {
            return "";
        }
    }
};

export default validateForm