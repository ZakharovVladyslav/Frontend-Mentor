import Facebook from "./assets/facebook.png";
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter-sign.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-regular-svg-icons";

import "./login-form.scss";

import { useState } from 'react';

function LoginSuccessfullPage({ setLoginSuccessful, username }) {
    return (
        <>
            <section className="card-l-successful">
                <h1>Welcome back!</h1>
                
                <p>You have been successfuly logged in as {username} </p>

                <div> </div>
                <div> </div>
                <div> </div>

                <button onClick={() => setLoginSuccessful(false)}>
                    <FontAwesomeIcon icon={faCircleXmark} />    
                </button>
            </section>
        </>
    )
}

function LoginForm({ setChangeLoginOrSignup, setLoginSuccessful, username, setUsername }) {

    const handleSubmit = (event, username) => {
        event.preventDefault();

        setUsername(username);
    }

    return (
        <>
            <section className="login-form">
                <h1>Sign In</h1>

                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram" />
                <img src={Twitter} alt="Twitter" />

                <form onSubmit={handleSubmit}>
                    <label>Enter login and password below:</label>

                    <br />
                    <input 
                        type="text" 
                        value={username}
                        onChange={ (e) => setUsername(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <br />
                    <input 
                        type="password"
                        placeholder="Password"
                        required
                    />
                </form>

                <button className="forgot-pass">Forgot your password?</button>

                <br />
                <button
                    className="sign-in" 
                    onClick={() => setLoginSuccessful(true)}
                    >Sign in</button>
            </section>

            <section className="sign-up-preview">
                <h1>Hi There!</h1>

                <p>If you don't have an account you can create it now</p>
                
                <button onClick={() => setChangeLoginOrSignup(true)}>Sign Up</button>
            </section>
        </>
    )
}

export function MainLogin({ setChangeLoginOrSignup }) {
    const [loginSuccessfull, setLoginSuccessful] = useState(false);
    const [username, setUsername] = useState("");

    return (
        <>
            {!loginSuccessfull && (
                <LoginForm 
                    setChangeLoginOrSignup={setChangeLoginOrSignup} 
                    setLoginSuccessful={setLoginSuccessful}
                    username={username}
                    setUsername={setUsername}
                />
            )}

            {loginSuccessfull && (
                <LoginSuccessfullPage 
                    setLoginSuccessful={setLoginSuccessful}
                    username={username}
                />
            )}
        </>
    )
}