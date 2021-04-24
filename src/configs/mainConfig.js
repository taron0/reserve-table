import  firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBYzQj1YeBtXkYCx6oUMruVUL3fDDWY9_4",
    authDomain: "reserve-table-f5404.firebaseapp.com",
    databaseURL: "https://reserve-table-f5404-default-rtdb.firebaseio.com",
    projectId: "reserve-table-f5404",
    storageBucket: "reserve-table-f5404.appspot.com",
    messagingSenderId: "62459580411",
    appId: "1:62459580411:web:52223a1e687b94380e455e",
    measurementId: "G-3ZTY8E8T0Z"
};


 firebase.initializeApp(firebaseConfig);

 export default firebase