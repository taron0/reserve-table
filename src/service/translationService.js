class TranslationService {
    constructor() {
        this.translations = {};
    }

    getJsonData(lng) {
         fetch(`${process.env.PUBLIC_URL}/translations/${lng}.json`)
            .then(res => res.json())
            .then((val) => {
                this.translations = val;
                return Promise.resolve(val);
            })
            .catch((err) => console.log(err))
    }

    getTranslationByKey (key) {
        return this.translations[key]
    }
}

export default new TranslationService()