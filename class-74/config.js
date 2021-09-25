import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBHSCFzFTvbeQ-Z7QlDpRMAOlzXoGazsQA",
  authDomain: "willy-4dcba.firebaseapp.com",
  projectId: "willy-4dcba",
  storageBucket: "willy-4dcba.appspot.com",
  messagingSenderId: "338709157009",
  appId: "1:338709157009:web:c92dd4716d9cb3016a9b30"
};

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase.firestore();