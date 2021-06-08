import firebase from 'firebase/app';
// import "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBJk8BHLBt62YfbMSlffMDHo0fjmj-Q7bc',
  authDomain: 'first-firebase-12b0f.firebaseapp.com',
  projectId: 'first-firebase-12b0f',
  storageBucket: 'first-firebase-12b0f.appspot.com',
  messagingSenderId: '792632693647',
  appId: '1:792632693647:web:faaab76f125e8f8138b1fa',
  measurementId: 'G-8JFE5ZFW2P',
};

export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
// firebase.analytics();
export const authService = firebase.auth();
export const dbService = firebase.firestore();
