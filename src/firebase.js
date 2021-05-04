// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAYRQOHApQBFCryVX1gGQYYUtm0p5-q448",
    authDomain: "disney-clone-ceb26.firebaseapp.com",
    projectId: "disney-clone-ceb26",
    storageBucket: "disney-clone-ceb26.appspot.com",
    messagingSenderId: "29984705482",
    appId: "1:29984705482:web:42988dc89ecb30bfd21d33",
    measurementId: "G-SWQ1TQLK5Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
