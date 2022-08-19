import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';

import "./style.scss";

import picture from "./assets/icon-star.png";
import thanks from "./assets/illustration-thank-you.png";

function ThankYouPage({ nums, setIsSubmited }) {
    return (
        <section className='container'>
            <img id="thanks-img" src={thanks} alt="Thanks" />

            <p id="selected-num">
                You selected {nums} out of 5
            </p>

            <h2 id="tp-title">Thank you!</h2>

            <p id="tp-description">
                We apreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch
            </p>
        </section>
    )
}

function App() {

    const [isSubmited, setIsSubmited] = useState(false);
    const [nums, setNums] = useState("");

    const Button = ( { number } ) => {
        return (
            <button 
                onClick={ () => setNums(number)}
                className="button"
            >
                {number}
            </button>
        )
    }

    return (
        <>
            {!isSubmited && (
                <section className='container'>
                    <div id="content">
                        <div className='img-cont'>
                            <img id="img-star" src={picture} alt="star-icon"/>
                        </div>

                        <h1 id="title">How did we do?</h1>

                        <p id="description">
                            Please let us know how we did with your support request. 
                            All feedback is appreciated to help us improve our offering!
                        </p>
                    </div>

                    <ul className='rate-choice'>
                        <li>
                            <Button number={1} />
                        </li>
                        <li>
                            <Button number={2} />
                        </li>
                        <li>
                            <Button number={3} />
                        </li>
                        <li>
                            <Button number={4} />
                        </li>
                        <li>
                            <Button number={5} />
                        </li>
                    </ul>

                    <button 
                        type="submit" 
                        className="submit-button"
                        onClick={() => setIsSubmited(true)}
                    >
                        Submit
                    </button>
                </section>
            )}

            {isSubmited && (
                <ThankYouPage nums={nums} setIsSubmited={setIsSubmited} />
            )}
        </>
    );  
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);