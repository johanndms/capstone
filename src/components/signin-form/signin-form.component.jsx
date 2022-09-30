import React, { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
   signinWithGooglePopup,
   createUserDocumentFromAuth,
   signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import './signin-form.styles.scss';

const defaultFormFields = {
   email: '',
   password: '',
};

const SignInForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   const changeHandler = (event) => {
      const { name, value } = event.target;

      setFormFields({ ...formFields, [name]: value });
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const submitHandler = async (event) => {
      event.preventDefault();
      try {
         const { user } = await signInUserWithEmailAndPassword(email, password);
         console.log(user);
         resetFormFields();
      } catch (err) {
         if (
            err.code === 'auth/wrong-password' ||
            err.code === 'auth/user-not-found'
         ) {
            alert('Incorrect login credentials...');
         } else {
            console.log(err);
         }
      }
   };

   const signInWithGoogle = async () => {
      const { user } = await signinWithGooglePopup();
      if (!user) return;
      console.log(user);
      const userDocRef = await createUserDocumentFromAuth(user);
   };

   return (
      <div className='sign-in-container'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={submitHandler}>
            <FormInput
               label='Email'
               type='email'
               required
               onChange={changeHandler}
               name='email'
               value={email}
            />
            <FormInput
               label='Password'
               type='password'
               required
               onChange={changeHandler}
               name='password'
               value={password}
            />
            <div className='buttons-container'>
               <Button type='submit'>Sign In</Button>
               <Button
                  buttonType='google'
                  type='button'
                  onClick={signInWithGoogle}
               >
                  Sign In with Google
               </Button>
            </div>
         </form>
      </div>
   );
};

export default SignInForm;
