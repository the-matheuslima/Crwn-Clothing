import { useState } from 'react';
import FormInput from '../form-input';
import Button from '../button';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import './style.scss';

const SignInForm = () => {
    const defaultFormFilds = {
        email: '',
        password: '',
    }

    const [formFields, setformFields] = useState(defaultFormFilds);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setformFields(defaultFormFilds)
    }

    const singnWithGoogle = async () => {
        await signInWithGooglePopup();

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-in-container'>
            <h2>Alredy have an account?</h2>
            <span>Sign in With your email and password</span>

            <form onSubmit={(event) => { handleSubmit(event) }}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange} name='password'
                    value={password}
                />

                <div className='buttons-container'>

                    <Button type='submit'>
                        Sign In

                    </Button>

                    <Button type='button' buttonType='google' onClick={singnWithGoogle}>
                        Google sign in
                    </Button>

                </div>

            </form>
        </div >
    )
}

export default SignInForm;