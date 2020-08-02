import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAVcxZYfRd9TU5Do22vD7VGdwg8D-plFkU",
  authDomain: "firegram-82df2.firebaseapp.com",
  databaseURL: "https://firegram-82df2.firebaseio.com",
  projectId: "firegram-82df2",
  storageBucket: "firegram-82df2.appspot.com",
  messagingSenderId: "937402810922",
  appId: "1:937402810922:web:a116236e146059d50e3953"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
