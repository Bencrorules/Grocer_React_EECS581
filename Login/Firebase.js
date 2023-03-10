// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Need To Fill In",
  authDomain: "Need To Fill In",
  projectId: "Need To Fill In",
  storageBucket: "Need To Fill In",
  messagingSenderId: "Need To Fill In",
  appId: "Need To Fill In"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };