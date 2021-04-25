import firebase from "firebase";
import validateForm from "../../helpers/validateForm";



class Firebase {
    constructor() {
        this.data = [];
    }

    dataBase(data) {
        // api sxalaa grac sax tex

        fetch('https://reserve-81dc6-default-rtdb.firebaseio.com/userdata.json', {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(res => {
                console.log('database is not defined')
                console.log(':::::', res)
            })
            .catch(err => console.log(err))

    }

    getDataBase(data, setData, setLoading) {
        return  fetch("https://reserve-81dc6-default-rtdb.firebaseio.com/userdata.json")
            .then(res => res.json())
            .then(r => {
                setData([
                    ...Object.values(r)
                ])
                setLoading(true)
                console.log(Object.values(r))
            })
            .catch(res => console.log(':::: userData', res))

    }

}

export default new Firebase()
