const getReserveTime = () => {

    const times = [];
    const date = new Date();


    while (date.getMinutes() % 30 !== 0) {
        date.setMinutes(date.getMinutes() + 1);
    }

    for (var i = 0; i < 24 * 4; i++) {
        times.push((date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) + ':' + (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()));
        date.setMinutes(date.getMinutes() + 30);
    }

    return times


}

export default getReserveTime