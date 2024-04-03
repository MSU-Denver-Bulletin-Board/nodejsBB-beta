// firebase.js
import { initializeApp, getApps } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBJUoCXfKCf3HEl3ml3PSKT0xqORFqgEJw",
  authDomain: "msu-denver-bulletin-board.firebaseapp.com",
  projectId: "msu-denver-bulletin-board",
  storageBucket: "msu-denver-bulletin-board.appspot.com",
  messagingSenderId: "404887924497",
  appId: "1:404887924497:web:d6866dc6bed785d3a026b0",
  measurementId: "G-HWBSP4CFJV"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;