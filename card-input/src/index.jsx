import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import "./style.scss";

import bg_main_desktop from './assets/bg-main-desktop.png';
import bg_main_mobile from './assets/bg-main-mobile.png';
import front_card from './assets/bg-card-front.png';
//import back_card from './assets/bg-card-front.png';

function ThankYouPage() {
    return (
        <p>Thank you</p>
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
                        <div class="date">
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
                    <label id="label-name-input" for="name-inp">Cardholder Name</label>
                    <br />
                    <input
                        class="name-inp" 
                        type="text"
                        placeholder="e.g. Name Surname"
                        onChange={ (e) => setCardName(e.target.value)}
                        required
                        />

                    <br />

                    <label id="label-number" for="num-inp">Card Number</label>
                    <br />
                    <input
                        class="num-inp"
                        type="number"
                        maxLength="16"
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={ (e) => setCardNum(e.target.value)}
                        required
                    />

                    <br />

                    <label id="label-expire" for="exp-inp-m">Exp. Date {leftBracket}MM/YY{rightBracket}</label>
                    <label id="label-cvc" for="cvc-inp">CVC</label>
                    <br />
                    <input 
                        class="exp-inp-m"
                        type="number"
                        placeholder='MM'
                        onChange={ (e) => setMonth(e.target.value)}
                        required
                    />
                    <input
                        class="exp-inp-y"
                        type="number"
                        placeholder='YY'
                        onChange={ (e) => setYear(e.target.value)}
                        required
                        />        
                            
                        <input    
                        class="cvc-inp"
                        type="number"   
                        min="100"
                        max="999"
                        placeholder='e.g. 123'
                        onChange={ (e) => setSecCode(e.target.value)}
                        required         
                        />

                    <br />
                    <input 
                        type="submit"
                        value="Confirm"
                    />
                </form>
            </section>
            )}
        </section>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);