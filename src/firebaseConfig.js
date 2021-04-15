
import  firebase from 'firebase/app';  // importing everything from firebase 
import 'firebase/storage'; // also importing storage SDK will be using to store our images
import 'firebase/firestore'; // importing firestore to manage real time db stuffs    


var firebaseConfig = {
    apiKey: "AIzaSyAL9yvrG36Xx4wcTEzpMzjjEISX_e5vORY",
    authDomain: "pikagram-26525.firebaseapp.com",
    projectId: "pikagram-26525",
    storageBucket: "pikagram-26525.appspot.com",
    messagingSenderId: "284231649349",
    appId: "1:284231649349:web:73577a32b2c9339fcb7b2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initializing the firebase storage
const projectStorage = firebase.storage();

// initializing the firestore
const fireStore = firebase.firestore();


// exporting the above to use in diff react components
export {projectStorage, fireStore}

// after this we need to initialize / configure the two services on our firebase dashboard ..