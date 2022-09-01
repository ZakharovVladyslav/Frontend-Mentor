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

    const [forgotClicked, setForgotClicked] = useState(false);

    const handleSubmit = (event, username) => {
        event.preventDefault();

        setUsername(username);
    }

    const LoginPart = ({ username, setForgotClicked}) => {
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

                    <button 
                        className="forgot-pass"
                        onClick={() => setForgotClicked(true)}    
                    >Forgot your password?</button>

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

    const ForgotPart = ({ setChangeLoginOrSignup }) => {
        const [email, setEmail] = useState("");
        const [codeReceived, setCodeReceived] = useState(false);

        const CodeRecovery = ({ setEmail, setCodeReceived}) => {
            return (
                <>
                    <section className="code-receive">
                        <h1>Password recovery</h1>

                        <p>Enter your email below and we will send you a verification code</p>

                        <form>
                            <input
                                type="email"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                                placeholder="f.e. doeJohnson@mail.com"
                                required
                            />
                            <br />
                            <input 
                                type="number"
                                placeholder="code"
                                required
                            />
                        </form>

                        <button>
                            Send veritification code again
                        </button>
                        <br />
                        <button
                            type="submit" 
                            value="submit"
                            onClick={() => setCodeReceived(true)}
                        >Submit</button>
                    </section>
                </>
            )
        }

        const PasswordRecovery = ({ setChangeLoginOrSignup }) => {
            const [submitted, setSubmitted] = useState(false);
            
            const PasswordRecoveryPage = ({ submitted }) => {
                return (
                    <>
                        <section className="password-recovery">
                            <h1>Password recovery</h1>
    
                            <p>Create new password below:</p>
    
                            <form>
                                <input 
                                    type="password"
                                    required
                                />
                                <br />
                                <input
                                    type="password"
                                    required
                                />
                            </form>
    
                            <button 
                                type="submit"
                                value="Done"
                                onClick={() => setSubmitted(true)}
                            >Done</button>
                        </section>
                    </>
                )
            }

            const PageAfterRecovery = ({ setChangeLoginOrSignup }) => {
                return (
                    <>
                        <section className="succ-recovery">
                            <h1>Your password has been recovered!</h1>

                            <button 
                                type="submit"
                                onClick={() => setChangeLoginOrSignup(true)}
                            >Sign in</button>
                        </section>
                    </>
                )
            }

            return (
                <>
                    {!submitted && (
                        <PasswordRecoveryPage />
                    )}

                    {submitted && (
                        <PageAfterRecovery 
                            setChangeLoginOrSignup={setChangeLoginOrSignup}
                        />
                    )}
                </>
            )
        }

        return (
            <>
                {!codeReceived && (
                    <CodeRecovery 
                        setEmail={setEmail}
                        setCodeReceived={setCodeReceived}
                        username={username}
                        setForgotClicked={setForgotClicked}
                    />
                )}

                {codeReceived && (
                    <PasswordRecovery 
                        setChangeLoginOrSignup={setChangeLoginOrSignup}
                    />
                )}
            </>
        )
    }

    return (
        <> 
           {!forgotClicked && (
                <LoginPart 
                    username={username}
                    setForgotClicked={setForgotClicked}
                />
           )}

           {forgotClicked && (
                <ForgotPart 
                    username={username}
                    setForgotClicked={setForgotClicked}
                    setChangeLoginOrSignup={setChangeLoginOrSignup}
                />
           )}
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