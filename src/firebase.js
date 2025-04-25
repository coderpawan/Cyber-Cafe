import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4h6MNsFQhgSO6NdBbRceCTDre-EtRqpw",
  authDomain: "cyber-cafe-2d94c.firebaseapp.com",
  projectId: "cyber-cafe-2d94c",
  storageBucket: "cyber-cafe-2d94c.firebasestorage.app",
  messagingSenderId: "688289591120",
  appId: "1:688289591120:web:4c34307ce741685aae0655",
  measurementId: "G-XZ7W96G25L",
  databaseURL: "https://cyber-cafe-2d94c-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);