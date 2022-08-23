import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import "./style.scss";

import bg_main_desktop from './assets/bg-main-desktop.png';
import bg_main_mobile from './assets/bg-main-mobile.png';
import icon_complete from './assets/icon-complete.png';

function ThankYouPart({setIsSubmitted}) {
    return (
        <div className="ty">
            <img src={icon_complete} alt="Complete" />
            <h1>Thank You!</h1>
            <p>We've added your card details</p>
            <input 
                type="submit"
                value="Continue"
                onClick={() => setIsSubmitted(false)}
            />
        </div>
    )
}

function App() {

    const [cardNum, setCardNum] = useState("0000 0000 0000 0000")
    const [cardName, setCardName] = useState("Jane Appleseed");
    const [month, setMonth] = useState("00");
    const [year, setYear] = useState("00");
    const [secCode, setSecCode] = useState("000")
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const changePic = () => {
        return  window.innerWidth > 412 ? bg_main_desktop : bg_main_mobile;
    }

    const handleCardNumOutput = (e) => {
        e.preventDefault();

        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0,e.target.maxLength);
        }

        setCardNum(e.target.value.toString().replace(/\d{4}(?=.)/g, '$& '))
    }

    const inputLimit = (e) => {
        e.preventDefault();

        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    }
    
    const handleMonthInput = (e) => {
        e.preventDefault();

        inputLimit(e);

        setMonth(e.target.value);
    }

    const handleYearInput = (e) => {
        e.preventDefault();

        inputLimit(e);

        setYear(e.target.value);
    }

    const handleCVCInput = (e) => {
        e.preventDefault();

        inputLimit(e);

        setSecCode(e.target.value);
    }

    const rightBracket = String.fromCharCode(41);
    const leftBracket = String.fromCharCode(40);

    return (
        <section className='container'>

            <div className='main-img'>
                <img src={changePic()} alt="Background"/>
            </div>
                
            <section className='cards'>

                <div className='card-front'>
                    <span id="circle-left"></span>
                    <span id="circle-right"></span>

                    <p id='card-num'>{cardNum}</p>
                    <div className='pers-info'>
                        <p id='card-name'>{cardName}</p>
                        <div className="date">
                            {month}/{year}
                        </div>
                    </div>
                </div>

                <div className='card-back'>
                    <p id='sec-code'>{secCode}</p>
                </div>
            </section>

            {!isSubmitted && (
            <section className='input-fields'>
                <form className="form">
                    <label id="label-name-input" htmlFor="name-inp">Cardholder Name</label>
                    <br />
                    <input
                        className="name-inp" 
                        type="text"
                        placeholder="e.g. Name Surname"
                        maxLength={30}
                        onChange={ (e) => setCardName(e.target.value)}
                        required
                        />

                    <br />

                    <label id="label-number" htmlFor="num-inp">Card Number</label>
                    <br />
                    <input
                        className="num-inp"
                        type="number"
                        maxLength={16}
                        placeholder='e.g. 1234 5678 9123 0000'
                        pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
                        onChange={handleCardNumOutput}
                        required
                    />

                    <br />

                    <label id="label-expire" htmlFor="exp-inp-m">Exp. Date {leftBracket}MM/YY{rightBracket}</label>
                    <label id="label-cvc" htmlFor="cvc-inp">CVC</label>
                    <br />
                    <input 
                        className="exp-inp-m"
                        type="number"
                        maxLength={2}
                        min={1}
                        max={12}
                        placeholder='MM'
                        onChange={handleMonthInput}
                        required
                    />
                    <input
                        className="exp-inp-y"
                        type="number"
                        placeholder='YY'
                        maxLength={2}
                        min={0}
                        max={99}
                        onChange={handleYearInput}
                        required
                        />        
                            
                        <input    
                        className="cvc-inp"
                        type="number"   
                        min="100"
                        max="999"
                        maxLength={3}
                        placeholder='e.g. 123'
                        onChange={handleCVCInput}
                        required         
                        />

                    <br />
                    <input 
                        type="submit"
                        value="Confirm"
                        onClick={ () => setIsSubmitted(true) }
                    />
                </form>
            </section>
            )}

            {isSubmitted && (
                <ThankYouPart setIsSubmitted={setIsSubmitted} />
            )}
        </section>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);