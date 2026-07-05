import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI9PnJkk9KbxwHRV_X5pwQ8z62ewp19K8",
  authDomain: "miracle-cafe-2b061.firebaseapp.com",
  projectId: "miracle-cafe-2b061",
  storageBucket: "miracle-cafe-2b061.appspot.com",
  messagingSenderId: "689841295063",
  appId: "1:689841295063:web:af5a1dbf15485ddf756a92",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);