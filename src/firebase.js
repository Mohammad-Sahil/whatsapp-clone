// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeF2nYGdrNPFGh6DAsBYymEuv3A2hLgGo",
    authDomain: "whatsapp-clone-98c80.firebaseapp.com",
    projectId: "whatsapp-clone-98c80",
    storageBucket: "whatsapp-clone-98c80.appspot.com",
    messagingSenderId: "958647155166",
    appId: "1:958647155166:web:d9941eeccebd374264c54f",
    measurementId: "G-0Q7ERX0WC9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;