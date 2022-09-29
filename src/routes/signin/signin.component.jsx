import {
   signinWithGooglePopup,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
   const logGoogleUser = async () => {
      const { user } = await signinWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
   };

   return (
      <div>
         <h1>Sign In</h1>
         <button onClick={logGoogleUser}>Sign in with google popup</button>
      </div>
   );
};

export default Signin;
