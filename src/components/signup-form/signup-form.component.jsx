import React, { useState } from 'react';

import {
   createAuthUserWithEmailAndPassword,
   createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './signup-form-styles.scss';

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: '',
};

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { displayName, email, password, confirmPassword } = formFields;

   const changeHandler = (event) => {
      const { name, value } = event.target;

      setFormFields({ ...formFields, [name]: value });
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const submitHandler = async (event) => {
      event.preventDefault();

      if (password === confirmPassword) {
         try {
            const { user } = await createAuthUserWithEmailAndPassword(
               email,
               password,
            );

            if (!user) return;
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
         } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
               alert('That email is already registered!');
            } else {
               console.log(err);
            }
         }
      } else {
         alert('Your passwords do not match!');
         return;
      }
   };

   return (
      <div className='sign-up-container'>
         <h2>Don't have an account</h2>
         <span>Sign up with Email and Password</span>
         <form onSubmit={submitHandler}>
            <FormInput
               label='Display Name'
               type='text'
               required
               onChange={changeHandler}
               name='displayName'
               value={displayName}
            />

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

            <FormInput
               label='Confirm Password'
               type='password'
               required
               onChange={changeHandler}
               name='confirmPassword'
               value={confirmPassword}
            />
            <Button type='submit'>Sign Up</Button>
         </form>
      </div>
   );
};

export default SignUpForm;
