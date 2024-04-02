// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJUoCXfKCf3HEl3ml3PSKT0xqORFqgEJw",
  authDomain: "msu-denver-bulletin-board.firebaseapp.com",
  projectId: "msu-denver-bulletin-board",
  storageBucket: "msu-denver-bulletin-board.appspot.com",
  messagingSenderId: "404887924497",
  appId: "1:404887924497:web:d6866dc6bed785d3a026b0",
  measurementId: "G-HWBSP4CFJV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;