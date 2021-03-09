import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const auth = FirebaseApp.auth();
const FaceBookAuthProvider = new firebase.auth.FacebookAuthProvider();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, FaceBookAuthProvider, GoogleAuthProvider };
