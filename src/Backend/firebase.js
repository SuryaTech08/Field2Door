import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEloCMC_4bfCznyjtdod2luzb6s5MTOPU",
  authDomain: "field2door.firebaseapp.com",
  projectId: "field2door",
  storageBucket: "field2door.firebasestorage.app",
  messagingSenderId: "851540593713",
  appId: "1:851540593713:web:8ad63bbfce888aae5d5910",
  measurementId: "G-TVCY4D90CS"
};


export const app = initializeApp(firebaseConfig);
