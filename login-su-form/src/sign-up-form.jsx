import Facebook from "./assets/facebook.png";
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter-sign.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-regular-svg-icons";

import "./sign-up-form.scss"

import { useState } from 'react';

function SignUpSuccessful({ setOnSignUpSuccessful, username, email }) {
    return (
        <>
            <section className="card-l-successful">
                <h1>Welcome {username}!</h1>

                <form>
                    <label>Check {email} to activate your account and put a code below:</label>
                    <br />
                    <input
                        type="number"
                        placeholder="1234"
                    />
                </form>

                <div> </div>
                <div> </div>
                <div> </div>

                <button onClick={() => setOnSignUpSuccessful(false)}>
                    <FontAwesomeIcon icon={faCircleXmark} />    
                </button>
            </section>
        </>
    )
}

function SignUpForm({ setChangeLoginOrSignup, setOnSignUpSuccessful, username, setUsername, email, setEmail }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className="login-preview">
                <h1>Welcome Back!</h1>

                <p>If you already have an account you can sign in here</p>

                <button onClick={() => setChangeLoginOrSignup(false)}>Sign in</button>
            </section>

            <section className="sign-up-form">
                <h1>Create Account</h1>

                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram" />
                <img src={Twitter} alt="Twitter" />

                <br />
                <label>Enter your data below:</label>
                <br />

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <br />
                    <input 
                        type="password"
                        placeholder="Password"
                    />
                </form>

                <button onClick={() => setOnSignUpSuccessful(true)}>Sign Up</button>
            </section>

        </>
    )
}

export function MainSignUp({ setChangeLoginOrSignup }) {
    const [onSignUpSuccessful, setOnSignUpSuccessful] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            {!onSignUpSuccessful && (
                <SignUpForm 
                    setChangeLoginOrSignup={setChangeLoginOrSignup}
                    setOnSignUpSuccessful={setOnSignUpSuccessful} 
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                />
            )}

            {onSignUpSuccessful && (
                <SignUpSuccessful 
                    setOnSignUpSuccessful={setOnSignUpSuccessful} 
                    username={username}
                    email={email}
                />
            )}
        </>
    )
}