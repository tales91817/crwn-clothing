import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZoxp53jtVXpT5XK3jVDASZtdrDUmb3to",
  authDomain: "crwn-cloting-db-bfc99.firebaseapp.com",
  projectId: "crwn-cloting-db-bfc99",
  storageBucket: "crwn-cloting-db-bfc99.appspot.com",
  messagingSenderId: "433049636192",
  appId: "1:433049636192:web:2f4dbf75263aec5e256205",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
