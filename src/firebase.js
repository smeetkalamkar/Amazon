import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcMxiXnlVgudu4pdian0mGiOIGnsz5mGk",
    authDomain: "project-6baf9.firebaseapp.com",
    projectId: "project-6baf9",
    storageBucket: "project-6baf9.appspot.com",
    messagingSenderId: "712482599802",
    appId: "1:712482599802:web:ec76a427f7bafc07e9dcc3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db,auth}