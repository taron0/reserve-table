import {validationForm} from "../constant/validationForm/validationForm";
import {errorMessage} from "../constant/errorMessage/errorMessage";

export const getReserveDate = (n = 0) => {
    const date = new Date();
    const year = date.getFullYear()
    const month =date.getMonth();
    let  day = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthName = months[month]
    const dates = [];

    for(let i = 0; i < n; i++) {
        if(day + i > 30) {
            monthName = months[month + 1];
            day = 0;
            i = 1
        }
        dates.push(`${monthName} ${day + i}, ${year}`)
    }

    return dates;
}

export const getReserveTime = () => {
    const times = [];
    const date = new Date();

    while (date.getMinutes() % 30 !== 0) {
        date.setMinutes(date.getMinutes() + 1);
    }

    for (let i = 0; i < 24 * 4; i++) {
        times.push((date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) + ':' + (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()));
        date.setMinutes(date.getMinutes() + 30);
    }

    return times
}



export const validateForm = (name, value) => {

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
