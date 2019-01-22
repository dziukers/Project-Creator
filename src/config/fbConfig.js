import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAB3E6a5w4EAjeYCOKjwP7B-Hht3YpoEE4",
    authDomain: "project-creator-ee7b6.firebaseapp.com",
    databaseURL: "https://project-creator-ee7b6.firebaseio.com",
    projectId: "project-creator-ee7b6",
    storageBucket: "project-creator-ee7b6.appspot.com",
    messagingSenderId: "908693277116"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;