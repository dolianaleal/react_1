import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
         apiKey: "AIzaSyDJTI-KIQvk1Y2VJ9yZNRsbAeRSD15U_rY",
         authDomain: "tiendapm-4387f.firebaseapp.com",
         projectId: "tiendapm-4387f",
         storageBucket: "tiendapm-4387f.appspot.com",
         messagingSenderId: "529153809672",
         appId: "1:529153809672:web:0c35471e9f678b54df60bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//obtener db -> app
export const db = getFirestore(app);
//obtener auth -> app

//getDoc(db, collection)

//import { getDocs, getFirestore } from "firebase/firestore";
//let baseDeDatos = getFirestore(app)
//getAuth(app)
//getDocs(baseDeDatos, "products")