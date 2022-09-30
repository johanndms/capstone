import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDHLWE4DI9bZ2hmRMTSbDbGpoGArkIIIY8",
   authDomain: "myyoga-1ff1b.firebaseapp.com",
   projectId: "myyoga-1ff1b",
   storageBucket: "myyoga-1ff1b.appspot.com",
   messagingSenderId: "390336980596",
   appId: "1:390336980596:web:7010245f8c2c2b1da19321",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signinWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, googleProvider);

/**
 * Instantiate the firestore
 */
export const db = getFirestore();

/**
 * Create user document from the auth action
 * @param {*} userAuth
 * @param {*} additionalInformation - used to override auth
 */
export const createUserDocumentFromAuth = async (
   userAuth,
   additionalInformation = {}
) => {
   if (!userAuth) return;

   const userDocRef = doc(db, "users", userAuth.uid);
   console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef);

   console.log(userSnapshot);
   console.log(userSnapshot.exists());

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
         });
      } catch (err) {
         console.log(err);
      }
   }

   return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
};
