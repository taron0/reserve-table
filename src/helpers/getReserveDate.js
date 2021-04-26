
const getReserveDate = (n = 0) => {
    const date = new Date();
    const year = date.getFullYear()
    const month =date.getMonth();
    let  day = date.getDate();
    console.log(day, 'days')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthName = months[month]
    const DATE = [];

    for(let i = 0; i < n; i++) {
        if(day + i > 30) {
            monthName = months[month + 1];
            day = 0;
            i = 1

        }
        DATE.push(`${monthName} ${day + i}, ${year}`)
    }

    return DATE;

}
export default getReserveDate