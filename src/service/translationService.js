class TranslationService {
  constructor() {
    this.translations = {};
  }

  getTranslationByKey(key = "") {
    if (
      Object.keys(this.translations).length &&
      key &&
      typeof key === "string"
    ) {
      const foundConstants = key.match(/{.*?}/g);

      if (Array.isArray(foundConstants)) {
        const removeBrackets = (str) =>
          str?.replace(/{/g, "")?.replace(/}/g, "");

        let newKey = key;

        foundConstants.forEach((foundConstant, i) => {
          newKey = newKey?.replace(foundConstant, `{${i + 1}}`);
        });

        let val = this.translations[newKey] || removeBrackets(key);

        const foundValues = val?.match(/{.*?}/g);

        if (Array.isArray(foundValues)) {
          foundValues.forEach((foundValue) => {
            val = val?.replace(
              foundValue,
              removeBrackets(foundConstants[removeBrackets(foundValue) - 1])
            );
          });
        }

        return val;
      }

      return this.translations[key] || key;
    }
    return key;
  }
}

export default new TranslationService();
