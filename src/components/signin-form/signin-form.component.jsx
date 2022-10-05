import React, { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
   signinWithGooglePopup,
   signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from './signin-form.styles';

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
         if (!user) return;
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
      await signinWithGooglePopup();
   };

   return (
      <SignInContainer>
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
            <ButtonsContainer>
               <Button type='submit'>Sign In</Button>
               <Button
                  buttonType={BUTTON_TYPE_CLASSES.google}
                  type='button'
                  onClick={signInWithGoogle}>
                  Sign In with Google
               </Button>
            </ButtonsContainer>
         </form>
      </SignInContainer>
   );
};

export default SignInForm;
