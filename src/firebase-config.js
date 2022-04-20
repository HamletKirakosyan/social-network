import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJHqpEkZxdoPp3YiXnH_5ksvsvzoQe_hc",
  authDomain: "social-network-95405.firebaseapp.com",
  databaseURL: "http:social-network-95405.firebaseio.com//",
  projectId: "social-network-95405",
  storageBucket: "social-network-95405.appspot.com",
  messagingSenderId: "268822116491",
  appId: "1:268822116491:web:54f07c96a7721502fd3c8e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);