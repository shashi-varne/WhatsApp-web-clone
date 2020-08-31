import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC3bydCzHNfL36Lj9PSc99_4AUrQo_KY7E",
  authDomain: "whatsapp-web-51342.firebaseapp.com",
  databaseURL: "https://whatsapp-web-51342.firebaseio.com",
  projectId: "whatsapp-web-51342",
  storageBucket: "whatsapp-web-51342.appspot.com",
  messagingSenderId: "663607468591",
  appId: "1:663607468591:web:86521ad6fab3e5d0f05cda",
  measurementId: "G-Q5QK09GW91",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

//go to this project in firebase
// click on the settings button in the nav menu > project settings
// search for config and click on it
// get this above config object from firebase
