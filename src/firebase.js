
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyALtos9PO3NAN1MDiMQmZR2NRuoGyYWLQU",
  authDomain: "netflix-f3945.firebaseapp.com",
  projectId: "netflix-f3945",
  storageBucket: "netflix-f3945.appspot.com",
  messagingSenderId: "83993636665",
  appId: "1:83993636665:web:ca975057b8fea32f0582e8"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try {
       const res=await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }

}
const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}
const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};