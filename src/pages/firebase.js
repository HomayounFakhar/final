import firebase from 'firebase'

const Config = {
    apiKey: "AIzaSyCwD3ZQH12Sy3vTJYSdblMFc8VFS98-9zk",
    authDomain: "fir-react-example-606e7.firebaseapp.com",
    databaseURL: "https://fir-react-example-606e7-default-rtdb.firebaseio.com",
    projectId: "fir-react-example-606e7",
    storageBucket: "fir-react-example-606e7.appspot.com",
    messagingSenderId: "8393232360",
    appId: "1:8393232360:web:2434febba1f9aa6554de5d"
  }; 
  // Initialize Firebase
  firebase.initializeApp(Config);

  export default firebase;