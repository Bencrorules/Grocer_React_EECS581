// Import the functions you need from the SDKs you need
import * as firebase from firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMzFgeWbvXkpKGkayp-oUsghhGVmh0SH0",
  authDomain: "grocer-16b8c.firebaseapp.com",
  projectId: "grocer-16b8c",
  storageBucket: "grocer-16b8c.appspot.com",
  messagingSenderId: "1092060756509",
  appId: "1:1092060756509:web:cec3cbf4f835942517e4f4"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0)
{
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth = firebase.auth()

export { auth };