import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBY5W23m5MyprzRxxjMMS6NVmenMvphWdk",
  authDomain: "linkedin-clone-b9219.firebaseapp.com",
  projectId: "linkedin-clone-b9219",
  storageBucket: "linkedin-clone-b9219.appspot.com",
  messagingSenderId: "178635043279",
  appId: "1:178635043279:web:c00b8bd02d8e99982f62ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
