import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhzyCMldMiX3cJ7DlNOKMcGWlIkj3sL-k",
    authDomain: "crwn-db-52793.firebaseapp.com",
    databaseURL: "https://crwn-db-52793.firebaseio.com",
    projectId: "crwn-db-52793",
    storageBucket: "crwn-db-52793.appspot.com",
    messagingSenderId: "349872963647",
    appId: "1:349872963647:web:1930e003d6e60e2923b88a",
    measurementId: "G-QKRSMVE3RS"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
