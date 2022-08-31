import React from 'react';
import { useState } from 'react';

import { LoginForm } from './login-form';
import { SignUpForm } from './sign-up-form';

import "./App.scss";

export default function App() {
    const [changeLoginOrSignup, setChangeLoginOrSignup] = useState(false);

    return (
        <section className="main-container">
            {!changeLoginOrSignup && (
                <LoginForm setChangeLoginOrSignup={setChangeLoginOrSignup}/>
            )}

            {changeLoginOrSignup && (
                <SignUpForm setChangeLoginOrSignup={setChangeLoginOrSignup}/>
            )}
        </section>
    )
}