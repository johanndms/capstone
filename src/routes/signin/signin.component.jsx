import {
   signinWithGooglePopup,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signup-form/signup-form.component";

const Signin = () => {
   const logGoogleUser = async () => {
      const { user } = await signinWithGooglePopup();
      if (!user) return;
      console.log(user);
      const userDocRef = await createUserDocumentFromAuth(user);
   };

   return (
      <div>
         <h1>Sign In</h1>
         <SignupForm />
         <button onClick={logGoogleUser}>Sign in with Google popup</button>
      </div>
   );
};

export default Signin;
