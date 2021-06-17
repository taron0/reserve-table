import translationService from "../services/translationService";

const Translate = ({ children }) => {
    if (typeof children === "string") {
        return translationService.getTranslationByKey(children);
    }
    return children;
};

export default Translate;
