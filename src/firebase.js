import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage , ref , uploadBytes , getDownloadURL , getBytes} from "firebase/storage";
import { getFirestore , collection , addDoc , getDoc , 
  doc , getDocs ,query , where, setDoc , deleteDoc , docId } from "firebase/firestore";


  
const firebaseConfig = {
  apiKey: "AIzaSyBBa5m9hvhvWVCeWhsQAKDf478FsUxCpMg",
  authDomain: "ladingpage-firebase.firebaseapp.com",
  projectId: "ladingpage-firebase",
  storageBucket: "ladingpage-firebase.appspot.com",
  messagingSenderId: "197705559038",
  appId: "1:197705559038:web:24a44704f4961174f26eaf",
  measurementId: "G-8L3FGL9D3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export async function registerUser(user){
    console.log("EL user que llega es " , user);
    try{
        const collectionRef = collection(db , "users");
        const docRef = await addDoc(collectionRef , user);
        console.log("Lo que dijo docRef es " , docRef);
        return docRef;
    }catch(error){
        console.log("EL error fue en firebase register user" , error);
    }
}