import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPREopSPATX-NENS_nh04WcWutiKSG_Z4",
  authDomain: "live-chat-31e49.firebaseapp.com",
  projectId: "live-chat-31e49",
  storageBucket: "live-chat-31e49.appspot.com",
  messagingSenderId: "759066887483",
  appId: "1:759066887483:web:a41c2253ec0aebe8e1e31e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
