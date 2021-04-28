import app from "firebase/app";
import "firebase/database";
import mainConfig from "../../configs/mainConfig";
import {RESTAURANTS} from "../../constant/apiEndpoints";
import { ADMIN } from "../../helpers/adminPas";

class Firebase {
    constructor() {
        app.initializeApp(mainConfig.connection);
        this.db = app.database();
        this.data = [];
    }

    addCuisine(data, i) {
        return this.db
            .ref(`cuisine/${i}`)
            .set(data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    addFirebaseUrl(data, n) {
        return this.db
            .ref(`admin/`)
            .set(data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    getAdminInfo() {
        return new Promise((resolve, reject) => {
            this.db
                .ref('admin/')
                .once('value')
                .then(snap => resolve(snap.val()))
                .catch(err => reject(err));
        })
    }

    addNewRestaurant (data, id) {
        return this.db
            .ref(`${RESTAURANTS}/${id}`)
            .set(data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    getRestaurants () {
        return new Promise((resolve, reject) => {
            this.db
                .ref(RESTAURANTS)
                .once('value')
                .then(snap => resolve(snap.val()))
                .catch(err => reject(err));
        })
    }
}

export default new Firebase()
