import React from 'react';
import { useState } from 'react';

import { MainLogin } from './login-form';
import { MainSignUp } from './sign-up-form';

import "./App.scss";

export default function App() {
    const [changeLoginOrSignup, setChangeLoginOrSignup] = useState(false);

    return (
        <section className="main-container">
            {!changeLoginOrSignup && (
                <MainLogin setChangeLoginOrSignup={setChangeLoginOrSignup} />
            )}

            {changeLoginOrSignup && (
                <MainSignUp setChangeLoginOrSignup={setChangeLoginOrSignup} />
            )}
        </section>
    )
}