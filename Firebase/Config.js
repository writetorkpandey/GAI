import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCxlZ0WI50RChemQiQ9XWf9uPvZaM4ozA0",
  authDomain: "schoolmanagementsystem-ff715.firebaseapp.com",
  databaseURL: "https://schoolmanagementsystem-ff715.firebaseio.com",
  projectId: "schoolmanagementsystem-ff715",
  storageBucket: "schoolmanagementsystem-ff715.appspot.com",
  messagingSenderId: "671380040339",
  appId: "1:671380040339:web:b490ba27c29d8dc0f27b66",
  measurementId: "G-SL4ZV03M7J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
