class Helpers {
  getReserveDate(n = 20) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    let day = date.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthName = months[month];
    const dates = [];

    for (let i = 0; i < n; i++) {
      if (day + i > 30) {
        monthName = months[month + 1];
        day = 0;
        i = 1;
      }
      dates.push(`${monthName} ${day + i}, ${year}`);
    }
    return dates;
  }

  getReserveTime() {
    const times = [];
    const date = new Date();

    while (date.getMinutes() % 30 !== 0) {
      date.setMinutes(date.getMinutes() + 1);
    }

    for (let i = 0; i < 24 * 4; i++) {
      times.push(
        (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
          ":" +
          (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes())
      );
      date.setMinutes(date.getMinutes() + 30);
    }

    return times;
  }

  deleteItemsInArray(arr) {
    arr.forEach((el) => {
      localStorage.removeItem(el);
    });
  }

  isEqual(obj1, obj2) {
    if (
      obj1 &&
      obj2 &&
      typeof obj1 === "object" &&
      typeof obj2 === "object" &&
      obj1.constructor === Object &&
      obj2.constructor === Object
    ) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    } else if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    return obj1 === obj2;
  }

  deepEqual(obj1, obj2) {
    if (
      typeof obj1 === "object" &&
      obj1 !== null &&
      obj1.constructor === Object &&
      typeof obj2 === "object" &&
      obj2 !== null &&
      obj2.constructor === Object
    ) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (const prop in obj1) {
        if (
          !obj2.hasOwnProperty(prop) ||
          (obj2.hasOwnProperty(prop) &&
            !Helpers.deepEqual(obj1[prop], obj2[prop]))
        ) {
          return false;
        }
      }
      return true;
    }
    return !isNaN(obj1) && !isNaN(obj2)
      ? Number(obj1) === Number(obj2)
      : obj1 === obj2;
  }

  cloneDeep(data) {
    return JSON.parse(JSON.stringify(data));
  }

  sortArrayByKey(source, key, direction = true) {
    let sourceCopy = this.cloneDeep(source);
    direction = direction ? 1 : -1;

    return sourceCopy.sort((a, b) => {
      const value1 = a[key].toString().toLowerCase();
      const value2 = b[key].toString().toLowerCase();
      return value1 > value2 ? direction : value1 < value2 ? -direction : 0;
    });
  }

  sortObjectKeys(source, direction = true) {
    const sourceCopy = Object.keys(this.cloneDeep(source)),
      ordered = {};
    direction = direction ? 1 : -1;

    //Sort object key by direction and copy new array
    sourceCopy
      .sort((a, b) => {
        return a > b ? direction : a < b ? -direction : 0;
      })
      .forEach((key) => {
        ordered[key] = source[key];
      });

    return ordered;
  }

  findDataByKey(data, key, value) {
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
      if (typeof data[i] !== "object") return;

      if (data[i][key] === value) {
        return data[i];
      }
    }
  }
}

export default new Helpers();
