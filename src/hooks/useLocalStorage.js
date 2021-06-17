import { useState } from "react";

const useLocalStorage = (keys = []) => {
  let [values, setValues] = useState(() => {
    let obj;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let value = localStorage.getItem(key);

      if (value) {
        value = JSON.parse(value);
        obj = {
          ...obj,
          [key]: value,
        };
      }
    }
    return obj;
  });

  const setItems = (items = {}) => {
    for (let item in items) {
      if (!item.hasOwnProperty(values)) {
        setValues({
          ...values,
          ...items,
        });
        localStorage.setItem(item, JSON.stringify(items[item]));
      }
    }
  };

  const removeItems = (remItems = []) => {
    for (let i = 0; i < remItems.length; i++) {
      const el = remItems[i];
      localStorage.removeItem(el);
    }

    setValues(() => {
      return Object.keys(values).reduce((acc, curr) => {
        return {
          ...acc,
          ...(!remItems.includes(curr) ? { [curr]: values[curr] } : {}),
        };
      }, {});
    });
  };

  return [values, setItems, removeItems];
};

export default useLocalStorage;
