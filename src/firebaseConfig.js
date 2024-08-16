import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJQsgNMnb2ewSVFjrPnsk4GqvYaviNVTA",
  authDomain: "condorlabs-56660.firebaseapp.com",
  databaseURL: "https://condorlabs-56660-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "condorlabs-56660",
  storageBucket: "condorlabs-56660.appspot.com",
  messagingSenderId: "858722168780",
  appId: "1:858722168780:web:20870e7d07129aeec93769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };