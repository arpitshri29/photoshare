import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5BM-ADS_AHWOPly8gq9JdieRhvN2HJRs",
    authDomain: "photoshare-dada5.firebaseapp.com",
    databaseURL: "https://photoshare-dada5.firebaseio.com",
    projectId: "photoshare-dada5",
    storageBucket: "photoshare-dada5.appspot.com",
    messagingSenderId: "107481919418",
    appId: "1:107481919418:web:2a44691f885681fb3ff783"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFireStore = firebase.firestore();

export {appStorage, appFireStore};