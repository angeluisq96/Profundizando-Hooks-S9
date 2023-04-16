// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { environments } from '../helpers';

const env = environments();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqSMCH-uf__1pTWpresTZNdXUK9kk52PA',
  authDomain: 'react-cero-experto-8936c.firebaseapp.com',
  projectId: 'react-cero-experto-8936c',
  storageBucket: 'react-cero-experto-8936c.appspot.com',
  messagingSenderId: '645017762760',
  appId: '1:645017762760:web:9c6f3686121bae483c5efd',
  measurementId: 'G-WXV9VFW0K6'
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Auth Firebase
export const FirebaseAuth = getAuth(FirebaseApp);

// Auth Firebase
export const FirebaseDB = getFirestore(FirebaseApp);



// const analytics = getAnalytics(FirebaseApp);

