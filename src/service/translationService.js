class TranslationService {
    constructor() {
        this.translations = {};
    }

    getJsonData(lng) {
        return fetch(`${process.env.PUBLIC_URL}/translations/${lng}.json`)
            .then(res => res.json())
            .then((val) => {
                this.translations = val;
                return Promise.resolve(val);
            })
            .catch((err) => console.log(err))
    }

    getTranslationByKey (key) {
        console.log(key, this.translations[key]);
        return this.translations[key] || key;
    }
}


export default new TranslationService()