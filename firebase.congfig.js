import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBTZw5sqdufEhF8ydoRaJvF2er6Hcqi8C0",
  authDomain: "thene-a1d01.firebaseapp.com",
  databaseURL: "https://thene-a1d01-default-rtdb.firebaseio.com",
  projectId: "thene-a1d01",
  storageBucket: "thene-a1d01.appspot.com",
  messagingSenderId: "371868187329",
  appId: "1:371868187329:web:f8f8908a2029e3f13f7240",
  measurementId: "G-1LPJVKLPNT"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore()
const storage = getStorage()

export { app, db, storage}