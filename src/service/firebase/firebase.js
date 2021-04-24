import firebase from '../../configs/mainConfig'

class Firebase {
    dataBase(data ) {
        fetch('https://reserve-table-f5404-default-rtdb.firebaseio.com/', {
            method:'POST',
            body: JSON.stringify(data)
        })
            .then(res => console.log(tes))
            .catch(err => console.log(err))
    }
}

export default new Firebase()