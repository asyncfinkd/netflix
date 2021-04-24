import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD6JRu4nIavRDDghojGR-S7sGT5ks2lXBE",
  authDomain: "netflix-8f0a6.firebaseapp.com",
  projectId: "netflix-8f0a6",
  storageBucket: "netflix-8f0a6.appspot.com",
  messagingSenderId: "292054236499",
  appId: "1:292054236499:web:76bbded64b0accfd8635a6",
  measurementId: "G-N1PLBNEX6E",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
