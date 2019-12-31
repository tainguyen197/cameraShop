import firebase from 'firebase/app'
import 'firebase/storage'

 const firebaseConfig = {
    apiKey: "AIzaSyAP8CN9WnwxyQLyFdfJ-RndkloTDTnObr8",
    authDomain: "mayanhnguyenduy.firebaseapp.com",
    databaseURL: "https://mayanhnguyenduy.firebaseio.com",
    projectId: "mayanhnguyenduy",
    storageBucket: "mayanhnguyenduy.appspot.com",
    messagingSenderId: "9108635613",
    appId: "1:9108635613:web:5c0623462284cc2d7ac034",
    measurementId: "G-TZQCGCL396"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();
  
    export {
        storage, firebase as default
    }