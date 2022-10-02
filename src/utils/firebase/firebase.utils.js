import { initializeApp } from 'firebase/app';
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyDHLWE4DI9bZ2hmRMTSbDbGpoGArkIIIY8',
   authDomain: 'myyoga-1ff1b.firebaseapp.com',
   projectId: 'myyoga-1ff1b',
   storageBucket: 'myyoga-1ff1b.appspot.com',
   messagingSenderId: '390336980596',
   appId: '1:390336980596:web:7010245f8c2c2b1da19321',
};

/** Initialize Firebase */
const firebaseApp = initializeApp(firebaseConfig);

/** Google Auth Provider */
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);

export const signinWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);

/**
 * Firebase - Sign in with Google Account Select PopUp
 *
 * @returns Promise<UserCredential>
 */
export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, googleProvider);

/**
 * Instantiate the Firebase Store DB
 *
 */
export const db = getFirestore();

/**
 * Firebase - Create user document from the auth action
 *
 * @param userAuth
 * @param additionalInformation - used to override auth
 */
export const createUserDocumentFromAuth = async (
   userAuth,
   additionalInformation = {},
) => {
   if (!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapshot = await getDoc(userDocRef);

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

/**
 Firebase create user using email and password
 *
 * @param email
 * @param password
 * @returns Promise<UserCredential>
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Firebase sign-in using email and password
 *
 * @param email
 * @param password
 * @returns Promise<UserCredential>
 */
export const signInUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * User Sign-Out function that will trigger Firebase "signOut"
 *
 * @returns signOut(auth) response.
 */
export const signUserOut = () => {
   return signOut(auth);
};

/**
 * Auth Listener to monitor and fire callback on any changes to "auth"
 *
 * @param callBack function to execute when auth changes
 */
export const onAuthStateChangedListener = (callBack) => {
   onAuthStateChanged(auth, callBack);
};
