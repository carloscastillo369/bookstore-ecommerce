import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2xnsKM9N9mXJNDC0wz3Zszi1B6dztH-w",
    authDomain: "project-ecommerce-bookstore.firebaseapp.com",
    projectId: "project-ecommerce-bookstore",
    storageBucket: "project-ecommerce-bookstore.appspot.com",
    messagingSenderId: "605375340714",
    appId: "1:605375340714:web:936bb495f7eb6ffa7530d3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };