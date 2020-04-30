import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyA-v1rQemnh3ZSEgLomsA3gA-nTw7oYpAk",
  authDomain: "book-santa-95baf.firebaseapp.com",
  databaseURL: "https://book-santa-95baf.firebaseio.com",
  projectId: "book-santa-95baf",
  storageBucket: "book-santa-95baf.appspot.com",
  messagingSenderId: "311236255826",
  appId: "1:311236255826:web:f4f2f4eae9433ac05aff8b",
  measurementId: "G-50RFSMNY8R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
