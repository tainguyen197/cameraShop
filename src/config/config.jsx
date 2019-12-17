import firebase from 'firebase/app'
import 'firebase/storage'

 const firebaseConfig = {
    apiKey: "AIzaSyB1C17Gz1gCwdSIVHot2RG0cnC69UaKhzQ",
    authDomain: "nguyen-duy-camera.firebaseapp.com",
    databaseURL: "https://nguyen-duy-camera.firebaseio.com",
    projectId: "nguyen-duy-camera",
    storageBucket: "nguyen-duy-camera.appspot.com",
    messagingSenderId: "889215149790",
    appId: "1:889215149790:web:37ae45f0ffd3681c0f044f",
    measurementId: "G-493RDFX0V0"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();
  
    export {
        storage, firebase as default
    }