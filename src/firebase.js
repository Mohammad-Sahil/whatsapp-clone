// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdOf1lIcxiycI4kbiflOL1N553qOpE8nU",
  authDomain: "whatsapp-a4ffe.firebaseapp.com",
  projectId: "whatsapp-a4ffe",
  storageBucket: "whatsapp-a4ffe.appspot.com",
  messagingSenderId: "804327912110",
  appId: "1:804327912110:web:446946cab155482e53733f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;