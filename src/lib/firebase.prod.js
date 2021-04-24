import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBS1-8Nlo2uebcL-UyLoCZxs7Y3wuCJrI",
  authDomain: "netflix-web-df6eb.firebaseapp.com",
  projectId: "netflix-web-df6eb",
  storageBucket: "netflix-web-df6eb.appspot.com",
  messagingSenderId: "241020580474",
  appId: "1:241020580474:web:29cd2f7c8c10685f7441c3",
  measurementId: "G-330K8C7GT3",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
