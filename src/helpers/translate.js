import React from "react";
import translationService from "../service/translationService";

const Translate = ({ children }) => {

    return (
        translationService.getTranslationByKey(children) || children
    );
};

export default Translate;