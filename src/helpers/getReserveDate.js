
const getReserveDate = (n = 0) => {
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
// export default getReserveDate