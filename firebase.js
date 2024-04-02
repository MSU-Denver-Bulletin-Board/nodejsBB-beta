// firebase.js
import firebase from 'firebase/app';
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBJUoCXfKCf3HEl3ml3PSKT0xqORFqgEJw",
  authDomain: "msu-denver-bulletin-board.firebaseapp.com",
  projectId: "msu-denver-bulletin-board",
  storageBucket: "msu-denver-bulletin-board.appspot.com",
  messagingSenderId: "404887924497",
  appId: "1:404887924497:web:d6866dc6bed785d3a026b0",
  measurementId: "G-HWBSP4CFJV"
};

try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error("Firebase initialization error", error.stack);
}
  
const storageRef = firebase.storage()
export { storageRef };
