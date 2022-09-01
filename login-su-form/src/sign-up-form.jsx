import Facebook from "./assets/facebook.png";
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter-sign.png';

import "./sign-up-form.scss"



function SignUpForm({setChangeLoginOrSignup, setOnSignUpSuccessful}) {
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

                <form>
                    <input 
                        type="text"
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="email"
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
    const [signUpSuccessful, setOnSignUpSuccessful] = useState(false);
    const []

}