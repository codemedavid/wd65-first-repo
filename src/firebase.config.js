// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAt_P77mg10BbrMrF9bd6CgSawQISkhMLk",
  authDomain: "oniichan-32395.firebaseapp.com",
  projectId: "oniichan-32395",
  storageBucket: "oniichan-32395.appspot.com",
  messagingSenderId: "49492306218",
  appId: "1:49492306218:web:33ecb589ba70d601cf9653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app) 

export default app 