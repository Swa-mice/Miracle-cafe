import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxeSnFlJ8olokEmPo5zbJhNRU7Z_llJeU",
  authDomain: "miracle-cafe.firebaseapp.com",
  projectId: "miracle-cafe",
  storageBucket: "miracle-cafe.appspot.com",
  messagingSenderId: "345656276283",
  appId: "1:345656276283:web:427a46002983cbd37e731e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);