import Rebase from 're-base';
import firebase from 'firebase';
let app = firebase.initializeApp({
    apiKey: "AIzaSyB3yDTGpFYAqOPpATH6kgieHklafAg9ghE",
    authDomain: "online-shop-react.firebaseapp.com",
    databaseURL: "https://online-shop-react.firebaseio.com",
    projectId: "online-shop-react",
    storageBucket: "online-shop-react.appspot.com",
    messagingSenderId: "233995767872"
});
let base = Rebase.createClass(app.database());

export default base;
