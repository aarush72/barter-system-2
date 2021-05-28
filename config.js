import firebase from 'firebase';
require('@firebase')

var firebaseConfig = {
    apiKey: "AIzaSyAde9HsshdAu3xvvrb4Y_1XImeYj7rSk4g",
    authDomain: "barter-system-313ef.firebaseapp.com",
    projectId: "barter-system-313ef",
    storageBucket: "barter-system-313ef.appspot.com",
    messagingSenderId: "515892582427",
    appId: "1:515892582427:web:93b0b6e35a304cd39b80be",
    measurementId: "G-JHR81B6185"
  };

  // Initialize Firebase
  
  if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig); 
  }

  export default firebase.firestore();
