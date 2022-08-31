import Facebook from "./assets/facebook.png";
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter-sign.png';

import "./login-form.scss";

export function LoginForm({setChangeLoginOrSignup, setOnLoginSuccessful}) {
    return (
        <>
            <section className="login-form">
                <h1>Sign In</h1>

                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram" />
                <img src={Twitter} alt="Twitter" />

                <form>
                    <label>Enter login and password below:</label>

                    <br />
                    <input type="text" placeholder="Email"/>
                    <br />
                    <input type="number" placeholder="Password"/>
                </form>

                <button className="forgot-pass">Forgot your password?</button>

                <br />
                <button
                    className="sign-in" 
                    onClick={() => setOnLoginSuccessful(true)}>Sign in</button>
            </section>

            <section className="sign-up-preview">
                <h1>Hi There!</h1>

                <p>If you don't have an account you can create it now</p>
                
                <button onClick={() => setChangeLoginOrSignup(true)}>Sign Up</button>
            </section>
        </>
    )
}

export function LoginSuccessful({setOnLoginSuccessful}) {

}