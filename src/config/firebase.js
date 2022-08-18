import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTWkJoIE5BNsdp1owMsJ5Vb98zIs6GnPc",
    authDomain: "portfolio-b2855.firebaseapp.com",
    projectId: "portfolio-b2855",
    storageBucket: "portfolio-b2855.appspot.com",
    messagingSenderId: "419373814497",
    appId: "1:419373814497:web:c1becfb342d55c56bf9da0",
    measurementId: "G-QDV1QPC02S"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);