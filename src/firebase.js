import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAutpDuZIlBeqM1RyI8J_f67iXsEPD28Y",
  authDomain: "clone-d1326.firebaseapp.com",
  databaseURL: "https://clone-d1326.firebaseio.com",
  projectId: "clone-d1326",
  storageBucket: "clone-d1326.appspot.com",
  messagingSenderId: "625326256216",
  appId: "1:625326256216:web:607cf72d5c088dc9fb9a2d",
  measurementId: "G-Y4CW2S7VG3",
});

const auth = firebase.auth();

export { auth };
