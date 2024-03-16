// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDO0XXD8ka1Di0WnAqQ2qSX9QFIlhchkug',
  authDomain: 'feedback-project-1f29a.firebaseapp.com',
  projectId: 'feedback-project-1f29a',
  storageBucket: 'feedback-project-1f29a.appspot.com',
  messagingSenderId: '948497074216',
  appId: '1:948497074216:web:a07d50bdc13d08d4868d1d',
  measurementId: 'G-ZD3T77KGP8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
