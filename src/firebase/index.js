import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBUBDrFV5q0DhNOIfCg5jx8npRSLYa-nwc",
    authDomain: "baby-clothes-shop.firebaseapp.com",
    projectId: "baby-clothes-shop",
    storageBucket: "baby-clothes-shop.appspot.com",
    messagingSenderId: "609615431967",
    appId: "1:609615431967:web:4aa8bec2516a24b495482a",
    measurementId: "G-4LQ046HNTY",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {storage, firebase as default}