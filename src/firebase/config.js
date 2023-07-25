import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAD4kJrymdOHdmZHC7DmZGzmYOdkPGbmdM",
  authDomain: "demo2-2da98.firebaseapp.com",
  projectId: "demo2-2da98",
  storageBucket: "demo2-2da98.appspot.com",
  messagingSenderId: "865335639674",
  appId: "1:865335639674:web:ea17c020db26175a1ec5c3",
  measurementId: "G-FWHH99TYFZ"
};

  export default firebase.initializeApp(firebaseConfig)