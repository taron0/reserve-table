export const filteredData = (data= [], checkedValues = [] ) => {
    const filteredValues = [];
    for(let i = 0; i < data.length; i++) {
        const el = data[i];
        if(el?.Cuisine === checkedValues[i]) {
            filteredValues.push(el);
        }
    }
    return filteredValues;
}

