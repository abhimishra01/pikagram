
import  firebase from 'firebase/app';  
import 'firebase/auth'
import 'firebase/storage'; // also importing storage SDK will be using to store our images
import 'firebase/firestore'; // importing firestore to manage real time db stuffs    


var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initializing the firebase storage
const projectStorage = firebase.storage();

// initializing the firestore
const fireStore = firebase.firestore();

// firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


// firebase auth init
const firebaseAuth = firebase.auth();

// exporting the above to use in diff react components
export {projectStorage, fireStore, timestamp, firebaseAuth}

// after this we need to initialize / configure the two services on our firebase dashboard ..