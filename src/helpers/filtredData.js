export const filteredData = (checked, data) => {
    if (checked.length >= 1) {
        return data.filter(el => checked.includes(el.Cuisine));
    }
    return []
};
