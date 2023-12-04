
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBELrW8ZcExHkA-eO4zYxPvq1fDZs7XSbM",
  authDomain: "foodappwithfirebase-66d68.firebaseapp.com",
  projectId: "foodappwithfirebase-66d68",
  storageBucket: "foodappwithfirebase-66d68.appspot.com",
  messagingSenderId: "173096711408",
  appId: "1:173096711408:web:15df51e3b1212aba5b7e35",
  measurementId: "G-G9ERLN3NQT"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }