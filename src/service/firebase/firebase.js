import firebase from "firebase";



class Firebase {
    constructor() {
        this.data = [];
    }

    dataBase(data) {
        // api sxalaa grac sax tex

        fetch('https://reserve-table-f5404-default-rtdb.firebaseio.com/userdata.json', {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(res => {
                console.log('database is not defined')
                console.log(':::::', res)
            })
            .catch(err => console.log(err))

    }

    getDataBase(data, setData) {
        fetch("https://reserve-table-f5404-default-rtdb.firebaseio.com/userdata.json")
            .then(res => res.json())
            .then(r => {
                setData([
                    ...data,
                    ...r,
                ])
            })

            .catch(r => console.log('::::', r))

    }

}

export default new Firebase()
