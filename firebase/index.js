import { initializeApp } from 'firebase/app';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
      
    };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);


export const auth = getAuth(firebaseApp);


export const signInWithMail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

  })
  .catch((error) => {

  });




}



export const SignOut = () => {


  auth.signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  })
}

  export default db;

  